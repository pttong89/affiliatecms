'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { 
  Shield, 
  User, 
  LogOut, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Lock,
  Globe,
  Eye,
  ChevronLeft,
  ChevronRight,
  X,
  FileText,
  Hash,
  ExternalLink
} from 'lucide-react';

interface HtmlFileMeta {
  filename: string;
  lastModified: string;
  size: string;
}

interface PostDetail {
  title?: string;
  slug?: string;
  description?: string;
  head?: string;
  body?: string;
  [key: string]: string | undefined;
}

interface Props {
  files: HtmlFileMeta[];
}

export default function PageWrapper(props: Props) {
  const { data: session, status } = useSession();
  const allowedEmail = 'pttong89@gmail.com';

  // Loading State
  if (status === 'loading') {
    return (
      <div 
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        }}
      >
        <div 
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '48px',
            textAlign: 'center',
            maxWidth: '400px',
            width: '100%',
            margin: '20px'
          }}
        >
          <div 
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px auto',
              boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
            }}
          >
            <Loader2 
              style={{ 
                width: '32px', 
                height: '32px', 
                color: '#ffffff',
                animation: 'spin 1s linear infinite'
              }} 
            />
            <style jsx>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
          <h2 
            style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '12px'
            }}
          >
            Đang kiểm tra đăng nhập
          </h2>
          <p 
            style={{
              color: '#6b7280',
              fontSize: '16px',
              margin: 0
            }}
          >
            Vui lòng đợi trong giây lát...
          </p>
        </div>
      </div>
    );
  }

  // Not Signed In State
  if (!session) {
    return (
      <div 
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        }}
      >
        <div 
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '48px',
            width: '100%',
            maxWidth: '440px',
            textAlign: 'center'
          }}
        >
          {/* Header Section */}
          <div style={{ marginBottom: '40px' }}>
            <div 
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                width: '72px',
                height: '72px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
              }}
            >
              <Shield style={{ width: '36px', height: '36px', color: '#ffffff' }} />
            </div>
            <h1 
              style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '12px',
                letterSpacing: '-0.025em'
              }}
            >
              Đăng nhập để tiếp tục
            </h1>
            <p 
              style={{
                color: '#6b7280',
                fontSize: '16px',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Chỉ những người được phép mới có thể truy cập trang quản trị
            </p>
          </div>

          {/* Google Sign In Button */}
          <button
            onClick={() => signIn('google')}
            style={{
              width: '100%',
              backgroundColor: '#ffffff',
              border: '1px solid #dadce0',
              borderRadius: '12px',
              padding: '16px 24px',
              fontSize: '16px',
              fontWeight: '500',
              color: '#3c4043',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '32px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              transform: 'translateY(0)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#f8f9fa';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = '#c0c4c7';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#dadce0';
            }}
          >
            {/* Google G Logo */}
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span style={{ fontWeight: '500' }}>Đăng nhập với Google</span>
          </button>

          {/* Security Notice */}
          <div 
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.05)',
              border: '1px solid rgba(59, 130, 246, 0.1)',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '24px'
            }}
          >
            <div 
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}
            >
              <div 
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '8px',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}
              >
                <Lock style={{ width: '16px', height: '16px', color: '#3b82f6' }} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1e40af',
                    marginBottom: '8px',
                    margin: '0 0 8px 0'
                  }}
                >
                  🔐 Bảo mật và quyền riêng tư
                </h4>
                <ul 
                  style={{
                    fontSize: '13px',
                    color: '#3730a3',
                    lineHeight: '1.5',
                    margin: 0,
                    paddingLeft: '16px'
                  }}
                >
                  <li style={{ marginBottom: '4px' }}>Chúng tôi chỉ truy cập thông tin cơ bản</li>
                  <li style={{ marginBottom: '4px' }}>Email của bạn sẽ được bảo mật</li>
                  <li>Không lưu trữ mật khẩu Google</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '16px',
              marginBottom: '24px'
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div 
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '8px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 8px auto',
                  width: '32px',
                  height: '32px'
                }}
              >
                <Globe style={{ width: '16px', height: '16px', color: '#10b981' }} />
              </div>
              <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: '500' }}>
                Quản lý HTML
              </span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div 
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  borderRadius: '8px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 8px auto',
                  width: '32px',
                  height: '32px'
                }}
              >
                <Shield style={{ width: '16px', height: '16px', color: '#ef4444' }} />
              </div>
              <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: '500' }}>
                Bảo mật
              </span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div 
                style={{
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  borderRadius: '8px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 8px auto',
                  width: '32px',
                  height: '32px'
                }}
              >
                <Eye style={{ width: '16px', height: '16px', color: '#a855f7' }} />
              </div>
              <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: '500' }}>
                Theo dõi
              </span>
            </div>
          </div>

          {/* Footer */}
          <p 
            style={{
              fontSize: '12px',
              color: '#9ca3af',
              textAlign: 'center',
              margin: 0,
              lineHeight: '1.4'
            }}
          >
            Bằng cách đăng nhập, bạn đồng ý với các điều khoản sử dụng của chúng tôi
          </p>
        </div>
      </div>
    );
  }

  // Access Denied State
  if (session.user?.email !== allowedEmail) {
    return (
      <div 
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
        }}
      >
        <div 
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            padding: '48px',
            width: '100%',
            maxWidth: '440px',
            textAlign: 'center'
          }}
        >
          {/* Error Icon */}
          <div 
            style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              borderRadius: '20px',
              width: '72px',
              height: '72px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px auto',
              boxShadow: '0 8px 25px rgba(239, 68, 68, 0.3)'
            }}
          >
            <AlertCircle style={{ width: '36px', height: '36px', color: '#ffffff' }} />
          </div>

          {/* Error Message */}
          <h1 
            style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#dc2626',
              marginBottom: '12px',
              letterSpacing: '-0.025em'
            }}
          >
            Truy cập bị từ chối
          </h1>
          <p 
            style={{
              color: '#6b7280',
              fontSize: '16px',
              lineHeight: '1.6',
              marginBottom: '32px'
            }}
          >
            Tài khoản <strong>{session.user?.email}</strong> không có quyền truy cập vào trang này.
          </p>

          {/* User Info Card */}
          <div 
            style={{
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div 
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              {session.user?.image ? (
                <img 
                  src={session.user.image} 
                  alt="Profile"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px'
                  }}
                />
              ) : (
                <User style={{ width: '20px', height: '20px', color: '#6b7280' }} />
              )}
            </div>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <div 
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '2px'
                }}
              >
                {session.user?.name || 'Người dùng'}
              </div>
              <div 
                style={{
                  fontSize: '12px',
                  color: '#6b7280'
                }}
              >
                {session.user?.email}
              </div>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            onClick={() => signOut()}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '12px',
              padding: '16px 24px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)',
              transform: 'translateY(0)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(239, 68, 68, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(239, 68, 68, 0.3)';
            }}
          >
            <LogOut style={{ width: '20px', height: '20px' }} />
            Đăng xuất và thử lại
          </button>

          {/* Contact Info */}
          <div 
            style={{
              marginTop: '24px',
              padding: '16px',
              backgroundColor: 'rgba(59, 130, 246, 0.05)',
              border: '1px solid rgba(59, 130, 246, 0.1)',
              borderRadius: '12px'
            }}
          >
            <p 
              style={{
                fontSize: '13px',
                color: '#3730a3',
                margin: 0,
                lineHeight: '1.4'
              }}
            >
              💡 Nếu bạn cho rằng đây là lỗi, vui lòng liên hệ với quản trị viên để được cấp quyền truy cập.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Success State - Authorized User
  return (
    <div 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)',
        padding: '20px 20px 40px 20px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
    >
      {/* Welcome Header */}
      <div 
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          padding: '24px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div 
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              borderRadius: '12px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
            }}
          >
            <CheckCircle style={{ width: '24px', height: '24px', color: '#ffffff' }} />
          </div>
          <div>
            <h1 
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1f2937',
                margin: '0 0 4px 0',
                letterSpacing: '-0.025em'
              }}
            >
              Chào mừng trở lại! 👋
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {session.user?.image && (
                <img 
                  src={session.user.image} 
                  alt="Profile"
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '4px'
                  }}
                />
              )}
              <span 
                style={{
                  color: '#059669',
                  fontSize: '16px',
                  fontWeight: '600'
                }}
              >
                {session.user?.name || session.user?.email}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={() => signOut()}
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '8px 16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#6b7280',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6';
            e.currentTarget.style.borderColor = '#d1d5db';
            e.currentTarget.style.color = '#4b5563';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.borderColor = '#e5e7eb';
            e.currentTarget.style.color = '#6b7280';
          }}
        >
          <LogOut style={{ width: '16px', height: '16px' }} />
          Đăng xuất
        </button>
      </div>

      {/* Upload Component */}
      <ListHtmlPage {...props} />
    </div>
  );
}

