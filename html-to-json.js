const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const HTML_DIR = './raw-html';
const OUTPUT_DIR = './content/products';

// === CONVERT ===
function convertHtmlToCustomJson(filePath) {
  const html = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);

  const title = $('title').first().text().trim() || $('h1').first().text().trim();
  const slug = path.basename(filePath, '.html');
  const metaDesc = $('meta[name="description"]')?.attr('content') || '';
  const description = metaDesc || $('p').first().text().trim() || 'No description';
  const headContent = $('head').html() || '';
  const bodyContent = $('body').html() || '';

  return {
    title,
    slug,
    description,
    head: headContent,
    body: bodyContent
  };
}

// === MAIN ===
function processHtmlFiles() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(HTML_DIR).filter(file => file.endsWith('.html'));

  files.forEach(file => {
    const fullPath = path.join(HTML_DIR, file);
    const outPath = path.join(OUTPUT_DIR, `${path.basename(file, '.html')}.json`);

    // Kiểm tra nếu file JSON chưa tồn tại thì mới chuyển
    if (!fs.existsSync(outPath)) {
      const json = convertHtmlToCustomJson(fullPath);
      fs.writeFileSync(outPath, JSON.stringify(json, null, 2), 'utf-8');
      console.log(`✅ Đã xuất: ${file}`);
    } else {
      console.log(`⏩ Bỏ qua (đã tồn tại): ${file}`);
    }
  });
}

processHtmlFiles();
