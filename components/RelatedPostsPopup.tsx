'use client';
import { useEffect, useState } from 'react';

type ProductMeta = {
  title: string;
  slug: string;
  description: string;
};

export default function RelatedPostsPopup() {
  const [related, setRelated] = useState<ProductMeta[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch('/related-posts.json')
      .then(res => res.json())
      .then((data: ProductMeta[]) => {
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setRelated(shuffled.slice(0, 4));
      })
      .catch(err => console.error('❌ Failed to load related posts:', err));
  }, []);

  if (related.length === 0) return null;

  // Mobile styles
  const mobileStyles = {
    position: 'fixed' as const,
    bottom: '20px',
    left: '10px',
    right: '10px',
    zIndex: 9998,
    width: 'auto',
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: '15px',
    boxShadow: '0 -5px 25px rgba(0,0,0,0.2)',
    padding: isMinimized ? '12px' : '16px',
    maxHeight: isMinimized ? '60px' : '50vh',
    overflowY: 'auto' as const,
    transition: 'all 0.3s ease'
  };

  // Desktop styles
  const desktopStyles = {
    position: 'fixed' as const,
    left: '30px',
    top: '120px',
    zIndex: 9998,
    width: '280px',
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.15)',
    padding: '16px',
    maxHeight: '80vh',
    overflowY: 'auto' as const
  };

  return (
    <>
      <style jsx>{`
        .related-posts-container {
          animation: slideIn 0.3s ease-out;
        }
        
        @keyframes slideIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .related-post-item {
          transition: all 0.2s ease;
          border-radius: 8px;
          padding: 8px;
          margin-bottom: 8px;
        }
        
        .related-post-item:hover {
          background: #f8f9fa;
        }
        
        .minimize-btn {
          background: none;
          border: none;
          font-size: 16px;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: background 0.2s ease;
        }
        
        .minimize-btn:hover {
          background: #f0f0f0;
        }
        
        .related-posts-scrollable {
          max-height: ${isMobile ? (isMinimized ? '0' : '35vh') : '80vh'};
          overflow-y: auto;
          transition: max-height 0.3s ease;
        }
        
        @media (max-width: 767px) {
          .related-posts-container {
            position: fixed !important;
            bottom: 20px !important;
            left: 10px !important;
            right: 10px !important;
            top: auto !important;
            width: auto !important;
          }
        }
      `}</style>

      <div 
        className="related-posts-container"
        style={isMobile ? mobileStyles : desktopStyles}
      >
        {/* Header with minimize button for mobile */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: isMobile && !isMinimized ? '12px' : '0'
        }}>
          <h4 style={{ 
            margin: 0, 
            color: '#1a3f1b',
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 'bold'
          }}>
            📚 Related Posts
          </h4>
          
          {isMobile && (
            <button 
              className="minimize-btn"
              onClick={() => setIsMinimized(!isMinimized)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '4px',
                color: '#666'
              }}
            >
              {isMinimized ? '▲' : '▼'}
            </button>
          )}
        </div>

        {/* Posts list */}
        <div className="related-posts-scrollable">
          {!isMinimized && related.map((post, idx) => (
            <div key={idx} className="related-post-item">
              <a href={`/${post.slug}`} style={{
                fontWeight: 600,
                fontSize: isMobile ? '13px' : '15px',
                color: '#2c5f2d',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '4px',
                lineHeight: '1.3'
              }}>
                {post.title}
              </a>
              <p style={{ 
                margin: 0, 
                fontSize: isMobile ? '11px' : '13px', 
                color: '#555',
                lineHeight: '1.4'
              }}>
                {post.description.slice(0, isMobile ? 50 : 70)}...
              </p>
            </div>
          ))}
        </div>

        {/* Show count when minimized on mobile */}
        {isMobile && isMinimized && (
          <div style={{
            fontSize: '12px',
            color: '#666',
            marginTop: '4px'
          }}>
            {related.length} posts available
          </div>
        )}
      </div>
    </>
  );
}
