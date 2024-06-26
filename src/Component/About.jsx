import './About.css';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const About = () => {
  return (
    <>
     <div class='info'>
   <h3>Hi,I'm Shahul Hameed</h3>
   <p className='summary'>"I am MERN fullstack developer fresher in software design analysis, development,
    testing and implimentation of web and client server application using microsoft technologies ability to learn and develope using new technologies quickly with interpersonal skills."</p>

 
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