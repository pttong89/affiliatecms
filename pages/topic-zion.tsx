import Link from 'next/link';
export default function ZionNationalParkMain() {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #f0f8ff 0%, #e6f3ff 100%)',
      minHeight: '100vh',
      paddingBottom: '60px'
    }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '70vh',
        background: 'linear-gradient(135deg, rgba(44, 95, 45, 0.8) 0%, rgba(26, 63, 27, 0.9) 100%), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80") center/cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '800px',
          padding: '0 2rem',
          animation: 'fadeInUp 1s ease-out'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🏜️ Discover Zion National Park
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            marginBottom: '2rem',
            lineHeight: '1.6',
            textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
            color: '#e0f6ff'
          }}>
            Experience Utah&apos;s crown jewel - where towering red cliffs meet emerald pools, 
            and adventure awaits around every canyon corner. From the legendary Angel&apos;s Landing 
            to the mystical Narrows, prepare for the hiking experience of a lifetime.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            
          </div>
        </div>
        
        {/* Floating Stats */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {[
            { icon: '🏔️', value: '2,000ft', label: 'Canyon Walls' },
            { icon: '🥾', value: '90+ Miles', label: 'Hiking Trails' },
            { icon: '🌡️', value: '70°F', label: 'Perfect Weather' },
            { icon: '⭐', value: '4.8/5', label: 'Visitor Rating' }
          ].map((stat, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              padding: '15px 20px',
              borderRadius: '15px',
              textAlign: 'center',
              border: '1px solid rgba(135, 206, 235, 0.3)',
              minWidth: '120px'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '5px' }}>{stat.icon}</div>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#87ceeb' }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: '#e0f6ff', opacity: 0.9 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Navigation */}
      <section style={{
        background: 'linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%)',
        padding: '30px 0',
        borderBottom: '3px solid #4a9e4f'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          {[
            { icon: '🥾', text: 'Top Trails', href: '#trails' },
            { icon: '📅', text: 'Best Times', href: '#timing' },
            { icon: '📸', text: 'Photo Spots', href: '#photography' },
            { icon: '🏕️', text: 'Where to Stay', href: '#accommodation' },
            { icon: '💡', text: 'Pro Tips', href: '#tips' }
          ].map((item, index) => (
            <a key={index} href={item.href} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#e0f6ff',
              textDecoration: 'none',
              padding: '12px 20px',
              borderRadius: '25px',
              transition: 'all 0.3s ease',
              fontSize: '14px',
              fontWeight: '500'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(135, 206, 235, 0.2)';
              e.currentTarget.style.color = '#87ceeb';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#e0f6ff';
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
        padding: '0 2rem'
      }}>

        {/* Trail Highlights Section */}
        <section id="trails" style={{ padding: '80px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: '#2c5f2d',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              🏔️ Iconic Trails & Adventures
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a9e4f',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              From heart-pounding cliff walks to serene river hikes, Zion offers adventures for every skill level
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
            marginBottom: '50px'
          }}>
            {[
              {
                title: "Angel's Landing",
                difficulty: "Challenging",
                distance: "5.4 miles",
                time: "4-6 hours",
                icon: "⛰️",
                description: "The crown jewel of Zion! This thrilling hike takes you up steep switchbacks and along narrow ridges with chains for support. The panoramic views from the top are absolutely breathtaking.",
                highlights: ["Famous chains section", "360° canyon views", "Scout Lookout rest stop", "Early morning recommended"],
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "The Narrows",
                difficulty: "Moderate",
                distance: "9.4 miles",
                time: "6-8 hours",
                icon: "🌊",
                description: "Hike through the Virgin River in a stunning slot canyon. This unique adventure has you walking in water surrounded by towering 1,000-foot walls.",
                highlights: ["River hiking experience", "Slot canyon beauty", "Cool water relief", "Rental gear available"],
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Canyon Overlook",
                difficulty: "Easy-Moderate",
                distance: "1 mile",
                time: "45-60 min",
                icon: "🌅",
                description: "Perfect for sunset photography! This shorter hike rewards you with spectacular views of Zion Canyon and the surrounding red rock formations.",
                highlights: ["Best sunset views", "Great for photos", "Less crowded", "Family friendly"],
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((trail, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fdff 100%)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(44, 95, 45, 0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(135, 206, 235, 0.2)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(44, 95, 45, 0.2)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(44, 95, 45, 0.1)';
              }}>
                <div style={{
                  height: '200px',
                  background: `linear-gradient(135deg, rgba(44, 95, 45, 0.3) 0%, rgba(26, 63, 27, 0.4) 100%), url("${trail.image}") center/cover`,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    fontSize: '48px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    {trail.icon}
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: trail.difficulty === 'Challenging' ? 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)' : 
                               trail.difficulty === 'Moderate' ? 'linear-gradient(135deg, #ffa726 0%, #ff9800 100%)' :
                               'linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)',
                    color: 'white',
                    padding: '5px 12px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {trail.difficulty}
                  </div>
                </div>
                
                <div style={{ padding: '25px' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#2c5f2d',
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    {trail.title}
                  </h3>
                  
                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    marginBottom: '15px',
                    fontSize: '14px',
                    color: '#4a9e4f'
                  }}>
                    <span>📏 {trail.distance}</span>
                    <span>⏱️ {trail.time}</span>
                  </div>
                  
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    fontSize: '14px'
                  }}>
                    {trail.description}
                  </p>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#2c5f2d',
                      marginBottom: '10px'
                    }}>
                      ✨ Highlights:
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {trail.highlights.map((highlight, idx) => (
                        <span key={idx} style={{
                          background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                          color: '#1976d2',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '500'
                        }}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button style={{
                    width: '100%',
                    padding: '12px',
                    background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                    border: 'none',
                    borderRadius: '15px',
                    color: '#1a3f1b',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(135, 206, 235, 0.4)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    📋 View Trail Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best Time to Visit */}
        <section id="timing" style={{
          padding: '80px 0',
          background: 'linear-gradient(135deg, #f8fdff 0%, #e3f2fd 100%)',
          borderRadius: '30px',
          margin: '40px 0'
        }}>
          <div style={{
            padding: '0 40px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: '#2c5f2d',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              📅 Perfect Timing for Your Visit
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a9e4f',
              maxWidth: '700px',
              margin: '0 auto 50px',
              lineHeight: '1.6'
            }}>
              Zion is beautiful year-round, but timing can make or break your adventure. Here&apos;s your seasonal guide.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '25px',
              marginBottom: '40px'
            }}>
              {[
                {
                  season: "Spring",
                  months: "Mar - May",
                  icon: "🌸",
                  temp: "60-80°F",
                  pros: ["Perfect hiking weather", "Wildflowers blooming", "Waterfalls at peak", "Moderate crowds"],
                  cons: ["Some trails may be muddy", "Weather can be unpredictable"],
                  rating: "⭐⭐⭐⭐⭐",
                  color: "linear-gradient(135deg, #81c784 0%, #4caf50 100%)"
                },
                {
                  season: "Summer",
                  months: "Jun - Aug",
                  icon: "☀️",
                  temp: "85-105°F",
                  pros: ["All trails accessible", "Long daylight hours", "Perfect for water activities", "Vibrant desert colors"],
                  cons: ["Very hot temperatures", "Crowded trails", "Early starts essential"],
                  rating: "⭐⭐⭐",
                  color: "linear-gradient(135deg, #ffb74d 0%, #ff9800 100%)"
                },
                {
                  season: "Fall",
                  months: "Sep - Nov",
                  icon: "🍂",
                  temp: "65-85°F",
                  pros: ["Ideal hiking conditions", "Beautiful fall colors", "Fewer crowds", "Comfortable camping"],
                  cons: ["Popular season", "Book accommodations early"],
                  rating: "⭐⭐⭐⭐⭐",
                  color: "linear-gradient(135deg, #ff8a65 0%, #ff5722 100%)"
                },
                {
                  season: "Winter",
                  months: "Dec - Feb",
                  icon: "❄️",
                  temp: "35-60°F",
                  pros: ["Peaceful atmosphere", "Snow-capped peaks", "Lower accommodation rates", "Unique photography"],
                  cons: ["Some trails closed", "Unpredictable weather", "Shorter days"],
                  rating: "⭐⭐⭐",
                  color: "linear-gradient(135deg, #64b5f6 0%, #2196f3 100%)"
                }
              ].map((season, index) => (
                <div key={index} style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '25px',
                  boxShadow: '0 8px 25px rgba(44, 95, 45, 0.1)',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(44, 95, 45, 0.15)';
                  e.currentTarget.style.borderColor = '#87ceeb';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(44, 95, 45, 0.1)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: season.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    margin: '0 auto 15px'
                  }}>
                    {season.icon}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    color: '#2c5f2d',
                    marginBottom: '5px'
                  }}>
                    {season.season}
                  </h3>
                  
                  <p style={{
                    color: '#4a9e4f',
                    fontSize: '14px',
                    marginBottom: '10px'
                  }}>
                    {season.months} • {season.temp}
                  </p>
                  
                  <div style={{ marginBottom: '15px' }}>
                    {season.rating}
                  </div>
                  
                  <div style={{ textAlign: 'left', fontSize: '13px' }}>
                    <div style={{ marginBottom: '10px' }}>
                      <strong style={{ color: '#2e7d32' }}>✅ Pros:</strong>
                      <ul style={{ margin: '5px 0', paddingLeft: '15px', color: '#666' }}>
                        {season.pros.map((pro, idx) => (
                          <li key={idx}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <strong style={{ color: '#d32f2f' }}>⚠️ Cons:</strong>
                      <ul style={{ margin: '5px 0', paddingLeft: '15px', color: '#666' }}>
                        {season.cons.map((con, idx) => (
                          <li key={idx}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photography Section */}
        <section id="photography" style={{ padding: '80px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: '#2c5f2d',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px'
            }}>
              📸 Epic Photography Spots
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a9e4f',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Capture Zion&apos;s breathtaking beauty with these photographer-approved locations and pro tips
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                spot: "Canyon Overlook Trail",
                bestTime: "Golden Hour",
                difficulty: "Easy",
                tips: ["Arrive 1 hour before sunset", "Bring a tripod", "Wide-angle lens recommended"],
                description: "Capture the entire Zion Canyon bathed in golden light"
              },
              {
                spot: "The Narrows",
                bestTime: "Midday",
                difficulty: "Moderate",
                tips: ["Waterproof camera gear", "Polarizing filter essential", "Look for light beams"],
                description: "Dramatic slot canyon walls with flowing water reflections"
              },
              {
                spot: "Angel's Landing",
                bestTime: "Sunrise",
                difficulty: "Challenging",
                tips: ["Start hiking at 4 AM", "Telephoto for distant peaks", "Safety first on chains"],
                description: "360-degree panoramic views of the entire park"
              },
              {
                spot: "Emerald Pools",
                bestTime: "Morning",
                difficulty: "Easy",
                tips: ["Macro lens for details", "Capture water movement", "Multiple exposures"],
                description: "Serene waterfalls and crystal-clear reflecting pools"
              }
            ].map((photo, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fdff 100%)',
                borderRadius: '20px',
                padding: '25px',
                boxShadow: '0 10px 30px rgba(44, 95, 45, 0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(135, 206, 235, 0.2)'
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
                  gap: '10px',
                  marginBottom: '15px'
                }}>
                  <span style={{ fontSize: '24px' }}>📷</span>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    color: '#2c5f2d',
                    margin: 0
                  }}>
                    {photo.spot}
                  </h3>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '15px',
                  marginBottom: '15px',
                  fontSize: '14px'
                }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
                    color: '#e65100',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontWeight: '500'
                  }}>
                    ⏰ {photo.bestTime}
                  </span>
                  <span style={{
                    background: photo.difficulty === 'Easy' ? 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)' :
                               photo.difficulty === 'Moderate' ? 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)' :
                               'linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)',
                    color: photo.difficulty === 'Easy' ? '#2e7d32' :
                           photo.difficulty === 'Moderate' ? '#e65100' : '#c62828',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontWeight: '500'
                  }}>
                    🥾 {photo.difficulty}
                  </span>
                </div>
                
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontSize: '14px'
                }}>
                  {photo.description}
                </p>
                
                <div>
                  <h4 style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#2c5f2d',
                    marginBottom: '10px'
                  }}>
                    💡 Pro Tips:
                  </h4>
                  <ul style={{
                    margin: 0,
                    paddingLeft: '15px',
                    color: '#666',
                    fontSize: '13px'
                  }}>
                    {photo.tips.map((tip, idx) => (
                      <li key={idx} style={{ marginBottom: '5px' }}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Information */}
        <section id="tips" style={{
          padding: '80px 0',
          background: 'linear-gradient(135deg, #f8fdff 0%, #e3f2fd 100%)',
          borderRadius: '30px',
          margin: '40px 0'
        }}>
          <div style={{ padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 'bold',
                color: '#2c5f2d',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px'
              }}>
                💡 Essential Planning Guide
              </h2>
              <p style={{
                fontSize: '1.2rem',
                color: '#4a9e4f',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Everything you need to know for an unforgettable Zion adventure
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              {[
                {
                  title: "🏨 Where to Stay",
                  items: [
                    "Zion Lodge (inside park) - book 6+ months ahead",
                    "Springdale - walking distance to park entrance",
                    "St. George - budget option, 1 hour drive",
                    "Camping - Watchman & South Campgrounds"
                  ]
                },
                {
                  title: "🚌 Getting Around",
                  items: [
                    "Free shuttle system operates Mar-Oct",
                    "Private vehicles restricted in main canyon",
                    "Shuttle runs every 6-10 minutes",
                    "Walk or bike when shuttles aren't running"
                  ]
                },
                {
                  title: "🎒 What to Pack",
                  items: [
                    "Sturdy hiking boots with good grip",
                    "Plenty of water (1 gallon per person/day)",
                    "Sun protection (hat, sunscreen, sunglasses)",
                    "Layers for temperature changes"
                  ]
                },
                {
                  title: "⚠️ Safety Tips",
                  items: [
                    "Check weather before hiking Narrows",
                    "Start early to avoid afternoon heat",
                    "Tell someone your hiking plans",
                    "Know your limits on challenging trails"
                  ]
                },
                {
                  title: "💰 Budget Planning",
                  items: [
                    "Park entrance: $35 per vehicle (7 days)",
                    "Annual pass: $70 (great value for multiple visits)",
                    "Gear rental in Springdale: $40-60/day",
                    "Dining: $15-40 per meal depending on location"
                  ]
                },
                {
                  title: "📋 Permits & Reservations",
                  items: [
                    "Angel's Landing: Timed entry permits required",
                    "Narrows top-down: Wilderness permit needed",
                    "Camping: Reserve at recreation.gov",
                    "Zion Lodge: Book well in advance"
                  ]
                }
              ].map((section, index) => (
                <div key={index} style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '25px',
                  boxShadow: '0 8px 25px rgba(44, 95, 45, 0.1)',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(44, 95, 45, 0.15)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(44, 95, 45, 0.1)';
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    color: '#2c5f2d',
                    marginBottom: '20px'
                  }}>
                    {section.title}
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {section.items.map((item, idx) => (
                      <li key={idx} style={{
                        padding: '8px 0',
                        borderBottom: idx < section.items.length - 1 ? '1px solid #f0f0f0' : 'none',
                        color: '#666',
                        fontSize: '14px',
                        lineHeight: '1.5',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px'
                      }}>
                        <span style={{ color: '#4a9e4f', fontSize: '12px', marginTop: '2px' }}>▸</span>
                        {item}
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
          textAlign: 'center',
          background: 'linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%)',
          borderRadius: '30px',
          color: 'white',
          margin: '40px 0'
        }}>
          <div style={{ padding: '0 40px' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#87ceeb'
            }}>
              🏔️ Ready for Your Zion Adventure?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: '1.6',
              color: '#e0f6ff'
            }}>
              Don&apos;t just dream about it - make it happen! Get the gear you need and start planning your unforgettable journey to one of America&apos;s most spectacular national parks.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
                  <Link href="/gear" passHref>
              <button style={{
                padding: '18px 35px',
                background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                border: 'none',
                borderRadius: '30px',
                color: '#1a3f1b',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(135, 206, 235, 0.4)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(135, 206, 235, 0.6)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(135, 206, 235, 0.4)';
              }}>
                🎒 Shop Hiking Gear
              </button>
              </Link>
               <Link href="/guides" passHref>
              <button style={{
                padding: '18px 35px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid #87ceeb',
                borderRadius: '30px',
                color: '#87ceeb',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.background = '#87ceeb';
                e.currentTarget.style.color = '#1a3f1b';
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#87ceeb';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}>
                🗺️ More Trail Guides
              </button>
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Floating Action Button */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000
      }}>
        <button style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
          border: 'none',
          color: '#1a3f1b',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(135, 206, 235, 0.4)',
          transition: 'all 0.3s ease'
        }} onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 25px rgba(135, 206, 235, 0.6)';
        }} onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(135, 206, 235, 0.4)';
        }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ⬆️
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .hero-stats {
            flex-direction: column;
            gap: 1rem;
          }
          
          .trail-grid {
            grid-template-columns: 1fr;
          }
          
          .season-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }
      `}</style>
    </div>
  );
}