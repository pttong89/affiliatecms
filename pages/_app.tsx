// pages/_app.tsx
import type { AppProps } from 'next/app';
import RootLayout from '@/pages/layout';
import '../styles/article.css'; // nếu bạn đang có file này cho nội dung
import { SessionProvider } from 'next-auth/react';
import './globals.css'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      </SessionProvider>
    </RootLayout>
  );
}

