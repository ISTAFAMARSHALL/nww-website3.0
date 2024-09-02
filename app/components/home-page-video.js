'use client';

import React from 'react';

export default function HomePageVideo() {
  return (
    <section className="relative w-full flex justify-center items-center py-10">
      <video
        controls
        className="w-full max-w-4xl rounded-lg shadow-lg"
        style={{ height: 'auto', objectFit: 'cover' , marginTop: '-20px'}}
      >
        <source src="/videos/home-page/More_Than_Just_a_Lunch-vimeo-916311975-hls-fastly_skyfire_sep-4646dash-fastly_skyfire_sep-audio-b8fb5042-1.mp4" type="video/mp4" />
        
      </video>
    </section>
  );
}
