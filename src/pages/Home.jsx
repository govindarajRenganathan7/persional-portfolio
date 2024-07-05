import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from '../components/Header'; // Import your Header component
import logo from '../assets/logo_transparent.png'; // Adjust the path to your logo image

const Home = () => {
  return (
    <>
      <Header />
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <Container id='about'>
                <div className="text-center mb-4">
                  <img src={logo} alt="Logo" style={{ maxWidth: '150px' }} />
                  <h1 className="mt-3">Govindaraj Renganathan</h1>
                  <p className="text-muted">Passionate MERN Stack Developer</p>
                </div>
                <p>Hello, I'm Govindaraj, a passionate MERN stack developer with a focus on building scalable web applications. I have experience with React, Node.js, Express, and MySQL.</p>
                <p>I am currently working on expanding my portfolio and exploring new technologies to enhance my skills.</p>
                </Container>
                <Container className='d-flex justify-content-between'>
                <Button variant="primary" href="#portfolio" className="me-2 w-40">View Portfolio</Button>
                <Button variant="outline-primary" className='ms-2 w-40' href="#contact">Contact Me</Button>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-dark text-light py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2 id='projects'>Featured Projects</h2>
              {/* Add your featured projects section here */}
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>Description of Project 1</Card.Text>
                  <Button variant="primary">View Project</Button>
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Project 2</Card.Title>
                  <Card.Text>Description of Project 2</Card.Text>
                  <Button variant="primary">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <h2>Skills & Expertise</h2>
              {/* Add your skills section here */}
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                {/* Add more skills as needed */}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="py-5">
        <Row>
          <Col>
            <h2 id="portfolio">Portfolio</h2>
            {/* Add your portfolio section here */}
            <p>This section will showcase more of your projects or link to a dedicated portfolio page.</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-light text-dark py-5">
        <Container>
          <Row>
            <Col>
              <h2 id="contact">Contact Me</h2>
              {/* Add your contact form or contact information here */}
              <p>Feel free to reach out to discuss potential projects or collaborations.</p>
              <p>Email: govindarajrenganthan@gmail.com</p>
              <p>Phone: 9095068192</p>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* Add more sections as needed */}
    </>
  );
};

export default Home;
