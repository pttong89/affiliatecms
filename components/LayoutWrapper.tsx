'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import AmazonPopup from '@/components/AmazonPopup';
import RelatedPostsPopup from '@/components/RelatedPostsPopup';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const safePath = pathname || '';
    const excludedPaths = ['/gear', '/about', '/guides', '/info-national-park', '/', '/upload', '/listhtml'];

    const isPostPage =
        /^[a-z0-9-]+$/.test(safePath.replace(/^\//, '')) &&  // kiểm tra path dạng slug
        !excludedPaths.includes(safePath) &&
        !safePath.startsWith('/topic');

    return (
        <>
            {children}
            {isPostPage && (
                <>
                    <AmazonPopup />
                    <RelatedPostsPopup />
                </>
            )}
        </>
    );
}
