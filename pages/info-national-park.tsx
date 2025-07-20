'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function ExploreParks() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredPark, setHoveredPark] = useState(null);

    const featuredParks = [
        {
            id: 1,
            name: 'Yellowstone National Park',
            location: 'Wyoming, Montana, Idaho',
            image: '🌋',
            difficulty: 'Moderate',
            bestTime: 'May - September',
            highlights: ['Old Faithful', 'Grand Prismatic Spring', 'Wildlife Viewing'],
            description: 'America\'s first national park, famous for geothermal features and diverse wildlife.',
            category: 'geothermal'
        },
        {
            id: 2,
            name: 'Grand Canyon National Park',
            location: 'Arizona',
            image: '🏔️',
            difficulty: 'Easy to Challenging',
            bestTime: 'March - May, September - November',
            highlights: ['South Rim Trail', 'Bright Angel Trail', 'Desert View'],
            description: 'One of the world\'s most spectacular natural wonders with breathtaking canyon views.',
            category: 'desert'
        },
        {
            id: 3,
            name: 'Yosemite National Park',
            location: 'California',
            image: '🌲',
            difficulty: 'Easy to Expert',
            bestTime: 'April - October',
            highlights: ['Half Dome', 'El Capitan', 'Yosemite Falls'],
            description: 'Iconic granite cliffs, waterfalls, and giant sequoias in the Sierra Nevada.',
            category: 'mountain'
        },
        {
            id: 4,
            name: 'Rocky Mountain National Park',
            location: 'Colorado',
            image: '⛰️',
            difficulty: 'Moderate to Expert',
            bestTime: 'June - September',
            highlights: ['Trail Ridge Road', 'Bear Lake', 'Longs Peak'],
            description: 'High-altitude wilderness with stunning mountain peaks and alpine lakes.',
            category: 'mountain'
        },
        {
            id: 5,
            name: 'Zion National Park',
            location: 'Utah',
            image: '🏜️',
            difficulty: 'Easy to Expert',
            bestTime: 'March - May, September - November',
            highlights: ['Angels Landing', 'The Narrows', 'Emerald Pools'],
            description: 'Dramatic red cliffs and narrow slot canyons in southern Utah.',
            category: 'desert'
        },
        {
            id: 6,
            name: 'Glacier National Park',
            location: 'Montana',
            image: '🧊',
            difficulty: 'Moderate to Expert',
            bestTime: 'June - September',
            highlights: ['Going-to-the-Sun Road', 'Hidden Lake', 'Grinnell Glacier'],
            description: 'Pristine wilderness with glaciers, alpine meadows, and crystal-clear lakes.',
            category: 'mountain'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Parks', icon: '🏞️', count: 63 },
        { id: 'mountain', name: 'Mountain Parks', icon: '⛰️', count: 28 },
        { id: 'desert', name: 'Desert Parks', icon: '🏜️', count: 15 },
        { id: 'geothermal', name: 'Geothermal', icon: '🌋', count: 8 },
        { id: 'coastal', name: 'Coastal Parks', icon: '🌊', count: 12 }
    ];

    const activities = [
        { name: 'Hiking', icon: '🥾', difficulty: 'All Levels', parks: 58 },
        { name: 'Camping', icon: '⛺', difficulty: 'Beginner', parks: 52 },
        { name: 'Rock Climbing', icon: '🧗', difficulty: 'Advanced', parks: 23 },
        { name: 'Wildlife Viewing', icon: '🦌', difficulty: 'All Levels', parks: 61 },
        { name: 'Photography', icon: '📸', difficulty: 'All Levels', parks: 63 },
        { name: 'Stargazing', icon: '⭐', difficulty: 'Beginner', parks: 45 }
    ];

    const filteredParks = featuredParks.filter(park => {
        const matchesSearch = park.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            park.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || park.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div style={{
            background: 'linear-gradient(180deg, #f0f8ff 0%, #e6f3ff 100%)',
            minHeight: '100vh'
        }}>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, rgba(44, 95, 45, 0.95) 0%, rgba(26, 63, 27, 0.95) 100%), url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                padding: '80px 0',
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 2rem',
                    position: 'relative',
                    zIndex: 2
                }}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: 'bold',
                        margin: '0 0 20px 0',
                        background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        🏞️ Explore America&apos;s National Parks
                    </h1>
                    <p style={{
                        fontSize: '1.3rem',
                        color: '#e0f6ff',
                        maxWidth: '600px',
                        margin: '0 auto 40px auto',
                        lineHeight: '1.6'
                    }}>
                        Discover breathtaking landscapes, diverse wildlife, and unforgettable adventures
                        across 63 magnificent national parks
                    </p>

                    {/* Search Bar */}
                    <div style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        position: 'relative'
                    }}>
                        <div style={{
                            display: 'flex',
                            background: 'rgba(255, 255, 255, 0.15)',
                            borderRadius: '50px',
                            padding: '8px',
                            backdropFilter: 'blur(10px)',
                            border: '2px solid rgba(135, 206, 235, 0.3)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                        }}>
                            <style>{`
                                    input::placeholder {
                                      color: #dddddd;
                                      opacity: 1; /* Đảm bảo không bị mờ */
                                }
                              `}</style>
                            <input
                                type="text"
                                placeholder="Search parks by name or location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    flex: 1,
                                    padding: '16px 24px',
                                    border: 'none',
                                    background: 'transparent',
                                    color: 'white',
                                    fontSize: '16px',
                                    outline: 'none'
                                }}
                            />
                            <button style={{
                                padding: '16px 32px',
                                background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                                border: 'none',
                                borderRadius: '40px',
                                color: '#1a3f1b',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '16px',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                🔍 Search
                            </button>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '20px',
                        marginTop: '60px',
                        maxWidth: '800px',
                        margin: '60px auto 0'
                    }}>
                        {[
                            { number: '63', label: 'National Parks', icon: '🏞️' },
                            { number: '84M', label: 'Annual Visitors', icon: '👥' },
                            { number: '27', label: 'States Covered', icon: '🗺️' },
                            { number: '400+', label: 'Species Protected', icon: '🦌' }
                        ].map((stat, index) => (
                            <div key={index} style={{
                                background: 'rgba(255, 255, 255, 0.1)',
                                padding: '20px',
                                borderRadius: '20px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(135, 206, 235, 0.2)',
                                textAlign: 'center',
                                transition: 'transform 0.3s ease'
                            }}>
                                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{stat.icon}</div>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#87ceeb' }}>{stat.number}</div>
                                <div style={{ fontSize: '0.9rem', color: '#b0e0e6' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(180deg, #ffffff 0%, #f8fdff 100%)'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 2rem'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        margin: '0 0 50px 0',
                        color: '#2c5f2d'
                    }}>
                        🗂️ Explore by Category
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px',
                        marginBottom: '40px'
                    }}>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                style={{
                                    background: selectedCategory === category.id
                                        ? 'linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%)'
                                        : 'linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%)',
                                    color: selectedCategory === category.id ? '#87ceeb' : '#2c5f2d',
                                    border: selectedCategory === category.id
                                        ? '2px solid #87ceeb'
                                        : '2px solid #e0f6ff',
                                    borderRadius: '20px',
                                    padding: '20px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textAlign: 'center',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    boxShadow: selectedCategory === category.id
                                        ? '0 8px 25px rgba(44, 95, 45, 0.3)'
                                        : '0 4px 15px rgba(0, 0, 0, 0.1)',
                                    transform: selectedCategory === category.id ? 'translateY(-2px)' : 'translateY(0)'
                                }}
                            >
                                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{category.icon}</div>
                                <div style={{ marginBottom: '5px' }}>{category.name}</div>
                                <div style={{
                                    fontSize: '0.9rem',
                                    opacity: 0.8,
                                    color: selectedCategory === category.id ? '#b0e0e6' : '#666'
                                }}>
                                    {category.count} parks
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Parks Grid */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(180deg, #f8fdff 0%, #e6f3ff 100%)'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 2rem'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        margin: '0 0 20px 0',
                        color: '#2c5f2d'
                    }}>
                        ⭐ Featured National Parks
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        fontSize: '1.1rem',
                        color: '#666',
                        marginBottom: '50px',
                        maxWidth: '600px',
                        margin: '0 auto 50px auto'
                    }}>
                        Discover the most popular and breathtaking national parks across America
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '30px'
                    }}>
                        {filteredParks.map((park) => (
                            <div
                                key={park.id}
                                //onMouseEnter={() => setHoveredPark(park.id)}
                                onMouseLeave={() => setHoveredPark(null)}
                                style={{
                                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fdff 100%)',
                                    borderRadius: '25px',
                                    padding: '30px',
                                    boxShadow: hoveredPark === park.id
                                        ? '0 20px 40px rgba(44, 95, 45, 0.2)'
                                        : '0 10px 30px rgba(0, 0, 0, 0.1)',
                                    border: '2px solid #e0f6ff',
                                    transition: 'all 0.4s ease',
                                    transform: hoveredPark === park.id ? 'translateY(-8px)' : 'translateY(0)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Park Header */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    marginBottom: '20px'
                                }}>
                                    <div style={{
                                        fontSize: '3rem',
                                        background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                                        borderRadius: '50%',
                                        width: '80px',
                                        height: '80px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 15px rgba(135, 206, 235, 0.3)'
                                    }}>
                                        {park.image}
                                    </div>
                                    <div>
                                        <h3 style={{
                                            margin: '0 0 5px 0',
                                            fontSize: '1.4rem',
                                            fontWeight: 'bold',
                                            color: '#2c5f2d'
                                        }}>
                                            {park.name}
                                        </h3>
                                        <p style={{
                                            margin: 0,
                                            color: '#666',
                                            fontSize: '0.9rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px'
                                        }}>
                                            📍 {park.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Park Info */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '15px',
                                    marginBottom: '20px'
                                }}>
                                    <div style={{
                                        background: 'linear-gradient(135deg, #e6f3ff 0%, #f0f8ff 100%)',
                                        padding: '12px',
                                        borderRadius: '12px',
                                        textAlign: 'center'
                                    }}>
                                        <div style={{ fontSize: '1.2rem', marginBottom: '5px' }}>🥾</div>
                                        <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '2px' }}>Difficulty</div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#2c5f2d' }}>{park.difficulty}</div>
                                    </div>
                                    <div style={{
                                        background: 'linear-gradient(135deg, #e6f3ff 0%, #f0f8ff 100%)',
                                        padding: '12px',
                                        borderRadius: '12px',
                                        textAlign: 'center'
                                    }}>
                                        <div style={{ fontSize: '1.2rem', marginBottom: '5px' }}>📅</div>
                                        <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '2px' }}>Best Time</div>
                                        <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#2c5f2d' }}>{park.bestTime}</div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p style={{
                                    margin: '0 0 20px 0',
                                    color: '#555',
                                    lineHeight: '1.6',
                                    fontSize: '0.95rem'
                                }}>
                                    {park.description}
                                </p>

                                {/* Highlights */}
                                <div style={{ marginBottom: '20px' }}>
                                    <h4 style={{
                                        margin: '0 0 10px 0',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        color: '#2c5f2d',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
                                        ✨ Must-See Attractions
                                    </h4>
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '8px'
                                    }}>
                                        {park.highlights.map((highlight, index) => (
                                            <span
                                                key={index}
                                                style={{
                                                    background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                                                    color: '#1a3f1b',
                                                    padding: '4px 12px',
                                                    borderRadius: '15px',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '500'
                                                }}
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Button */}
                                <button style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: hoveredPark === park.id
                                        ? 'linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%)'
                                        : 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                                    color: hoveredPark === park.id ? '#87ceeb' : '#1a3f1b',
                                    border: 'none',
                                    borderRadius: '15px',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px'
                                }}>
                                    🗺️ Plan Your Visit
                                </button>
                            </div>
                        ))}
                    </div>

                    {filteredParks.length === 0 && (
                        <div style={{
                            textAlign: 'center',
                            padding: '60px 20px',
                            color: '#666'
                        }}>
                            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔍</div>
                            <h3 style={{ margin: '0 0 10px 0', color: '#2c5f2d' }}>No parks found</h3>
                            <p>Try adjusting your search or category filter</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Popular Activities */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%)',
                color: 'white'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 2rem'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        margin: '0 0 20px 0',
                        color: '#87ceeb'
                    }}>
                        🎯 Popular Activities
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        fontSize: '1.1rem',
                        color: '#b0e0e6',
                        marginBottom: '50px',
                        maxWidth: '600px',
                        margin: '0 auto 50px auto'
                    }}>
                        Discover exciting activities and adventures waiting for you in America&apos;s national parks
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '25px'
                    }}>
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '20px',
                                    padding: '25px',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(135, 206, 235, 0.2)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(135, 206, 235, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    marginBottom: '15px'
                                }}>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                                        borderRadius: '50%',
                                        width: '60px',
                                        height: '60px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {activity.icon}
                                    </div>
                                    <div>
                                        <h3 style={{
                                            margin: '0 0 5px 0',
                                            fontSize: '1.3rem',
                                            fontWeight: 'bold',
                                            color: '#87ceeb'
                                        }}>
                                            {activity.name}
                                        </h3>
                                        <p style={{
                                            margin: 0,
                                            color: '#b0e0e6',
                                            fontSize: '0.9rem'
                                        }}>
                                            {activity.difficulty} • {activity.parks} parks
                                        </p>
                                    </div>
                                </div>
                                <button style={{
                                    width: '100%',
                                    padding: '10px',
                                    background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                                    color: '#1a3f1b',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}>
                                    Explore {activity.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section style={{
                padding: '80px 0',
                background: 'linear-gradient(135deg, #87ceeb 0%, #98fb98 100%)',
                textAlign: 'center'
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '0 2rem'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        margin: '0 0 20px 0',
                        color: '#1a3f1b'
                    }}>
                        🎒 Ready for Your Next Adventure?
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        margin: '0 0 40px 0',
                        color: '#2c5f2d',
                        lineHeight: '1.6'
                    }}>
                        Get equipped with premium hiking gear and start planning your national park adventure today.
                        From beginner-friendly trails to expert challenges, we have everything you need.
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                         <Link href="/gear" style={{
                  textDecoration: 'none',
                }} passHref>
                        <button style={{
                            padding: '15px 30px',
                            background: 'linear-gradient(135deg, #2c5f2d 0%, #1a3f1b 100%)',
                            color: '#87ceeb',
                            border: 'none',
                            borderRadius: '25px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            🛒 Shop Hiking Gear
                        </button>
                        </Link>
                        <button style={{
                            padding: '15px 30px',
                            background: 'transparent',
                            color: '#1a3f1b',
                            border: '2px solid #1a3f1b',
                            borderRadius: '25px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            📖 Read Trail Guides
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}