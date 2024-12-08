'use client';

import React, { useState, useEffect } from 'react';
import { getHeroVideos } from '@/utils/getHeroVideos';

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videos, setVideos] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    try {
      const heroVideos = getHeroVideos();
      console.log('Found hero videos:', heroVideos);
      setVideos(heroVideos);
    } catch (err) {
      console.error('Error loading videos:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    }
  }, []);

  useEffect(() => {
    if (videos.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % videos.length;
        console.log('Switching to video index:', newIndex);
        return newIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [videos]);

  const currentVideo = videos.length > 0 
    ? videos[currentVideoIndex]
    : "/videos/hero.mp4";

  return (
    <div className="relative h-[calc(100vh-108px)] mt-[108px]">
      {/* Debug info */}
      <div className="absolute top-0 left-0 z-50 bg-black bg-opacity-0 text-white opacity-0 p-2 text-xs">
        <div>Total videos: {videos.length}</div>
        <div>Current index: {currentVideoIndex}</div>
        <div>Current video: {currentVideo}</div>
        {error && <div className="text-red-500">Error: {error}</div>}
      </div>

      <video
        key={currentVideo}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={currentVideo}
        onError={(e) => {
          console.error('Video error:', e);
          setError('Error playing video');
        }}
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">TDA Enterprises</h1>
          <p className="text-xl">Environmental Health and Safety Training and Consulting</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
