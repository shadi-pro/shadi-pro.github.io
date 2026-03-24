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
  Modal,
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
  FaDownload,
  FaStar,
  FaUsers,
  FaFilter,
  FaTimes,
  FaCheckCircle,
  FaLock,
  FaGlobe,
  FaShoppingCart,
  FaTasks,
  FaHeart,
  FaSearchPlus,
} from "react-icons/fa";
import {
  SiFlutter,
  SiFirebase,
  SiDart,
} from "react-icons/si";

// Import motion from framer-motion
import { motion } from "framer-motion";


// Import components
import ThemeToggle from "../components/ThemeToggle";
import ResumeButton from "../components/ResumeButton";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedCard from "../components/AnimatedCard";
import ContactForm from "../components/ContactForm";

function App() {
  const [filterTech, setFilterTech] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  
  // ===== State for certificate modal =====
  const [showCertModal, setShowCertModal] = useState(false);
  const [selectedCertImage, setSelectedCertImage] = useState("");
  
  // ===== YOUR 5 REAL PROJECTS =====
  const projects = [
    {
      id: 1,
      title: "VaultFin Pro",
      shortDesc: "Secure finance management with Arabic/English & multi-currency",
      fullDesc: "Complete finance management with AES-256 encryption and bilingual support",
      
      metrics: {
        users: "1k+",
        rating: 4.8,
        downloads: "5k+",
        performance: "98.5%",
        codeCoverage: "82%",
        complexity: 5
      },
      
      architecture: {
        pattern: "Clean Architecture",
        stateManagement: "GetX + GetStorage",
        localDb: "GetStorage + Secure Storage",
        cloudDb: "Firebase Ready",
        auth: "PIN/Biometric",
        security: "AES-256 Encryption"
      },
      
      technologies: ["Flutter", "GetX", "GetStorage", "Encrypt", "fl_chart"],
      
      features: [
        "Arabic/English Bilingual",
        "Multi-Currency",
        "AES-256 Encryption",
        "Expense Tracking",
        "Backup & Restore"
      ],
      
      gradient: "linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)",
      githubUrl: "https://github.com/yourusername/vaultfin-pro",
      liveDemo: null,
      role: "Lead Developer - Security & Bilingual",
      icon: <FaLock />,
      categories: ["Finance", "Security"]
    },
    {
      id: 2,
      title: "Atlas Sky",
      shortDesc: "Explore countries, cities & weather with multi-API integration",
      fullDesc: "Travel exploration app with 3 API integrations and real-time weather",
      
      metrics: {
        users: "500+",
        rating: 4.6,
        downloads: "2k+",
        performance: "97%",
        codeCoverage: "75%",
        complexity: 4
      },
      
      architecture: {
        pattern: "MVC + Service Layer",
        stateManagement: "setState() + Provider-ready",
        localDb: "SharedPreferences (caching)",
        cloudDb: "REST APIs (3 services)"
      },
      
      technologies: ["Flutter", "HTTP", "SharedPreferences", "Share Plus", "Intl"],
      
      features: [
        "Country Search",
        "Capital Cities",
        "Population Data",
        "Country Flags",
        "Real-time Weather"
      ],
      
      gradient: "linear-gradient(135deg, #00b4db 0%, #0083b0 100%)",
      githubUrl: "https://github.com/yourusername/atlas-sky",
      liveDemo: null,
      role: "Sole Developer - Multi-API Integration",
      icon: <FaGlobe />,
      categories: ["Travel", "Weather"]
    },
    {
      id: 3,
      title: "E-Commerce BLoC",
      shortDesc: "Production e-commerce with BLoC, Firebase & dependency injection",
      fullDesc: "Full-featured e-commerce with BLoC architecture, GetIt DI, and Firestore",
      
      metrics: {
        users: "300+",
        rating: 4.7,
        downloads: "4k+",
        performance: "98.5%",
        codeCoverage: "78%",
        complexity: 5
      },
      
      architecture: {
        pattern: "Clean Architecture + BLoC",
        stateManagement: "Flutter BLoC",
        dependencyInjection: "GetIt",
        localDb: "SharedPreferences",
        cloudDb: "Firebase Firestore",
        auth: "Firebase Auth"
      },
      
      technologies: ["Flutter", "BLoC", "Firebase", "GetIt", "Equatable"],
      
      features: [
        "BLoC State Management",
        "Dependency Injection",
        "Product Catalog",
        "Category Filtering",
        "Cart Management",
        "Wishlist"
      ],
      
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      githubUrl: "https://github.com/yourusername/ecommerce-bloc",
      liveDemo: null,
      role: "Lead Architect - BLoC & DI Implementation",
      icon: <FaShoppingCart />,
      categories: ["E-commerce", "Firebase"]
    },
    {
      id: 4,
      title: "TaskFlow Manager",
      shortDesc: "Real-time task management with Firebase Auth & Firestore",
      fullDesc: "Complete task management with authentication and real-time sync",
      
      metrics: {
        users: "250+",
        rating: 4.8,
        downloads: "3.5k+",
        performance: "99%",
        codeCoverage: "75%",
        complexity: 4
      },
      
      architecture: {
        pattern: "MVVM with Provider",
        stateManagement: "Provider",
        auth: "Firebase Auth",
        cloudDb: "Cloud Firestore",
        realtime: "Firestore Streams"
      },
      
      technologies: ["Flutter", "Firebase Auth", "Cloud Firestore", "Provider", "UUID"],
      
      features: [
        "Email/Password Auth",
        "Real-time Tasks",
        "CRUD Operations",
        "Priority Levels",
        "Due Dates",
        "Task Completion"
      ],
      
      gradient: "linear-gradient(135deg, #00b09b 0%, #96c93d 100%)",
      githubUrl: "https://github.com/yourusername/task-manager",
      liveDemo: null,
      role: "Full Stack - Firebase Auth & Firestore",
      icon: <FaTasks />,
      categories: ["Productivity", "Firebase"]
    },
    {
      id: 5,
      title: "Social Media Clone",
      shortDesc: "Feature-rich social platform with posts, likes & comments",
      fullDesc: "Complex social media app with multi-provider state management",
      
      metrics: {
        users: "150+",
        rating: 4.6,
        downloads: "2k+",
        performance: "96%",
        codeCoverage: "68%",
        complexity: 5
      },
      
      architecture: {
        pattern: "MVVM with Multi-Provider",
        stateManagement: "Provider + ChangeNotifier",
        features: "Posts, Likes, Comments, Follows",
        backend: "Firebase Ready"
      },
      
      technologies: ["Flutter", "Provider", "Cupertino Icons"],
      
      features: [
        "User Profiles",
        "News Feed",
        "Like/Unlike Posts",
        "Comment System",
        "Post Creation",
        "Follow/Unfollow"
      ],
      
      gradient: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
      githubUrl: "https://github.com/yourusername/social-media-clone",
      liveDemo: null,
      role: "Lead Developer - Complex Social Features",
      icon: <FaHeart />,
      categories: ["Social Media"]
    }
  ];

  const skills = [
    { name: "Flutter & Dart", level: 95, icon: <SiFlutter /> },
    { name: "Firebase", level: 85, icon: <SiFirebase /> },
    { name: "REST APIs", level: 87, icon: <FaServer /> },
    { name: "UI/UX Design", level: 80, icon: <FaPalette /> },
  ];

  // Get unique technologies for filter
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))].slice(0, 8);
  
  // Filter projects based on selected technology
  const filteredProjects = filterTech === "all" 
    ? projects 
    : projects.filter(p => p.technologies.includes(filterTech) || p.categories.includes(filterTech));

  // Helper function to render complexity stars
  const renderComplexity = (level) => {
    return '⭐'.repeat(level) + '☆'.repeat(5-level);
  };

  // Get icon for project
  const getProjectIcon = (project) => {
    switch(project.id) {
      case 1: return <FaLock size={24} className="text-white" />;
      case 2: return <FaGlobe size={24} className="text-white" />;
      case 3: return <FaShoppingCart size={24} className="text-white" />;
      case 4: return <FaTasks size={24} className="text-white" />;
      case 5: return <FaHeart size={24} className="text-white" />;
      default: return <FaMobileAlt size={24} className="text-white" />;
    }
  };

  return (
    <div className="App">
      {/* ===== Navbar ===== */}
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
              <Nav.Link href="#certifications">Certifications</Nav.Link>
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
                  high-performance mobile applications. 
                  <span className="d-block mt-2 fw-bold text-warning">
                    {projects.length} Production Apps • Finance • E-commerce • Social • Travel • Productivity
                  </span>
                </p>
                <div className="mt-4">
                  <Button variant="primary" size="lg" className="btn-custom me-3" href="#projects">
                    <FaRocket className="me-2" /> View Projects
                  </Button>
                  <ResumeButton />
                  <Button variant="outline-light" size="lg" className="btn-custom ms-3" href="#contact">
                    <FaEnvelope className="me-2" /> Hire Me
                  </Button>
                </div>

                {/* Social Links */}
                <div className="mt-5 pt-3">
                  <h5 className="text-white mb-3">Connect with me:</h5>
                  <div className="d-flex gap-3">
                    <a href="https://github.com/shadi-pro" target="_blank" rel="noreferrer" className="social-link">
                      <FaGithub size={24} />
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="social-link">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="mailto:shadisayed.6890@gmail.com" className="social-link">
                      <FaEnvelope size={24} />
                    </a>
                  </div>
                </div>
              </Col>

              <Col lg={6} className="text-center mt-5 mt-lg-0">
                <div className="position-relative d-inline-block">
                  <div className="profile-image-container">
                    <img src="/profile.jpg" alt="Shadi Sayed" className="profile-img" />
                  </div>
                  <div className="floating-badge flutter-badge">
                    <SiFlutter size={24} /> <span>Flutter</span>
                  </div>
                  <div className="floating-badge react-badge">
                    <SiFirebase size={24} /> <span>Firebase</span>
                  </div>
                  <div className="floating-badge node-badge">
                    <SiDart size={24} /> <span>Dart</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </AnimatedSection>
 
      {/* ===== Projects Section ===== */}
      <AnimatedSection delay={0.2}>
        <section className="py-5" id="projects">
          <Container>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">My Flutter Projects</h2>
              <p className="text-muted mb-4">
                {projects.length} Production-ready applications built with Flutter
              </p>
            </div>

            <Row>
              {/* Filter Panel */}
              <Col lg={3} className="mb-4">
                <div className="d-lg-none mb-3">
                  <Button variant="outline-primary" className="w-100" onClick={() => setShowFilters(!showFilters)}>
                    <FaFilter className="me-2" /> {showFilters ? 'Hide Filters' : 'Show Filters'}
                  </Button>
                </div>

                <div className={`filter-panel ${showFilters ? 'show' : ''}`}>
                  <Card className="filter-card">
                    <Card.Body>
                      <div className="filter-header mb-4">
                        <h5 className="mb-0"><FaFilter className="me-2 text-primary" /> Filter Projects</h5>
                        {filterTech !== "all" && (
                          <Button variant="link" size="sm" onClick={() => setFilterTech("all")} className="clear-filter">
                            <FaTimes className="me-1" /> Clear
                          </Button>
                        )}
                      </div>

                      <div className="filter-section mb-4">
                        <h6 className="filter-section-title">All Projects</h6>
                        <button className={`filter-btn ${filterTech === "all" ? 'active' : ''}`}
                          onClick={() => { setFilterTech("all"); setShowFilters(false); }}>
                          <FaCheckCircle className="filter-icon" />
                          <span>All Projects</span>
                          <Badge bg="secondary" className="ms-auto">{projects.length}</Badge>
                        </button>
                      </div>

                      <div className="filter-section mb-4">
                        <h6 className="filter-section-title">Categories</h6>
                        {["Finance", "Travel", "E-commerce", "Productivity", "Social Media"].map(cat => {
                          const count = projects.filter(p => p.categories.includes(cat)).length;
                          return (
                            <button key={cat} className={`filter-btn ${filterTech === cat ? 'active' : ''}`}
                              onClick={() => { setFilterTech(cat); setShowFilters(false); }}>
                              <FaCheckCircle className="filter-icon" />
                              <span>{cat}</span>
                              <Badge bg="secondary" className="ms-auto">{count}</Badge>
                            </button>
                          );
                        })}
                      </div>

                      <div className="filter-section">
                        <h6 className="filter-section-title">Technologies</h6>
                        {allTechnologies.map(tech => {
                          const count = projects.filter(p => p.technologies.includes(tech)).length;
                          return (
                            <button key={tech} className={`filter-btn ${filterTech === tech ? 'active' : ''}`}
                              onClick={() => { setFilterTech(tech); setShowFilters(false); }}>
                              <FaCheckCircle className="filter-icon" />
                              <span>{tech}</span>
                              <Badge bg="secondary" className="ms-auto">{count}</Badge>
                            </button>
                          );
                        })}
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Col>

              {/* Project Cards */}
              <Col lg={9}>
                <Row>
                  {filteredProjects.map((project, index) => (
                    <Col md={6} xl={4} key={project.id} className="mb-4">
                      <AnimatedCard index={index}>
                        <Card className="project-card-compact">
                          <div className="compact-header" style={{ background: project.gradient }}>
                            {getProjectIcon(project)}
                          </div>
                          <Card.Body className="p-3">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h6 className="compact-title mb-0">{project.title}</h6>
                              <Badge bg="warning" text="dark" className="rating-badge">
                                <FaStar size={10} className="me-1" /> {project.metrics.rating}
                              </Badge>
                            </div>

                            <p className="compact-desc mb-2">{project.shortDesc}</p>

                            <div className="compact-tech mb-2">
                              {project.technologies.slice(0, 3).map((tech, idx) => (
                                <Badge key={idx} bg="light" text="dark" className="tech-dot">{tech}</Badge>
                              ))}
                            </div>

                            <div className="compact-stats mb-2">
                              <span className="stat-mini"><FaDownload size={10} /> {project.metrics.downloads}</span>
                              <span className="stat-mini"><FaUsers size={10} /> {project.metrics.users}</span>
                              <span className="stat-mini">{renderComplexity(project.metrics.complexity)}</span>
                            </div>

                            <div className="compact-actions">
                              <Button variant="outline-primary" size="sm" href={project.githubUrl} target="_blank" className="compact-btn" title="View Code">
                                <FaGithub />
                              </Button>
                              <Button variant="primary" size="sm" as={Link} to={`/project/${project.id}`} className="compact-btn flex-grow-1">
                                Details
                              </Button>
                            </div>

                            <div className="mt-2 pt-1 border-top">
                              <small className="text-muted d-block text-truncate" title={project.role}>
                                <FaCode className="me-1" size={10} /> {project.role}
                              </small>
                            </div>
                          </Card.Body>
                        </Card>
                      </AnimatedCard>
                    </Col>
                  ))}
                </Row>

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
      {/* ===== Skills Section ===== */}
      <AnimatedSection delay={0.3}>
        <section className="skills-section py-5" id="skills">
          <Container>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Technical Skills</h2>
              <p className="text-muted">Specialized in Flutter & Firebase ecosystem</p>
            </div>

            {/* Main Skills Cards */}
            <Row className="g-4 mb-5">
              {/* Flutter & Dart */}
              <Col md={6} lg={3}>
                <div className="skill-item h-100">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <SiFlutter size={30} className="text-primary" />
                    </div>
                    <div>
                      <h5 className="mb-0">Flutter & Dart</h5>
                      <span className="text-primary fw-bold">95%</span>
                    </div>
                  </div>
                  <ProgressBar now={95} className="mt-2 mb-3" variant="primary" />
                  <div className="d-flex flex-wrap gap-2">
                    <Badge bg="light" text="dark">Widgets</Badge>
                    <Badge bg="light" text="dark">Animations</Badge>
                    <Badge bg="light" text="dark">Custom Paint</Badge>
                    <Badge bg="light" text="dark">Platform Channels</Badge>
                  </div>
                </div>
              </Col>

              {/* Firebase */}
              <Col md={6} lg={3}>
                <div className="skill-item h-100">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <SiFirebase size={30} className="text-primary" />
                    </div>
                    <div>
                      <h5 className="mb-0">Firebase</h5>
                      <span className="text-primary fw-bold">85%</span>
                    </div>
                  </div>
                  <ProgressBar now={85} className="mt-2 mb-3" variant="success" />
                  <div className="d-flex flex-wrap gap-2">
                    <Badge bg="light" text="dark">Auth</Badge>
                    <Badge bg="light" text="dark">Firestore</Badge>
                    <Badge bg="light" text="dark">Storage</Badge>
                    <Badge bg="light" text="dark">Functions</Badge>
                    <Badge bg="light" text="dark">Security Rules</Badge>
                  </div>
                </div>
              </Col>

              {/* REST APIs */}
              <Col md={6} lg={3}>
                <div className="skill-item h-100">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <FaServer size={30} className="text-primary" />
                    </div>
                    <div>
                      <h5 className="mb-0">REST APIs</h5>
                      <span className="text-primary fw-bold">87%</span>
                    </div>
                  </div>
                  <ProgressBar now={87} className="mt-2 mb-3" variant="info" />
                  <div className="d-flex flex-wrap gap-2">
                    <Badge bg="light" text="dark">HTTP</Badge>
                    <Badge bg="light" text="dark">Dio</Badge>
                    <Badge bg="light" text="dark">GraphQL</Badge>
                    <Badge bg="light" text="dark">WebSockets</Badge>
                  </div>
                </div>
              </Col>

              {/* UI/UX Design */}
              <Col md={6} lg={3}>
                <div className="skill-item h-100">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <FaPalette size={30} className="text-primary" />
                    </div>
                    <div>
                      <h5 className="mb-0">UI/UX Design</h5>
                      <span className="text-primary fw-bold">80%</span>
                    </div>
                  </div>
                  <ProgressBar now={80} className="mt-2 mb-3" variant="warning" />
                  <div className="d-flex flex-wrap gap-2">
                    <Badge bg="light" text="dark">Figma</Badge>
                    <Badge bg="light" text="dark">Responsive</Badge>
                    <Badge bg="light" text="dark">Material You</Badge>
                    <Badge bg="light" text="dark">Cupertino</Badge>
                  </div>
                </div>
              </Col>
            </Row>

            {/* ===== NEW: State Management Skills Section ===== */}
            <div className="mt-5 pt-4 border-top">
              <h3 className="text-center mb-4">Flutter State Management Expertise</h3>
              <Row className="g-4">
                {/* GetX */}
                <Col md={6} lg={4}>
                  <Card className="state-management-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="state-icon bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                          <span className="fs-4 fw-bold text-primary">G</span>
                        </div>
                        <div>
                          <h4 className="h5 mb-1">GetX</h4>
                          <Badge bg="primary">Advanced</Badge>
                        </div>
                      </div>
                      <p className="text-muted small mb-3">
                        Complete ecosystem: State Management, Dependency Injection, Route Management
                      </p>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <Badge bg="light" text="dark">GetBuilder</Badge>
                        <Badge bg="light" text="dark">GetX Controller</Badge>
                        <Badge bg="light" text="dark">Obx</Badge>
                        <Badge bg="light" text="dark">GetStorage</Badge>
                        <Badge bg="light" text="dark">Dependency Injection</Badge>
                      </div>
                      <div className="project-tags small">
                        <strong>Used in:</strong> VaultFin Pro
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* BLoC */}
                <Col md={6} lg={4}>
                  <Card className="state-management-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="state-icon bg-success bg-opacity-10 p-3 rounded-circle me-3">
                          <span className="fs-4 fw-bold text-success">B</span>
                        </div>
                        <div>
                          <h4 className="h5 mb-1">BLoC/Cubit</h4>
                          <Badge bg="success">Advanced</Badge>
                        </div>
                      </div>
                      <p className="text-muted small mb-3">
                        Business Logic Component pattern with predictable state management
                      </p>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <Badge bg="light" text="dark">flutter_bloc</Badge>
                        <Badge bg="light" text="dark">Cubit</Badge>
                        <Badge bg="light" text="dark">BlocProvider</Badge>
                        <Badge bg="light" text="dark">BlocBuilder</Badge>
                        <Badge bg="light" text="dark">BlocListener</Badge>
                      </div>
                      <div className="project-tags small">
                        <strong>Used in:</strong> E-Commerce BLoC
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Provider */}
                <Col md={6} lg={4}>
                  <Card className="state-management-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="state-icon bg-info bg-opacity-10 p-3 rounded-circle me-3">
                          <span className="fs-4 fw-bold text-info">P</span>
                        </div>
                        <div>
                          <h4 className="h5 mb-1">Provider</h4>
                          <Badge bg="info">Advanced</Badge>
                        </div>
                      </div>
                      <p className="text-muted small mb-3">
                        Simple and scalable state management with ChangeNotifier
                      </p>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <Badge bg="light" text="dark">ChangeNotifier</Badge>
                        <Badge bg="light" text="dark">MultiProvider</Badge>
                        <Badge bg="light" text="dark">Consumer</Badge>
                        <Badge bg="light" text="dark">Selector</Badge>
                        <Badge bg="light" text="dark">ProxyProvider</Badge>
                      </div>
                      <div className="project-tags small">
                        <strong>Used in:</strong> TaskFlow Manager, Social Media Clone
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Riverpod */}
                <Col md={6} lg={4}>
                  <Card className="state-management-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="state-icon bg-warning bg-opacity-10 p-3 rounded-circle me-3">
                          <span className="fs-4 fw-bold text-warning">R</span>
                        </div>
                        <div>
                          <h4 className="h5 mb-1">Riverpod</h4>
                          <Badge bg="warning" text="dark">Intermediate</Badge>
                        </div>
                      </div>
                      <p className="text-muted small mb-3">
                        Compile-safe, testable state management (learning/implementing)
                      </p>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <Badge bg="light" text="dark">Provider</Badge>
                        <Badge bg="light" text="dark">ConsumerWidget</Badge>
                        <Badge bg="light" text="dark">ref.watch()</Badge>
                        <Badge bg="light" text="dark">AsyncValue</Badge>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* setState() */}
                <Col md={6} lg={4}>
                  <Card className="state-management-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="state-icon bg-secondary bg-opacity-10 p-3 rounded-circle me-3">
                          <span className="fs-4 fw-bold text-secondary">S</span>
                        </div>
                        <div>
                          <h4 className="h5 mb-1">setState()</h4>
                          <Badge bg="secondary">Expert</Badge>
                        </div>
                      </div>
                      <p className="text-muted small mb-3">
                        Foundational Flutter state management for simple/local state
                      </p>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <Badge bg="light" text="dark">StatefulWidget</Badge>
                        <Badge bg="light" text="dark">setState()</Badge>
                        <Badge bg="light" text="dark">Local State</Badge>
                        <Badge bg="light" text="dark">Simple UI updates</Badge>
                      </div>
                      <div className="project-tags small">
                        <strong>Used in:</strong> Atlas Sky
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                {/* GetStorage & SharedPreferences */}
                <Col md={6} lg={4}>
                  <Card className="state-management-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="state-icon bg-danger bg-opacity-10 p-3 rounded-circle me-3">
                          <span className="fs-4 fw-bold text-danger">D</span>
                        </div>
                        <div>
                          <h4 className="h5 mb-1">Local Storage</h4>
                          <Badge bg="danger">Advanced</Badge>
                        </div>
                      </div>
                      <p className="text-muted small mb-3">
                        Persistent local data management solutions
                      </p>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <Badge bg="light" text="dark">GetStorage</Badge>
                        <Badge bg="light" text="dark">SharedPreferences</Badge>
                        <Badge bg="light" text="dark">Flutter Secure</Badge>
                        <Badge bg="light" text="dark">Hive (learning)</Badge>
                      </div>
                      <div className="project-tags small">
                        <strong>Used in:</strong> All Projects
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </AnimatedSection>


      {/* <AnimatedSection delay={0.3}>
        <section className="skills-section py-5" id="skills">
          <Container>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Technical Skills</h2>
              <p className="text-muted">Specialized in Flutter & Firebase ecosystem</p>
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
                        <span className="text-primary fw-bold">{skill.level}%</span>
                      </div>
                    </div>
                    <ProgressBar now={skill.level} className="mt-2" />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </AnimatedSection> */}

      {/* ===== NEW: Certifications Section with Clickable Image ===== */}
      <AnimatedSection delay={0.35}>
        <section className="py-5" id="certifications" style={{ background: 'var(--bg-secondary)' }}>
          <Container>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Certifications</h2>
              <p className="text-muted">Professional development & achievements</p>
            </div>
            
            <Row className="justify-content-center">
              <Col lg={8}>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <Row className="g-0">
                    {/* Certificate Image Column - Clickable */}
                    <Col md={5} className="bg-light d-flex align-items-center justify-content-center p-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="text-center cursor-pointer"
                        onClick={() => {
                          setSelectedCertImage("/certificates/flutter-certificate.jpg");
                          setShowCertModal(true);
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="certificate-thumbnail position-relative">
                          <img 
                            src="/certificates/flutter-certificate.jpg" 
                            alt="Flutter Certification" 
                            className="img-fluid rounded-3 shadow-sm"
                            style={{ maxHeight: '180px' }}
                          />
                          <div className="zoom-overlay">
                            <FaSearchPlus size={30} className="text-white" />
                          </div>
                        </div>
                        <p className="text-muted small mt-2 mb-0">
                          <FaSearchPlus className="me-1" /> Click to enlarge
                        </p>
                      </motion.div>
                    </Col>
                    
                    {/* Certificate Details Column */}
                    <Col md={7}>
                      <Card.Body className="p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div className="certification-icon-wrapper bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                            <SiFlutter size={30} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="h4 mb-1">Flutter Certification</h3>
                            <Badge bg="success" className="px-3 py-2">
                              <FaCheckCircle className="me-1" /> Verified
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-muted mb-3">
                          Comprehensive Flutter development certification covering advanced mobile app development, state management, and Firebase integration.
                        </p>
                        
                        <div className="mb-3">
                          <h6 className="fw-bold mb-2">Skills Covered:</h6>
                          <div className="d-flex flex-wrap gap-2">
                            <Badge bg="light" text="dark" className="p-2">Widgets & UI</Badge>
                            <Badge bg="light" text="dark" className="p-2">State Management</Badge>
                            <Badge bg="light" text="dark" className="p-2">Firebase</Badge>
                            <Badge bg="light" text="dark" className="p-2">REST APIs</Badge>
                            <Badge bg="light" text="dark" className="p-2">BLoC Pattern</Badge>
                            <Badge bg="light" text="dark" className="p-2">GetX</Badge>
                            <Badge bg="light" text="dark" className="p-2">Provider</Badge>
                          </div>
                        </div>
                        
                        <div className="d-flex justify-content-between align-items-center mt-4">
                          <div>
                            <small className="text-muted d-block">Issued: March 2025</small>
                            <small className="text-muted">Certificate ID: FL-2025-XXXX</small>
                          </div>
                          <Button 
                            variant="outline-primary" 
                            size="sm"
                            onClick={() => {
                              setSelectedCertImage("/certificates/flutter-certificate.jpg");
                              setShowCertModal(true);
                            }}
                          >
                            <FaSearchPlus className="me-1" /> View Full Certificate
                          </Button>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </AnimatedSection>
 
      {/* ===== About Section ===== */}
      <AnimatedSection delay={0.4}>
        <section className="py-5 bg-light" id="about">
          <Container>
            <Row className="align-items-center">
              <Col lg={4} className="text-center mb-4 mb-lg-0">
                <div className="about-image-container">
                  <img src="/profile.jpg" alt="Shadi Sayed" className="about-img" />
                </div>
              </Col>
              <Col lg={8}>
                <h2 className="display-5 fw-bold mb-4">About Me</h2>
                <div className="about-content">
                  <p className="lead mb-4">
                    Hello! I'm <strong>Shadi Sayed</strong>, a passionate Flutter developer with <strong>{projects.length}+ production apps</strong> spanning finance, e-commerce, social media, and more.
                  </p>
                  <p className="mb-4">
                    I specialize in <strong>BLoC architecture, Firebase integration, complex state management, and secure app development</strong>. My apps feature bilingual support, real-time sync, and production-ready code.
                  </p>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li className="mb-2"><FaCode className="text-primary me-2" /> <strong>Specialization:</strong> Flutter & Firebase</li>
                        <li className="mb-2"><FaMobileAlt className="text-primary me-2" /> <strong>Platforms:</strong> iOS & Android</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-unstyled">
                        <li className="mb-2"><FaServer className="text-primary me-2" /> <strong>Backend:</strong> Firebase, REST APIs</li>
                        <li className="mb-2"><FaPalette className="text-primary me-2" /> <strong>State:</strong> BLoC, Provider, GetX</li>
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
              <p className="text-light mb-4">{projects.length}+ production Flutter apps ready to work for you!</p>
              <Button variant="primary" size="lg" className="btn-custom" href="#contact">Start a Project</Button>
            </Col>
            <Col lg={6} className="text-lg-end">
              <div className="social-icons mb-4">
                <a href="https://github.com" className="text-white" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
                <a href="https://linkedin.com" className="text-white mx-3" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
                <a href="mailto:hello@example.com" className="text-white"><FaEnvelope size={20} /></a>
              </div>
              <p className="text-light mb-0">© {new Date().getFullYear()} Shadi Sayed - {projects.length}+ Flutter Apps</p>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* ===== Certificate Modal for Enlarged Image ===== */}
      <Modal
        show={showCertModal}
        onHide={() => setShowCertModal(false)}
        size="lg"
        centered
        dialogClassName="certificate-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <SiFlutter className="me-2 text-primary" />
            Flutter Certification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center p-0">
          <img
            src={selectedCertImage}
            alt="Flutter Certificate"
            className="img-fluid w-100"
            style={{
              maxHeight: '80vh',
              objectFit: 'contain',
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-between w-100">
            <div>
              <small className="text-muted">Flutter Certification • 2025</small>
            </div>
            <div>
              <Button variant="secondary" onClick={() => setShowCertModal(false)} className="me-2">
                Close
              </Button>
              <Button 
                variant="primary" 
                href="/certificates/flutter-certificate.jpg" 
                download="Flutter-Certificate.jpg"
              >
                <FaDownload className="me-1" /> Download
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;