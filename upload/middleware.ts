import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ token }) {
      // ✅ chỉ email này mới được truy cập
      return token?.email === 'pttong89@gmail.com';
    },
  },
});

export const config = {
  matcher: ['/upload', '/listhtml'], // các trang cần bảo vệ
};
