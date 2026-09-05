import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);
const ffmpegPath = ffmpegInstaller.path;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const imagesDir = path.join(rootDir, 'public', 'images');
const videosDir = path.join(rootDir, 'public', 'videos');

const targetImages = [
  'corporate_hero.jpg',
  'hero_bg.jpg',
  'consultancy_growth.jpg',
  'boardroom_consultancy.jpg',
  'server_matrix_tech.jpg',
  'tech_blueprint.jpg',
  'marketing_analytics.jpg',
  'marketing_momentum.jpg',
  'four_screen_montage.jpg',
  'agnivridhi_consultancy_growth_1787635330229.jpg',
  'agnivridhi_hero_bg_1787635296212.jpg',
  'agnivridhi_marketing_momentum_1787635440901.jpg',
  'agnivridhi_tech_blueprint_1787635311309.jpg'
];

function formatBytes(bytes) {
  return (bytes / 1024).toFixed(1) + ' KB';
}

async function compressImages() {
  console.log('=== COMPRESSING IMAGES TO WEBP (Target 80–150 KB) ===\n');
  const results = [];

  for (const imgName of targetImages) {
    const inputPath = path.join(imagesDir, imgName);
    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${imgName}`);
      continue;
    }

    const origStats = fs.statSync(inputPath);
    const origSize = origStats.size;
    const metadata = await sharp(inputPath).metadata();
    
    const baseName = path.parse(imgName).name;
    const outputPath = path.join(imagesDir, `${baseName}.webp`);

    let quality = 80;
    let buffer = await sharp(inputPath)
      .webp({ quality, effort: 6 })
      .toBuffer();

    // Adjust quality so the output sits comfortably in 80–150 KB range
    if (buffer.length > 150 * 1024) {
      while (buffer.length > 150 * 1024 && quality > 50) {
        quality -= 2;
        buffer = await sharp(inputPath).webp({ quality, effort: 6 }).toBuffer();
      }
    } else if (buffer.length < 80 * 1024 && quality < 95) {
      while (buffer.length < 80 * 1024 && quality < 90) {
        quality += 2;
        const testBuf = await sharp(inputPath).webp({ quality, effort: 6 }).toBuffer();
        if (testBuf.length > 150 * 1024) break;
        buffer = testBuf;
      }
    }

    fs.writeFileSync(outputPath, buffer);
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const savings = (((origSize - newSize) / origSize) * 100).toFixed(1);

    results.push({
      originalName: imgName,
      newName: `${baseName}.webp`,
      dimensions: `${metadata.width}x${metadata.height}`,
      originalSize: formatBytes(origSize),
      newSize: formatBytes(newSize),
      savings: `${savings}%`,
      quality
    });
  }

  // Optimize agnivridhi_logo.png losslessly while keeping transparency
  const logoPath = path.join(imagesDir, 'agnivridhi_logo.png');
  if (fs.existsSync(logoPath)) {
    const origLogoStats = fs.statSync(logoPath);
    const origLogoSize = origLogoStats.size;
    const logoMeta = await sharp(logoPath).metadata();
    
    const optimizedLogoBuffer = await sharp(logoPath)
      .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
      .toBuffer();
    
    if (optimizedLogoBuffer.length < origLogoSize) {
      fs.writeFileSync(logoPath, optimizedLogoBuffer);
    }
    const newLogoStats = fs.statSync(logoPath);
    results.push({
      originalName: 'agnivridhi_logo.png',
      newName: 'agnivridhi_logo.png (PNG)',
      dimensions: `${logoMeta.width}x${logoMeta.height}`,
      originalSize: formatBytes(origLogoSize),
      newSize: formatBytes(newLogoStats.size),
      savings: `${(((origLogoSize - newLogoStats.size) / origLogoSize) * 100).toFixed(1)}%`,
      quality: 'lossless'
    });
  }

  console.table(results);
  return results;
}

async function compressVideo() {
  console.log('\n=== COMPRESSING HERO VIDEO (Target < 1.0 MB) ===\n');
  const inputVideo = path.join(videosDir, 'hero-section.mp4');
  const outputVideo = path.join(videosDir, 'hero-section-compressed.mp4');

  if (!fs.existsSync(inputVideo)) {
    console.error('Input video not found at:', inputVideo);
    return;
  }

  const origSize = fs.statSync(inputVideo).size;
  console.log(`Original video size: ${formatBytes(origSize)}`);
  console.log(`Using FFmpeg binary at: ${ffmpegPath}`);

  // FFmpeg command args:
  // -y : overwrite
  // -i input
  // -an : strip audio
  // -c:v libx264
  // -crf 32
  // -preset slow
  // -maxrate 750k -bufsize 1500k
  // -vf "scale=1280:-2" (1280px width)
  // -movflags +faststart
  const args = [
    '-y',
    '-i', inputVideo,
    '-an',
    '-c:v', 'libx264',
    '-crf', '32',
    '-preset', 'slow',
    '-maxrate', '750k',
    '-bufsize', '1500k',
    '-vf', 'scale=1280:-2',
    '-movflags', '+faststart',
    outputVideo
  ];

  console.log('Running ffmpeg encoding...');
  await execFileAsync(ffmpegPath, args);

  const newSize = fs.statSync(outputVideo).size;
  const savings = (((origSize - newSize) / origSize) * 100).toFixed(1);
  console.log(`\nVideo Compression Completed!`);
  console.log(`Original Size: ${formatBytes(origSize)}`);
  console.log(`Compressed Size: ${formatBytes(newSize)} (Target < 1000 KB)`);
  console.log(`Total Savings: ${savings}%`);

  // Clean up any test videos
  const files = fs.readdirSync(videosDir);
  for (const file of files) {
    if (file.startsWith('test-') && file.endsWith('.mp4')) {
      fs.unlinkSync(path.join(videosDir, file));
    }
  }

  return {
    originalName: 'hero-section.mp4',
    newName: 'hero-section-compressed.mp4',
    originalSize: formatBytes(origSize),
    newSize: formatBytes(newSize),
    savings: `${savings}%`
  };
}

async function extractFrameComparison() {
  console.log('\n=== EXTRACTING VIDEO COMPARISON FRAMES ===\n');
  const inputVideo = path.join(videosDir, 'hero-section.mp4');
  const outputVideo = path.join(videosDir, 'hero-section-compressed.mp4');
  const frameOriginal = path.join(videosDir, 'frame-original.jpg');
  const frameCompressed = path.join(videosDir, 'frame-compressed.jpg');

  await execFileAsync(ffmpegPath, ['-y', '-ss', '00:00:03', '-i', inputVideo, '-vframes', '1', frameOriginal]);
  await execFileAsync(ffmpegPath, ['-y', '-ss', '00:00:03', '-i', outputVideo, '-vframes', '1', frameCompressed]);
  console.log('Frame comparison generated at frame 00:00:03.');
}

async function main() {
  await compressImages();
  await compressVideo();
  await extractFrameComparison();
}

main().catch(err => {
  console.error('Compression failed:', err);
  process.exit(1);
});
