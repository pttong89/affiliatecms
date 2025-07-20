const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Thư mục chứa các file HTML
const HTML_DIR = './raw-html';
// Thư mục đầu ra JSON
const OUTPUT_DIR = './content/products';

function convertHtmlToJson(filePath) {
  const html = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);

  const title = $('title').text().trim();
  const h1 = $('h1').first().text().trim();
  const paragraphs = $('p')
    .map((i, el) => $(el).text().trim())
    .get()
    .filter(Boolean);

  return {
    file: path.basename(filePath),
    title,
    h1,
    paragraphs,
  };
}

function processHtmlFiles() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  const files = fs.readdirSync(HTML_DIR).filter((file) => file.endsWith('.html'));

  files.forEach((file) => {
    const filePath = path.join(HTML_DIR, file);
    const json = convertHtmlToJson(filePath);
    const outPath = path.join(OUTPUT_DIR, `${path.basename(file, '.html')}.json`);

    fs.writeFileSync(outPath, JSON.stringify(json, null, 2), 'utf-8');
    console.log(`✅ Đã xử lý: ${file}`);
  });
}

processHtmlFiles();
