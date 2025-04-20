import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import TextureBackground from './components/utility/TextureBackground';
import './base.css';

export default function SacredChamber() {
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isReady, setIsReady] = useState(true);
  
  useEffect(() => {
    // Simulate loading for ceremonial entrance
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculate header opacity based on scroll position
  const headerOpacity = Math.max(0, Math.min(1, scrollPosition / 200));
  
  // Ceremonial testimonials from Sacred Chamber graduates
  const testimonials = [
    {
      quote: "The Sacred Chamber transformed not just how I see myself, but how I walk through the world. This isn't coaching—it's remembrance of your divine nature.",
      name: "Elena R.",
      title: "Spiritual Guide",
      journey: "6-month Sacred Chamber Journey"
    },
    {
      quote: "I've worked with spiritual mentors for years, but what Jordi creates in the Sacred Chamber is beyond anything I've experienced. The container itself is medicine.",
      name: "Michael L.",
      title: "Executive & Mystic",
      journey: "Sacred Chamber Graduate"
    },
    {
      quote: "There are moments in the Chamber when time stops, and you feel yourself being rewoven at the soul level. This work reaches places nothing else can touch.",
      name: "Sarah J.",
      title: "Artist & Ceremonialist",
      journey: "3-cycle Sacred Chamber Initiate"
    }
  ];

  // Journey phases within the Sacred Chamber
  const journeyPhases = [
    {
      name: "Sacred Alignment",
      description: "Our journey begins with a profound alignment ritual—setting intentions, creating sacred space, and opening to divine guidance.",
      symbol: "☉",
      duration: "Weeks 1-3"
    },
    {
      name: "Shadow Integration",
      description: "We enter the shadows together, illuminating patterns and reclaiming the wisdom and power hidden within forgotten aspects of self.",
      symbol: "☽",
      duration: "Weeks 4-9"
    },
    {
      name: "Divine Remembrance",
      description: "Reconnection to your sovereign nature and the cosmic wisdom that has always lived within you, awakening dormant gifts.",
      symbol: "✧",
      duration: "Weeks 10-15"
    },
    {
      name: "Sacred Embodiment",
      description: "Integrating insights into lived experience, establishing new patterns, and anchoring your transformation in daily practice.",
      symbol: "⊛",
      duration: "Weeks 16-20"
    }
  ];
  
  // Readiness indicators
  const readinessChecklist = [
    "You've done personal development work but sense a deeper calling",
    "You're ready to move beyond productivity and into presence",
    "You feel drawn to sacred ritual and mystical practice",
    "You're willing to examine shadow aspects with courage and compassion",
    "You sense there's a greater purpose to your existence waiting to unfold",
    "You're prepared to invest time, energy, and resources in your transformation"
  ];
  
  const handleApplyClick = () => {
    // Simulate a ceremonial pause before navigation
    window.scrollTo(0, 0);
    window.location.href = '/sacred-chamber/application';
  };
  
  const navigateToHome = () => {
    window.location.href = '/';
  };
  
  const navigateToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <View className={`min-h-screen bg-stone-950 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      {/* Floating navigation header */}
      <View 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerOpacity > 0.1 ? 'backdrop-blur-md bg-stone-950/80' : 'bg-transparent'}`}
        style={{ opacity: headerOpacity }}
      >
        <View className="max-w-7xl mx-auto px-4 py-4 flex-row items-center justify-start">
          <TouchableOpacity onPress={navigateToHome}>
            <Text className="text-amber-400 font-serif text-xl">The Mirror Path</Text>
          </TouchableOpacity>
          
          <View className="flex-row space-x-16 ml-12">
            <TouchableOpacity onPress={() => navigateToSection('overview')} className="px-2 py-1">
              <Text className={`text-sm ${activeSection === 'overview' ? 'text-amber-400' : 'text-amber-400/70'}`}>Overview</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToSection('journey')} className="px-2 py-1">
              <Text className={`text-sm ${activeSection === 'journey' ? 'text-amber-400' : 'text-amber-400/70'}`}>The Journey</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToSection('testimonials')} className="px-2 py-1">
              <Text className={`text-sm ${activeSection === 'testimonials' ? 'text-amber-400' : 'text-amber-400/70'}`}>Reflections</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToSection('readiness')} className="px-2 py-1">
              <Text className={`text-sm ${activeSection === 'readiness' ? 'text-amber-400' : 'text-amber-400/70'}`}>Your Readiness</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            onPress={handleApplyClick}
            className="bg-amber-800/30 border border-amber-500/30 px-4 py-2 rounded-full hover:bg-amber-800/50 transition-all duration-300 ml-12 group overflow-hidden relative"
          >
            <View className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-amber-500/10 blur-sm transition-opacity duration-500" />
            <Text className="text-amber-300 text-sm">Begin My Journey</Text>
          </TouchableOpacity>
        </View>
      </View>
    
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }} style={{ height: '100%' }}>
        {/* Hero section with immersive imagery */}
        <View className="h-screen relative overflow-hidden">
          {/* Background sacred image */}
          <View className="absolute inset-0 bg-stone-950">
            {/* Sacred portrait image */}
            <Image
              source={{ uri: '/images/sacred-portraits/hero-portrait.jpg' }}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              resizeMode="cover"
            />
            <View className="absolute inset-0 bg-gradient-to-b from-amber-900/40 to-stone-950" />
          </View>
          
          {/* Sacred ambient glow effects */}
          <View className="absolute inset-0">
            <View className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl animate-pulse-slow" style={{ animationDuration: '7s' }} />
            <View className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl animate-pulse-slow" style={{ animationDuration: '10s', animationDelay: '2s' }} />
          </View>
          
          {/* Animated sacred symbols and golden shimmer */}
          <View className="absolute inset-0 opacity-20">
            {[...Array(30)].map((_, i) => (
              <View 
                key={`symbol-${i}`}
                className="absolute animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${15 + Math.random() * 20}s`,
                  animationDelay: `${Math.random() * 10}s`,
                  transform: [{rotate: `${Math.random() * 360}deg`}]
                }}
              >
                <Text className="text-amber-400/30 text-4xl">
                  {['✧', '⊛', '✦', '◯', '☉', '☽'][Math.floor(Math.random() * 6)]}
                </Text>
              </View>
            ))}
            
            {/* Golden shimmer particles */}
            {[...Array(40)].map((_, i) => (
              <View 
                key={`particle-${i}`}
                className="absolute bg-amber-400/30 rounded-full blur-sm animate-float"
                style={{
                  width: 1 + Math.random() * 3,
                  height: 1 + Math.random() * 3,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${10 + Math.random() * 20}s`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </View>
          
          <View className="absolute inset-0 flex items-center justify-center">
            <View className="max-w-5xl px-4 text-center">
              <Text className="text-amber-300 text-sm tracking-widest uppercase mb-6">
                A Sacred Invitation
              </Text>
              
              <Text className="text-amber-100 text-5xl md:text-7xl font-bold font-serif mb-8">
                The Sacred Chamber
              </Text>
              
              <Text className="text-amber-200 text-xl md:text-2xl italic font-serif mb-12 max-w-3xl mx-auto">
                "Not everyone will feel the call. If you do — follow it."
              </Text>
              
              <Text className="text-amber-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                An intimate 5-month journey of profound transformation through sacred ritual, mystical wisdom, and soul remembrance.
              </Text>
              
              <View>
                <TouchableOpacity 
                  onPress={() => navigateToSection('overview')}
                  className="bg-gradient-to-r from-amber-800 to-amber-700 px-10 py-4 rounded-md inline-flex items-center justify-center hover:shadow-lg hover:shadow-amber-900/30 transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden relative"
                >
                  <View className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-700" />
                  <Text className="text-white font-medium text-lg">Enter The Sacred Chamber</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        
        {/* Overview Section */}
        <View id="overview" className="py-32 px-4 relative bg-stone-950">
          <TextureBackground type="noise" opacity={0.05} className="absolute inset-0">
            <View className="w-full h-full" />
          </TextureBackground>
          
          <View className="absolute inset-0 bg-gradient-to-b from-stone-950 to-stone-900" />
          
          <View className="max-w-5xl mx-auto relative z-10">
            <View className="mb-20 text-center">
              <Text className="text-amber-400 text-lg mb-4">The Sacred Chamber is Unlike Any Other Space</Text>
              <Text className="text-amber-100 text-4xl font-serif mb-6">
                This is Not Coaching. This is Initiation.
              </Text>
              
              <View className="w-24 h-px bg-gradient-to-r from-amber-500/20 via-amber-500/80 to-amber-500/20 mx-auto mb-6" />
              
              <Text className="text-amber-200 text-base max-w-2xl mx-auto mb-12">
                Trusted by transformational leaders, healers, and visionaries across the globe.
              </Text>
              
              <View className="flex-row items-center justify-center mb-12">
                <View className="w-36 h-36 rounded-full overflow-hidden border-2 border-amber-700/30 shadow-lg mr-8">
                  <Image 
                    source={{ uri: '/images/sacred-portraits/initiation-portrait.jpg' }}
                    className="w-full h-full object-cover"
                    resizeMode="cover"
                  />
                </View>
                
                <View className="max-w-xl text-left">
                  <Text className="text-amber-100 text-xl italic font-serif mb-2">
                    "The Sacred Chamber is a space of ancient remembrance, where the veils between worlds thin, and you reconnect with the truth of who you are—beyond conditioning, beyond limitation, beyond the stories that have kept you small."
                  </Text>
                  <Text className="text-amber-400 text-sm font-medium">— Jordi Amat, Sacred Guide</Text>
                </View>
              </View>
            </View>
            
            <View className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <View className="bg-stone-900/50 p-6 rounded-lg border border-amber-900/30">
                <Text className="text-amber-400 text-sm mb-4">The Container</Text>
                <Text className="text-amber-100 text-3xl font-serif mb-6">A Sacred Vessel for Your Becoming</Text>
                <Text className="text-amber-50 leading-relaxed mb-8">
                  The Sacred Chamber is an intimate 5-month container that combines ancient wisdom practices, energetic transmission, and personalized ritual work. Limited to just 4 initiates per cycle, this is a space of profound attention and witnessing.
                </Text>
                
                <View className="w-16 h-px bg-amber-700 my-6" />
                
                <Text className="text-amber-50 italic mb-8">
                  We meet in ceremony twice monthly within your private sacred space, complemented by personalized practices, energy work, and voice message support throughout your journey.
                </Text>
                
                <View className="mt-10 space-y-5">
                  <View className="flex-row items-center">
                    <View className="w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4">
                      <Text className="text-amber-400 text-lg">✦</Text>
                    </View>
                    <Text className="text-amber-50 flex-1">Bi-monthly sacred ceremonies within your private vessel</Text>
                  </View>
                  <View className="flex-row items-center">
                    <View className="w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4">
                      <Text className="text-amber-400 text-lg">✧</Text>
                    </View>
                    <Text className="text-amber-50 flex-1">Personalized practices and energy work</Text>
                  </View>
                  <View className="flex-row items-center">
                    <View className="w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4">
                      <Text className="text-amber-400 text-lg">⊛</Text>
                    </View>
                    <Text className="text-amber-50 flex-1">Continuous voice message support throughout</Text>
                  </View>
                </View>
              </View>
              
              <View className="bg-stone-900/50 p-6 rounded-lg border border-amber-900/30">
                <Text className="text-amber-400 text-sm mb-4">The Invitation</Text>
                <Text className="text-amber-100 text-3xl font-serif mb-6">Who The Chamber Calls</Text>
                <Text className="text-amber-50 leading-relaxed mb-6">
                  You may be an entrepreneur, healer, artist, or leader feeling called to deeper work. You've done personal development, but sense there's something more sacred waiting. You're ready to shed what no longer serves and step into the fullness of your sovereign power.
                </Text>
                
                <View className="w-16 h-px bg-amber-700 my-6" />
                
                <Text className="text-amber-300 italic mb-8 text-lg">
                  You are being invited into the space beyond performance.
                </Text>
                
                <Text className="text-amber-50 italic mb-8">
                  The Sacred Chamber isn't for everyone. It's for souls ready to commit to their transformation—those who sense they're being called to something greater than what the conventional world offers.
                </Text>
                
                <View className="mt-10 space-y-5">
                  <View className="flex-row items-center">
                    <View className="w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4">
                      <Text className="text-amber-400 text-lg">☽</Text>
                    </View>
                    <Text className="text-amber-50 flex-1">You're ready to move beyond productivity and into presence</Text>
                  </View>
                  <View className="flex-row items-center">
                    <View className="w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4">
                      <Text className="text-amber-400 text-lg">☉</Text>
                    </View>
                    <Text className="text-amber-50 flex-1">You feel drawn to sacred ritual and mystical practice</Text>
                  </View>
                  <View className="flex-row items-center">
                    <View className="w-8 h-8 rounded-full bg-amber-900/30 border border-amber-700/50 flex items-center justify-center mr-4">
                      <Text className="text-amber-400 text-lg">◯</Text>
                    </View>
                    <Text className="text-amber-50 flex-1">You sense there's a greater purpose to your existence waiting to unfold</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        
        {/* Journey Section */}
        <View id="journey" className="py-32 px-4 relative bg-stone-900">
          <View className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950" />
          
          {/* Sacred geometry background - subtle and luxurious */}
          <View className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
            <Text className="text-amber-400 text-[600px]">⊛</Text>
          </View>
          
          <View className="max-w-5xl mx-auto relative z-10">
            <View className="mb-20 text-center">
              <Text className="text-amber-400 text-lg mb-4">The Transformational Path</Text>
              <Text className="text-amber-100 text-4xl font-serif mb-12">
                Your Sacred Chamber Journey
              </Text>
              
              <View className="w-24 h-px bg-gradient-to-r from-amber-500/20 via-amber-500/80 to-amber-500/20 mx-auto mb-12" />
            </View>
            
            <View className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
              {journeyPhases.map((phase, index) => (
                <View key={index} className="border border-amber-900/30 rounded-lg p-8 hover:border-amber-700/50 transition-all duration-500 bg-stone-900/30 hover:bg-stone-900/50">
                  <View className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-amber-900/30 border border-amber-700/30">
                    <Text className="text-amber-400 text-2xl">{phase.symbol}</Text>
                  </View>
                  <Text className="text-amber-100 text-xl font-serif mb-3">{phase.name}</Text>
                  <Text className="text-amber-400/70 text-sm mb-4">{phase.duration}</Text>
                  <Text className="text-amber-50 leading-relaxed">{phase.description}</Text>
                </View>
              ))}
            </View>
            
            <View className="text-center">
              <Text className="text-amber-100 text-2xl font-serif mb-8">What You'll Receive</Text>
              
              <View className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <View className="bg-stone-900/30 p-6 rounded-lg border border-amber-800/20 mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300">
                  <View className="flex items-center mb-4">
                    <View className="w-10 h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3">
                      <Text className="text-amber-400 text-xl">✧</Text>
                    </View>
                    <Text className="text-amber-400 text-lg">Sacred Ceremonies</Text>
                  </View>
                  <Text className="text-amber-50">10 private ceremonial sessions with personalized rituals and energy work</Text>
                </View>
                
                <View className="bg-stone-900/30 p-6 rounded-lg border border-amber-800/20 mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300">
                  <View className="flex items-center mb-4">
                    <View className="w-10 h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3">
                      <Text className="text-amber-400 text-xl">⊛</Text>
                    </View>
                    <Text className="text-amber-400 text-lg">Daily Practices</Text>
                  </View>
                  <Text className="text-amber-50">Custom-crafted rituals, meditations, and embodiment practices</Text>
                </View>
                
                <View className="bg-stone-900/30 p-6 rounded-lg border border-amber-800/20 mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300">
                  <View className="flex items-center mb-4">
                    <View className="w-10 h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3">
                      <Text className="text-amber-400 text-xl">☉</Text>
                    </View>
                    <Text className="text-amber-400 text-lg">Sacred Connection</Text>
                  </View>
                  <Text className="text-amber-50">Voice message support and energetic holding throughout your journey</Text>
                </View>
                
                <View className="bg-stone-900/30 p-6 rounded-lg border border-amber-800/20 mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300">
                  <View className="flex items-center mb-4">
                    <View className="w-10 h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3">
                      <Text className="text-amber-400 text-xl">☽</Text>
                    </View>
                    <Text className="text-amber-400 text-lg">Soul Library</Text>
                  </View>
                  <Text className="text-amber-50">Access to exclusive teachings, meditations, and wisdom transmissions</Text>
                </View>
                
                <View className="bg-stone-900/30 p-6 rounded-lg border border-amber-800/20 mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300">
                  <View className="flex items-center mb-4">
                    <View className="w-10 h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3">
                      <Text className="text-amber-400 text-xl">◯</Text>
                    </View>
                    <Text className="text-amber-400 text-lg">Energy Clearings</Text>
                  </View>
                  <Text className="text-amber-50">Regular energetic clearings and sacred attunements</Text>
                </View>
                
                <View className="bg-stone-900/30 p-6 rounded-lg border border-amber-800/20 mb-6 hover:border-amber-700/30 hover:bg-stone-900/50 transition-all duration-300">
                  <View className="flex items-center mb-4">
                    <View className="w-10 h-10 rounded-full bg-amber-900/30 border border-amber-700/30 flex items-center justify-center mr-3">
                      <Text className="text-amber-400 text-xl">✦</Text>
                    </View>
                    <Text className="text-amber-400 text-lg">Completion Ceremony</Text>
                  </View>
                  <Text className="text-amber-50">Sacred culmination ritual to honor your transformation</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        
        {/* Testimonials Section */}
        <View id="testimonials" className="py-32 px-4 relative overflow-hidden bg-stone-950">
          <View className="absolute inset-0 bg-gradient-to-b from-stone-950 to-stone-900" />
          
          {/* Floating gold particles */}
          <View className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <View 
                key={`particle-${i}`}
                className="absolute bg-amber-400/20 rounded-full blur-sm animate-float"
                style={{
                  width: 2 + Math.random() * 4,
                  height: 2 + Math.random() * 4,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${20 + Math.random() * 40}s`,
                  animationDelay: `${Math.random() * 20}s`,
                }}
              />
            ))}
          </View>
          
          <View className="max-w-5xl mx-auto relative z-10">
            <View className="mb-20 text-center">
              <Text className="text-amber-400 text-lg mb-4">Sacred Reflections</Text>
              <Text className="text-amber-100 text-4xl font-serif mb-12">
                From Those Who've Walked The Path
              </Text>
              
              <View className="w-24 h-px bg-gradient-to-r from-amber-500/20 via-amber-500/80 to-amber-500/20 mx-auto mb-12" />
            </View>
            
            {/* Featured testimonial */}
            <View className="mb-20 border-2 border-amber-700/30 rounded-xl p-12 bg-gradient-to-br from-amber-900/20 to-stone-900/60 relative overflow-hidden">
              {/* Background decorative elements */}
              <View className="absolute top-5 left-6 opacity-20">
                <Text className="text-9xl text-amber-400 font-serif">"</Text>
              </View>
              
              <View className="absolute bottom-5 right-6 opacity-20">
                <Text className="text-9xl text-amber-400 font-serif">"</Text>
              </View>
              
              <View className="flex-row items-center">
                <View className="w-40 h-40 rounded-full overflow-hidden border-2 border-amber-700/30 shadow-xl mr-10 relative">
                  <Image 
                    source={{ uri: '/images/sacred-portraits/testimonial-portrait.jpg' }}
                    className="w-full h-full object-cover"
                    resizeMode="cover"
                  />
                  <View className="absolute inset-0 bg-gradient-to-t from-amber-950/40 to-transparent" />
                </View>
                
                <View className="flex-1">
                  <Text className="text-amber-200 text-2xl font-serif italic mb-8 leading-relaxed">
                    "The Sacred Chamber transformed not just how I see myself, but how I walk through the world. This isn't coaching—it's remembrance of your divine nature."
                  </Text>
                  
                  <View className="w-16 h-px bg-gradient-to-r from-amber-600/50 to-amber-400/30 my-6" />
                  
                  <View>
                    <Text className="text-amber-100 font-medium text-lg">Elena R.</Text>
                    <Text className="text-amber-400">Spiritual Guide & Oracle</Text>
                    <Text className="text-amber-100 text-sm italic mt-1">— 6-month Sacred Chamber Journey</Text>
                  </View>
                </View>
              </View>
            </View>
            
            {/* Highlighted powerful testimonial */}
            {/* <View className="mb-24 relative">
              <View className="absolute inset-0 bg-amber-500/5 blur-2xl rounded-3xl" />
              <View className="border-2 border-amber-600/30 rounded-xl p-10 bg-stone-950/80 backdrop-blur-sm shadow-xl shadow-amber-900/20 relative overflow-hidden">
                <View className="max-w-3xl mx-auto text-center py-8">
                  <Text className="text-amber-200 text-3xl font-serif italic mb-6 leading-relaxed">
                    "The Sacred Chamber transformed not just how I see myself, but how I walk through the world. This is not coaching — it's a remembrance."
                  </Text>
                  <Text className="text-amber-400 text-lg">— Elena R., Sacred Chamber Client</Text>
                </View>
              </View>
            </View> */}
            
            {/* Other testimonials */}
            <View className="space-y-16">
              {testimonials.slice(1).map((testimonial, index) => (
                <View 
                  key={index} 
                  className="border border-amber-800/30 rounded-xl p-10 bg-stone-900/60 relative overflow-hidden"
                >
                  {/* Decorative quote marks */}
                  <View className="absolute top-5 left-6 opacity-10">
                    <Text className="text-9xl text-amber-800 font-serif">"</Text>
                  </View>
                  
                  <View className="absolute bottom-5 right-6 opacity-10">
                    <Text className="text-9xl text-amber-800 font-serif">"</Text>
                  </View>
                  
                  <View className="relative z-10">
                    <Text className="text-amber-100 text-xl md:text-2xl font-serif italic mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </Text>
                    
                    <View className="w-16 h-px bg-gradient-to-r from-amber-600/50 to-amber-400/30 my-8" />
                    
                    <View className="flex-row items-center">
                      <View className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500/30 to-amber-700/30 mr-4 flex items-center justify-center">
                        <Text className="text-amber-400 text-xl">{testimonial.name.charAt(0)}</Text>
                      </View>
                      <View>
                        <Text className="text-amber-100 font-medium">{testimonial.name}</Text>
                        <Text className="text-amber-400">{testimonial.title}</Text>
                        <Text className="text-amber-100 text-sm italic">— {testimonial.journey}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
        
        {/* Readiness Section */}
        <View id="readiness" className="py-32 px-4 relative bg-stone-900">
          <View className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950" />
          
          <View className="max-w-5xl mx-auto relative z-10">
            <View className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <View className="bg-stone-900/50 p-6 rounded-lg border border-amber-900/30">
                <Text className="text-amber-400 text-lg mb-4">The Sacred Call</Text>
                <Text className="text-amber-100 text-3xl font-serif mb-8">
                  Is This Your Time?
                </Text>
                
                <Text className="text-amber-50 leading-relaxed mb-8">
                  The Sacred Chamber calls to those ready to transcend limitations and step into their sovereign power. This is not for the casually curious, but for souls committed to transformation.
                </Text>
                
                <Text className="text-amber-50 leading-relaxed mb-8">
                  The Sacred Chamber begins at <span className="text-amber-300">$4444</span>. This is a high-level investment of energy, devotion, and presence.
                </Text>
                
                <Text className="text-amber-50 leading-relaxed mb-8">
                  With just 4 spaces available each cycle, this ensures the depth and attention your journey deserves.
                </Text>
                
                <Text className="text-amber-200 italic font-serif mb-12">
                  "Those who feel the call know it in their bones. There is no convincing needed—only the courage to answer."
                </Text>
                
                <TouchableOpacity 
                  onPress={handleApplyClick}
                  className="bg-gradient-to-r from-amber-800 to-amber-700 px-10 py-5 rounded-md inline-flex items-center justify-center hover:shadow-lg hover:shadow-amber-900/30 transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden relative"
                >
                  <View className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-700" />
                  <Text className="text-white font-medium text-lg">Begin Your Sacred Application</Text>
                </TouchableOpacity>
              </View>
              
              <View className="bg-stone-900/50 p-6 rounded-lg border border-amber-900/30">
                <Text className="text-amber-400 text-lg mb-4">Signs of Readiness</Text>
                <Text className="text-amber-100 text-3xl font-serif mb-8">
                  You May Be Called If...
                </Text>
                
                <View className="space-y-4 mb-8">
                  {readinessChecklist.map((item, index) => (
                    <View key={index} className="flex-row items-start">
                      <Text className="text-amber-400 mr-3">✦</Text>
                      <Text className="text-amber-50 flex-1">{item}</Text>
                    </View>
                  ))}
                </View>
                
                <View className="border border-amber-800/30 rounded-lg p-8 bg-stone-900/40">
                  <Text className="text-amber-100 text-lg font-serif mb-4">
                    Next Sacred Chamber Cycle
                  </Text>
                  <Text className="text-amber-50 mb-2">
                    <Text className="text-amber-400">Applications open:</Text> September 15-30
                  </Text>
                  <Text className="text-amber-50 mb-2">
                    <Text className="text-amber-400">Journey begins:</Text> October New Moon
                  </Text>
                  <Text className="text-amber-50 mb-2">
                    <Text className="text-amber-400">Spaces available:</Text> 4 initiates
                  </Text>
                  <Text className="text-amber-50 mb-4">
                    <Text className="text-amber-400">Application process:</Text> Written reflection followed by sacred connection call
                  </Text>
                  
                  <TouchableOpacity 
                    onPress={() => {}}
                    className="border border-amber-600/30 py-3 rounded-md flex items-center justify-center hover:bg-amber-900/20 transition-all duration-300"
                  >
                    <Text className="text-amber-400 text-sm">Join the Waiting List</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        
        {/* Final Call to Action */}
        <View className="py-32 px-4 relative bg-stone-950">
          <View className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950" />
          
          {/* Sacred ambient glow */}
          <View className="absolute inset-0">
            <View className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-600/5 blur-3xl" />
          </View>
          
          <View className="max-w-3xl mx-auto text-center relative z-10">
            <Text className="text-amber-300 italic font-serif mb-8">
              "There is a place within you that already remembers."
            </Text>
          
            <Text className="text-amber-300 text-5xl md:text-6xl font-serif mb-10">
              The Chamber Awaits You
            </Text>
            
            <Text className="text-amber-100 text-xl mb-12 max-w-2xl mx-auto">
              If you've read this far, you've felt the resonance. Trust the call that brought you here.
            </Text>
            
            {/* Value summary section */}
            {/* <View className="bg-stone-900/40 border border-amber-800/30 rounded-lg p-8 mb-12 max-w-2xl mx-auto">
              <Text className="text-amber-300 text-lg font-serif mb-6">Inside the Chamber, you'll receive:</Text>
              <View className="space-y-4">
                <View className="flex-row items-center">
                  <Text className="text-amber-400 mr-3 text-xl">✦</Text>
                  <Text className="text-amber-100 text-lg">1:1 Sacred Sessions</Text>
                </View>
                <View className="flex-row items-center">
                  <Text className="text-amber-400 mr-3 text-xl">✦</Text>
                  <Text className="text-amber-100 text-lg">Personalized Ritual Guidance</Text>
                </View>
                <View className="flex-row items-center">
                  <Text className="text-amber-400 mr-3 text-xl">✦</Text>
                  <Text className="text-amber-100 text-lg">Private Voice Channel Support</Text>
                </View>
              </View>
            </View> */}
            
            {/* Sacred bullet summary */}
            <View className="flex items-center justify-center mb-12">
              <View className="space-y-4 inline-block text-left">
                <View className="flex-row items-center">
                  <Text className="text-amber-400 mr-3 text-xl">⊹</Text>
                  <Text className="text-amber-100">5-month sacred container for profound transformation</Text>
                </View>
                <View className="flex-row items-center">
                  <Text className="text-amber-400 mr-3 text-xl">⊛</Text>
                  <Text className="text-amber-100">Bi-monthly ceremonial sessions & continuous support</Text>
                </View>
                <View className="flex-row items-center">
                  <Text className="text-amber-400 mr-3 text-xl">✧</Text>
                  <Text className="text-amber-100">Limited to 4 initiates per cycle. By invitation only.</Text>
                </View>
              </View>
            </View>
            
            <View>
              <TouchableOpacity 
                onPress={handleApplyClick}
                className="bg-gradient-to-r from-amber-700 to-amber-600 px-12 py-6 rounded-md inline-flex items-center justify-center hover:shadow-lg hover:shadow-amber-700/30 transition-all duration-500 transform hover:-translate-y-1 group overflow-hidden relative"
              >
                <View className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-700" />
                <View className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-amber-500/20 blur-xl transition-opacity duration-1000" />
                <Text className="text-white font-medium text-xl">Begin My Application</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
} 