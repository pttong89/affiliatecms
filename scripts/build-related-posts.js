const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '..', 'content', 'products');
const outputPath = path.join(__dirname, '..', 'public', 'related-posts.json');

function buildRelatedPosts() {
  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.json'));

  const posts = files.map(filename => {
    const filePath = path.join(inputDir, filename);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(raw);

    return {
      title: json.title || filename.replace(/\.json$/, ''),
      slug: json.slug || filename.replace(/\.json$/, '').toLowerCase(),
      description: json.description || ''
    };
  });

  fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));
  console.log(`✅ Wrote ${posts.length} related posts to ${outputPath}`);
}

buildRelatedPosts();
