const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const HTML_DIR = './raw-html';
// Thư mục đầu ra JSON
const OUTPUT_DIR = './content/products';

// === CONVERT ===
function convertHtmlToCustomJson(filePath) {
  const html = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);

  const title = $('title').text().trim();
  const slug = path.basename(filePath, '.html');
  const description = $('meta[name="description"]').attr('content') || '';
  const h1 = $('h1').first().text().trim();

  return {
    title,
    slug,
    description,
    head: h1
  };
}

// === MAIN ===
function processHtmlFiles() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  const files = fs.readdirSync(HTML_DIR).filter(file => file.endsWith('.html'));

  files.forEach(file => {
    const fullPath = path.join(HTML_DIR, file);
    const outPath = path.join(OUTPUT_DIR, `${path.basename(file, '.html')}.json`);

    // Kiểm tra nếu file JSON đã tồn tại thì bỏ qua
    if (fs.existsSync(outPath)) {
      console.log(`⚠️ Bỏ qua (đã tồn tại): ${file}`);
      return;
    }

    const json = convertHtmlToCustomJson(fullPath);
    fs.writeFileSync(outPath, JSON.stringify(json, null, 2), 'utf-8');
    console.log(`✅ Đã xuất: ${file}`);
  });
}

processHtmlFiles();
