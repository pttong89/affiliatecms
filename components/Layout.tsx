// components/Layout.tsx
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header style={{
        padding: '1rem 2rem',
        background: '#0d1117',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/" style={{ fontWeight: 'bold', fontSize: '20px', textDecoration: 'none', color: 'white' }}>
          🏕️ My Affiliate Site
        </Link>
        <nav>
          <Link href="/" style={{ marginLeft: '1rem', color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
          <Link href="/about" style={{ marginLeft: '1rem', color: 'white', textDecoration: 'none' }}>
            About
          </Link>
        </nav>
      </header>

      <main style={{ minHeight: '80vh' }}>
        {children}
      </main>

      <footer style={{
        padding: '1rem 2rem',
        background: '#f2f2f2',
        textAlign: 'center',
        fontSize: '14px',
        color: '#555'
      }}>
        © {new Date().getFullYear()} My Affiliate Site. All rights reserved.
      </footer>
    </div>
  );
}
