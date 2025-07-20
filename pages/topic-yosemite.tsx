export default function YosemiteMain() {
  return (
    <main style={{ 
      minHeight: '80vh',
      background: 'linear-gradient(180deg, #f0f8ff 0%, #e6f3ff 100%)'
    }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '70vh',
        background: 'linear-gradient(rgba(44, 95, 45, 0.4), rgba(26, 63, 27, 0.6)), url("https://www.yosemite.com/wp-content/uploads/2023/04/Tunnel-View-Yosemite.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          padding: '2rem',
          animation: 'fadeInUp 1s ease-out'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            letterSpacing: '-1px'
          }}>
            🏔️ Discover the Majesty of Yosemite National Park
          </h1>
          <p style={{
            fontSize: '1.4rem',
            marginBottom: '2rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            lineHeight: '1.6'
          }}>
            Experience towering granite cliffs, cascading waterfalls, and ancient giant sequoias in California&apos;s crown jewel of wilderness
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section style={{
        background: 'rgba(44, 95, 45, 0.05)',
        padding: '20px 0',
        borderBottom: '1px solid rgba(74, 158, 79, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          {[
            { text: 'Attractions', icon: '🏔️', href: '#attractions' },
            { text: 'Hiking Trails', icon: '🥾', href: '#trails' },
            { text: 'Waterfalls', icon: '💧', href: '#waterfalls' },
            { text: 'Viewpoints', icon: '📸', href: '#viewpoints' },
            { text: 'Seasonal Guide', icon: '📅', href: '#seasonal' },
            { text: 'Pro Tips', icon: '💡', href: '#tips' }
          ].map((item, index) => (
            <a key={index} href={item.href} style={{
              color: '#2c5f2d',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              padding: '10px 20px',
              borderRadius: '20px',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(44, 95, 45, 0.2)'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2c5f2d';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#2c5f2d';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              {item.icon} {item.text}
            </a>
          ))}
        </div>
      </section>

      {/* Main Content Container */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>

        {/* Iconic Attractions */}
        <section id="attractions" style={{ marginBottom: '6rem' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#2c5f2d',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              🏔️ Iconic Attractions
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a9e4f',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Discover the legendary landmarks that make Yosemite one of America&apos;s most treasured national parks
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              {
                icon: '🗿',
                title: 'Half Dome',
                description: 'The iconic granite dome rising 4,737 feet above sea level. A challenging 14-16 mile round-trip hike with cables for the final ascent.',
                highlight: 'Permits Required',
                difficulty: 'Extreme',
                image: 'https://californiathroughmylens.com/wp-content/uploads/2016/06/half-dome-views-3-640x427.jpg'
              },
              {
                icon: '🧗',
                title: 'El Capitan',
                description: 'The world\'s largest granite monolith, standing 3,000 feet tall. A mecca for rock climbers and a stunning sight for all visitors.',
                highlight: 'Rock Climbing Paradise',
                difficulty: 'View Only',
                image: 'https://www.nps.gov/yose/planyourvisit/images/elcap-frommdw.jpg'
              },
              {
                icon: '💧',
                title: 'Yosemite Falls',
                description: 'North America\'s tallest waterfall at 2,425 feet. Best viewed in spring and early summer when snowmelt creates maximum flow.',
                highlight: 'Seasonal Spectacle',
                difficulty: 'Moderate',
                image: 'https://www.visittenaya.com/dbcwp/wp-content/uploads/2022/11/visittenaya-copy-exploreyosemite-yosemite-falls-trail.jpg'
              },
              {
                icon: '📸',
                title: 'Tunnel View',
                description: 'The most photographed viewpoint in Yosemite, offering the classic postcard view of El Capitan, Half Dome, and Bridalveil Fall.',
                highlight: 'Perfect Photo Spot',
                difficulty: 'Easy',
                image: 'https://www.extranomical.com/wp-content/uploads/2023/03/fsiuo3drkcfjcrfzwnc2.png'
              }
            ].map((attraction, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(44, 95, 45, 0.1)',
                border: '1px solid rgba(74, 158, 79, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
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
                  textAlign: 'center'
                }}>
                  {attraction.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#2c5f2d',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {attraction.title}
                </h3>
                <p style={{
                  color: '#4a9e4f',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  {attraction.description}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                    color: '#1a3f1b',
                    padding: '5px 15px',
                    borderRadius: '15px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    {attraction.highlight}
                  </span>
                  <span style={{
                    color: '#2c5f2d',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>
                    {attraction.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Epic Hiking Trails */}
        <section id="trails" style={{ marginBottom: '6rem' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#2c5f2d',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              🥾 Epic Hiking Trails
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a9e4f',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              From leisurely valley walks to challenging summit climbs, discover trails for every adventure level
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                name: 'Mist Trail to Vernal Falls',
                distance: '5.5 miles',
                difficulty: 'Moderate',
                time: '4-6 hours',
                elevation: '1,000 ft',
                highlights: ['Stunning waterfall views', 'Granite steps', 'Refreshing mist'],
                description: 'Follow the granite steps alongside the Merced River to one of Yosemite\'s most beautiful waterfalls.',
                difficultyColor: '#f39c12'
              },
              {
                name: 'Half Dome via John Muir Trail',
                distance: '16 miles',
                difficulty: 'Extreme',
                time: '12-14 hours',
                elevation: '4,800 ft',
                highlights: ['Cables section', 'Panoramic views', 'Permits required'],
                description: 'The ultimate Yosemite challenge. Conquer the iconic dome with cables assistance for the final push.',
                difficultyColor: '#e74c3c'
              },
              {
                name: 'Lower Yosemite Falls',
                distance: '1.2 miles',
                difficulty: 'Easy',
                time: '1-2 hours',
                elevation: '50 ft',
                highlights: ['Family-friendly', 'Paved path', 'Waterfall views'],
                description: 'Perfect for families and beginners. Easy access to the base of North America\'s tallest waterfall.',
                difficultyColor: '#27ae60'
              },
              {
                name: 'Upper Yosemite Falls',
                distance: '7.6 miles',
                difficulty: 'Hard',
                time: '6-8 hours',
                elevation: '2,700 ft',
                highlights: ['Top of the falls', 'Valley views', 'Challenging climb'],
                description: 'Steep switchbacks lead to the top of Yosemite Falls with incredible valley views.',
                difficultyColor: '#e67e22'
              }
            ].map((trail, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(44, 95, 45, 0.1)',
                border: '1px solid rgba(74, 158, 79, 0.2)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(44, 95, 45, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(44, 95, 45, 0.1)';
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    color: '#2c5f2d',
                    flex: 1
                  }}>
                    {trail.name}
                  </h3>
                  <span style={{
                    background: trail.difficultyColor,
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {trail.difficulty}
                  </span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>📏</span>
                    <span style={{ color: '#4a9e4f', fontSize: '0.9rem' }}>
                      <strong>{trail.distance}</strong> round-trip
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>⏱️</span>
                    <span style={{ color: '#4a9e4f', fontSize: '0.9rem' }}>
                      <strong>{trail.time}</strong>
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>📈</span>
                    <span style={{ color: '#4a9e4f', fontSize: '0.9rem' }}>
                      <strong>{trail.elevation}</strong> gain
                    </span>
                  </div>
                </div>

                <p style={{
                  color: '#4a9e4f',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {trail.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {trail.highlights.map((highlight, hIndex) => (
                    <span key={hIndex} style={{
                      background: 'rgba(135, 206, 235, 0.2)',
                      color: '#2c5f2d',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spectacular Waterfalls */}
        <section id="waterfalls" style={{ marginBottom: '6rem' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#2c5f2d',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              💧 Spectacular Waterfalls
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a9e4f',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Witness nature&apos;s raw power as snowmelt creates thundering cascades throughout the valley
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1) 0%, rgba(152, 251, 152, 0.1) 100%)',
            borderRadius: '20px',
            padding: '2rem',
            marginBottom: '3rem',
            border: '1px solid rgba(135, 206, 235, 0.3)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '2rem' }}>🌊</span>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#2c5f2d',
                margin: 0
              }}>
                Best Waterfall Viewing Seasons
              </h3>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { season: 'Spring', months: 'Apr-Jun', flow: 'Peak Flow', icon: '🌸' },
                { season: 'Summer', months: 'Jul-Aug', flow: 'Moderate', icon: '☀️' },
                { season: 'Fall', months: 'Sep-Nov', flow: 'Low Flow', icon: '🍂' },
                { season: 'Winter', months: 'Dec-Mar', flow: 'Frozen/Minimal', icon: '❄️' }
              ].map((season, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  padding: '1.5rem',
                  background: 'white',
                  borderRadius: '15px',
                  boxShadow: '0 5px 15px rgba(44, 95, 45, 0.1)'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                    {season.icon}
                  </div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#2c5f2d',
                    marginBottom: '0.5rem'
                  }}>
                    {season.season}
                  </h4>
                  <p style={{
                    color: '#4a9e4f',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem'
                  }}>
                    {season.months}
                  </p>
                  <span style={{
                    background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                    color: '#1a3f1b',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {season.flow}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                name: 'Yosemite Falls',
                height: '2,425 feet',
                type: 'Tiered',
                bestTime: 'April-June',
                description: 'The tallest waterfall in North America, consisting of Upper Falls (1,430 ft), Middle Cascades (675 ft), and Lower Falls (320 ft).',
                viewpoints: ['Yosemite Valley Floor', 'Glacier Point', 'Tunnel View'],
                icon: '🏔️'
              },
              {
                name: 'Bridalveil Fall',
                height: '620 feet',
                type: 'Free-falling',
                bestTime: 'Year-round',
                description: 'One of the most prominent waterfalls in Yosemite Valley, known for its ethereal mist that dances in the wind.',
                viewpoints: ['Tunnel View', 'Bridalveil Fall Trail', 'Valley Floor'],
                icon: '👰'
              },
              {
                name: 'Vernal Fall',
                height: '317 feet',
                type: 'Block',
                bestTime: 'May-July',
                description: 'Accessible via the famous Mist Trail, this waterfall creates a refreshing spray that soaks hikers.',
                viewpoints: ['Mist Trail', 'John Muir Trail', 'Happy Isles'],
                icon: '🌿'
              },
              {
                name: 'Nevada Fall',
                height: '594 feet',
                type: 'Free-falling',
                bestTime: 'May-July',
                description: 'A powerful waterfall that can be reached by extending the Mist Trail hike for spectacular views.',
                viewpoints: ['Mist Trail', 'John Muir Trail', 'Panorama Trail'],
                icon: '⚡'
              }
            ].map((waterfall, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(44, 95, 45, 0.1)',
                border: '1px solid rgba(74, 158, 79, 0.2)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(44, 95, 45, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(44, 95, 45, 0.1)';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '1rem'
                }}>
                  <span style={{ fontSize: '2.5rem' }}>{waterfall.icon}</span>
                  <div>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: 'bold',
                      color: '#2c5f2d',
                      marginBottom: '0.5rem'
                    }}>
                      {waterfall.name}
                    </h3>
                    <div style={{
                      display: 'flex',
                      gap: '15px',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{
                        background: 'rgba(135, 206, 235, 0.2)',
                        color: '#2c5f2d',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        {waterfall.height}
                      </span>
                      <span style={{
                        background: 'rgba(152, 251, 152, 0.2)',
                        color: '#2c5f2d',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        {waterfall.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p style={{
                  color: '#4a9e4f',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {waterfall.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '1rem'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>🕒</span>
                  <span style={{ color: '#2c5f2d', fontWeight: 'bold' }}>
                    Best Time: {waterfall.bestTime}
                  </span>
                </div>

                <div>
                  <span style={{
                    color: '#2c5f2d',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem',
                    display: 'block'
                  }}>
                    📍 Best Viewpoints:
                  </span>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px'
                  }}>
                    {waterfall.viewpoints.map((viewpoint, vIndex) => (
                      <span key={vIndex} style={{
                        background: 'rgba(135, 206, 235, 0.15)',
                        color: '#2c5f2d',
                        padding: '3px 8px',
                        borderRadius: '12px',
                        fontSize: '0.8rem'
                      }}>
                        {viewpoint}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Epic Viewpoints */}
        <section id="viewpoints" style={{ marginBottom: '6rem' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#2c5f2d',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              📸 Epic Viewpoints
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a9e4f',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Capture Instagram-worthy shots at these breathtaking vantage points throughout the park
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                name: 'Tunnel View',
                access: 'Roadside',
                subjects: ['El Capitan', 'Half Dome', 'Bridalveil Fall'],
                bestTime: 'Sunset',
                description: 'The most iconic Yosemite photograph. Perfect for capturing the classic valley view.',
                tips: 'Arrive early for parking, especially during sunset',
                icon: '🌅'
              },
              {
                name: 'Glacier Point',
                access: 'Drive + Short Walk',
                subjects: ['Half Dome', 'Valley Floor', 'High Sierra'],
                bestTime: 'Golden Hour',
                description: 'Panoramic views 3,200 feet above the valley floor with unobstructed Half Dome views.',
                tips: 'Closed in winter, arrive before crowds',
                icon: '🏔️'
              },
              {
                name: 'Taft Point',
                access: '1.1 mile hike',
                subjects: ['El Capitan', 'Yosemite Valley', 'Dramatic Cliffs'],
                bestTime: 'Morning',
                description: 'Dramatic overhanging rocks with no railings for adventurous photographers.',
                tips: 'Use caution near cliff edges, great for sunrise',
                icon: '🌄'
              }
            ].map((viewpoint, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(44, 95, 45, 0.1)',
                border: '1px solid rgba(74, 158, 79, 0.2)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(44, 95, 45, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(44, 95, 45, 0.1)';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '1rem'
                }}>
                  <span style={{ fontSize: '2.5rem' }}>{viewpoint.icon}</span>
                  <div>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: 'bold',
                      color: '#2c5f2d',
                      marginBottom: '0.5rem'
                    }}>
                      {viewpoint.name}
                    </h3>
                    <div style={{
                      display: 'flex',
                      gap: '10px',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{
                        background: 'rgba(135, 206, 235, 0.2)',
                        color: '#2c5f2d',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        {viewpoint.access}
                      </span>
                      <span style={{
                        background: 'rgba(152, 251, 152, 0.2)',
                        color: '#2c5f2d',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        {viewpoint.bestTime}
                      </span>
                    </div>
                  </div>
                </div>

                <p style={{
                  color: '#4a9e4f',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {viewpoint.description}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{
                    color: '#2c5f2d',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem',
                    display: 'block'
                  }}>
                    📷 Photography Subjects:
                  </span>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px'
                  }}>
                    {viewpoint.subjects.map((subject, sIndex) => (
                      <span key={sIndex} style={{
                        background: 'rgba(135, 206, 235, 0.15)',
                        color: '#2c5f2d',
                        padding: '3px 8px',
                        borderRadius: '12px',
                        fontSize: '0.8rem'
                      }}>
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  background: 'rgba(255, 193, 7, 0.1)',
                  padding: '10px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 193, 7, 0.3)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '5px'
                  }}>
                    <span style={{ fontSize: '1rem' }}>💡</span>
                    <span style={{
                      color: '#2c5f2d',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}>
                      Pro Tip:
                    </span>
                  </div>
                  <p style={{
                    color: '#4a9e4f',
                    fontSize: '0.9rem',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    {viewpoint.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seasonal Guide */}
        <section id="seasonal" style={{ marginBottom: '6rem' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#2c5f2d',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              📅 Seasonal Guide
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a9e4f',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Plan your visit with our comprehensive guide to Yosemite&apos;s changing seasons
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                season: 'Spring',
                months: 'March - May',
                icon: '🌸',
                highlights: ['Peak waterfall flow', 'Wildflower blooms', 'Mild temperatures'],
                weather: '50-70°F (10-21°C)',
                activities: ['Waterfall viewing', 'Valley hiking', 'Photography'],
                tips: 'Pack layers, waterfalls are at their most spectacular',
                crowdLevel: 'Moderate',
                backgroundColor: 'rgba(255, 192, 203, 0.1)',
                borderColor: 'rgba(255, 192, 203, 0.3)'
              },
              {
                season: 'Summer',
                months: 'June - August',
                icon: '☀️',
                highlights: ['All trails open', 'Longest days', 'Warm weather'],
                weather: '70-85°F (21-29°C)',
                activities: ['Backcountry hiking', 'Rock climbing', 'Camping'],
                tips: 'Make reservations early, arrive early to beat crowds',
                crowdLevel: 'High',
                backgroundColor: 'rgba(255, 255, 0, 0.1)',
                borderColor: 'rgba(255, 255, 0, 0.3)'
              },
              {
                season: 'Fall',
                months: 'September - November',
                icon: '🍂',
                highlights: ['Autumn colors', 'Fewer crowds', 'Clear skies'],
                weather: '45-65°F (7-18°C)',
                activities: ['Scenic drives', 'Photography', 'Hiking'],
                tips: 'Perfect for photography, pack warm layers',
                crowdLevel: 'Low',
                backgroundColor: 'rgba(255, 165, 0, 0.1)',
                borderColor: 'rgba(255, 165, 0, 0.3)'
              },
              {
                season: 'Winter',
                months: 'December - February',
                icon: '❄️',
                highlights: ['Snow-covered peaks', 'Winter activities', 'Serene beauty'],
                weather: '30-50°F (-1-10°C)',
                activities: ['Snowshoeing', 'Cross-country skiing', 'Ice skating'],
                tips: 'Carry chains, some roads close, dress warmly',
                crowdLevel: 'Very Low',
                backgroundColor: 'rgba(173, 216, 230, 0.1)',
                borderColor: 'rgba(173, 216, 230, 0.3)'
              }
            ].map((season, index) => (
              <div key={index} style={{
                background: season.backgroundColor,
                border: `2px solid ${season.borderColor}`,
                borderRadius: '20px',
                padding: '2rem',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(44, 95, 45, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  textAlign: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                    {season.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.6rem',
                    fontWeight: 'bold',
                    color: '#2c5f2d',
                    marginBottom: '0.5rem'
                  }}>
                    {season.season}
                  </h3>
                  <p style={{
                    color: '#4a9e4f',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    {season.months}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <span style={{
                      color: '#2c5f2d',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}>
                      🌡️ Weather:
                    </span>
                    <p style={{
                      color: '#4a9e4f',
                      fontSize: '0.9rem',
                      margin: '0.25rem 0'
                    }}>
                      {season.weather}
                    </p>
                  </div>
                  <div>
                    <span style={{
                      color: '#2c5f2d',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}>
                      👥 Crowds:
                    </span>
                    <p style={{
                      color: '#4a9e4f',
                      fontSize: '0.9rem',
                      margin: '0.25rem 0'
                    }}>
                      {season.crowdLevel}
                    </p>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{
                    color: '#2c5f2d',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem',
                    display: 'block'
                  }}>
                    ✨ Highlights:
                  </span>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px'
                  }}>
                    {season.highlights.map((highlight, hIndex) => (
                      <span key={hIndex} style={{
                        background: 'rgba(44, 95, 45, 0.1)',
                        color: '#2c5f2d',
                        padding: '3px 8px',
                        borderRadius: '12px',
                        fontSize: '0.8rem'
                      }}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{
                    color: '#2c5f2d',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem',
                    display: 'block'
                  }}>
                    🎯 Best Activities:
                  </span>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px'
                  }}>
                    {season.activities.map((activity, aIndex) => (
                      <span key={aIndex} style={{
                        background: 'rgba(135, 206, 235, 0.15)',
                        color: '#2c5f2d',
                        padding: '3px 8px',
                        borderRadius: '12px',
                        fontSize: '0.8rem'
                      }}>
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  background: 'rgba(255, 193, 7, 0.1)',
                  padding: '10px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 193, 7, 0.3)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '5px'
                  }}>
                    <span style={{ fontSize: '1rem' }}>💡</span>
                    <span style={{
                      color: '#2c5f2d',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}>
                      Pro Tip:
                    </span>
                  </div>
                  <p style={{
                    color: '#4a9e4f',
                    fontSize: '0.9rem',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    {season.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pro Tips & Essentials */}
        <section id="tips" style={{ marginBottom: '6rem' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#2c5f2d',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              💡 Pro Tips & Essentials
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a9e4f',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Insider knowledge to help you make the most of your Yosemite adventure
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                category: 'Planning & Reservations',
                icon: '📋',
                tips: [
                  'Book accommodations 12-18 months in advance',
                  'Make camping reservations exactly 5 months ahead',
                  'Half Dome permits required April-October',
                  'Check road conditions before your visit'
                ]
              },
              {
                category: 'Hiking Safety',
                icon: '🥾',
                tips: [
                  'Start early to avoid crowds and heat',
                  'Carry plenty of water (1 liter per 2 hours)',
                  'Inform someone of your hiking plans',
                  'Never hike alone on challenging trails'
                ]
              },
              {
                category: 'Photography',
                icon: '📸',
                tips: [
                  'Golden hour provides the best lighting',
                  'Bring a tripod for waterfall shots',
                  'Respect wildlife and maintain distance',
                  'Check weather for clear mountain views'
                ]
              },
              {
                category: 'Gear Essentials',
                icon: '🎒',
                tips: [
                  'Layer clothing for temperature changes',
                  'Sturdy hiking boots with good traction',
                  'Headlamp for early morning starts',
                  'First aid kit and emergency whistle'
                ]
              }
            ].map((category, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(44, 95, 45, 0.1)',
                border: '1px solid rgba(74, 158, 79, 0.2)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(44, 95, 45, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(44, 95, 45, 0.1)';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{ fontSize: '2.5rem' }}>{category.icon}</span>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    color: '#2c5f2d'
                  }}>
                    {category.category}
                  </h3>
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {category.tips.map((tip, tIndex) => (
                    <li key={tIndex} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      marginBottom: '12px',
                      color: '#4a9e4f',
                      lineHeight: '1.5'
                    }}>
                      <span style={{
                        color: '#87ceeb',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        marginTop: '2px'
                      }}>
                        •
                      </span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section style={{
          background: 'linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%)',
          borderRadius: '30px',
          padding: '4rem 2rem',
          textAlign: 'center',
          color: 'white',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#87ceeb'
          }}>
            🎒 Gear Up for Your Yosemite Adventure
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem auto',
            lineHeight: '1.6',
            color: '#b0e0e6'
          }}>
            Don&apos;t let inadequate gear hold you back from experiencing Yosemite&apos;s wonders. 
            Our premium hiking equipment is tested by professionals in the Sierra Nevada mountains.
          </p>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '15px 30px',
              background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
              border: 'none',
              borderRadius: '25px',
              color: '#1a3f1b',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(135, 206, 235, 0.4)'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(135, 206, 235, 0.6)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(135, 206, 235, 0.4)';
            }}>
              🥾 Shop Hiking Boots
            </button>
            <button style={{
              padding: '15px 30px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid #87ceeb',
              borderRadius: '25px',
              color: '#87ceeb',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = '#87ceeb';
              e.currentTarget.style.color = '#1a3f1b';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#87ceeb';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              🎒 Browse Backpacks
            </button>
            <button style={{
              padding: '15px 30px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid #87ceeb',
              borderRadius: '25px',
              color: '#87ceeb',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = '#87ceeb';
              e.currentTarget.style.color = '#1a3f1b';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#87ceeb';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              ⛺ Camping Gear
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
