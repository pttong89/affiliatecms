import { useSession, signIn, signOut } from 'next-auth/react';
import UploadPost from '../components/upload';
import { 
  Shield, 
  User, 
  LogOut, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Lock,
  Globe,
  Eye
} from 'lucide-react';

export default function UploadPage() {
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
                Upload HTML
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
      <UploadPost />
    </div>
  );
}
