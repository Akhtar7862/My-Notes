// import react from 'react'
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Notes from './components/Notes';

function App() {
  return (
    <BrowserRouter> 
    <Navbar/>   
  <Routes> 
  <Route exact path="/" element={<Home /> } />
  <Route exact path="/notes" element={<Notes /> } />
  <Route exact path="/about" element={<About /> } />
  <Route exact path="/contact" element={<Contact /> } />
  </Routes> 
  </BrowserRouter> 
  
  );
}

export default App;
