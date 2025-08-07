// pages/_app.tsx

import Script from 'next/script';
import type { AppProps } from 'next/app';
import RootLayout from '@/pages/layout';
import '../styles/article.css';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* ⚡️ Thêm các Script CDN ở đây */}
      <Script
        src="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css"
        strategy="lazyOnload"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/js/all.min.js"
        strategy="lazyOnload"
      />

      {/* ⬇️ Phần chính của ứng dụng giữ nguyên */}
      <RootLayout>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </RootLayout>
    </>
  );
}