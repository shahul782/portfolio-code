import * as React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import './Home.css'
import { Link } from "react-router-dom";

<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

export default function Home() {
  const config={
    social:{
      facebook:'https://www.facebook.com/shahul.shahulhameed.10441',
      instragram:"https://www.instagram.com/shahul_shaa04/",
      github:'https://github.com/shahul782',
      linkeddin:'https://www.linkedin.com/in/shahul-hameed-181592275/'
      
    }
  }
  
  return (
    <>
    <div class='info'>
      <h2>Welcome to My Portfolio</h2>
   <h2>Hi,I'm Shahul Hameed</h2>
   <h1><span>M</span>ERN stack devoloper</h1>
   <h3>web designer and full stack devoloper</h3>
   <Button>
   <Link to="https://drive.google.com/file/d/1DZxzmj27mM8_wZrGk36q0CrQwi_PSpyL/view?usp=sharing" target="_blank" >resume</Link>   </Button>
  
   </div>
   <div class='image'>
    <img src="https://e1.pxfuel.com/desktop-wallpaper/411/249/desktop-wallpaper-be-your-awesome-mern-stack-developer-by-nishant08111-mern-stack-thumbnail.jpg" class='photo'/>
    
   </div>
   <div class='home-cl'>
    <a href={config.social.facebook}><FacebookIcon/></a>
    <a href={config.social.instragram}><InstagramIcon/></a>
    <a href={config.social.github}><GitHubIcon/></a>
    <a href={config.social.linkeddin}><LinkedInIcon/></a>
   </div>
   </>
  
    
  )}



  
 
  


