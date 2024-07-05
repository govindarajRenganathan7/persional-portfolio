import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg='fadeddark' variant='dark' expand="lg" sticky='top'>
        <Container className='p-0'>
            <Navbar.Brand className='p-0' href='#'>
                <img className='d-inline-block align-center ' style={{imageRendering:'optimizeQuality',minWidth:"1vw", maxWidth:"5rem", height:'auto'}} src="../../src/assets/logo_transparent.png" alt="logo" />
                Govindarj Renganathan
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto text-center'>
                    <Nav.Link href='#about' >About</Nav.Link>
                    <Nav.Link className='mx-4'href='#portfolio'>Portfolio</Nav.Link>
                    <Nav.Link className='mx-4'href='#projects'>Projects</Nav.Link>
                    <Nav.Link href='#contact'>Contact</Nav.Link>
                </Nav>
                <Nav className='ms-auto'>
                    <Button variant='outline-light' href='#portfolio'>View Portfolio</Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    
  )
}

export default Header
