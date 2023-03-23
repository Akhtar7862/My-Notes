import React, {useEffect,} from 'react';
import  {Link, useLocation}  from 'react-router-dom'
import logo from "./logo.png";


function Navbar() {
  let location = useLocation();
  useEffect(() => {
    let menu= document.querySelector(".mobile-menu")
    menu.style.transform= "translateY(-130%)"
    });

  const mobileMenu= (e)=>{
    let menu= document.querySelector(".mobile-menu")
    let layer1= document.getElementById("layer1")
    let layer2= document.getElementById("layer2")
    let layer3= document.getElementById("layer3")

    if(menu.style.transform==="translateY(-130%)"){
      menu.style.transform= "translateY(0%)";
      layer2.style.display= "none";
      layer1.style.transform= "rotate(135deg)";
      layer1.style.position= "relative";
      layer3.style.position= "relative";
      layer1.style.top= "5px";
      layer3.style.bottom= "5px";
      layer3.style.transform= "rotate(45deg)";
     }  

     else{
       menu.style.transform= "translateY(-130%)"
       layer2.style.display= "revert"
       layer1.style.transform= "revert"
       layer1.style.position= "revert";
       layer3.style.position= "revert";
       layer1.style.top= "revert";
       layer3.style.bottom= "revert";
       layer3.style.transform= "revert";
     }


  }
  const linkClick= ()=>{
    let menu= document.querySelector(".mobile-menu")
    let layer1= document.getElementById("layer1")
    let layer2= document.getElementById("layer2")
    let layer3= document.getElementById("layer3")

    menu.style.transform= "translateY(-130%)"
    layer2.style.display= "revert"
    layer1.style.transform= "revert"
    layer1.style.position= "revert";
    layer3.style.position= "revert";
    layer1.style.top= "revert";
    layer3.style.bottom= "revert";
    layer3.style.transform= "revert";
  }


  return (
    <>  
  <nav>
    <div className="logo">
    <img src={logo} alt="" />
    <h1 id='logo-text'><span id="blue">M</span>y <span id="blue">N</span>otes</h1>
    </div>
    <ul className='desktop-menu'>
        <li><Link className={`${location.pathname==="/"? "active":"navItem"}`} to="/">Home</Link></li>
        <li><Link className={`${location.pathname==="/notes"? "active":"navItem"}`} to="/notes">Notes</Link></li>
        <li><Link className={`${location.pathname==="/about"? "active":"navItem"}`} to="/about">About</Link></li>
        <li><Link className={`${location.pathname==="/contact"? "active":"navItem"}`} to="/contact">Contact</Link></li>
    </ul>
    <div id="burger" onClick={mobileMenu}>
      <div className="layer" id='layer1'></div>
      <div className="layer" id='layer2'></div>
      <div className="layer" id='layer3'></div>
    </div>

  </nav>
    <div className="mobile-menu">
    <ul>
        <li><Link to="/" className={`nav2 ${location.pathname==="/"?"activeM":"navItem2"}`} onClick={linkClick}>Home</Link></li>
        <li><Link to="/notes" className={`nav2 nav3 ${location.pathname==="/notes"?"activeM":"navItem2"}`} onClick={linkClick}>Notes</Link></li>
        <li><Link to="/about" className={`nav2 nav3 ${location.pathname==="/about"?"activeM":"navItem2"}`} onClick={linkClick}>About</Link></li>
        <li><Link to="/contact" className={`nav3 ${location.pathname==="/contact"?"activeM":"navItem2"}`} onClick={linkClick}>Contact</Link></li>
    </ul>
    </div>
    </>
  )
}

export default Navbar
