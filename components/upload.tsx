'use client';
import { useState } from 'react';
import { Upload, File, CheckCircle, AlertCircle, X, FileText, Trash2, Plus, CloudUpload } from 'lucide-react';

export default function UploadPost() {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files;
    setError('');
    setUploadSuccess(false);

    if (!selected || selected.length === 0) {
      setFiles([]);
      return;
    }

    const validFiles = Array.from(selected).filter(file => file.name.endsWith('.html'));
    if (validFiles.length === 0) {
      setError('Chỉ chấp nhận file .html');
      setFiles([]);
    } else {
      setFiles(validFiles);
    }
  };

  const handleUpload = async () => {
    if (!files.length) return alert('Vui lòng chọn file để upload');

    setUploading(true);
    setUploadSuccess(false);
    setError('');

    for (const file of files) {
      const text = await file.text();
      const filename = file.name;

      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, html: text }),
      });

      const result = await res.json();
      if (!result.success) {
        setError(`❌ Lỗi upload ${filename}: ${result.error}`);
        setUploading(false);
        return;
      }
    }

    setUploading(false);
    setUploadSuccess(true);
    alert('✅ Upload thành công tất cả file!');
    setFiles([]);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(file => file.name.endsWith('.html'));
    
    if (validFiles.length === 0) {
      setError('Chỉ chấp nhận file .html');
      setFiles([]);
    } else {
      setFiles(validFiles);
      setError('');
    }
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

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
          padding: '40px',
          width: '100%',
          maxWidth: '520px',
          position: 'relative'
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div 
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
            }}
          >
            <CloudUpload style={{ width: '32px', height: '32px', color: '#ffffff' }} />
          </div>
          <h1 
            style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '8px',
              letterSpacing: '-0.025em'
            }}
          >
            Upload HTML Files
          </h1>
          <p 
            style={{
              color: '#6b7280',
              fontSize: '16px',
              lineHeight: '1.5'
            }}
          >
            Kéo thả hoặc chọn file .html để upload lên server
          </p>
        </div>

        {/* Upload Area */}
        <div
          style={{
            border: dragActive 
              ? '2px dashed #667eea' 
              : files.length > 0 
                ? '2px dashed #10b981' 
                : '2px dashed #d1d5db',
            backgroundColor: dragActive 
              ? 'rgba(102, 126, 234, 0.05)' 
              : files.length > 0 
                ? 'rgba(16, 185, 129, 0.05)' 
                : '#f9fafb',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {files.length === 0 ? (
            <div>
              <div 
                style={{
                  backgroundColor: dragActive ? 'rgba(102, 126, 234, 0.1)' : 'rgba(156, 163, 175, 0.1)',
                  borderRadius: '12px',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px auto',
                  transition: 'all 0.3s ease'
                }}
              >
                <Upload 
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    color: dragActive ? '#667eea' : '#9ca3af'
                  }} 
                />
              </div>
              <h3 
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '8px'
                }}
              >
                {dragActive ? 'Thả file vào đây' : 'Kéo thả file vào đây'}
              </h3>
              <p 
                style={{
                  color: '#6b7280',
                  marginBottom: '24px',
                  fontSize: '14px'
                }}
              >
                hoặc click để chọn file
              </p>
              <label 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }}
              >
                <Plus style={{ width: '16px', height: '16px' }} />
                Chọn file HTML
                <input
                  type="file"
                  accept=".html"
                  multiple
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </label>
              <div 
                style={{
                  marginTop: '16px',
                  fontSize: '12px',
                  color: '#9ca3af'
                }}
              >
                Hỗ trợ: .html • Tối đa 10MB mỗi file
              </div>
            </div>
          ) : (
            <div>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                  justifyContent: 'center'
                }}
              >
                <div 
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    borderRadius: '8px',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <CheckCircle style={{ width: '20px', height: '20px', color: '#10b981' }} />
                </div>
                <span 
                  style={{
                    color: '#059669',
                    fontWeight: '600',
                    fontSize: '16px'
                  }}
                >
                  {files.length} file đã chọn
                </span>
              </div>
            </div>
          )}
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div style={{ marginTop: '24px' }}>
            <div 
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '12px',
                padding: '16px',
                border: '1px solid #e2e8f0'
              }}
            >
              <h4 
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <FileText style={{ width: '16px', height: '16px' }} />
                Danh sách file
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {files.map((file, index) => (
                  <div 
                    key={index}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      padding: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div 
                      style={{
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderRadius: '6px',
                        padding: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <File style={{ width: '16px', height: '16px', color: '#3b82f6' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div 
                        style={{
                          fontWeight: '600',
                          fontSize: '14px',
                          color: '#1f2937',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {file.name}
                      </div>
                      <div 
                        style={{
                          fontSize: '12px',
                          color: '#6b7280',
                          marginTop: '2px'
                        }}
                      >
                        {formatFileSize(file.size)} • HTML
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      style={{
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                      }}
                    >
                      <X style={{ width: '14px', height: '14px', color: '#ef4444' }} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div 
            style={{
              marginTop: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '12px',
              padding: '16px'
            }}
          >
            <div 
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '6px',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <AlertCircle style={{ width: '16px', height: '16px', color: '#ef4444' }} />
            </div>
            <span style={{ color: '#dc2626', fontSize: '14px', fontWeight: '500' }}>
              {error}
            </span>
          </div>
        )}

        {/* Success Message */}
        {uploadSuccess && (
          <div 
            style={{
              marginTop: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#f0fdf4',
              border: '1px solid #bbf7d0',
              borderRadius: '12px',
              padding: '16px'
            }}
          >
            <div 
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '6px',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckCircle style={{ width: '16px', height: '16px', color: '#10b981' }} />
            </div>
            <span style={{ color: '#059669', fontSize: '14px', fontWeight: '500' }}>
              Upload thành công tất cả file!
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ marginTop: '32px', display: 'flex', gap: '12px' }}>
          <button
            onClick={handleUpload}
            disabled={!files.length || uploading}
            style={{
              flex: 1,
              background: !files.length || uploading 
                ? '#f3f4f6' 
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: !files.length || uploading ? '#9ca3af' : '#ffffff',
              border: 'none',
              borderRadius: '12px',
              padding: '16px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: !files.length || uploading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transform: 'translateY(0)',
              boxShadow: !files.length || uploading 
                ? 'none' 
                : '0 4px 15px rgba(102, 126, 234, 0.3)'
            }}
            onMouseOver={(e) => {
              if (!uploading && files.length > 0) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
              }
            }}
            onMouseOut={(e) => {
              if (!uploading && files.length > 0) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
              }
            }}
          >
            {uploading ? (
              <>
                <div 
                  style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid #d1d5db',
                    borderTop: '2px solid #667eea',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}
                />
                <style jsx>{`
                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                `}</style>
                Đang upload...
              </>
            ) : (
              <>
                <Upload style={{ width: '20px', height: '20px' }} />
                Upload Files
              </>
            )}
          </button>

          {files.length > 0 && !uploading && (
            <button
              onClick={() => setFiles([])}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              <Trash2 style={{ width: '20px', height: '20px' }} />
            </button>
          )}
        </div>

        {/* Upload Tips */}
        <div 
          style={{
            marginTop: '24px',
            backgroundColor: 'rgba(59, 130, 246, 0.05)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            borderRadius: '12px',
            padding: '16px'
          }}
        >
          <h5 
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1e40af',
              marginBottom: '8px'
            }}
          >
            💡 Lưu ý khi upload
          </h5>
          <ul 
            style={{
              fontSize: '13px',
              color: '#3730a3',
              lineHeight: '1.5',
              margin: 0,
              paddingLeft: '16px'
            }}
          >
            <li>Chỉ hỗ trợ file .html</li>
            <li>Kích thước tối đa: 10MB mỗi file</li>
            <li>Có thể upload nhiều file cùng lúc</li>
            <li>Kéo thả để upload nhanh hơn</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
