// pages/_app.tsx

import type { AppProps } from 'next/app';
import Head from 'next/head';
import RootLayout from '@/pages/layout';
import '../styles/article.css';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* ✅ Thêm link CSS vào thẻ <head> */}
      <Head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
        />
        
        {/* Google Fonts - Inter */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Phần nội dung ứng dụng giữ nguyên */}
      <RootLayout>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </RootLayout>
    </>
  );
}