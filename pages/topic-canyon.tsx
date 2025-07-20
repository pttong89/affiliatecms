export default function GrandCanyonMain() {
  return (
    <main style={{ 
      minHeight: '80vh',
      background: 'linear-gradient(180deg, #f0f8ff 0%, #e6f3ff 100%)'
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.1) 0%, rgba(255, 69, 0, 0.1) 50%, rgba(139, 69, 19, 0.1) 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>

          
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #8b4513 0%, #cd853f 50%, #daa520 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '30px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            lineHeight: '1.2'
          }}>
            Grand Canyon National Park
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            color: '#2c5f2d',
            marginBottom: '40px',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            🌅 Experience one of the world&apos;s most spectacular natural wonders, carved by the Colorado River over millions of years
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            marginTop: '40px'
          }}>
            <button style={{
              background: 'linear-gradient(135deg, #2c5f2d 0%, #4a9e4f 100%)',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '50px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 6px 20px rgba(44, 95, 45, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(44, 95, 45, 0.4)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(44, 95, 45, 0.3)';
            }}>
              🥾 Plan Your Hike
            </button>
            
            <button style={{
              background: 'linear-gradient(135deg, #ff8c00 0%, #ff4500 100%)',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '50px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 6px 20px rgba(255, 140, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 140, 0, 0.4)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 140, 0, 0.3)';
            }}>
              📸 Photo Guide
            </button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          fontSize: '60px',
          opacity: '0.1',
          animation: 'float 6s ease-in-out infinite'
        }}>🦅</div>
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          fontSize: '40px',
          opacity: '0.1',
          animation: 'float 4s ease-in-out infinite reverse'
        }}>🌵</div>
      </section>

      {/* Quick Stats */}
      <section style={{
        padding: '60px 0',
        background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1) 0%, rgba(152, 251, 152, 0.1) 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              { icon: '📏', title: '277 Miles Long', desc: 'Stretching across Arizona', color: '#ff8c00' },
              { icon: '⬇️', title: '6,000 Feet Deep', desc: 'Maximum depth', color: '#4a9e4f' },
              { icon: '🎂', title: '6 Million Years', desc: 'Age of formation', color: '#87ceeb' },
              { icon: '👥', title: '6 Million Visitors', desc: 'Annual visitors', color: '#daa520' }
            ].map((stat, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '40px 30px',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                border: `3px solid ${stat.color}20`
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}>
                <div style={{
                  fontSize: '50px',
                  marginBottom: '20px'
                }}>{stat.icon}</div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: stat.color,
                  marginBottom: '10px'
                }}>{stat.title}</h3>
                <p style={{
                  color: '#666',
                  fontSize: '16px',
                  margin: 0
                }}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section style={{
        padding: '80px 0',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#2c5f2d',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              🏞️ About Grand Canyon
            </h2>
            <div style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(135deg, #ff8c00 0%, #ff4500 100%)',
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '3px solid #87ceeb30'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#2c5f2d',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                🌊 Formation Story
              </h3>
              <p style={{
                color: '#555',
                lineHeight: '1.8',
                fontSize: '16px',
                marginBottom: '20px'
              }}>
                The Grand Canyon was carved by the Colorado River over the past 6 million years, exposing rock layers that are nearly 2 billion years old. This geological masterpiece reveals Earth&apos;s history like an open book.
              </p>
              <div style={{
                background: 'rgba(135, 206, 235, 0.2)',
                padding: '15px',
                borderRadius: '10px',
                borderLeft: '4px solid #87ceeb'
              }}>
                <strong style={{ color: '#2c5f2d' }}>💡 Did you know?</strong> The canyon exposes some of the oldest rocks on Earth!
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #fff8f0 0%, #ffe6d9 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '3px solid #ff8c0030'
            }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#2c5f2d',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                🦎 Wildlife & Ecosystem
              </h3>
              <p style={{
                color: '#555',
                lineHeight: '1.8',
                fontSize: '16px',
                marginBottom: '20px'
              }}>
                Home to over 1,500 plant species, 400 bird species, and 90 mammal species. From desert bighorn sheep to California condors, the canyon supports diverse ecosystems across different elevations.
              </p>
              <div style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap'
              }}>
                {['🦅', '🐿️', '🦌', '🐍', '🌵', '🌲'].map((emoji, i) => (
                  <span key={i} style={{
                    fontSize: '24px',
                    padding: '8px',
                    background: 'rgba(255, 140, 0, 0.1)',
                    borderRadius: '50%'
                  }}>{emoji}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Hiking Trails */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, rgba(44, 95, 45, 0.05) 0%, rgba(74, 158, 79, 0.05) 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#2c5f2d',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              🥾 Popular Hiking Trails
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Discover the canyon&apos;s beauty through these carefully selected trails for all skill levels
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                name: 'Bright Angel Trail',
                difficulty: 'Moderate to Strenuous',
                distance: '12 miles round trip',
                time: '6-9 hours',
                icon: '⭐',
                color: '#4a9e4f',
                description: 'The most popular trail with rest houses and water stations. Perfect for first-time canyon hikers.',
                highlights: ['Water stations', 'Rest houses', 'Mule trains', 'Stunning views']
              },
              {
                name: 'South Kaibab Trail',
                difficulty: 'Strenuous',
                distance: '14 miles round trip',
                time: '7-10 hours',
                icon: '🏔️',
                color: '#ff8c00',
                description: 'Offers the best panoramic views but no water or shade. Recommended for experienced hikers.',
                highlights: ['Panoramic views', 'Ooh Aah Point', 'Cedar Ridge', 'Skeleton Point']
              },
              {
                name: 'Rim Trail',
                difficulty: 'Easy',
                distance: '13 miles one way',
                time: '1-6 hours',
                icon: '🚶',
                color: '#87ceeb',
                description: 'Mostly flat trail along the South Rim with spectacular viewpoints and shuttle access.',
                highlights: ['Paved sections', 'Shuttle access', 'Multiple viewpoints', 'Wheelchair accessible']
              }
            ].map((trail, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                border: `3px solid ${trail.color}20`
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
              }}>
                <div style={{
                  background: `linear-gradient(135deg, ${trail.color} 0%, ${trail.color}dd 100%)`,
                  padding: '30px',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '15px' }}>{trail.icon}</div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    margin: '0 0 10px 0'
                  }}>{trail.name}</h3>
                  <div style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    {trail.difficulty}
                  </div>
                </div>
                
                <div style={{ padding: '30px' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '15px',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      background: `${trail.color}10`,
                      padding: '15px',
                      borderRadius: '10px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '20px', marginBottom: '5px' }}>📏</div>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: trail.color }}>{trail.distance}</div>
                    </div>
                    <div style={{
                      background: `${trail.color}10`,
                      padding: '15px',
                      borderRadius: '10px',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '20px', marginBottom: '5px' }}>⏱️</div>
                      <div style={{ fontSize: '14px', fontWeight: 'bold', color: trail.color }}>{trail.time}</div>
                    </div>
                  </div>
                  
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    fontSize: '15px'
                  }}>
                    {trail.description}
                  </p>
                  
                  <div>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#2c5f2d',
                      marginBottom: '10px'
                    }}>✨ Highlights:</h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {trail.highlights.map((highlight, i) => (
                        <span key={i} style={{
                          background: `${trail.color}15`,
                          color: trail.color,
                          padding: '6px 12px',
                          borderRadius: '15px',
                          fontSize: '13px',
                          fontWeight: '500'
                        }}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Times to Visit */}
      <section style={{
        padding: '80px 0',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#2c5f2d',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              🗓️ Best Times to Visit
            </h2>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {[
              {
                season: 'Spring',
                months: 'March - May',
                icon: '🌸',
                temp: '60-70°F',
                color: '#98fb98',
                pros: ['Perfect hiking weather', 'Wildflowers blooming', 'Fewer crowds'],
                cons: ['Some trails may have snow']
              },
              {
                season: 'Summer',
                months: 'June - August',
                icon: '☀️',
                temp: '80-90°F',
                color: '#ffd700',
                pros: ['All trails open', 'Long daylight hours', 'North Rim accessible'],
                cons: ['Very hot', 'Crowded', 'Higher prices']
              },
              {
                season: 'Fall',
                months: 'September - November',
                icon: '🍂',
                temp: '60-75°F',
                color: '#ff8c00',
                pros: ['Ideal temperatures', 'Beautiful colors', 'Clear skies'],
                cons: ['Popular season', 'Book early']
              },
              {
                season: 'Winter',
                months: 'December - February',
                icon: '❄️',
                temp: '30-50°F',
                color: '#87ceeb',
                pros: ['Fewer crowds', 'Snow-capped views', 'Lower prices'],
                cons: ['Cold weather', 'North Rim closed', 'Icy trails']
              }
            ].map((season, index) => (
              <div key={index} style={{
                background: `linear-gradient(135deg, ${season.color}20 0%, ${season.color}10 100%)`,
                padding: '30px',
                borderRadius: '20px',
                border: `3px solid ${season.color}40`,
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = `0 15px 30px ${season.color}30`;
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  textAlign: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{ fontSize: '50px', marginBottom: '10px' }}>{season.icon}</div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#2c5f2d',
                    marginBottom: '5px'
                  }}>{season.season}</h3>
                  <p style={{
                    color: '#666',
                    fontSize: '16px',
                    margin: '0 0 10px 0'
                  }}>{season.months}</p>
                  <div style={{
                    background: season.color,
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    🌡️ {season.temp}
                  </div>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#2c5f2d',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    ✅ Pros:
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {season.pros.map((pro, i) => (
                      <li key={i} style={{
                        color: '#555',
                        fontSize: '14px',
                        marginBottom: '5px',
                        paddingLeft: '20px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: season.color
                        }}>•</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#2c5f2d',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    ⚠️ Cons:
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {season.cons.map((con, i) => (
                      <li key={i} style={{
                        color: '#555',
                        fontSize: '14px',
                        marginBottom: '5px',
                        paddingLeft: '20px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#ff6b6b'
                        }}>•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Tips */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.05) 0%, rgba(255, 69, 0, 0.05) 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#2c5f2d',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              💡 Essential Tips for Your Visit
            </h2>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                title: 'Safety First',
                icon: '🚨',
                color: '#ff4500',
                tips: [
                  'Bring plenty of water (1 gallon per person per day)',
                  'Wear proper hiking boots with good grip',
                  'Start early to avoid afternoon heat',
                  'Tell someone your hiking plans',
                  'Carry a first aid kit and emergency whistle'
                ]
              },
              {
                title: 'What to Pack',
                icon: '🎒',
                color: '#4a9e4f',
                tips: [
                  'Sun protection: hat, sunglasses, sunscreen',
                  'Layered clothing for temperature changes',
                  'High-energy snacks and electrolytes',
                  'Headlamp or flashlight with extra batteries',
                  'Camera with extra memory cards'
                ]
              },
              {
                title: 'Photography Tips',
                icon: '📸',
                color: '#87ceeb',
                tips: [
                  'Golden hour: 1 hour after sunrise/before sunset',
                  'Use polarizing filter to reduce haze',
                  'Include foreground elements for depth',
                  'Try different viewpoints along the rim',
                  'Capture the changing light throughout the day'
                ]
              },
              {
                title: 'Planning Your Visit',
                icon: '📋',
                color: '#daa520',
                tips: [
                  'Book accommodations well in advance',
                  'Check weather conditions before hiking',
                  'Download offline maps to your phone',
                  'Consider shuttle services to avoid parking',
                  'Allow extra time for unexpected delays'
                ]
              }
            ].map((section, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                border: `3px solid ${section.color}20`,
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '25px'
                }}>
                  <div style={{
                    fontSize: '40px',
                    background: `${section.color}15`,
                    padding: '15px',
                    borderRadius: '50%'
                  }}>
                    {section.icon}
                  </div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: section.color,
                    margin: 0
                  }}>
                    {section.title}
                  </h3>
                </div>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {section.tips.map((tip, i) => (
                    <li key={i} style={{
                      color: '#555',
                      fontSize: '15px',
                      lineHeight: '1.6',
                      marginBottom: '12px',
                      paddingLeft: '25px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '8px',
                        width: '8px',
                        height: '8px',
                        background: section.color,
                        borderRadius: '50%'
                      }}></span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            fontSize: '60px',
            marginBottom: '30px'
          }}>🏔️</div>
          
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#87ceeb'
          }}>
            Ready for Your Grand Canyon Adventure?
          </h2>
          
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            marginBottom: '40px',
            color: '#b0e0e6'
          }}>
            Start planning your unforgettable journey to one of the world&apos;s most spectacular natural wonders. 
            Every step reveals new breathtaking views and memories that will last a lifetime.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <button style={{
              background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
              color: '#1a3f1b',
              border: 'none',
              padding: '18px 35px',
              borderRadius: '50px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(135, 206, 235, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(135, 206, 235, 0.4)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(135, 206, 235, 0.3)';
            }}>
              🎒 Shop Hiking Gear
            </button>
            
            <button style={{
              background: 'transparent',
              color: '#87ceeb',
              border: '3px solid #87ceeb',
              padding: '15px 32px',
              borderRadius: '50px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = '#87ceeb';
              e.currentTarget.style.color = '#1a3f1b';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#87ceeb';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              🗺️ View More Parks
            </button>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @media (max-width: 768px) {
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 2rem !important; }
          .hero-buttons { flex-direction: column; align-items: center; }
        }
      `}</style>
    </main>
  );
}