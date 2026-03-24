import React, { useState } from "react";
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
  FaStar,
  FaUsers,
  FaBolt,
  FaShieldAlt,
  FaDatabase,
  FaChartLine,
  FaFilter,
  FaTimes,
  FaCheckCircle,
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
import ContactForm from "../components/ContactForm";
import { FaTwitter } from "react-icons/fa";

function App() {
  // Enhanced projects data with professional metrics
  const [filterTech, setFilterTech] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: "TaskFlow Pro",
      shortDesc: "Complete task management with smart notifications",
      fullDesc: "A comprehensive task management solution with real-time sync",
      
      metrics: {
        users: "500+",
        rating: 4.8,
        downloads: "10k+",
        performance: "99.9%",
        codeCoverage: "85%",
        complexity: 5
      },
      
      architecture: {
        pattern: "BLoC + Repository",
        stateManagement: "Flutter BLoC",
      },
      
      technologies: ["Flutter", "Firebase", "BLoC", "Hive"],
      
      features: [
        "Cloud Sync",
        "Notifications", 
        "Analytics",
      ],
      
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      githubUrl: "https://github.com/yourusername/taskflow-pro",
      liveDemo: "https://play.google.com/store/apps/details?id=com.example.taskflow",
      role: "Solo Developer"
    },
    {
      id: 2,
      title: "WeatherWise",
      shortDesc: "Weather app with accurate forecasts",
      
      metrics: {
        users: "1k+",
        rating: 4.7,
        downloads: "15k+",
        performance: "98.5%",
        codeCoverage: "82%",
        complexity: 4
      },
      
      architecture: {
        pattern: "Clean Architecture",
        stateManagement: "Riverpod",
      },
      
      technologies: ["Flutter", "REST API", "Riverpod", "Maps"],
      
      features: [
        "Location Weather",
        "Weather Maps",
        "7-Day Forecast",
      ],
      
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      githubUrl: "https://github.com/yourusername/weatherwise",
      liveDemo: null,
      role: "Lead Developer"
    },
    {
      id: 3,
      title: "E-Commerce Mobile",
      shortDesc: "Full e-commerce app with payments",
      
      metrics: {
        users: "200+",
        rating: 4.6,
        downloads: "5k+",
        performance: "99.2%",
        codeCoverage: "78%",
        complexity: 5
      },
      
      architecture: {
        pattern: "MVC + Provider",
        stateManagement: "Provider",
      },
      
      technologies: ["Flutter", "Node.js", "MongoDB", "Stripe"],
      
      features: [
        "Payments",
        "Order Tracking",
        "Reviews",
      ],
      
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      githubUrl: "https://github.com/yourusername/ecommerce-app",
      liveDemo: null,
      role: "Full Stack"
    },
    {
      id: 4,
      title: "FitTrack",
      shortDesc: "Fitness tracking with health integration",
      
      metrics: {
        users: "300+",
        rating: 4.9,
        downloads: "8k+",
        performance: "99.5%",
        codeCoverage: "88%",
        complexity: 4
      },
      
      architecture: {
        pattern: "Feature-first",
        stateManagement: "GetX",
      },
      
      technologies: ["Flutter", "SQLite", "Health Kit", "GetX"],
      
      features: [
        "Step Tracking",
        "Workout Plans",
        "Analytics",
      ],
      
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      githubUrl: "https://github.com/yourusername/fittrack",
      liveDemo: null,
      role: "Mobile Developer"
    },
    // Add more projects here - they'll fit perfectly now!
    {
      id: 5,
      title: "Food Delivery",
      shortDesc: "Restaurant food ordering app",
      
      metrics: {
        users: "150+",
        rating: 4.5,
        downloads: "3k+",
        performance: "98%",
        codeCoverage: "75%",
        complexity: 4
      },
      
      architecture: {
        pattern: "BLoC",
        stateManagement: "BLoC",
      },
      
      technologies: ["Flutter", "Firebase", "Stripe", "Maps"],
      
      features: [
        "Real-time Tracking",
        "Payments",
        "Restaurant Search",
      ],
      
      gradient: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
      githubUrl: "https://github.com/yourusername/food-delivery",
      liveDemo: null,
      role: "Lead Developer"
    },
    {
      id: 6,
      title: "ChatApp",
      shortDesc: "Real-time messaging application",
      
      metrics: {
        users: "400+",
        rating: 4.7,
        downloads: "7k+",
        performance: "99%",
        codeCoverage: "82%",
        complexity: 4
      },
      
      architecture: {
        pattern: "Clean Architecture",
        stateManagement: "Riverpod",
      },
      
      technologies: ["Flutter", "Firebase", "WebSockets", "Hive"],
      
      features: [
        "Real-time Chat",
        "Media Sharing",
        "Push Notifications",
      ],
      
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      githubUrl: "https://github.com/yourusername/chatapp",
      liveDemo: null,
      role: "Full Stack"
    }
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

  // Get unique technologies for filter
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))];
  
  // Filter projects based on selected technology
  const filteredProjects = filterTech === "all" 
    ? projects 
    : projects.filter(p => p.technologies.includes(filterTech));

  // Helper function to render complexity stars
  const renderComplexity = (level) => {
    return '⭐'.repeat(level) + '☆'.repeat(5-level);
  };

  return (
    <div className="App">
      {/* ===== Professional Navbar with Dark Mode Toggle ===== */}
      <Navbar expand="lg" className="navbar" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <FaCode className="me-2" />
            Shadi Dev Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
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
                  <span className="d-block mt-2 fw-bold text-warning">
                    {projects.length}+ Production Apps • 10k+ Downloads • 4.8★ Avg Rating
                  </span>
                </p>
                <div className="mt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="btn-custom me-3"
                    href="#projects"
                  >
                    <FaRocket className="me-2" /> View Projects
                  </Button>
                  <ResumeButton />
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="btn-custom ms-3"
                    href="#contact"
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
                      src="/profile.jpg"
                      alt="Shadi Sayed - Flutter Developer"
                      className="profile-img"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `
                          <div class="profile-placeholder">
                            <FaCode size={80} />
                            <div class="initials">SS</div>
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
 
      {/* ===== Projects Section with Left Filter Panel and Compact Cards ===== */}
      <AnimatedSection delay={0.2}>
        <section className="py-5" id="projects">
          <Container>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">My Flutter Projects</h2>
              <p className="text-muted mb-4">
                {projects.length} Production-ready mobile applications built with Flutter
              </p>
            </div>

            <Row>
              {/* Left Sidebar - Fancy Filter Panel */}
              <Col lg={3} className="mb-4">
                {/* Mobile Filter Toggle */}
                <div className="d-lg-none mb-3">
                  <Button 
                    variant="outline-primary" 
                    className="w-100 d-flex align-items-center justify-content-center"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <FaFilter className="me-2" />
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                  </Button>
                </div>

                {/* Filter Panel */}
                <div className={`filter-panel ${showFilters ? 'show' : ''}`}>
                  <Card className="filter-card">
                    <Card.Body>
                      <div className="filter-header mb-4">
                        <h5 className="mb-0 d-flex align-items-center">
                          <FaFilter className="me-2 text-primary" />
                          Filter Projects
                        </h5>
                        {filterTech !== "all" && (
                          <Button 
                            variant="link" 
                            size="sm"
                            onClick={() => setFilterTech("all")}
                            className="clear-filter"
                          >
                            <FaTimes className="me-1" /> Clear
                          </Button>
                        )}
                      </div>

                      {/* Filter Categories */}
                      <div className="filter-section mb-4">
                        <h6 className="filter-section-title">All Technologies</h6>
                        <div className="filter-option">
                          <button
                            className={`filter-btn ${filterTech === "all" ? 'active' : ''}`}
                            onClick={() => {
                              setFilterTech("all");
                              setShowFilters(false);
                            }}
                          >
                            <FaCheckCircle className="filter-icon" />
                            <span>All Projects</span>
                            <Badge bg="secondary" className="ms-auto">{projects.length}</Badge>
                          </button>
                        </div>
                      </div>

                      <div className="filter-section mb-4">
                        <h6 className="filter-section-title">Flutter Technologies</h6>
                        {allTechnologies.slice(0, 6).map(tech => {
                          const count = projects.filter(p => p.technologies.includes(tech)).length;
                          return (
                            <div className="filter-option" key={tech}>
                              <button
                                className={`filter-btn ${filterTech === tech ? 'active' : ''}`}
                                onClick={() => {
                                  setFilterTech(tech);
                                  setShowFilters(false);
                                }}
                              >
                                <FaCheckCircle className="filter-icon" />
                                <span>{tech}</span>
                                <Badge bg="secondary" className="ms-auto">{count}</Badge>
                              </button>
                            </div>
                          );
                        })}
                      </div>

                      <div className="filter-section">
                        <h6 className="filter-section-title">Complexity Level</h6>
                        {[5,4,3].map(level => {
                          const count = projects.filter(p => p.metrics?.complexity === level).length;
                          return (
                            <div className="filter-option" key={level}>
                              <button
                                className="filter-btn"
                                onClick={() => {}}
                              >
                                <span>{renderComplexity(level)}</span>
                                <Badge bg="secondary" className="ms-auto">{count}</Badge>
                              </button>
                            </div>
                          );
                        })}
                      </div>

                      {/* Active Filters Summary */}
                      {filterTech !== "all" && (
                        <div className="active-filters mt-4 pt-3 border-top">
                          <small className="text-muted d-block mb-2">Active Filter:</small>
                          <Badge bg="primary" className="p-2">
                            {filterTech} <FaTimes 
                              className="ms-2" 
                              style={{ cursor: 'pointer' }}
                              onClick={() => setFilterTech("all")}
                            />
                          </Badge>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              {/* Right Content - Compact Project Cards (3 per row) */}
              <Col lg={9}>
                <Row>
                  {filteredProjects.map((project, index) => (
                    <Col md={6} xl={4} key={project.id} className="mb-4">
                      <AnimatedCard index={index}>
                        <Card className="project-card-compact">
                          {/* Header with Gradient - Smaller */}
                          <div 
                            className="compact-header"
                            style={{ background: project.gradient }}
                          >
                            <FaMobileAlt size={24} className="text-white" />
                          </div>

                          <Card.Body className="p-3">
                            {/* Title and Rating */}
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h6 className="compact-title mb-0">{project.title}</h6>
                              <Badge bg="warning" text="dark" className="rating-badge">
                                <FaStar size={10} className="me-1" />
                                {project.metrics.rating}
                              </Badge>
                            </div>

                            {/* Short Description */}
                            <p className="compact-desc mb-2">
                              {project.shortDesc}
                            </p>

                            {/* Tech Stack - Minimal */}
                            <div className="compact-tech mb-2">
                              {project.technologies.slice(0, 3).map((tech, idx) => (
                                <Badge 
                                  key={idx}
                                  bg="light" 
                                  text="dark" 
                                  className="tech-dot"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>

                            {/* Quick Stats Row - Mini */}
                            <div className="compact-stats mb-2">
                              <span className="stat-mini" title="Downloads">
                                <FaDownload size={10} /> {project.metrics.downloads}
                              </span>
                              <span className="stat-mini" title="Users">
                                <FaUsers size={10} /> {project.metrics.users}
                              </span>
                              <span className="stat-mini" title="Complexity">
                                {renderComplexity(project.metrics.complexity)}
                              </span>
                            </div>

                            {/* Action Buttons - Small */}
                            <div className="compact-actions">
                              <Button 
                                variant="outline-primary" 
                                size="sm"
                                href={project.githubUrl}
                                target="_blank"
                                className="compact-btn"
                                title="View Code"
                              >
                                <FaGithub />
                              </Button>
                              
                              <Button 
                                variant="primary" 
                                size="sm"
                                as={Link}
                                to={`/project/${project.id}`}
                                className="compact-btn flex-grow-1"
                              >
                                Details
                              </Button>

                              {project.liveDemo && (
                                <Button 
                                  variant="success" 
                                  size="sm"
                                  href={project.liveDemo}
                                  target="_blank"
                                  className="compact-btn"
                                  title="Live Demo"
                                >
                                  <FaRocket />
                                </Button>
                              )}
                            </div>

                            {/* Role - Small */}
                            <div className="mt-2 pt-1 border-top">
                              <small className="text-muted d-block text-truncate" title={project.role}>
                                <FaCode className="me-1" size={10} />
                                {project.role}
                              </small>
                            </div>
                          </Card.Body>
                        </Card>
                      </AnimatedCard>
                    </Col>
                  ))}
                </Row>

                {/* Results Count */}
                <div className="text-center mt-3">
                  <p className="text-muted small">
                    Showing {filteredProjects.length} of {projects.length} projects
                  </p>
                </div>
              </Col>
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
                    src="/profile.jpg"
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
      
      {/* Contact Form */}
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
              <Button 
                variant="primary" 
                size="lg" 
                className="btn-custom"
                href="#contact"
              >
                Start a Project
              </Button>
            </Col>
            <Col lg={6} className="text-lg-end">
              <div className="social-icons mb-4">
                <a
                  href="https://github.com/yourusername"
                  className="text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
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
                © {new Date().getFullYear()} Shadi Sayed - Flutter Developer. All
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