import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const rawDir = 'raw-html';
const outDir = 'content/products';

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(rawDir).filter(file => file.endsWith('.html'));

files.forEach((file) => {
  const html = fs.readFileSync(path.join(rawDir, file), 'utf-8');
  const $ = cheerio.load(html);

  const title = $('title').first().text().trim() || file;
  const metaDesc = $('meta[name="description"]')?.attr('content') || '';
  const description = metaDesc || $('p').first().text().trim() || 'No description';

  const headContent = $('head').html() || '';
  const bodyContent = $('body').html() || '';

  const slug = file.replace('.html', '').toLowerCase();

  const data = {
    title,
    slug,
    description,
    head: headContent,
    body: bodyContent
  };

  fs.writeFileSync(
    path.join(outDir, `${slug}.json`),
    JSON.stringify(data, null, 2),
    'utf-8'
  );

  console.log(`✅ Converted: ${file} → ${slug}.json`);
});