export function ListHtmlPage({ files: initialFiles }: Props) {
  const [files, setFiles] = useState(initialFiles);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [deletingMany, setDeletingMany] = useState(false);
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; filenames: string[] }>({
    isOpen: false,
    filenames: []
  });
  
  // Thêm state cho modal chi tiết
  const [detailModal, setDetailModal] = useState<{ 
    isOpen: boolean; 
    filename: string; 
    data: PostDetail | null; 
    loading: boolean;
  }>({
    isOpen: false,
    filename: '',
    data: null,
    loading: false
  });
  
  // Thêm state cho phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  // Tính toán phân trang
  const totalPages = Math.ceil(files.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFiles = files.slice(startIndex, endIndex);
  
  // Hàm xử lý xem chi tiết
  const handleViewDetail = async (filename: string) => {
    setDetailModal({ isOpen: true, filename, data: null, loading: true });
    
    try {
      const response = await fetch(`/api/get-post-detail?filename=${filename}`);
      if (response.ok) {
        const data = await response.json();
        setDetailModal({ isOpen: true, filename, data, loading: false });
      } else {
        throw new Error('Không thể tải dữ liệu');
      }
    } catch (error) {
      console.error('Error loading post detail:', error);
      setDetailModal({ isOpen: true, filename, data: null, loading: false });
    }
  };
  
  // Reset về trang 1 khi số lượng file thay đổi
  const handleFilesChange = (newFiles: HtmlFileMeta[]) => {
    setFiles(newFiles);
    const newTotalPages = Math.ceil(newFiles.length / itemsPerPage);
    if (currentPage > newTotalPages && newTotalPages > 0) {
      setCurrentPage(1);
    }
  };

  const toggleFileSelection = (filename: string) => {
    setSelectedFiles(prev =>
      prev.includes(filename) ? prev.filter(f => f !== filename) : [...prev, filename]
    );
  };

  const handleDeleteClick = (filename: string) => {
    setDeleteModal({ isOpen: true, filenames: [filename] });
  };

  const handleBulkDeleteClick = () => {
    if (selectedFiles.length === 0) return;
    setDeleteModal({ isOpen: true, filenames: selectedFiles });
  };

  const handleDeleteConfirm = async () => {
    const filenames = deleteModal.filenames;
    setDeletingMany(true);
    try {
      for (const filename of filenames) {
        await fetch('/api/delete-html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename }),
        });
      }
      const newFiles = files.filter(file => !filenames.includes(file.filename));
      handleFilesChange(newFiles);
      setSelectedFiles([]);
      setDeleteModal({ isOpen: false, filenames: [] });
    } catch (err) {
      console.error('Lỗi xóa nhiều:', err);
    } finally {
      setDeletingMany(false);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModal({ isOpen: false, filenames: [] });
  };

  const selectAllFiles = () => {
    if (selectedFiles.length === currentFiles.length && currentFiles.length > 0) {
      const currentFilenames = currentFiles.map(f => f.filename);
      setSelectedFiles(prev => prev.filter(filename => !currentFilenames.includes(filename)));
    } else {
      const currentFilenames = currentFiles.map(f => f.filename);
      setSelectedFiles(prev => [...new Set([...prev, ...currentFilenames])]);
    }
  };

  const getFileIcon = (filename: string) => {
    const ext = filename.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'json':
        return '📄';
      case 'html':
        return '🌐';
      case 'css':
        return '🎨';
      case 'js':
        return '⚡';
      case 'pdf':
        return '📕';
      case 'img':
      case 'png':
      case 'jpg':
        return '🖼️';
      default:
        return '📁';
    }
  };

  // Hàm tạo pagination numbers
  const getPaginationNumbers = () => {
    const pages = [];
    const showPages = 5;
    
    if (totalPages <= showPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= showPages; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - showPages + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }
    
    return pages;
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '24px',
        padding: '32px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
          paddingBottom: '24px',
          borderBottom: '2px solid #f1f5f9'
        }}>
          <div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1e293b',
              margin: '0 0 8px 0',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              📁 File Manager
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#64748b',
              margin: 0
            }}>
              Quản lý và tổ chức các tập tin của bạn
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}>
            <div style={{
              background: '#f8fafc',
              padding: '8px 16px',
              borderRadius: '12px',
              fontSize: '14px',
              color: '#475569',
              fontWeight: '500'
            }}>
              {files.length} tập tin
            </div>
            
            <button
              onClick={handleBulkDeleteClick}
              disabled={selectedFiles.length === 0 || deletingMany}
              style={{
                background: selectedFiles.length === 0 
                  ? '#e2e8f0' 
                  : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                color: selectedFiles.length === 0 ? '#94a3b8' : 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: selectedFiles.length === 0 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
                boxShadow: selectedFiles.length > 0 ? '0 4px 12px rgba(239, 68, 68, 0.3)' : 'none'
              }}
            >
              🗑️ Xóa nhiều ({selectedFiles.length})
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        {files.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '32px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              color: 'white',
              padding: '20px',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
            }}>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>Tổng tập tin</div>
              <div style={{ fontSize: '24px', fontWeight: '700', marginTop: '4px' }}>
                {files.length}
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              padding: '20px',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
            }}>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>Đã chọn</div>
              <div style={{ fontSize: '24px', fontWeight: '700', marginTop: '4px' }}>
                {selectedFiles.length}
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: 'white',
              padding: '20px',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)'
            }}>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>Tổng dung lượng</div>
              <div style={{ fontSize: '24px', fontWeight: '700', marginTop: '4px' }}>
                {files.reduce((total, file) => total + parseFloat(file.size), 0).toFixed(1)} KB
              </div>
            </div>
          </div>
        )}

        {/* Pagination Info */}
        {files.length > 0 && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            padding: '12px 16px',
            background: '#f8fafc',
            borderRadius: '12px',
            fontSize: '14px',
            color: '#64748b'
          }}>
            <span>
              Hiển thị {startIndex + 1}-{Math.min(endIndex, files.length)} của {files.length} tập tin
            </span>
            <span>
              Trang {currentPage} / {totalPages}
            </span>
          </div>
        )}

        {/* Table Container */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
          marginBottom: '24px'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}>
            <thead>
              <tr style={{
                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                borderBottom: '2px solid #e2e8f0'
              }}>
                <th style={{
                  padding: '16px 20px',
                  textAlign: 'left',
                  width: '50px'
                }}>
                  <input
                    type="checkbox"
                    checked={currentFiles.length > 0 && currentFiles.every(file => selectedFiles.includes(file.filename))}
                    onChange={selectAllFiles}
                    style={{
                      width: '18px',
                      height: '18px',
                      accentColor: '#667eea',
                      cursor: 'pointer'
                    }}
                  />
                </th>
                <th style={{
                  padding: '16px 20px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  📄 Tên tập tin
                </th>
                <th style={{
                  padding: '16px 20px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  📅 Ngày sửa đổi
                </th>
                <th style={{
                  padding: '16px 20px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  📏 Kích thước
                </th>
                <th style={{
                  padding: '16px 20px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  width: '200px'
                }}>
                  ⚡ Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {files.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{
                    padding: '60px 20px',
                    textAlign: 'center',
                    color: '#94a3b8',
                    fontSize: '16px'
                  }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>📂</div>
                    <div style={{ fontWeight: '600', marginBottom: '8px' }}>Không có tập tin nào</div>
                    <div>Thêm tập tin đầu tiên của bạn để bắt đầu</div>
                  </td>
                </tr>
              ) : (
                currentFiles.map((file, index) => (
                  <tr
                    key={file.filename}
                    style={{
                      borderBottom: index < currentFiles.length - 1 ? '1px solid #f1f5f9' : 'none',
                      background: selectedFiles.includes(file.filename) 
                        ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)' 
                        : 'white',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      if (!selectedFiles.includes(file.filename)) {
                        e.currentTarget.style.background = '#f8fafc';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!selectedFiles.includes(file.filename)) {
                        e.currentTarget.style.background = 'white';
                      }
                    }}
                  >
                    <td style={{ padding: '16px 20px' }}>
                      <input
                        type="checkbox"
                        checked={selectedFiles.includes(file.filename)}
                        onChange={() => toggleFileSelection(file.filename)}
                        style={{
                          width: '18px',
                          height: '18px',
                          accentColor: '#667eea',
                          cursor: 'pointer'
                        }}
                      />
                    </td>
                    <td style={{ padding: '16px 20px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}>
                        <span style={{ fontSize: '20px' }}>{getFileIcon(file.filename)}</span>
                        <span style={{
                          fontSize: '14px',
                          fontWeight: '500',
                          color: '#374151'
                        }}>
                          {file.filename}
                        </span>
                      </div>
                    </td>
                    <td style={{
                      padding: '16px 20px',
                      fontSize: '14px',
                      color: '#64748b'
                    }}>
                      {file.lastModified}
                    </td>
                    <td style={{
                      padding: '16px 20px',
                      fontSize: '14px',
                      color: '#64748b',
                      fontWeight: '500'
                    }}>
                      {file.size}
                    </td>
                    <td style={{
                      padding: '16px 20px',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        display: 'flex',
                        gap: '8px',
                        justifyContent: 'center'
                      }}>
                        {/* Nút Xem chi tiết */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewDetail(file.filename);
                          }}
                          style={{
                            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                            color: 'white',
                            border: 'none',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            fontSize: '12px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 2px 4px rgba(59, 130, 246, 0.2)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-1px)';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 4px rgba(59, 130, 246, 0.2)';
                          }}
                        >
                          <Eye size={14} />
                          Xem
                        </button>
                        
                        {/* Nút Xóa */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteClick(file.filename);
                          }}
                          style={{
                            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                            color: 'white',
                            border: 'none',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            fontSize: '12px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 2px 4px rgba(239, 68, 68, 0.2)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-1px)';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(239, 68, 68, 0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 4px rgba(239, 68, 68, 0.2)';
                          }}
                        >
                          🗑️ Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            marginTop: '24px'
          }}>
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 16px',
                background: currentPage === 1 ? '#f1f5f9' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: currentPage === 1 ? '#94a3b8' : 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: currentPage === 1 ? 'none' : '0 2px 8px rgba(102, 126, 234, 0.3)'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 1) {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 1) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
                }
              }}
            >
              <ChevronLeft size={16} />
              Trước
            </button>

            {/* Page Numbers */}
            <div style={{
              display: 'flex',
              gap: '4px',
              margin: '0 16px'
            }}>
              {getPaginationNumbers().map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  style={{
                    padding: '10px 16px',
                    background: currentPage === pageNum 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                      : '#ffffff',
                    color: currentPage === pageNum ? 'white' : '#475569',
                    border: currentPage === pageNum ? 'none' : '1px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    minWidth: '44px',
                    boxShadow: currentPage === pageNum 
                      ? '0 2px 8px rgba(102, 126, 234, 0.3)' 
                      : '0 1px 3px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    if (currentPage !== pageNum) {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.borderColor = '#cbd5e1';
                    } else {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentPage !== pageNum) {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    } else {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
                    }
                  }}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 16px',
                background: currentPage === totalPages ? '#f1f5f9' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: currentPage === totalPages ? '#94a3b8' : 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: currentPage === totalPages ? 'none' : '0 2px 8px rgba(102, 126, 234, 0.3)'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
                }
              }}
            >
              Sau
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Jump to Page */}
        {totalPages > 5 && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            marginTop: '16px',
            padding: '16px',
            background: '#f8fafc',
            borderRadius: '12px'
          }}>
            <span style={{
              fontSize: '14px',
              color: '#64748b',
              fontWeight: '500'
            }}>
              Chuyển đến trang:
            </span>
            <input
              type="number"
              min="1"
              max={totalPages}
              value={currentPage}
              onChange={(e) => {
                const page = parseInt(e.target.value);
                if (page >= 1 && page <= totalPages) {
                  setCurrentPage(page);
                }
              }}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                fontSize: '14px',
                fontWeight: '500',
                textAlign: 'center',
                width: '80px',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <span style={{
              fontSize: '14px',
              color: '#94a3b8'
            }}>
              / {totalPages}
            </span>
          </div>
        )}
      </div>

      {/* Modal xem chi tiết */}
      {detailModal.isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(4px)',
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            width: '90%',
            maxWidth: '1400px',
            maxHeight: '90vh',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header modal */}
            <div style={{
              padding: '24px 32px',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <FileText size={24} />
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  margin: 0
                }}>
                  Chi tiết bài viết
                </h2>
              </div>
              <button
                onClick={() => setDetailModal({ isOpen: false, filename: '', data: null, loading: false })}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px',
                  cursor: 'pointer',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Nội dung modal */}
            <div style={{
              flex: 1,
              overflow: 'auto',
              padding: '0'
            }}>
              {detailModal.loading ? (
                <div style={{
                  padding: '60px 32px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <Loader2 
                    size={40} 
                    style={{ 
                      color: '#667eea',
                      animation: 'spin 1s linear infinite'
                    }}
                  />
                  <style jsx>{`
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}</style>
                  <p style={{ 
                    color: '#64748b',
                    fontSize: '16px',
                    margin: 0
                  }}>
                    Đang tải dữ liệu...
                  </p>
                </div>
              ) : detailModal.data ? (
                <div>
                  {/* Phần thông tin chung */}
                  <div style={{
                    padding: '32px',
                    background: '#f8fafc',
                    borderBottom: '1px solid #e2e8f0'
                  }}>
                    <div style={{
                      display: 'grid',
                      gap: '20px'
                    }}>
                      {/* Title */}
                      {detailModal.data.title && (
                        <div style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px'
                        }}>
                          <div style={{
                            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                            borderRadius: '8px',
                            padding: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            flexShrink: 0
                          }}>
                            <FileText size={16} color="white" />
                          </div>
                          <div style={{ flex: 1 }}>
                            <h3 style={{
                              fontSize: '14px',
                              fontWeight: '600',
                              color: '#374151',
                              margin: '0 0 8px 0',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px'
                            }}>
                              Tiêu đề
                            </h3>
                            <p style={{
                              fontSize: '18px',
                              fontWeight: '600',
                              color: '#1e293b',
                              margin: 0,
                              lineHeight: '1.4'
                            }}>
                              {detailModal.data.title}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Slug */}
                      {detailModal.data.slug && (
                        <div style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px'
                        }}>
                          <div style={{
                            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                            borderRadius: '8px',
                            padding: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            flexShrink: 0
                          }}>
                            <Hash size={16} color="white" />
                          </div>
                          <div style={{ flex: 1 }}>
                            <h3 style={{
                              fontSize: '14px',
                              fontWeight: '600',
                              color: '#374151',
                              margin: '0 0 8px 0',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px'
                            }}>
                              Slug
                            </h3>
                            <p style={{
                              fontSize: '16px',
                              color: '#059669',
                              margin: 0,
                              fontFamily: 'monospace',
                              background: '#ecfdf5',
                              padding: '8px 12px',
                              borderRadius: '6px',
                              border: '1px solid #d1fae5'
                            }}>
                              {detailModal.data.slug}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      {detailModal.data.description && (
                        <div style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px'
                        }}>
                          <div style={{
                            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                            borderRadius: '8px',
                            padding: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            flexShrink: 0
                          }}>
                            <FileText size={16} color="white" />
                          </div>
                          <div style={{ flex: 1 }}>
                            <h3 style={{
                              fontSize: '14px',
                              fontWeight: '600',
                              color: '#374151',
                              margin: '0 0 8px 0',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px'
                            }}>
                              Mô tả
                            </h3>
                            <p style={{
                              fontSize: '16px',
                              color: '#4b5563',
                              margin: 0,
                              lineHeight: '1.6'
                            }}>
                              {detailModal.data.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phần nội dung bài viết */}
                  <div style={{
                    padding: '32px'
                  }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#1e293b',
                      margin: '0 0 24px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <div style={{
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                        borderRadius: '8px',
                        padding: '6px',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <ExternalLink size={16} color="white" />
                      </div>
                      Nội dung bài viết
                    </h3>

                    {/* Head section */}
                    {detailModal.data.head && (
                      <div style={{ marginBottom: '32px' }}>
                        <h4 style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#374151',
                          margin: '0 0 12px 0',
                          padding: '8px 12px',
                          background: '#fef3c7',
                          borderRadius: '8px',
                          border: '1px solid #fbbf24'
                        }}>
                          📋 Head Section
                        </h4>
                        <div style={{
                          background: '#1f2937',
                          color: '#e5e7eb',
                          padding: '20px',
                          borderRadius: '12px',
                          fontSize: '14px',
                          fontFamily: 'Monaco, Consolas, "Lucida Console", monospace',
                          lineHeight: '1.5',
                          maxHeight: '400px',
                          overflow: 'auto',
                          border: '1px solid #374151'
                        }}>
                          <pre style={{
                            margin: 0,
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word'
                          }}>
                            {detailModal.data.head}
                          </pre>
                        </div>
                      </div>
                    )}

                    {/* Body section */}
                    {detailModal.data.body && (
                      <div>
                        <h4 style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#374151',
                          margin: '0 0 12px 0',
                          padding: '8px 12px',
                          background: '#dcfce7',
                          borderRadius: '8px',
                          border: '1px solid #22c55e'
                        }}>
                          📄 Body Content
                        </h4>
                        <div style={{
                          background: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          overflow: 'hidden'
                        }}>
                          {/* Preview rendered HTML */}
                          <div style={{
                            padding: '20px',
                            maxHeight: '500px',
                            overflow: 'auto'
                          }}>
                            <div 
                              dangerouslySetInnerHTML={{ __html: detailModal.data.body }}
                              style={{
                                lineHeight: '1.6',
                                fontSize: '16px'
                              }}
                            />
                          </div>
                          
                          {/* Raw HTML code */}
                          <details style={{
                            borderTop: '1px solid #e2e8f0'
                          }}>
                            <summary style={{
                              padding: '12px 20px',
                              background: '#f1f5f9',
                              cursor: 'pointer',
                              fontSize: '14px',
                              fontWeight: '600',
                              color: '#374151'
                            }}>
                              💻 Xem mã HTML
                            </summary>
                            <div style={{
                              background: '#1f2937',
                              color: '#e5e7eb',
                              padding: '20px',
                              fontSize: '13px',
                              fontFamily: 'Monaco, Consolas, "Lucida Console", monospace',
                              lineHeight: '1.5',
                              maxHeight: '400px',
                              overflow: 'auto'
                            }}>
                              <pre style={{
                                margin: 0,
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word'
                              }}>
                                {detailModal.data.body}
                              </pre>
                            </div>
                          </details>
                        </div>
                      </div>
                    )}

                    {/* Thông tin bổ sung nếu có */}
                    {Object.keys(detailModal.data).length > 0 && (
                      <details style={{
                        marginTop: '32px',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px'
                      }}>
                        <summary style={{
                          padding: '16px 20px',
                          background: '#f8fafc',
                          cursor: 'pointer',
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#374151',
                          borderRadius: '12px 12px 0 0'
                        }}>
                          🔍 Thông tin chi tiết (JSON)
                        </summary>
                        <div style={{
                          background: '#1f2937',
                          color: '#e5e7eb',
                          padding: '20px',
                          fontSize: '13px',
                          fontFamily: 'Monaco, Consolas, "Lucida Console", monospace',
                          lineHeight: '1.5',
                          maxHeight: '400px',
                          overflow: 'auto',
                          borderRadius: '0 0 12px 12px'
                        }}>
                          <pre style={{
                            margin: 0,
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word'
                          }}>
                            {JSON.stringify(detailModal.data, null, 2)}
                          </pre>
                        </div>
                      </details>
                    )}
                  </div>
                </div>
              ) : (
                <div style={{
                  padding: '60px 32px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <AlertCircle size={40} color="#ef4444" />
                  <p style={{ 
                    color: '#ef4444',
                    fontSize: '16px',
                    margin: 0,
                    fontWeight: '600'
                  }}>
                    Không thể tải dữ liệu từ file: {detailModal.filename}
                  </p>
                  <p style={{ 
                    color: '#64748b',
                    fontSize: '14px',
                    margin: 0
                  }}>
                    Vui lòng kiểm tra lại định dạng file JSON.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal.isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '32px',
            maxWidth: '480px',
            width: '90%',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            transform: deleteModal.isOpen ? 'scale(1)' : 'scale(0.9)',
            transition: 'transform 0.2s ease'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px'
              }}>
                ⚠️
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#1e293b',
                margin: '0 0 8px 0'
              }}>
                Xác nhận xóa
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#64748b',
                margin: 0,
                lineHeight: 1.5
              }}>
                Bạn có chắc chắn muốn xóa {deleteModal.filenames.length} tập tin?
                <br />
                <strong>Hành động này không thể hoàn tác.</strong>
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center'
            }}>
              <button
                onClick={handleDeleteCancel}
                style={{
                  background: '#f1f5f9',
                  color: '#475569',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e2e8f0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f1f5f9';
                }}
              >
                Hủy bỏ
              </button>
              <button
                onClick={handleDeleteConfirm}
                disabled={deletingMany}
                style={{
                  background: deletingMany 
                    ? '#e2e8f0' 
                    : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  color: deletingMany ? '#94a3b8' : 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: deletingMany ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {deletingMany ? '⏳ Đang xóa...' : '🗑️ Xác nhận xóa'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const dirPath = path.join(process.cwd(), 'content/products');
  let files: HtmlFileMeta[] = [];

  if (fs.existsSync(dirPath)) {
    files = fs.readdirSync(dirPath)
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const stat = fs.statSync(path.join(dirPath, file));
        const sizeInKB = (stat.size / 1024).toFixed(1);
        return {
          filename: file,
          lastModified: new Date(stat.mtime).toLocaleString('vi-VN'),
          size: `${sizeInKB} KB`,
        };
      })
      .sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime());
  }

  return {
    props: { files },
    revalidate: 60,
  };
};
