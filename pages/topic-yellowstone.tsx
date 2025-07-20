import { useEffect, useState } from 'react';
export default function YellowstonePost() {
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // chỉ khi đã vào client
  }, []);

  if (!mounted) return null; // hoặc <Skeleton /> nếu muốn đẹp hơn
  return (
    <div style={{
      background: 'linear-gradient(180deg, #f0f8ff 0%, #e6f3ff 100%)',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '70vh',
        background: 'linear-gradient(135deg, rgba(44, 95, 45, 0.9) 0%, rgba(26, 63, 27, 0.9) 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 600\'%3E%3Cdefs%3E%3ClinearGradient id=\'mountain\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' style=\'stop-color:%23228B22\'/%3E%3Cstop offset=\'100%25\' style=\'stop-color:%23006400\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points=\'0,600 200,200 400,300 600,150 800,250 1000,180 1200,220 1200,600\' fill=\'url(%23mountain)\'/%3E%3Cpolygon points=\'100,600 300,250 500,350 700,200 900,300 1100,230 1200,600\' fill=\'%23228B22\' opacity=\'0.8\'/%3E%3C/svg%3E")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '800px',
          padding: '0 2rem',
          zIndex: 2
        }}>
          <div style={{
            fontSize: '72px',
            marginBottom: '20px',
            animation: 'float 3s ease-in-out infinite'
          }}>
            🌋
          </div>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            margin: '0 0 20px 0',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Yellowstone National Park
          </h1>
          <p style={{
            fontSize: '1.4rem',
            margin: '0 0 30px 0',
            color: '#e0f6ff',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            lineHeight: '1.6'
          }}>
            America&apos;s First National Park - A Wonderland of Geothermal Features, Wildlife & Adventure
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              background: 'rgba(135, 206, 235, 0.2)',
              padding: '10px 20px',
              borderRadius: '25px',
              border: '2px solid #87ceeb',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              📅 Established: 1872
            </div>
            <div style={{
              background: 'rgba(135, 206, 235, 0.2)',
              padding: '10px 20px',
              borderRadius: '25px',
              border: '2px solid #87ceeb',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              📏 Size: 2.2 Million Acres
            </div>
            <div style={{
              background: 'rgba(135, 206, 235, 0.2)',
              padding: '10px 20px',
              borderRadius: '25px',
              border: '2px solid #87ceeb',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              🏔️ Elevation: 8,000+ ft
            </div>
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          overflow: 'hidden'
        }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                opacity: 0.3,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {['🌲', '🦌', '🐻', '🌿', '⭐', '🏔️'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      </section>

      {/* Park Overview */}
      <section style={{
        padding: '80px 0',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          padding: '0 2rem',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#2c5f2d',
            margin: '0 0 20px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}>
            🏞️ Discover Yellowstone&apos;s Wonders
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#4a6741',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Yellowstone National Park spans across Wyoming, Montana, and Idaho, offering visitors an unparalleled 
            wilderness experience. From explosive geysers to pristine alpine lakes, from massive wildlife herds 
            to dramatic canyons, Yellowstone is nature&apos;s ultimate playground for outdoor enthusiasts.
          </p>
        </div>

        {/* Key Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          padding: '0 2rem',
          marginBottom: '60px'
        }}>
          {[
            { icon: '🌋', title: 'Geothermal Features', value: '10,000+', desc: 'Hot springs, geysers & fumaroles' },
            { icon: '🐻', title: 'Wildlife Species', value: '285+', desc: 'Including bears, wolves & bison' },
            { icon: '🥾', title: 'Hiking Trails', value: '1,000+', desc: 'Miles of maintained trails' },
            { icon: '🏔️', title: 'Annual Visitors', value: '4M+', desc: 'Adventure seekers yearly' }
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1) 0%, rgba(152, 251, 152, 0.1) 100%)',
                padding: '40px 30px',
                borderRadius: '20px',
                textAlign: 'center',
                border: '2px solid rgba(135, 206, 235, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(135, 206, 235, 0.3)';
                e.currentTarget.style.borderColor = '#87ceeb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(135, 206, 235, 0.3)';
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>{stat.icon}</div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#2c5f2d',
                margin: '0 0 10px 0'
              }}>
                {stat.value}
              </h3>
              <h4 style={{
                fontSize: '1.1rem',
                color: '#4a6741',
                margin: '0 0 10px 0',
                fontWeight: '600'
              }}>
                {stat.title}
              </h4>
              <p style={{
                fontSize: '0.95rem',
                color: '#6b7c63',
                margin: 0,
                lineHeight: '1.4'
              }}>
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Attractions */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(44, 95, 45, 0.05) 0%, rgba(26, 63, 27, 0.05) 100%)',
        padding: '80px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#2c5f2d',
            textAlign: 'center',
            margin: '0 0 60px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}>
            ⭐ Must-See Attractions
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                icon: '💨',
                title: 'Old Faithful Geyser',
                description: 'The world\'s most famous geyser erupts approximately every 90 minutes, shooting water up to 180 feet high. A must-see spectacle that has been delighting visitors since 1870.',
                tips: 'Best viewing from the boardwalk. Check eruption predictions at the visitor center.',
                difficulty: 'Easy'
              },
              {
                icon: '🌈',
                title: 'Grand Prismatic Spring',
                description: 'America\'s largest hot spring creates a rainbow of colors from thermophilic bacteria. The vivid blues, greens, yellows, and oranges create an otherworldly landscape.',
                tips: 'Visit in late morning for best lighting. Overlook trail offers aerial views.',
                difficulty: 'Easy to Moderate'
              },
              {
                icon: '🏔️',
                title: 'Grand Canyon of Yellowstone',
                description: 'A dramatic 20-mile canyon with the spectacular Lower Falls plunging 308 feet. The canyon walls display stunning yellow and red rock formations.',
                tips: 'Artist Point offers the classic view. Uncle Tom\'s Trail gets you closer to the falls.',
                difficulty: 'Easy to Strenuous'
              },
              {
                icon: '🌊',
                title: 'Yellowstone Lake',
                description: 'The largest high-elevation lake in North America, sitting at 7,732 feet. Crystal clear waters surrounded by mountains offer excellent fishing and boating.',
                tips: 'Best fishing in early morning. Boat rentals available at Bridge Bay Marina.',
                difficulty: 'Easy'
              },
              {
                icon: '🦌',
                title: 'Lamar Valley',
                description: 'Known as "America\'s Serengeti," this valley offers the best wildlife viewing in the park. Home to bison herds, wolves, elk, and bears.',
                tips: 'Early morning and evening are prime viewing times. Bring binoculars.',
                difficulty: 'Easy'
              },
              {
                icon: '🏔️',
                title: 'Mammoth Hot Springs',
                description: 'Terraced limestone formations created by hot spring deposits over thousands of years. The constantly changing terraces create a unique geological wonder.',
                tips: 'Upper and Lower Terraces offer different perspectives. Some terraces may be dry.',
                difficulty: 'Easy to Moderate'
              }
            ].map((attraction, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fdff 100%)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(44, 95, 45, 0.1)',
                  border: '1px solid rgba(135, 206, 235, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(44, 95, 45, 0.15)';
                  e.currentTarget.style.borderColor = '#87ceeb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(44, 95, 45, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(135, 206, 235, 0.2)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontSize: '40px',
                    background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {attraction.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: 'bold',
                      color: '#2c5f2d',
                      margin: '0 0 5px 0'
                    }}>
                      {attraction.title}
                    </h3>
                    <div style={{
                      display: 'inline-block',
                      background: attraction.difficulty === 'Easy' ? '#98fb98' : 
                                attraction.difficulty === 'Easy to Moderate' ? '#87ceeb' : '#ffa07a',
                      color: '#2c5f2d',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {attraction.difficulty}
                    </div>
                  </div>
                </div>
                <p style={{
                  fontSize: '1rem',
                  color: '#4a6741',
                  lineHeight: '1.6',
                  margin: '0 0 15px 0'
                }}>
                  {attraction.description}
                </p>
                <div style={{
                  background: 'rgba(135, 206, 235, 0.1)',
                  padding: '15px',
                  borderRadius: '10px',
                  borderLeft: '4px solid #87ceeb'
                }}>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#2c5f2d',
                    margin: 0,
                    fontWeight: '500'
                  }}>
                    💡 Pro Tip: {attraction.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, rgba(152, 251, 152, 0.1) 0%, rgba(135, 206, 235, 0.1) 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#2c5f2d',
            textAlign: 'center',
            margin: '0 0 60px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}>
            🦌 Wildlife Encounters
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '50px'
          }}>
            {[
              {
                emoji: '🐻',
                name: 'Grizzly & Black Bears',
                population: '150+ Grizzlies, 500+ Black Bears',
                bestSpots: 'Hayden Valley, Lamar Valley',
                season: 'Spring to Fall',
                safety: 'Carry bear spray, make noise on trails'
              },
              {
                emoji: '🐺',
                name: 'Gray Wolves',
                population: '95+ individuals in 8-10 packs',
                bestSpots: 'Lamar Valley, Hayden Valley',
                season: 'Year-round (winter best)',
                safety: 'Observe from 100+ yards distance'
              },
              {
                emoji: '🦌',
                name: 'American Bison',
                population: '4,000-5,000 individuals',
                bestSpots: 'Lamar Valley, Hayden Valley',
                season: 'Year-round',
                safety: 'Stay 25+ yards away, very dangerous'
              },
              {
                emoji: '🦌',
                name: 'Rocky Mountain Elk',
                population: '10,000-20,000 individuals',
                bestSpots: 'Mammoth, Madison Valley',
                season: 'Fall rutting season spectacular',
                safety: 'Bulls aggressive during rut (Sept-Oct)'
              },
              {
                emoji: '🐑',
                name: 'Bighorn Sheep',
                population: '300+ individuals',
                bestSpots: 'Mount Washburn, Gardner Canyon',
                season: 'Summer in high country',
                safety: 'Usually docile but don\'t approach'
              },
              {
                emoji: '🦅',
                name: 'Bald Eagles',
                population: '20+ breeding pairs',
                bestSpots: 'Yellowstone Lake, rivers',
                season: 'Year-round, active in summer',
                safety: 'Protected species, observe only'
              }
            ].map((animal, index) => (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  borderRadius: '15px',
                  padding: '25px',
                  boxShadow: '0 8px 25px rgba(44, 95, 45, 0.1)',
                  border: '1px solid rgba(135, 206, 235, 0.2)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(44, 95, 45, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(44, 95, 45, 0.1)';
                }}
              >
                <div style={{
                  textAlign: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '10px' }}>{animal.emoji}</div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    color: '#2c5f2d',
                    margin: 0
                  }}>
                    {animal.name}
                  </h3>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#4a6741', lineHeight: '1.6' }}>
                  <p style={{ margin: '8px 0' }}>
                    <strong>Population:</strong> {animal.population}
                  </p>
                  <p style={{ margin: '8px 0' }}>
                    <strong>📍 Best Spots:</strong> {animal.bestSpots}
                  </p>
                  <p style={{ margin: '8px 0' }}>
                    <strong>📅 Season:</strong> {animal.season}
                  </p>
                  <div style={{
                    background: 'rgba(255, 160, 122, 0.2)',
                    padding: '10px',
                    borderRadius: '8px',
                    marginTop: '12px',
                    borderLeft: '3px solid #ffa07a'
                  }}>
                    <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: '500' }}>
                      ⚠️ Safety: {animal.safety}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Wildlife Viewing Tips */}
          <div style={{
            background: 'linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%)',
            borderRadius: '20px',
            padding: '40px',
            color: '#e0f6ff',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              margin: '0 0 25px 0',
              color: '#87ceeb'
            }}>
              🔍 Wildlife Viewing Pro Tips
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '25px',
              textAlign: 'left'
            }}>
              {[
                '🌅 Early morning (6-9 AM) and evening (6-8 PM) are prime viewing times',
                '🔭 Bring binoculars or spotting scope for distant observations',
                '🚗 Wildlife jams indicate animal sightings - be patient and courteous',
                '📱 Download wildlife tracking apps for real-time sighting reports',
                '🎒 Pack layers - weather changes quickly at high elevation',
                '📷 Use telephoto lenses - never approach animals for photos'
              ].map((tip, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '1rem',
                  lineHeight: '1.5'
                }}>
                  {tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section style={{
        padding: '80px 0',
        background: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#2c5f2d',
            textAlign: 'center',
            margin: '0 0 60px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}>
            🗺️ Plan Your Adventure
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
          }}>
            {/* Best Times to Visit */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.1) 0%, rgba(152, 251, 152, 0.1) 100%)',
              borderRadius: '20px',
              padding: '30px',
              border: '2px solid rgba(135, 206, 235, 0.3)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#2c5f2d',
                margin: '0 0 20px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                📅 Best Times to Visit
              </h3>
              <div style={{ fontSize: '1rem', color: '#4a6741', lineHeight: '1.6' }}>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#2c5f2d' }}>🌸 Spring (April-May):</strong>
                  <br />Wildlife active, fewer crowds, some roads closed
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#2c5f2d' }}>☀️ Summer (June-August):</strong>
                  <br />All roads open, peak season, warm weather, crowded
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#2c5f2d' }}>🍂 Fall (September-October):</strong>
                  <br />Elk rutting season, beautiful colors, cooler weather
                </div>
                <div>
                  <strong style={{ color: '#2c5f2d' }}>❄️ Winter (November-March):</strong>
                  <br />Snow activities, limited access, unique wildlife viewing
                </div>
              </div>
            </div>

            {/* Essential Gear */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(152, 251, 152, 0.1) 0%, rgba(135, 206, 235, 0.1) 100%)',
              borderRadius: '20px',
              padding: '30px',
              border: '2px solid rgba(152, 251, 152, 0.3)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#2c5f2d',
                margin: '0 0 20px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                🎒 Essential Gear
              </h3>
              <div style={{ fontSize: '1rem', color: '#4a6741', lineHeight: '1.8' }}>
                {[
                  '🐻 Bear spray (required for backcountry)',
                  '🥾 Sturdy hiking boots with ankle support',
                  '🧥 Layered clothing for changing weather',
                  '🔦 Headlamp with extra batteries',
                  '💧 Water bottles and purification tablets',
                  '🗺️ Detailed trail maps and compass/GPS',
                  '🩹 First aid kit with emergency supplies',
                  '🔭 Binoculars for wildlife viewing',
                  '📱 Emergency communication device',
                  '🍫 High-energy snacks and meals'
                ].map((item, index) => (
                  <div key={index} style={{ marginBottom: '8px' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Accommodation Options */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 160, 122, 0.1) 0%, rgba(135, 206, 235, 0.1) 100%)',
              borderRadius: '20px',
              padding: '30px',
              border: '2px solid rgba(255, 160, 122, 0.3)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#2c5f2d',
                margin: '0 0 20px 0',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                🏨 Where to Stay
              </h3>
              <div style={{ fontSize: '1rem', color: '#4a6741', lineHeight: '1.6' }}>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#2c5f2d' }}>🏨 Park Lodges:</strong>
                  <br />Old Faithful Inn, Lake Yellowstone Hotel, Mammoth Hot Springs Hotel
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#2c5f2d' }}>⛺ Campgrounds:</strong>
                  <br />12 campgrounds, reservations required for most
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#2c5f2d' }}>🏕️ Backcountry:</strong>
                  <br />300+ sites, permits required, wilderness experience
                </div>
                <div>
                  <strong style={{ color: '#2c5f2d' }}>🏘️ Gateway Towns:</strong>
                  <br />West Yellowstone, Gardiner, Cody, Jackson
                </div>
              </div>
            </div>

            {/* Safety & Regulations */}
            
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%)',
        padding: '80px 0',
        color: '#e0f6ff',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            fontSize: '64px',
            marginBottom: '20px'
          }}>
            🏔️
          </div>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            margin: '0 0 20px 0',
            color: '#87ceeb'
          }}>
            Ready for Your Yellowstone Adventure?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            margin: '0 0 40px 0',
            lineHeight: '1.6',
            color: '#b0e0e6'
          }}>
            Gear up with TrailGear Pro&apos;s premium hiking equipment and make your Yellowstone experience unforgettable. 
            From bear spray to hiking boots, we have everything you need for a safe and amazing adventure.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <button style={{
              background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '25px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: '#1a3f1b',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(135, 206, 235, 0.4)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              🎒 Shop Hiking Gear
            </button>
            <button style={{
              background: 'transparent',
              border: '2px solid #87ceeb',
              padding: '15px 30px',
              borderRadius: '25px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: '#87ceeb',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = '#87ceeb';
              e.currentTarget.style.color = '#1a3f1b';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#87ceeb';
            }}>
              🗺️ View Trail Guides
            </button>
          </div>
          
          
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @media (max-width: 768px) {
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 2rem !important; }
          .hero-stats { flex-direction: column !important; }
          .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}