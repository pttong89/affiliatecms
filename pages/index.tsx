import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type ProductMeta = {
  title: string;
  slug: string;
  description: string;
};

export async function getStaticProps() {
  const dirPath = path.join(process.cwd(), 'content/products');
  const files = fs.readdirSync(dirPath);

  const products: ProductMeta[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(dirPath, file), 'utf-8');
    const json = JSON.parse(raw);
    return { title: json.title, slug: json.slug, description: json.description };
  }).slice(0, 9);;

  return { props: { products } };
}

export default function Home({ products }: { products: ProductMeta[] }) {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f0f8ff 0%, #e6f3ff 100%)'
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(44, 95, 45, 0.9) 0%, rgba(26, 63, 27, 0.9) 100%), url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJtb3VudGFpbiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj4KICAgICAgPHBhdGggZD0iTTIwIDEwTDMwIDMwSDE0TDIwIDEwWiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbW91bnRhaW4pIi8+Cjwvc3ZnPg==") center/cover',
        color: 'white',
        textAlign: 'center',
        padding: '120px 2rem 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🏔️ Discover Your Next Adventure
          </h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '2rem',
            color: '#e0f6ff',
            textShadow: '0 1px 5px rgba(0,0,0,0.3)',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Premium hiking gear and expert guides for America&apos;s most stunning national parks. 
            Your adventure starts here.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/gear" passHref>
            <button  style={{
              padding: '15px 30px',
              background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
              border: 'none',
              borderRadius: '50px',
              color: '#1a3f1b',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 20px rgba(135, 206, 235, 0.4)'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(135, 206, 235, 0.6)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(135, 206, 235, 0.4)';
            }}>
              🎒 Shop Gear Now
            </button>
            </Link>
             <Link href="/info-national-park" passHref>
            <button style={{
              padding: '15px 30px',
              background: 'transparent',
              border: '2px solid #87ceeb',
              borderRadius: '50px',
              color: '#87ceeb',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(135, 206, 235, 0.2)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              🗺️ Explore Parks
            </button>
            </Link>
          </div>
        </div>

        {/* Floating elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          fontSize: '3rem',
          opacity: 0.3,
          animation: 'float 6s ease-in-out infinite'
        }}>
          ⛰️
        </div>
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          fontSize: '2.5rem',
          opacity: 0.3,
          animation: 'float 4s ease-in-out infinite reverse'
        }}>
          🌲
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '80px 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '3rem',
          color: '#2c5f2d',
          fontWeight: 'bold'
        }}>
          🌟 Why Choose TrailGear Pro?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {[
            {
              icon: '🏅',
              title: 'Premium Quality',
              description: 'Hand-selected gear from top outdoor brands, tested by professional hikers and mountain guides.',
              color: '#87ceeb'
            },
            {
              icon: '🗺️',
              title: 'Expert Guides',
              description: 'Detailed trail maps and insider tips from park rangers and experienced adventurers.',
              color: '#98fb98'
            },
            {
              icon: '🌍',
              title: 'All Parks Covered',
              description: 'Comprehensive coverage of all 63 US National Parks with specialized gear recommendations.',
              color: '#87ceeb'
            },
            
          ].map((feature, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '2rem',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(44, 95, 45, 0.1)',
              transition: 'all 0.3s ease',
              border: `2px solid ${feature.color}20`
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(44, 95, 45, 0.2)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(44, 95, 45, 0.1)';
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color === '#87ceeb' ? '#98fb98' : '#87ceeb'} 100%)`,
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: '#2c5f2d',
                fontWeight: 'bold'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: '#666',
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section style={{
        padding: '80px 2rem',
        background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1) 0%, rgba(152, 251, 152, 0.1) 100%)',
        borderRadius: '50px 50px 0 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: '#2c5f2d',
            fontWeight: 'bold'
          }}>
            🛍️ Featured Hiking Gear
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Discover our carefully curated selection of premium hiking equipment, 
            perfect for your next national park adventure.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {products.map((product, index) => (
              <div key={product.slug} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '1.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem'
                }}>
                  {['🎒', '🥾', '⛺', '🧭', '🔦', '🥤'][index % 6]}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  marginBottom: '1rem',
                  color: '#2c5f2d',
                  fontWeight: 'bold'
                }}>
                  {product.title}
                </h3>
                <p style={{
                  color: '#666',
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                 {product.description.length > 200 ? product.description.slice(0, 200) + '...' : product.description}
                </p>
                <Link href={`/${product.slug}`} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#2c5f2d',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  border: '2px solid #87ceeb',
                  background: 'transparent'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#87ceeb';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#2c5f2d';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  View Details →
                </Link>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <Link href="/gear" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 35px',
              background: 'linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 20px rgba(44, 95, 45, 0.3)'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(44, 95, 45, 0.4)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(44, 95, 45, 0.3)';
            }}>
              🛍️ View All Gear
            </Link>
          </div>
        </div>
      </section>

      {/* Popular National Parks */}
      <section style={{
        padding: '80px 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '3rem',
          color: '#2c5f2d',
          fontWeight: 'bold'
        }}>
          🏞️ Most Popular National Parks
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { name: 'Yellowstone', icon: '🌋', features: 'Geysers, Wildlife, Hot Springs', href: 'topic-yellowstone' },
            { name: 'Grand Canyon', icon: '🏔️', features: 'Epic Views, Hiking, Rafting', href: 'topic-canyon' },
            { name: 'Yosemite', icon: '🌲', features: 'Waterfalls, Rock Climbing, Giants', href: 'topic-yosemite' },
            { name: 'Zion', icon: '🏜️', features: 'Slot Canyons, Angels Landing, Desert', href: 'topic-zion' }
           
          ].map((park, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '20px',
              padding: '1.5rem',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              border: '2px solid transparent'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#87ceeb';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                {park.icon}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '0.5rem',
                color: '#2c5f2d',
                fontWeight: 'bold'
              }}>
                {park.name}
              </h3>
              <p style={{
                color: '#666',
                fontSize: '0.9rem',
                marginBottom: '1rem'
              }}>
                {park.features}
              </p>
              <Link href={park.href} style={{
                color: '#87ceeb',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.color = '#2c5f2d';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = '#87ceeb';
              }}>
                Explore Park →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @media (max-width: 768px) {
          section {
            padding: 40px 1rem !important;
          }
          h1 {
            font-size: 2rem !important;
          }
          h2 {
            font-size: 1.8rem !important;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}
