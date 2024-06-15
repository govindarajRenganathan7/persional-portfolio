import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../assets/img/logo.svg"
import socialIcon1 from '../assets/img/nav-icon1.svg'
import socialIcon2 from '../assets/img/nav-icon2.svg'
import socialIcon3 from '../assets/img/nav-icon3.svg'
const NavBar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.onScrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const updateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand = 'lg' bg = "dark" variant="dark">
        <Container>
            <Navbar.Brand href='#Home' className = {scrolled ? "scrolled" : ''}>
                <img src={logo} alt='logo'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'>
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nab'>
                <Nav className='me-auto'>
                    <Nav.Link href='#Home' className={activeLink === "Home" ? "active" : ""} onClick={() =>updateActiveLink("Home")}>Home</Nav.Link>
                    <Nav.Link href='#Skills' className={activeLink === 'Skills' ? "active" : ""} onClick={() =>updateActiveLink("Skills")}>Skills</Nav.Link>
                    <Nav.Link href='#Projects' className={activeLink === "Projects" ? "active" : ""} onClick={() =>updateActiveLink("Projects")}>Projects</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social icon'>
                        <a href=''><img src={socialIcon1} alt='icon'></img></a>
                        <a href=''><img src={socialIcon2} alt='icon'></img></a>
                        <a href=''><img src={socialIcon3} alt='icon'></img></a>
                    </div>
                    <button id='vvd' onClick={() => console.log(connected)}><span>Let's Connect</span></button>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar
