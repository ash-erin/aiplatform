import React, { useRef, useEffect, useState } from 'react';
import { Play, Plus, Info, X } from 'lucide-react';
import { Movie } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface HeroProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
  onAddToList: (movie: Movie) => void;
  onMoreInfo: (movie: Movie) => void;
  myList: string[];
}

export const Hero: React.FC<HeroProps> = ({ movie, onPlay, onAddToList, onMoreInfo, myList }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const isInMyList = myList.includes(movie.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              // Hero is visible, play the video
              videoRef.current.play().then(() => {
                setIsVideoPlaying(true);
              }).catch((error) => {
                console.log('Video autoplay failed:', error);
              });
            } else {
              // Hero is not visible, pause the video
              videoRef.current.pause();
              setIsVideoPlaying(false);
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the hero is visible
        rootMargin: '0px'
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    console.log('Video failed to load, falling back to background image');
    setIsVideoLoaded(false);
  };

  return (
    <div ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={movie.backdrop}
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        style={{ 
          display: isVideoLoaded ? 'block' : 'none',
          filter: 'brightness(0.7)' // Slightly darken video for better text readability
        }}
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback Background Image */}
      {!isVideoLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${movie.backdrop})` }}
        />
      )}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081932]/80 via-[#081932]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081932]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {movie.title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md leading-relaxed">
          {movie.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onPlay(movie)}
            className="flex items-center justify-center space-x-3 bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg"
          >
            <Play size={20} fill="currentColor" />
            <span>Play</span>
          </button>
          
          <button
            onClick={() => onAddToList(movie)}
            className={`flex items-center justify-center space-x-3 px-8 py-3 rounded-md font-semibold transition-all duration-200 shadow-lg ${
              isInMyList 
                ? 'bg-[#ddb870] text-[#081932] hover:bg-[#ddb870]/80' 
                : 'bg-[#0f2f5f]/80 text-white hover:bg-[#ddb870] hover:text-[#081932] backdrop-blur-sm'
            }`}
          >
            {isInMyList ? (
              <X size={20} />
            ) : (
              <Plus size={20} />
            )}
            <span>My List</span>
          </button>
          
          <button
            onClick={() => onMoreInfo(movie)}
            className="flex items-center justify-center space-x-3 bg-[#0f2f5f]/80 text-white px-8 py-3 rounded-md font-semibold hover:bg-[#0f2f5f] transition-all duration-200 backdrop-blur-sm shadow-lg"
          >
            <Info size={20} />
            <span>More Info</span>
          </button>
        </div>
      </div>

      {/* Video Status Indicator (for development - remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
          Video: {isVideoLoaded ? (isVideoPlaying ? 'Playing' : 'Paused') : 'Loading...'}
        </div>
      )}
    </div>
  );
};