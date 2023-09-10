import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LinearProgress from '@mui/material/LinearProgress';
import HexagonIcon from '@mui/icons-material/Hexagon';
import Box from '@mui/material/Box';
import blue from '@mui/material/colors/blue';
import { relative } from 'path';

export default function Skill() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to('#aalu', {
      scrollTrigger: { trigger: '#aalu', start: 'top 80%' },
      x: 0,
      opacity: 1,
      duration: 1,
    });
  }, []);
  return (
    <div className="h-screen" id="skills__section">
      <Box id="aalu" className="translate-x-60 opacity-0 w-96">
        <p className="font-quicksand">Photoshop</p>
        <LinearProgress variant="determinate" value={70} />
        <Box sx={{ position: 'relative', width: 90, height: 90 }}>
          <HexagonIcon sx={{ fontSize: 90, color: blue[500] }} />
          <div className="w-10 h-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"></div>
        </Box>
      </Box>
    </div>
  );
}
