// pages/_app.tsx
import type { AppProps } from 'next/app';
import Layout from '@/app/layout';
import '../styles/article.css'; // nếu bạn đang có file này cho nội dung
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
}

