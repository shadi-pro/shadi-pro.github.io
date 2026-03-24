import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Navbar,
  Nav,
  Badge,
  ProgressBar,
} from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaMobileAlt,
  FaServer,
  FaPalette,
  FaRocket,
  FaEnvelope,
  FaFilePdf,
  FaDownload,
} from "react-icons/fa";
import {
  SiFlutter,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiDart,
} from "react-icons/si";

// Import our new components
import ThemeToggle from "../components/ThemeToggle";
import ResumeButton from "../components/ResumeButton";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedCard from "../components/AnimatedCard";

// Add import at top of App.js
import ContactForm from "../components/ContactForm";

import { FaTwitter } from "react-icons/fa";

function App() {
  const projects = [
    {
      id: 1,
      title: "TaskFlow Pro",
      desc: "Complete task management application with smart notifications and cloud sync",
      tech: ["Flutter", "Firebase", "Provider"],
      features: ["Cloud Sync", "Smart Notifications", "Analytics"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: 2,
      title: "WeatherWise",
      desc: "Interactive weather app with accurate forecasts and beautiful UI",
      tech: ["Flutter", "REST API", "BLoC"],
      features: ["Location-based", "Weather Maps", "7-Day Forecast"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      id: 3,
      title: "E-Commerce Mobile",
      desc: "Full-featured e-commerce app with payment integration",
      tech: ["Flutter", "Node.js", "MongoDB"],
      features: ["Payment Gateway", "Order Tracking", "Product Reviews"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      id: 4,
      title: "FitTrack",
      desc: "Fitness tracking app with workout plans and health integration",
      tech: ["Flutter", "SQLite", "Health Kit"],
      features: ["Step Tracking", "Workout Plans", "Data Analytics"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
  ];

  const skills = [
    { name: "Flutter & Dart", level: 95, icon: <SiFlutter /> },
    { name: "React.js", level: 88, icon: <SiReact /> },
    { name: "Node.js & Express", level: 85, icon: <SiNodedotjs /> },
    { name: "MongoDB", level: 80, icon: <SiMongodb /> },
    { name: "Firebase", level: 82, icon: <SiFirebase /> },
    { name: "UI/UX Design", level: 75, icon: <FaPalette /> },
    { name: "Dart Programming", level: 90, icon: <SiDart /> },
    { name: "REST APIs", level: 85, icon: <FaServer /> },
  ];

  return (
    <div className="App">
      {/* ===== Professional Navbar with Dark Mode Toggle ===== */}
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <FaCode className="me-2" />
            FlutterDev Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <div className="ms-3">
                <ThemeToggle />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 
      {/* ===== Hero Section ===== */}
      <AnimatedSection delay={0.1}>
        <section className="hero-section" id="home">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="mb-4">
                  <h4 className="text-warning mb-2">Hello, I'm</h4>
                  <h1 className="hero-title">
                    <span className="text-warning">Shadi Sayed</span>
                  </h1>
                  <h2 className="h3 mb-4">Flutter & Full Stack Developer</h2>
                </div>
                <p className="hero-subtitle">
                  Passionate Flutter developer with expertise in building
                  high-performance mobile applications. Former MERN stack
                  developer bringing web best practices to mobile development.
                </p>
                <div className="mt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="btn-custom me-3"
                  >
                    <FaRocket className="me-2" /> View Projects
                  </Button>
                  <ResumeButton />
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="btn-custom ms-3"
                  >
                    <FaEnvelope className="me-2" /> Hire Me
                  </Button>
                </div>

                {/* Social Links */}
                <div className="mt-5 pt-3">
                  <h5 className="text-white mb-3">Connect with me:</h5>
                  <div className="d-flex gap-3">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href="https://twitter.com/yourusername"
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                    >
                      <FaTwitter size={24} />
                    </a>
                    <a
                      href="mailto:your.email@example.com"
                      className="social-link"
                    >
                      <FaEnvelope size={24} />
                    </a>
                  </div>
                </div>
              </Col>

              <Col lg={6} className="text-center mt-5 mt-lg-0">
                <div className="position-relative d-inline-block">
                  {/* Profile Image Container */}
                  <div className="profile-image-container">
                    <img
                      src="/profile.jpg" // Your image path
                      alt="Shadi Sayed - Flutter Developer"
                      className="profile-img"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `
                    <div class="profile-placeholder">
                      <FaCode size={80} />
                      <div class="initials">YN</div>
                    </div>
                  `;
                      }}
                    />
                  </div>

                  {/* Floating Tech Badges */}
                  <div className="floating-badge flutter-badge">
                    <SiFlutter size={24} />
                    <span>Flutter</span>
                  </div>
                  <div className="floating-badge react-badge">
                    <SiReact size={24} />
                    <span>React</span>
                  </div>
                  <div className="floating-badge node-badge">
                    <SiNodedotjs size={24} />
                    <span>Node.js</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </AnimatedSection>
 
      {/* ===== Projects Section with Animated Cards ===== */}
      <AnimatedSection delay={0.2}>
        <section className="py-5" id="projects">
          <Container>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">My Flutter Projects</h2>
              <p className="text-muted">
                4 Production-ready mobile applications built with Flutter
              </p>
            </div>

            <Row>
              {projects.map((project, index) => (
                <Col lg={6} key={index} className="mb-4">
                  <AnimatedCard index={index}>
                    <div
                      className="card-img-top"
                      style={{
                        height: "200px",
                        background: project.gradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaMobileAlt size={80} color="white" />
                    </div>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <Card.Title className="fw-bold">
                          {project.title}
                        </Card.Title>
                        <Badge bg="primary" className="tech-badge">
                          {project.tech[0]}
                        </Badge>
                      </div>
                      <Card.Text className="text-muted mb-3">
                        {project.desc}
                      </Card.Text>
                      <div className="mb-3">
                        {project.tech.map((t, i) => (
                          <Badge
                            key={i}
                            bg="light"
                            text="dark"
                            className="me-2 mb-2 p-2"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <div className="d-flex justify-content-between">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          href={project.githubUrl}
                          target="_blank"
                        >
                          <FaGithub className="me-1" /> Code
                        </Button>
                        <Button
                          variant="primary"
                          size="sm"
                          as={Link}
                          to={`/project/${project.id}`}
                        >
                          View Details
                        </Button>
                      </div>
                    </Card.Body>
                  </AnimatedCard>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </AnimatedSection>
 
      {/* ===== Skills Section ===== */}
      <AnimatedSection delay={0.3}>
        <section className="skills-section py-5" id="skills">
          <Container>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Technical Skills</h2>
              <p className="text-muted">
                Full stack development expertise in Mobile & Web
              </p>
            </div>

            <Row className="g-4">
              {skills.map((skill, index) => (
                <Col md={6} lg={4} key={index}>
                  <div className="skill-item">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                        <span className="text-primary fs-4">{skill.icon}</span>
                      </div>
                      <div>
                        <h5 className="mb-0">{skill.name}</h5>
                        <span className="text-primary fw-bold">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <ProgressBar now={skill.level} className="mt-2" />
                  </div>
                </Col>
              ))}
            </Row>

            <Row className="mt-5 pt-4">
              <Col md={4} className="text-center mb-4">
                <div className="p-4 bg-white rounded-3 shadow-sm">
                  <h3 className="text-primary mb-3">Mobile First</h3>
                  <p className="text-muted">
                    Design and develop mobile applications first
                  </p>
                </div>
              </Col>
              <Col md={4} className="text-center mb-4">
                <div className="p-4 bg-white rounded-3 shadow-sm">
                  <h3 className="text-success mb-3">Clean Code</h3>
                  <p className="text-muted">
                    Write clean, maintainable, and scalable code
                  </p>
                </div>
              </Col>
              <Col md={4} className="text-center mb-4">
                <div className="p-4 bg-white rounded-3 shadow-sm">
                  <h3 className="text-warning mb-3">Full Stack</h3>
                  <p className="text-muted">
                    End-to-end solutions from frontend to backend
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </AnimatedSection>
 
       {/* ===== About Me Section ===== */}
      <AnimatedSection delay={0.4}>
        <section className="py-5 bg-light" id="about">
          <Container>
            <Row className="align-items-center">
              <Col lg={4} className="text-center mb-4 mb-lg-0">
                <div className="about-image-container">
                  <img
                    src="/profile.jpg" // Another photo or use same one
                    alt="Shadi Sayed - About Me"
                    className="about-img"
                  />
                </div>
              </Col>
              <Col lg={8}>
                <h2 className="display-5 fw-bold mb-4">About Me</h2>
                <div className="about-content">
                  <p className="lead mb-4">
                    Hello! I'm <strong>Shadi Sayed</strong>, a passionate Flutter
                    developer with a strong background in full-stack web
                    development.
                  </p>
                  <p className="mb-4">
                    My journey started with MERN stack development, where I
                    built scalable web applications. This foundation gave me
                    deep understanding of software architecture, REST APIs, and
                    database design.
                  </p>
                  <p className="mb-4">
                    I transitioned to Flutter development to combine my love for
                    mobile experiences with my web development expertise. I
                    specialize in creating performant, beautiful, and
                    user-friendly cross-platform applications.
                  </p>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <FaCode className="text-primary me-2" />
                          <strong>Specialization:</strong> Flutter Mobile Apps
                        </li>
                        <li className="mb-2">
                          <FaMobileAlt className="text-primary me-2" />
                          <strong>Platforms:</strong> iOS & Android
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <FaServer className="text-primary me-2" />
                          <strong>Backend:</strong> Node.js, Firebase
                        </li>
                        <li className="mb-2">
                          <FaPalette className="text-primary me-2" />
                          <strong>Design:</strong> Clean & Responsive UI
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </AnimatedSection>
      
      {" "}
 
      {/* // Add ContactForm component in the JSX  */}
      <AnimatedSection delay={0.5}>
        <ContactForm />
      </AnimatedSection>
 
      {/* ===== Footer ===== */}
      <footer className="footer" id="contact">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h3 className="text-white mb-3">Let's Build Something Amazing</h3>
              <p className="text-light mb-4">
                Ready to turn your ideas into stunning mobile applications?
              </p>
              <Button variant="primary" size="lg" className="btn-custom">
                Start a Project
              </Button>
            </Col>
            <Col lg={6} className="text-lg-end">
              <div className="social-icons mb-4">
                <a
                  href="https://github.com"
                  className="text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-white mx-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={20} />
                </a>
                <a href="mailto:hello@example.com" className="text-white">
                  <FaEnvelope size={20} />
                </a>
              </div>
              <p className="text-light mb-0">
                © {new Date().getFullYear()} Flutter Developer Portfolio. All
                rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
