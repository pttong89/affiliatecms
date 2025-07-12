import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type ProductMeta = {
  title: string;
  slug: string;
};

export async function getStaticProps() {
  const dirPath = path.join(process.cwd(), 'content/products');
  const files = fs.readdirSync(dirPath);

  const products: ProductMeta[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(dirPath, file), 'utf-8');
    const json = JSON.parse(raw);
    return { title: json.title, slug: json.slug };
  });

  return { props: { products } };
}

export default function Home({ products }: { products: ProductMeta[] }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Danh sách bài viết</h1>
      <ul>
        {products.map((p) => (
          <li key={p.slug} style={{ marginBottom: '10px' }}>
            <Link href={`/${p.slug}`} style={{ color: '#0070f3', textDecoration: 'underline' }}>
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
