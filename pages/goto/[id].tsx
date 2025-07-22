'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function RedirectPage() {
  const params = useParams();
  const id =
    typeof params?.id === 'string'
      ? params.id
      : Array.isArray(params?.id)
      ? params.id[0]
      : '';

  const [countdown, setCountdown] = useState(10);
  const [redirecting, setRedirecting] = useState(true);
  const amazonUrl = ``;
  useEffect(() => {
    if (!redirecting) return;

    if (countdown === 0) {
      const amazonUrl = `https://www.amazon.com/dp/${id}?tag=natureguests00-20`;
      window.location.href = amazonUrl;
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, redirecting, id]);

  const redirectNow = () => {
    if (!redirecting) return;
    setRedirecting(false);
    window.location.href = amazonUrl;
  };

  const cancelRedirect = () => {
    setRedirecting(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center animate-fade-in">
          {redirecting ? (
            <>
              <div className="mb-6">
                <div className="animate-spin rounded-full border-4 border-gray-300 border-t-blue-500 w-10 h-10 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  <i className="fas fa-external-link-alt text-blue-500 mr-2"></i>
                  Redirecting to Amazon
                </h1>
                <p className="text-gray-600">You are being redirected to the Amazon product page...</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-gray-500">Product ID:</span>
                  <span className="font-mono bg-gray-200 px-2 py-1 rounded">{id}</span>
                </div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-gray-500">Destination:</span>
                  <span className="text-blue-600">amazon.com</span>
                </div>
                
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{countdown}</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${((10 - countdown) / 10) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Auto-redirecting in {countdown} second(s)</p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={redirectNow}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  <i className="fas fa-arrow-right mr-2"></i> Redirect Now
                </button>
                <button
                  onClick={cancelRedirect}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <i className="fas fa-times mr-2"></i> Cancel
                </button>
              </div>
              <div className="mt-6 text-xs text-gray-400">
                <i className="fas fa-info-circle mr-1"></i> This is an affiliate link – we may earn a commission from Amazon
              </div>
            </>
          ) : (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Redirect Cancelled</h2>
              <p className="text-gray-600 mb-6">You have canceled the redirect to Amazon</p>
              <div className="space-y-3">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
                >
                  <i className="fas fa-redo mr-2"></i> Try Again
                </button>
                <button
                  onClick={redirectNow}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg"
                >
                  <i className="fas fa-arrow-right mr-2"></i> Proceed Anyway
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
