import './About.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const About = () => {
  return (
    <>
     <div class='info'>
   <h3>Hi,I'm Shahul Hameed</h3>
   <p className='summary'>"Welcome to MERN stack development, where MongoDB, Express.js, React.js, and Node.js converge to build powerful web applications. Mastering these technologies opens doors to endless possibilities in web development. Dive deep into each layer of the stack, honing your skills in backend logic, frontend design, and database management. Practice regularly, collaborate with peers, and stay updated with the latest trends to excel in this dynamic field. Build a strong portfolio showcasing your projects and expertise to stand out to potential employers. With dedication and perseverance,
     you'll soon be crafting innovative solutions and making your mark in the world of MERN stack development."</p>

 
   </div>
   <div class='image'>
    <img src=" ./img.jpg" class='photo'/>
    
   </div>
  
   
   <Time/>
   </>
  )
}


function Time() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {/* <h1>Current Date and Time</h1> */}
     <p className='time'>{currentDate.toLocaleString()}</p>
     {/* <a href="/shahulResume2.jpg" download="shahulResume.pdf">Download CV</a> */}
     {/* <button onclick="window.location.href='shahulResume2.jpg'">Download CV</button> */}

  


    </div>
  );
}




export default About