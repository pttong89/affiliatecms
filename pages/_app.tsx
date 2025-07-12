// pages/_app.tsx
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '../styles/article.css'; // nếu bạn đang có file này cho nội dung

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
