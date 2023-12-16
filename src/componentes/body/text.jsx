'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          '<>Desarrollador Web</>',
          'Freelancer',
          'Full Stack Developer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
