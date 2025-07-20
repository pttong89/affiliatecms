export default function MainContent() {
  return (
    <div>
     

      {/* Why Choose Us */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(180deg, #f0f8ff 0%, #ffffff 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1a3f1b',
              marginBottom: '20px'
            }}>
              🌟 Why Choose TrailGear Pro?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#2c5f2d',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We are committed to providing the best experience for every adventure
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                icon: '🏆',
                title: 'Premium Quality',
                description: 'Products selected from the world\'s leading reputable brands'
              },
              {
                icon: '🚚',
                title: 'Fast Delivery',
                description: 'Nationwide delivery within 24-48 hours with professional shipping team'
              },
              {
                icon: '💰',
                title: 'Competitive Prices',
                description: 'Committed to the best market prices with many attractive promotions'
              },
              {
                icon: '🛡️',
                title: 'Reliable Warranty',
                description: 'Flexible warranty and return policy, 24/7 customer support'
              },
              {
                icon: '👨‍🏫',
                title: 'Professional Consultation',
                description: 'Expert team with extensive experience advising on the most suitable equipment'
              },
              {
                icon: '🌍',
                title: 'Adventure Community',
                description: 'Join the nature exploration community with many interesting activities'
              }
            ].map((feature, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '30px 20px',
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
              }}>
                <div style={{
                  fontSize: '50px',
                  marginBottom: '20px'
                }}>{feature.icon}</div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: '#2c5f2d',
                  marginBottom: '15px'
                }}>{feature.title}</h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.6'
                }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1a3f1b',
              marginBottom: '20px'
            }}>
              💬 What Our Customers Say
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#2c5f2d',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Thousands of customers have trusted and been satisfied with TrailGear Pro&apos;s service
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                name: 'Michael Johnson',
                role: 'Professional Mountaineer',
                avatar: '👨‍🦲',
                rating: 5,
                comment: 'Excellent equipment quality! I\'ve used backpacks and boots from TrailGear Pro on many challenging climbs. Very satisfied with the durability and features.'
              },
              {
                name: 'Sarah Davis',
                role: 'Travel Guide',
                avatar: '👩‍🦰',
                rating: 5,
                comment: 'Outstanding customer service and diverse products. I regularly recommend TrailGear Pro to my clients.'
              },
              {
                name: 'David Wilson',
                role: 'Nature Photographer',
                avatar: '👨‍💼',
                rating: 5,
                comment: 'The camping equipment and photography backpacks are very convenient. They help me carry my camera and accessories safely during long trips.'
              }
            ].map((testimonial, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontSize: '40px',
                    marginRight: '15px'
                  }}>{testimonial.avatar}</div>
                  <div>
                    <h4 style={{
                      margin: 0,
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      color: '#1a3f1b'
                    }}>{testimonial.name}</h4>
                    <p style={{
                      margin: 0,
                      fontSize: '12px',
                      color: '#666'
                    }}>{testimonial.role}</p>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  marginBottom: '15px'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{
                      color: '#ffd700',
                      fontSize: '18px'
                    }}>⭐</span>
                  ))}
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#555',
                  lineHeight: '1.6',
                  fontStyle: 'italic'
                }}>&apos;{testimonial.comment}&apos;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
