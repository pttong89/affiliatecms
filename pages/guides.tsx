import React, { useState } from 'react';
export default function TrailGuidesPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedLength, setSelectedLength] = useState('all');
  const [selectedScenery, setSelectedScenery] = useState('all');

  const trails = [
    {
      id: 1,
      name: "Angel's Landing Trail",
      park: "Zion National Park",
      difficulty: "hard",
      duration: "6+ hours",
      length: "5.4 miles",
      scenery: "mountain",
      elevation: "1,488 ft",
      image: "🏔️",
      description: "One of the most thrilling hikes in America with breathtaking views of Zion Canyon. The final section involves chains for safety.",
      warnings: ["⚠️ Chains section requires extreme caution", "🌡️ Avoid during extreme heat", "👥 Very crowded - start early"],
      highlights: ["📸 Panoramic canyon views", "🧗 Chain-assisted climbing", "🌅 Best at sunrise/sunset"]
    },
    {
      id: 2,
      name: "Emerald Lake Trail",
      park: "Rocky Mountain National Park",
      difficulty: "moderate",
      duration: "3-6 hours",
      length: "3.2 miles",
      scenery: "lakes",
      elevation: "650 ft",
      image: "🏞️",
      description: "A stunning alpine lake surrounded by towering peaks. Perfect for photography and peaceful reflection.",
      warnings: ["❄️ Snow possible year-round", "🐻 Bear activity - store food properly", "⛈️ Afternoon thunderstorms common"],
      highlights: ["💎 Crystal clear alpine lake", "🏔️ 360-degree mountain views", "🌸 Wildflowers in summer"]
    },
    {
      id: 3,
      name: "Mist Trail to Vernal Fall",
      park: "Yosemite National Park",
      difficulty: "moderate",
      duration: "3-6 hours",
      length: "4.8 miles",
      scenery: "waterfalls",
      elevation: "1,000 ft",
      image: "💧",
      description: "Experience the power of Yosemite's waterfalls up close. The granite steps can be slippery from mist.",
      warnings: ["💦 Very slippery when wet", "🌊 High water flow in spring", "🥾 Sturdy shoes essential"],
      highlights: ["🌈 Rainbow in the mist", "💪 Granite staircase challenge", "📱 Instagram-worthy views"]
    },
    {
      id: 4,
      name: "Yellowstone Lake Loop",
      park: "Yellowstone National Park",
      difficulty: "easy",
      duration: "1-3 hours",
      length: "2.1 miles",
      scenery: "lakes",
      elevation: "100 ft",
      image: "🌊",
      description: "A gentle walk around America's largest high-altitude lake with geothermal features nearby.",
      warnings: ["🦌 Wildlife present - maintain distance", "🌋 Geothermal areas - stay on trail", "🌡️ Weather changes quickly"],
      highlights: ["🦅 Excellent bird watching", "🌋 Geothermal features", "🏔️ Mountain reflections"]
    },
    {
      id: 5,
      name: "Bright Angel Trail",
      park: "Grand Canyon National Park",
      difficulty: "hard",
      duration: "6+ hours",
      length: "12 miles",
      scenery: "desert",
      elevation: "3,020 ft",
      image: "🏜️",
      description: "The most popular trail into the Grand Canyon. Well-maintained with rest houses and water stations.",
      warnings: ["☀️ Extreme heat in summer", "💧 Bring plenty of water", "⬇️ Going down is easy, up is hard"],
      highlights: ["🌅 Sunrise/sunset colors", "🏛️ Historic rest houses", "🦎 Desert wildlife"]
    },
    {
      id: 6,
      name: "Hidden Lake Overlook",
      park: "Glacier National Park",
      difficulty: "moderate",
      duration: "1-3 hours",
      length: "2.7 miles",
      scenery: "wildlife",
      elevation: "460 ft",
      image: "🐻",
      description: "A boardwalk trail through alpine meadows with excellent wildlife viewing opportunities.",
      warnings: ["🐻 Grizzly bear habitat", "❄️ Snow lingers until July", "🌨️ Weather changes rapidly"],
      highlights: ["🐐 Mountain goats common", "🌺 Alpine wildflowers", "🏔️ Glacier views"]
    },
    {
      id: 7,
      name: "Cascade Canyon Trail",
      park: "Grand Teton National Park",
      difficulty: "moderate",
      duration: "3-6 hours",
      length: "9.1 miles",
      scenery: "mountain",
      elevation: "1,100 ft",
      image: "⛰️",
      description: "A spectacular canyon hike with towering peaks on both sides and a gentle grade throughout.",
      warnings: ["🐻 Bear spray recommended", "🌊 Creek crossings possible", "⛈️ Afternoon storms"],
      highlights: ["🏔️ Dramatic canyon walls", "🌲 Old-growth forest", "🦌 Moose sightings"]
    },
    {
      id: 8,
      name: "Delicate Arch Trail",
      park: "Arches National Park",
      difficulty: "easy",
      duration: "1-3 hours",
      length: "3 miles",
      scenery: "desert",
      elevation: "480 ft",
      image: "🌵",
      description: "Utah's most famous arch and the symbol of the state. A relatively easy hike across slickrock.",
      warnings: ["☀️ No shade - bring sun protection", "🌡️ Extremely hot in summer", "💧 Bring water"],
      highlights: ["📸 Iconic photo opportunity", "🌅 Stunning at sunset", "🪨 Unique rock formations"]
    }
  ];

  const difficultyOptions = [
    { value: 'all', label: 'All Levels', icon: '🎯' },
    { value: 'easy', label: 'Easy', icon: '🟢' },
    { value: 'moderate', label: 'Moderate', icon: '🟡' },
    { value: 'hard', label: 'Hard', icon: '🔴' },
    { value: 'expert', label: 'Expert', icon: '⚫' }
  ];

  const durationOptions = [
    { value: 'all', label: 'Any Duration', icon: '⏰' },
    { value: '1-3 hours', label: '1-3 Hours', icon: '⏱️' },
    { value: '3-6 hours', label: '3-6 Hours', icon: '⏲️' },
    { value: '6+ hours', label: '6+ Hours', icon: '⏳' },
    { value: 'multi-day', label: 'Multi-day', icon: '🏕️' }
  ];

  const lengthOptions = [
    { value: 'all', label: 'Any Length', icon: '📏' },
    { value: 'under-2', label: 'Under 2 miles', icon: '🚶' },
    { value: '2-5', label: '2-5 miles', icon: '🥾' },
    { value: '5-10', label: '5-10 miles', icon: '🏃' },
    { value: '10+', label: '10+ miles', icon: '🏔️' }
  ];

  const sceneryOptions = [
    { value: 'all', label: 'All Scenery', icon: '🌍' },
    { value: 'mountain', label: 'Mountain Views', icon: '🏔️' },
    { value: 'waterfalls', label: 'Waterfalls', icon: '💧' },
    { value: 'lakes', label: 'Lakes', icon: '🏞️' },
    { value: 'desert', label: 'Desert', icon: '🏜️' },
    { value: 'forest', label: 'Forest', icon: '🌲' },
    { value: 'wildlife', label: 'Wildlife', icon: '🦌' }
  ];

  const filteredTrails = trails.filter(trail => {
    const difficultyMatch = selectedDifficulty === 'all' || trail.difficulty === selectedDifficulty;
    const durationMatch = selectedDuration === 'all' || trail.duration === selectedDuration;
    const sceneryMatch = selectedScenery === 'all' || trail.scenery === selectedScenery;
    
    let lengthMatch = true;
    if (selectedLength !== 'all') {
      const trailLength = parseFloat(trail.length);
      switch (selectedLength) {
        case 'under-2':
          lengthMatch = trailLength < 2;
          break;
        case '2-5':
          lengthMatch = trailLength >= 2 && trailLength <= 5;
          break;
        case '5-10':
          lengthMatch = trailLength > 5 && trailLength <= 10;
          break;
        case '10+':
          lengthMatch = trailLength > 10;
          break;
      }
    }
    
    return difficultyMatch && durationMatch && lengthMatch && sceneryMatch;
  });
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '#4ade80';
      case 'moderate': return '#fbbf24';
      case 'hard': return '#f87171';
      case 'expert': return '#6b7280';
      default: return '#87ceeb';
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f0f8ff 0%, #e6f3ff 100%)'
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%)',
        color: '#e0f6ff',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(135, 206, 235, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(152, 251, 152, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            fontSize: '80px',
            marginBottom: '20px',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
          }}>
            🗺️
          </div>
          
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            margin: '0 0 20px 0',
            background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Trail Guides
          </h1>
          
          <p style={{
            fontSize: '24px',
            color: '#b0e0e6',
            maxWidth: '800px',
            margin: '0 auto 30px auto',
            lineHeight: '1.6'
          }}>
            Discover America&apos;s most spectacular hiking trails with detailed guides, 
            interactive maps, and essential safety information for every adventure level.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            marginTop: '40px'
          }}>
            {[
              { icon: '🏔️', text: '500+ Trails', desc: 'Curated routes' },
              { icon: '📍', text: '63 Parks', desc: 'National coverage' },
              { icon: '🗺️', text: 'GPS Maps', desc: 'Offline ready' },
              { icon: '⚠️', text: 'Safety Alerts', desc: 'Real-time updates' }
            ].map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '20px',
                background: 'rgba(135, 206, 235, 0.1)',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(135, 206, 235, 0.2)'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#87ceeb' }}>{stat.text}</div>
                <div style={{ fontSize: '14px', color: '#b0e0e6' }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{
        background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
        padding: '40px 0',
        boxShadow: '0 4px 20px rgba(135, 206, 235, 0.3)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#1a3f1b',
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}>
            🔍 Find Your Perfect Trail
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {/* Difficulty Filter */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#1a3f1b',
                marginBottom: '12px'
              }}>
                🎯 Difficulty Level
              </label>
              <select 
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '2px solid #4a9e4f',
                  fontSize: '14px',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                {difficultyOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#1a3f1b',
                marginBottom: '12px'
              }}>
                ⏰ Duration
              </label>
              <select 
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '2px solid #4a9e4f',
                  fontSize: '14px',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                {durationOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Length Filter */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#1a3f1b',
                marginBottom: '12px'
              }}>
                📏 Trail Length
              </label>
              <select 
                value={selectedLength}
                onChange={(e) => setSelectedLength(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '2px solid #4a9e4f',
                  fontSize: '14px',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                {lengthOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Scenery Filter */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#1a3f1b',
                marginBottom: '12px'
              }}>
                🌍 Scenery Type
              </label>
              <select 
                value={selectedScenery}
                onChange={(e) => setSelectedScenery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '2px solid #4a9e4f',
                  fontSize: '14px',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                {sceneryOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.icon} {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div style={{
            textAlign: 'center',
            marginTop: '20px',
            padding: '15px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '10px',
            color: '#1a3f1b',
            fontSize: '16px',
            fontWeight: '500'
          }}>
            📊 Showing {filteredTrails.length} trails matching your criteria
          </div>
        </div>
      </section>

      {/* Featured Trails Grid */}
      <section style={{
        padding: '60px 0',
        background: 'linear-gradient(180deg, #f0f8ff 0%, #e6f3ff 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#1a3f1b',
            marginBottom: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}>
            🏔️ Featured Trail Guides
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '30px'
          }}>
            {filteredTrails.map((trail) => (
              <div key={trail.id} style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
              }}>
                {/* Trail Image Header */}
                <div style={{
                  height: '200px',
                  background: `linear-gradient(135deg, ${getDifficultyColor(trail.difficulty)}20 0%, ${getDifficultyColor(trail.difficulty)}40 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '80px',
                  position: 'relative'
                }}>
                  {trail.image}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: getDifficultyColor(trail.difficulty),
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}>
                    {trail.difficulty}
                  </div>
                </div>

                {/* Trail Content */}
                <div style={{ padding: '25px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '15px'
                  }}>
                    <div>
                      <h3 style={{
                        margin: '0 0 5px 0',
                        fontSize: '22px',
                        fontWeight: 'bold',
                        color: '#1a3f1b'
                      }}>
                        {trail.name}
                      </h3>
                      <p style={{
                        margin: 0,
                        fontSize: '14px',
                        color: '#4a9e4f',
                        fontWeight: '500'
                      }}>
                        📍 {trail.park}
                      </p>
                    </div>
                  </div>

                  {/* Trail Stats */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '15px',
                    marginBottom: '20px',
                    padding: '15px',
                    background: '#f8fafc',
                    borderRadius: '12px'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '18px', marginBottom: '4px' }}>⏱️</div>
                      <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Duration</div>
                      <div style={{ fontSize: '14px', color: '#1a3f1b', fontWeight: 'bold' }}>{trail.duration}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '18px', marginBottom: '4px' }}>📏</div>
                      <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Distance</div>
                      <div style={{ fontSize: '14px', color: '#1a3f1b', fontWeight: 'bold' }}>{trail.length}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '18px', marginBottom: '4px' }}>📈</div>
                      <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Elevation</div>
                      <div style={{ fontSize: '14px', color: '#1a3f1b', fontWeight: 'bold' }}>{trail.elevation}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    margin: '0 0 20px 0',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#475569'
                  }}>
                    {trail.description}
                  </p>

                  {/* Highlights */}
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{
                      margin: '0 0 10px 0',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#1a3f1b',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      ✨ Highlights
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {trail.highlights.map((highlight, index) => (
                        <span key={index} style={{
                          background: 'linear-gradient(135deg, #87ceeb20 0%, #98fb9820 100%)',
                          color: '#1a3f1b',
                          padding: '4px 10px',
                          borderRadius: '15px',
                          fontSize: '12px',
                          fontWeight: '500',
                          border: '1px solid #87ceeb40'
                        }}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Warnings */}
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{
                      margin: '0 0 10px 0',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#dc2626',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      ⚠️ Safety Warnings
                    </h4>
                    <div style={{
                      background: '#fef2f2',
                      border: '1px solid #fecaca',
                      borderRadius: '10px',
                      padding: '12px'
                    }}>
                      {trail.warnings.map((warning, index) => (
                        <div key={index} style={{
                          fontSize: '13px',
                          color: '#dc2626',
                          marginBottom: index < trail.warnings.length - 1 ? '6px' : '0',
                          fontWeight: '500'
                        }}>
                          {warning}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredTrails.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              background: 'white',
              borderRadius: '20px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '80px', marginBottom: '20px' }}>🔍</div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1a3f1b',
                marginBottom: '10px'
              }}>
                No trails found
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#64748b',
                marginBottom: '20px'
              }}>
                Try adjusting your filters to discover more amazing trails
              </p>
              <button 
                onClick={() => {
                  setSelectedDifficulty('all');
                  setSelectedDuration('all');
                  setSelectedLength('all');
                  setSelectedScenery('all');
                }}
                style={{
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                  color: '#1a3f1b',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                🔄 Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
     
    </div>
  );
}