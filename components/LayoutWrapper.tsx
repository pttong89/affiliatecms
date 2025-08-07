'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import AmazonPopup from '@/components/AmazonPopup';
import RelatedPostsPopup from '@/components/RelatedPostsPopup';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    const excludedPaths = [
      '/', '/gear', '/about', '/guides', '/info-national-park', '/upload', '/listhtml'
    ];

    const cleanPath = pathname.toLowerCase();

    const isPost =
      /^[a-z0-9-]+$/.test(cleanPath.replace(/^\//, '')) && // chỉ dạng slug
      !excludedPaths.includes(cleanPath) &&
      !cleanPath.startsWith('/topic') &&
      !cleanPath.startsWith('/goto');

    setShowPopup(isPost);
  }, [pathname]);

  return (
    <>
      {children}
      {showPopup && (
        <>
          {/* //<AmazonPopup /> */}
          {/* //<RelatedPostsPopup /> */}
        </>
      )}
    </>
  );
}
