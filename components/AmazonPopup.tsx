// components/AmazonPopup.tsx
'use client';
import { useEffect, useState } from 'react';
import { X, ShoppingCart, ExternalLink } from 'lucide-react';

const regex = /https:\/\/(?:www\.)?amazon\.com\/(?:[^\/\s"']+\/)*dp\/([A-Z0-9]{10,13})(?:[^\s"'<>]*)?/gi;

interface AmazonLink {
  href: string;
  text: string;
  asin: string;
}

export default function AmazonPopup() {
  const [amazonLinks, setAmazonLinks] = useState<AmazonLink[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll('a')) as HTMLAnchorElement[];
    const results: AmazonLink[] = [];

    for (const a of anchors) {
      const match = a.href.match(regex);
      if (match) {
        results.push({ 
          href: a.href, 
          text: a.textContent || 'Amazon Product',
          asin: match[1]
        });
      }
    }

    setAmazonLinks(results);
  }, []);

  if (amazonLinks.length === 0 || !isVisible) return null;

  const handleClose = () => setIsVisible(false);
  const toggleMinimize = () => setIsMinimized(!isMinimized);

  return (
    <div className="amazon-popup">
      <div className="amazon-popup-header">
        <div className="amazon-popup-title">
          <ShoppingCart size={20} className="title-icon" />
          <h4>Amazon Products</h4>
          <span className="count-badge">{amazonLinks.length}</span>
        </div>
        <div className="amazon-popup-controls">
          <button 
            onClick={toggleMinimize}
            className="control-btn minimize-btn"
            aria-label={isMinimized ? "Expand" : "Minimize"}
          >
            {isMinimized ? "⬆" : "⬇"}
          </button>
          <button 
            onClick={handleClose}
            className="control-btn close-btn"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="amazon-popup-content">
          {amazonLinks.map((link, index) => (
            <div key={index} className="amazon-link-item">
              <div className="product-info">
                <p className="product-title">{link.text}</p>
                <p className="product-asin">ASIN: {link.asin}</p>
              </div>
              <a 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="amazon-btn"
              >
                <span>View on Amazon</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .amazon-popup {
          position: fixed;
          top: 120px;
          right: 24px;
          width: 320px;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          z-index: 9999;
          backdrop-filter: blur(10px);
          animation: slideIn 0.3s ease-out;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .amazon-popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid #e2e8f0;
          background: linear-gradient(90deg, #ff9900 0%, #ffb84d 100%);
          border-radius: 16px 16px 0 0;
          color: white;
        }

        .amazon-popup-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .amazon-popup-title h4 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }

        .title-icon {
          color: white;
        }

        .count-badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }

        .amazon-popup-controls {
          display: flex;
          gap: 4px;
        }

        .control-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 6px;
          padding: 6px;
          cursor: pointer;
          color: white;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .amazon-popup-content {
          padding: 16px;
          max-height: 400px;
          overflow-y: auto;
        }

        .amazon-popup-content::-webkit-scrollbar {
          width: 6px;
        }

        .amazon-popup-content::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }

        .amazon-popup-content::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }

        .amazon-link-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px;
          margin-bottom: 12px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .amazon-link-item:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .amazon-link-item:last-child {
          margin-bottom: 0;
        }

        .product-info {
          flex: 1;
        }

        .product-title {
          margin: 0 0 8px 0;
          font-size: 14px;
          font-weight: 500;
          color: #1e293b;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-asin {
          margin: 0;
          font-size: 12px;
          color: #64748b;
          font-family: 'Monaco', 'Menlo', monospace;
        }

        .amazon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #ff9900 0%, #ffb84d 100%);
          color: white;
          padding: 10px 16px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }

        .amazon-btn:hover {
          background: linear-gradient(135deg, #e68900 0%, #ff9900 100%);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(255, 153, 0, 0.3);
        }

        .amazon-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .amazon-popup {
            width: 280px;
            right: 16px;
            top: 100px;
          }
        }
      `}</style>
    </div>
  );
}
