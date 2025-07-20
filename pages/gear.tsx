'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type ProductMeta = {
  title: string;
  slug: string;
  description: string;
};

interface GearPageProps {
  products: ProductMeta[];
}

const GearPage: React.FC<GearPageProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'pagination' | 'loadmore'>('pagination');
  const [displayedItems, setDisplayedItems] = useState(5);
  const [isMobile, setIsMobile] = useState(false);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Check if mobile on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get current items for pagination
  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return products.slice(startIndex, endIndex);
  };

  // Get items for load more
  const getLoadMoreItems = () => {
    return products.slice(0, displayedItems);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadMore = () => {
    setDisplayedItems(prev => Math.min(prev + itemsPerPage, products.length));
  };

  const currentItems = viewMode === 'pagination' ? getCurrentItems() : getLoadMoreItems();

  return (
    <main>
      <style jsx>{`
        .features-container {
          display: flex;
          gap: 0.5rem;
          color: #87ceeb;
          font-size: clamp(0.8rem, 2vw, 0.9rem);
          margin-bottom: 1rem;
        }
        
        @media (max-width: 767px) {
          .features-container {
            flex-direction: column;
          }
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        
        .view-details-btn {
          display: block;
          text-align: center;
          color: #2c5f2d;
          text-decoration: none;
          font-weight: bold;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          transition: all 0.3s ease;
          padding: 12px 20px;
          border-radius: 25px;
          border: 2px solid #87ceeb;
          background: transparent;
          width: 100%;
          box-sizing: border-box;
        }
        
        .view-details-btn:hover {
          background: #87ceeb;
          color: white;
        }
        
        .pagination-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        
        .pagination-btn {
          padding: 8px 12px;
          border-radius: 20px;
          border: 2px solid #87ceeb;
          background: transparent;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: clamp(0.8rem, 2vw, 1rem);
        }
        
        .pagination-btn:disabled {
          color: #ccc;
          cursor: not-allowed;
        }
        
        .pagination-btn:not(:disabled) {
          color: #2c5f2d;
        }
        
        .page-number-btn {
          padding: 8px 12px;
          border-radius: 50%;
          border: 2px solid #87ceeb;
          background: transparent;
          color: #2c5f2d;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 35px;
          font-size: clamp(0.8rem, 2vw, 1rem);
        }
        
        .page-number-btn.active {
          background: #87ceeb;
          color: white;
        }
        
        .load-more-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 25px;
          background: linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: bold;
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(44, 95, 45, 0.3);
          width: 100%;
          max-width: 300px;
        }
        
        .load-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(44, 95, 45, 0.4);
        }
      `}</style>

      <section style={{
        padding: '40px 1rem',
        background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1) 0%, rgba(152, 251, 152, 0.1) 100%)',
        minHeight: '100vh'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              marginBottom: '1rem',
              color: '#2c5f2d',
              fontWeight: 'bold'
            }}>
              🛍️ All Hiking Gear
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Explore our complete collection of premium hiking equipment,
              carefully selected for outdoor enthusiasts and adventurers.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => {
                setViewMode('pagination');
                setCurrentPage(1);
                setDisplayedItems(5);
              }}
              style={{
                padding: '8px 16px',
                borderRadius: '25px',
                border: '2px solid #87ceeb',
                background: viewMode === 'pagination' ? '#87ceeb' : 'transparent',
                color: viewMode === 'pagination' ? 'white' : '#2c5f2d',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                whiteSpace: 'nowrap'
              }}
            >
              📄 Pagination
            </button>
            <button
              onClick={() => {
                setViewMode('loadmore');
                setCurrentPage(1);
                setDisplayedItems(5);
              }}
              style={{
                padding: '8px 16px',
                borderRadius: '25px',
                border: '2px solid #87ceeb',
                background: viewMode === 'loadmore' ? '#87ceeb' : 'transparent',
                color: viewMode === 'loadmore' ? 'white' : '#2c5f2d',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                whiteSpace: 'nowrap'
              }}
            >
              📋 Load More
            </button>
          </div>

          {/* Gear List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {currentItems.map((product, index) => (
              <div key={product.slug} style={{
                background: 'white',
                borderRadius: '15px',
                padding: '1rem',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Mobile Layout */}
                <div style={{
                  display: 'block'
                }}>
                  {/* Icon and Title Row */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: 'white',
                      flexShrink: 0
                    }}>
                      {['🎒', '🥾', '⛺', '🧭', '🔦', '🥤'][index % 6]}
                    </div>

                    <div style={{
                      flex: 1,
                      minWidth: 0
                    }}>
                      <h3 style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                        marginBottom: '0.5rem',
                        color: '#2c5f2d',
                        fontWeight: 'bold',
                        lineHeight: '1.3'
                      }}>
                        {product.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    color: '#666',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    lineHeight: '1.5',
                    marginBottom: '1rem'
                  }}>
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="features-container">
                    <span className="feature-item">
                      ⭐ Premium Quality
                    </span>
                    <span className="feature-item">
                      🚚 Free Shipping
                    </span>
                    <span className="feature-item">
                      🛡️ 2-Year Warranty
                    </span>
                  </div>

                  {/* Button */}
                  <Link href={`/${product.slug}`} className="view-details-btn">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {viewMode === 'pagination' && (
            <div className="pagination-container">
              {/* Previous */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-btn"
              >
                ←
              </button>

              {/* Page Numbers */}
              {(() => {
                const visiblePageCount = isMobile ? 3 : 5;
                const half = Math.floor(visiblePageCount / 2);

                let start = Math.max(1, currentPage - half);
                let end = Math.min(totalPages, currentPage + half);

                if (currentPage <= half) {
                  end = Math.min(totalPages, visiblePageCount);
                }

                if (currentPage + half > totalPages) {
                  start = Math.max(1, totalPages - visiblePageCount + 1);
                }

                return Array.from({ length: end - start + 1 }, (_, i) => start + i).map(pageNumber => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`page-number-btn ${currentPage === pageNumber ? 'active' : ''}`}
                  >
                    {pageNumber}
                  </button>
                ));
              })()}

              {/* Next */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-btn"
              >
                →
              </button>
            </div>
          )}

          {/* Load More Button */}
          {viewMode === 'loadmore' && displayedItems < products.length && (
            <div style={{
              textAlign: 'center',
              marginTop: '2rem'
            }}>
              <button
                onClick={handleLoadMore}
                className="load-more-btn"
              >
                <span>📦</span>
                <span>Load More ({products.length - displayedItems})</span>
              </button>
            </div>
          )}

          {/* Results Info */}
          <div style={{
            textAlign: 'center',
            marginTop: '2rem',
            color: '#666',
            fontSize: 'clamp(0.8rem, 2vw, 1rem)'
          }}>
            {viewMode === 'pagination' ? (
              <p>
                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, products.length)} of {products.length} items
              </p>
            ) : (
              <p>
                Showing {displayedItems} of {products.length} items
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GearPage;

// Import statements for getStaticProps
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

export const getStaticProps: GetStaticProps = async () => {
  const dirPath = path.join(process.cwd(), 'content/products');
  const files = fs.readdirSync(dirPath);

  const products: ProductMeta[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(dirPath, file), 'utf-8');
    const json = JSON.parse(raw);
    return { title: json.title, slug: json.slug, description: json.description };
  });

  return { props: { products } };
};
