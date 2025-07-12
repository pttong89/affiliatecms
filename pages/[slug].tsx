import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

type Product = {
  title: string;
  slug: string;
  description: string;
  head: string;
  body: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('content/products');
  const paths = files.map(file => ({
    params: { slug: file.replace('.json', '') },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join('content/products', `${slug}.json`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const product: Product = JSON.parse(raw);
  return { props: { product } };
};

export default function ProductPage({ product }: { product: Product }) {
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>

      {/* Inject <meta>, <style>, <script> gốc */}
      <div dangerouslySetInnerHTML={{ __html: product.head }} />

      {/* Nội dung bài viết */}
      <div
        dangerouslySetInnerHTML={{ __html: product.body }}
        style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}
      />
    </>
  );
}
