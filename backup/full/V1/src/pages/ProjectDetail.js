// src/pages/ProjectDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Card,
  Tab,
  Tabs,
  ProgressBar,
  Navbar,
  Nav,
  Modal,
} from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaArrowLeft,
  FaExternalLinkAlt,
  FaChartLine,
  FaDatabase,
  FaStar,
  FaDownload,
  FaUsers,
  FaBolt,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaUserTie,
  FaLayerGroup,
  FaSun,
  FaMoon,
  FaCode,
} from "react-icons/fa";
import { getProjectById } from "../data/projects";
import AnimatedSection from "../components/AnimatedSection";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useTheme();

  // State for Bootstrap Modal (image zoom)
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    setLoading(true);
    const foundProject = getProjectById(parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate("/");
    }
    setTimeout(() => setLoading(false), 300);
  }, [id, navigate]);

  // Helper function to render complexity stars
  const renderComplexity = (level) => {
    return "⭐".repeat(level) + "☆".repeat(5 - level);
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`project-detail-page ${isDarkMode ? 'dark-mode-active' : ''}`}
        >
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3" style={{ color: isDarkMode ? '#e2e8f0' : '#64748b' }}>
            Loading project details...
          </p>
        </motion.div>
      </Container>
    );
  }

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`project-detail-page ${isDarkMode ? 'dark-mode-active' : ''}`}
    >
      {/* Navigation Bar */}
      <Navbar expand="lg" className="navbar" sticky="top">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">
            <FaGithub className="me-2" />
            Shadi Dev Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="/#home">Home</Nav.Link>
              <Nav.Link href="/#projects">Projects</Nav.Link>
              <Nav.Link href="/#skills">Skills</Nav.Link>
              <Nav.Link href="/#about">About</Nav.Link>
              <Nav.Link href="/#contact">Contact</Nav.Link>
              <div className="ms-3">
                <ThemeToggle />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header with Gradient */}
      <div
        className="project-detail-header text-white py-5"
        style={{ background: project.gradient }}
      >
        <Container>
          <Row className="align-items-center">
            <Col>
              <Link to="/#projects" className="back-link text-white text-decoration-none">
                <FaArrowLeft className="me-2" />
                Back to Portfolio
              </Link>
            </Col>
            <Col className="text-end">
              <motion.h1
                className="project-title fw-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.title}
              </motion.h1>
              <motion.p
                className="project-subtitle fs-5 opacity-90"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.shortDesc}
              </motion.p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row>
          {/* Main Content */}
          <Col lg={8}>
            {/* Stats Cards */}
            <AnimatedSection delay={0.1}>
              <Row className="g-3 mb-4">
                <Col md={3} xs={6}>
                  <Card className="stat-card h-100 shadow-sm">
                    <Card.Body className="text-center">
                      <FaStar className="stat-icon text-warning fs-2" />
                      <h3 className="stat-value mt-2" style={{ color: isDarkMode ? '#ffffff' : '#1e293b' }}>
                        {project.metrics?.rating || "4.8"}
                      </h3>
                      <p className="stat-label small" style={{ color: isDarkMode ? '#cbd5e1' : '#64748b' }}>
                        Rating
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} xs={6}>
                  <Card className="stat-card h-100 shadow-sm">
                    <Card.Body className="text-center">
                      <FaDownload className="stat-icon text-primary fs-2" />
                      <h3 className="stat-value mt-2" style={{ color: isDarkMode ? '#ffffff' : '#1e293b' }}>
                        {project.metrics?.downloads || "10k+"}
                      </h3>
                      <p className="stat-label small" style={{ color: isDarkMode ? '#cbd5e1' : '#64748b' }}>
                        Downloads
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} xs={6}>
                  <Card className="stat-card h-100 shadow-sm">
                    <Card.Body className="text-center">
                      <FaUsers className="stat-icon text-success fs-2" />
                      <h3 className="stat-value mt-2" style={{ color: isDarkMode ? '#ffffff' : '#1e293b' }}>
                        {project.metrics?.users || "500+"}
                      </h3>
                      <p className="stat-label small" style={{ color: isDarkMode ? '#cbd5e1' : '#64748b' }}>
                        Active Users
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} xs={6}>
                  <Card className="stat-card h-100 shadow-sm">
                    <Card.Body className="text-center">
                      <FaBolt className="stat-icon text-info fs-2" />
                      <h3 className="stat-value mt-2" style={{ color: isDarkMode ? '#ffffff' : '#1e293b' }}>
                        {project.metrics?.performance || "99.9%"}
                      </h3>
                      <p className="stat-label small" style={{ color: isDarkMode ? '#cbd5e1' : '#64748b' }}>
                        Performance
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </AnimatedSection>

            {/* Tabs */}
            <AnimatedSection delay={0.2}>
              <Card className="detail-card shadow mb-4">
                <Tabs
                  activeKey={activeTab}
                  onSelect={(k) => setActiveTab(k)}
                  className="border-bottom"
                  fill
                >
                  <Tab eventKey="overview" title="Overview">
                    <div className="p-4">
                      <h4 className="mb-3" style={{ color: isDarkMode ? '#ffffff' : '#1e293b' }}>
                        Project Overview
                      </h4>
                      <p className="lead mb-4" style={{ color: isDarkMode ? '#e2e8f0' : '#475569' }}>
                        {project.fullDesc || project.shortDesc}
                      </p>

                      <h5 className="mb-3" style={{ color: isDarkMode ? '#ffffff' : '#1e293b' }}>
                        Key Features
                      </h5>
                      <Row className="g-3">
                        {project.features?.map((feature, index) => (
                          <Col md={6} key={index}>
                            <div className="d-flex align-items-center p-3 rounded" style={{ background: isDarkMode ? '#334155' : '#f1f5f9' }}>
                              <FaCheckCircle className="text-success me-3 fs-4" />
                              <span style={{ color: isDarkMode ? '#e2e8f0' : '#475569' }}>{feature}</span>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </Tab>

                  <Tab eventKey="tech" title="Technical">
                    <div className="p-4">
                      <h4 className="mb-4" style={{ color: isDarkMode ? '#ffffff' : '#1e293b' }}>
                        Technical Implementation
                      </h4>

                      {project.architecture && (
                        <div className="mb-4">
                          <h5 style={{ color: isDarkMode ? '#ffffff' : '#1e293b' }}>
                            <FaLayerGroup className="me-2" /> Architecture
                          </h5>
                          <Row className="g-3">
                            <Col md={6}>
                              <Card className="border-0" style={{ background: isDarkMode ? '#1e293b' : '#ffffff' }}>
                                <Card.Body>
                                  <small style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}>Pattern</small>
                                  <h6 style={{ color: isDarkMode ? '#e2e8f0' : '#1e293b' }}>
                                    {project.architecture.pattern}
                                  </h6>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col md={6}>
                              <Card className="border-0" style={{ background: isDarkMode ? '#1e293b' : '#ffffff' }}>
                                <Card.Body>
                                  <small style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}>State Management</small>
                                  <h6 style={{ color: isDarkMode ? '#e2e8f0' : '#1e293b' }}>
                                    {project.architecture.stateManagement}
                                  </h6>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </div>
                      )}

                      <h5 className="mb-3" style={{ color: isDarkMode ? '#ffffff' : '#1e293b' }}>
                        <FaCode className="me-2" /> Technologies Used
                      </h5>
                      <div className="d-flex flex-wrap gap-2">
                        {project.technologies?.map((tech, i) => (
                          <Badge key={i} bg="primary" className="px-3 py-2">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Tab>

                  <Tab eventKey="challenges" title="Challenges">
                    <div className="p-4">
                      <h4 className="mb-4" style={{ color: isDarkMode ? '#ffffff' : '#1e293b' }}>
                        Challenges & Solutions
                      </h4>
                      {project.technicalChallenges?.map((item, index) => (
                        <Card key={index} className="mb-3 border-0 shadow-sm" style={{ background: isDarkMode ? '#1e293b' : '#ffffff' }}>
                          <Card.Body>
                            <Row>
                              <Col lg={5} className="border-end border-danger pe-4">
                                <h6 className="text-danger">Challenge</h6>
                                <p className="mb-0" style={{ color: isDarkMode ? '#e2e8f0' : '#475569' }}>
                                  {item.challenge}
                                </p>
                              </Col>
                              <Col lg={7} className="ps-4">
                                <h6 className="text-success">Solution</h6>
                                <p className="mb-2" style={{ color: isDarkMode ? '#e2e8f0' : '#475569' }}>
                                  {item.solution}
                                </p>
                                {item.impact && (
                                  <small className="text-info fst-italic">
                                    Impact: {item.impact}
                                  </small>
                                )}
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      ))}
                    </div>
                  </Tab>
                </Tabs>
              </Card>
            </AnimatedSection>

            {/* Screenshots Section */}
            <AnimatedSection delay={0.3}>
              <Card className="shadow mb-4" style={{ background: isDarkMode ? '#1e293b' : '#ffffff' }}>
                <Card.Header className="bg-primary text-white">
                  <h5 className="mb-0">App Screenshots</h5>
                </Card.Header>
                <Card.Body>
                  <Row className="g-3">
                    {project.screens && project.screens.length > 0 ? (
                      project.screens.map((screen, index) => (
                        <Col xs={6} md={4} lg={3} key={index}>
                          <motion.div
                            className="screenshot-wrapper rounded overflow-hidden shadow cursor-pointer"
                            whileHover={{ scale: 1.06, y: -8 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            onClick={() => {
                              setSelectedImage(screen);
                              setShowModal(true);
                            }}
                          >
                            <img
                              src={screen}
                              alt={`${project.title} screenshot ${index + 1}`}
                              className="img-fluid w-100"
                              style={{
                                height: "220px",
                                objectFit: "cover",
                                objectPosition: "top",
                                cursor: "pointer",
                              }}
                              loading="lazy"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  "https://via.placeholder.com/400x220.png?text=Image+Not+Found";
                              }}
                            />
                          </motion.div>
                        </Col>
                      ))
                    ) : (
                      <Col>
                        <p className="text-center text-muted py-5">
                          No screenshots available yet
                        </p>
                      </Col>
                    )}
                  </Row>
                </Card.Body>
              </Card>

              {/* Bootstrap Modal for enlarged screenshot */}
              <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                size="xl"
                centered
                dialogClassName="image-modal"
              >
                <Modal.Header closeButton className={isDarkMode ? 'bg-dark text-white border-0' : ''}>
                  <Modal.Title>{project.title} - Screenshot</Modal.Title>
                </Modal.Header>
                <Modal.Body className={isDarkMode ? 'bg-dark text-center' : 'text-center'}>
                  <img
                    src={selectedImage}
                    alt="Enlarged screenshot"
                    className="img-fluid"
                    style={{
                      maxHeight: '80vh',
                      objectFit: 'contain',
                    }}
                  />
                </Modal.Body>
                <Modal.Footer className={isDarkMode ? 'bg-dark border-0' : ''}>
                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </AnimatedSection>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            <AnimatedSection delay={0.3}>
              <Card className="shadow mb-4" style={{ background: isDarkMode ? '#1e293b' : '#ffffff' }}>
                <Card.Body>
                  <h5 className="mb-4" style={{ color: isDarkMode ? '#ffffff' : '#1e293b' }}>
                    Project Information
                  </h5>

                  <div className="mb-3">
                    <small style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}>My Role</small>
                    <p className="fw-bold mb-0" style={{ color: isDarkMode ? '#e2e8f0' : '#1e293b' }}>
                      {project.role}
                    </p>
                  </div>

                  {project.timeline && (
                    <div className="mb-3">
                      <small style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}>Timeline</small>
                      <p className="fw-bold mb-0" style={{ color: isDarkMode ? '#e2e8f0' : '#1e293b' }}>
                        {project.timeline.duration}
                      </p>
                      {project.timeline.sprints && (
                        <small style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}>
                          {project.timeline.sprints} sprints
                        </small>
                      )}
                    </div>
                  )}

                  <div className="mb-3">
                    <small style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}>Complexity</small>
                    <p className="mb-0" style={{ color: isDarkMode ? '#e2e8f0' : '#1e293b' }}>
                      {renderComplexity(project.metrics?.complexity || 4)}
                    </p>
                  </div>

                  {project.metrics?.codeCoverage && (
                    <div className="mb-4">
                      <small style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}>Code Coverage</small>
                      <ProgressBar
                        now={parseInt(project.metrics.codeCoverage)}
                        variant="success"
                        className="mt-1"
                      />
                      <small style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}>
                        {project.metrics.codeCoverage}
                      </small>
                    </div>
                  )}

                  <div className="d-grid gap-2">
                    {project.githubUrl && (
                      <Button
                        variant="outline-dark"
                        href={project.githubUrl}
                        target="_blank"
                      >
                        <FaGithub className="me-2" />
                        View Source Code
                      </Button>
                    )}
                    {project.liveDemo && (
                      <Button variant="primary" href={project.liveDemo} target="_blank">
                        <FaExternalLinkAlt className="me-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </AnimatedSection>
          </Col>
        </Row>

        {/* Back / Contact buttons */}
        <div className="text-center mt-5">
          <Button
            variant="outline-primary"
            size="lg"
            className="me-3"
            onClick={() => navigate("/#projects")}
          >
            <FaArrowLeft className="me-2" />
            Back to All Projects
          </Button>
          <Button variant="success" size="lg" href="#contact">
            Let's Work Together
          </Button>
        </div>
      </Container>
    </motion.div>
  );
};

export default ProjectDetail;