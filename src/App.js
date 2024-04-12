import { Route, Routes, useNavigate,  } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import  Contact  from './Component/Contact';
import  Skills from './Component/Skills';
import Project from './Component/Project';


function App() {
  const Navigate =useNavigate();
  return (
    <>
   {/* <div id="tsparticles"> */}
    
    <div className='App'>
  
          <Toolbar className="navbar navbar-dark bg-primary"   id='right-side'>
          <Button color="inherit" onClick={()=>Navigate('/')}  >Home</Button>
          <Button color="inherit" onClick={()=>Navigate('/skills')}>skills</Button>
          <Button color="inherit" onClick={()=>Navigate('/about')}>About</Button>
          <Button color="inherit" onClick={()=>Navigate('/contact')}>contact</Button>
          <Button color="inherit" onClick={()=>Navigate('/project')}>Project</Button>
         
          

          </Toolbar>

       
          </div>
          <Routes className="container2">
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/project' element={<Project/>}/>
            
          </Routes>

    {/* </div> */}
    </>
  );
}

export default App;
