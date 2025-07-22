'use client';

//import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import AmazonPopup from '@/components/AmazonPopup';
import RelatedPostsPopup from '@/components/RelatedPostsPopup';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  //const pathname = usePathname();
//   const isPostPage =
//     /^\/[a-z0-9-]+$/.test(pathname) &&
//     !['/gear', '/about', '/guides', '/info-national-park', '/', '/upload', '/listhtml'].includes(pathname) &&
//     !pathname.startsWith('/topic');

  return (
    <>
      {children}
       <AmazonPopup />
          <RelatedPostsPopup />
    </>
  );
}
