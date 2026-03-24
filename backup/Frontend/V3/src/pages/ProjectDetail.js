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
} from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaArrowLeft,
  FaExternalLinkAlt,
  FaMobileAlt,
  FaCode,
  FaRocket,
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
  FaTimes,
  FaSun,
  FaMoon,
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
          exit={{ opacity: 0 }}
          className="spinner-container"
        >
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
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
      className="project-detail-page"
    >
      {/* ===== Navigation Bar with Theme Toggle ===== */}
      <Navbar expand="lg" className="navbar" sticky="top">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">
            <FaCode className="me-2" />
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
        className="project-detail-header"
        style={{ background: project.gradient }}
      >
        <Container>
          <Row className="align-items-center">
            <Col>
              <Link to="/#projects" className="back-link">
                <FaArrowLeft className="me-2" />
                Back to Portfolio
              </Link>
            </Col>
            <Col className="text-end">
              <motion.h1
                className="project-title"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.title}
              </motion.h1>
              <motion.p
                className="project-subtitle"
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
          {/* Main Content - Left Column */}
          <Col lg={8}>
            {/* Project Stats Cards */}
            <AnimatedSection delay={0.1}>
              <Row className="g-3 mb-4">
                <Col md={3} xs={6}>
                  <Card className="stat-card">
                    <Card.Body className="text-center">
                      <FaStar className="stat-icon text-warning" />
                      <h3 className="stat-value">
                        {project.metrics?.rating || "4.8"}
                      </h3>
                      <p className="stat-label">Rating</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} xs={6}>
                  <Card className="stat-card">
                    <Card.Body className="text-center">
                      <FaDownload className="stat-icon text-primary" />
                      <h3 className="stat-value">
                        {project.metrics?.downloads || "10k+"}
                      </h3>
                      <p className="stat-label">Downloads</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} xs={6}>
                  <Card className="stat-card">
                    <Card.Body className="text-center">
                      <FaUsers className="stat-icon text-success" />
                      <h3 className="stat-value">
                        {project.metrics?.users || "500+"}
                      </h3>
                      <p className="stat-label">Active Users</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} xs={6}>
                  <Card className="stat-card">
                    <Card.Body className="text-center">
                      <FaBolt className="stat-icon text-info" />
                      <h3 className="stat-value">
                        {project.metrics?.performance || "99.9%"}
                      </h3>
                      <p className="stat-label">Performance</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </AnimatedSection>

            {/* Main Tabs */}
            <AnimatedSection delay={0.2}>
              <Card className="detail-card mb-4">
                <Card.Body className="p-0">
                  <Tabs
                    activeKey={activeTab}
                    onSelect={(k) => setActiveTab(k)}
                    className="detail-tabs"
                    fill
                  >
                    {/* Overview Tab */}
                    <Tab eventKey="overview" title="Overview">
                      <div className="tab-content p-4">
                        <h4 className="mb-3">Project Overview</h4>
                        <p className="lead mb-4">
                          {project.fullDesc || project.shortDesc}
                        </p>

                        <h5 className="mb-3">Key Features</h5>
                        <Row className="g-3 mb-4">
                          {project.features?.map((feature, index) => (
                            <Col md={6} key={index}>
                              <motion.div
                                className="feature-card"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <FaCheckCircle className="feature-icon text-success" />
                                <span style={{ color: "var(--text-primary)" }}>
                                  {feature}
                                </span>
                              </motion.div>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </Tab>

                    {/* Technical Details Tab */}
                    <Tab eventKey="tech" title="Technical">
                      <div className="tab-content p-4">
                        <h4 className="mb-4">Technical Implementation</h4>

                        {/* Architecture */}
                        {project.architecture && (
                          <div className="mb-4">
                            <h5 className="mb-3">
                              <FaLayerGroup className="me-2" />
                              Architecture
                            </h5>
                            <Row className="g-3">
                              <Col md={6}>
                                <Card className="tech-card">
                                  <Card.Body>
                                    <small className="text-muted">
                                      Pattern
                                    </small>
                                    <h6
                                      style={{ color: "var(--text-primary)" }}
                                    >
                                      {project.architecture.pattern}
                                    </h6>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col md={6}>
                                <Card className="tech-card">
                                  <Card.Body>
                                    <small className="text-muted">
                                      State Management
                                    </small>
                                    <h6
                                      style={{ color: "var(--text-primary)" }}
                                    >
                                      {project.architecture.stateManagement}
                                    </h6>
                                  </Card.Body>
                                </Card>
                              </Col>
                              {project.architecture.localDb && (
                                <Col md={6}>
                                  <Card className="tech-card">
                                    <Card.Body>
                                      <small className="text-muted">
                                        Local Database
                                      </small>
                                      <h6
                                        style={{ color: "var(--text-primary)" }}
                                      >
                                        {project.architecture.localDb}
                                      </h6>
                                    </Card.Body>
                                  </Card>
                                </Col>
                              )}
                              {project.architecture.cloudDb && (
                                <Col md={6}>
                                  <Card className="tech-card">
                                    <Card.Body>
                                      <small className="text-muted">
                                        Cloud Database
                                      </small>
                                      <h6
                                        style={{ color: "var(--text-primary)" }}
                                      >
                                        {project.architecture.cloudDb}
                                      </h6>
                                    </Card.Body>
                                  </Card>
                                </Col>
                              )}
                            </Row>
                          </div>
                        )}

                        {/* Tech Stack */}
                        <div className="mb-4">
                          <h5 className="mb-3">
                            <FaCode className="me-2" />
                            Technologies Used
                          </h5>
                          <div className="tech-badges-large">
                            {project.technologies?.map((tech, index) => (
                              <Badge
                                key={index}
                                bg="primary"
                                className="tech-badge-large"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Tab>

                    {/* Challenges Tab */}
                 <Tab eventKey="challenges" title="Challenges">
  <div className="tab-content p-4">
    <h4 className="mb-4">Challenges & Solutions</h4>
    
    {project.technicalChallenges ? (
      project.technicalChallenges.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="challenge-card mb-4"
        >
          <Card>
            <Card.Body>
              <Row>
                <Col lg={5} className="border-end-lg">
                  <h6 className="text-danger mb-2">
                    <span className="challenge-number">Challenge {index + 1}</span>
                  </h6>
                  <p className="challenge-text mb-0">{item.challenge}</p>
                </Col>
                <Col lg={7}>
                  <h6 className="text-success mb-2">Solution</h6>
                  <p className="solution-text mb-3">{item.solution}</p>
                  {item.impact && (
                    <div className="impact-box">
                      <Badge bg="info" className="impact-badge">
                        Impact
                      </Badge>
                      <p className="impact-text mt-2 mb-0">
                        {item.impact}
                      </p>
                    </div>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>
      ))
    ) : (
      <div className="text-center py-5">
        <p style={{ color: 'var(--text-muted)' }}>Challenge details coming soon...</p>
      </div>
    )}
  </div>
</Tab>

                  </Tabs>
                </Card.Body>
              </Card>
            </AnimatedSection>
          </Col>

          {/* Sidebar - Right Column */}
          <Col lg={4}>
            {/* Project Info Card */}
            <AnimatedSection delay={0.3}>
              <Card className="sidebar-card mb-4">
                <Card.Body>
                  <h5 className="mb-4">Project Information</h5>

                  {/* Role */}
                  <div className="info-item mb-3">
                    <FaUserTie className="info-icon" />
                    <div>
                      <small className="text-muted">My Role</small>
                      <p
                        className="mb-0 fw-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {project.role}
                      </p>
                    </div>
                  </div>

                  {/* Timeline */}
                  {project.timeline && (
                    <div className="info-item mb-3">
                      <FaClock className="info-icon" />
                      <div>
                        <small className="text-muted">Timeline</small>
                        <p
                          className="mb-0 fw-bold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {project.timeline.duration}
                        </p>
                        {project.timeline.sprints && (
                          <small className="text-muted">
                            {project.timeline.sprints} sprints
                          </small>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Complexity */}
                  <div className="info-item mb-3">
                    <FaChartLine className="info-icon" />
                    <div>
                      <small className="text-muted">Complexity</small>
                      <p
                        className="mb-0"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {renderComplexity(project.metrics?.complexity || 4)}
                      </p>
                    </div>
                  </div>

                  {/* Code Coverage */}
                  {project.metrics?.codeCoverage && (
                    <div className="info-item mb-3">
                      <FaShieldAlt className="info-icon" />
                      <div>
                        <small className="text-muted">Code Coverage</small>
                        <ProgressBar
                          now={parseInt(project.metrics.codeCoverage)}
                          variant="success"
                          className="mt-1"
                          style={{ height: "8px" }}
                        />
                        <small className="text-muted">
                          {project.metrics.codeCoverage}
                        </small>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="action-buttons-vertical mt-4">
                    {project.githubUrl && (
                      <Button
                        variant="outline-primary"
                        href={project.githubUrl}
                        target="_blank"
                        className="w-100 mb-2"
                      >
                        <FaGithub className="me-2" />
                        View Source Code
                      </Button>
                    )}

                    {project.liveDemo && (
                      <Button
                        variant="primary"
                        href={project.liveDemo}
                        target="_blank"
                        className="w-100 mb-2"
                      >
                        <FaExternalLinkAlt className="me-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </AnimatedSection>

            {/* App Screenshots Preview */}
            <AnimatedSection delay={0.4}>
              <Card className="sidebar-card">
                <Card.Body>
                  <h5 className="mb-4">App Screenshots</h5>
                  <Row className="g-2">
                    {project.screens
                      ? project.screens.map((screen, index) => (
                          <Col xs={6} key={index}>
                            <div
                              className="screenshot-thumbnail"
                              style={{ background: project.gradient }}
                            >
                              <FaMobileAlt size={30} color="white" />
                            </div>
                          </Col>
                        ))
                      : [1, 2, 3, 4].map((item) => (
                          <Col xs={6} key={item}>
                            <div
                              className="screenshot-thumbnail"
                              style={{ background: project.gradient }}
                            >
                              <FaMobileAlt size={30} color="white" />
                            </div>
                          </Col>
                        ))}
                  </Row>
                </Card.Body>
              </Card>
            </AnimatedSection>
          </Col>
        </Row>

        {/* Navigation to Other Projects */}
        <AnimatedSection delay={0.6}>
          <Card className="navigation-card mt-4">
            <Card.Body className="p-4">
              <Row className="align-items-center">
                <Col>
                  <h5 className="mb-0" style={{ color: "var(--text-primary)" }}>
                    Explore More Projects
                  </h5>
                  <p className="text-muted mb-0">
                    Check out my other Flutter applications
                  </p>
                </Col>
                <Col className="text-end">
                  <Button
                    variant="outline-primary"
                    onClick={() => navigate("/#projects")}
                    className="me-2"
                  >
                    <FaArrowLeft className="me-2" />
                    All Projects
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => navigate("/#contact")}
                  >
                    Let's Work Together
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </AnimatedSection>
      </Container>

      {/* Add custom styles for project detail */}
      <style jsx="true">{`
        .project-detail-header {
          padding: 60px 0;
          color: white;
          position: relative;
        }

        .back-link {
          color: white;
          text-decoration: none;
          font-size: 1.1rem;
          opacity: 0.9;
          transition: opacity 0.3s;
        }

        .back-link:hover {
          opacity: 1;
          color: white;
        }

        .project-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: white;
        }

        .project-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          color: white;
          margin-bottom: 0;
        }

        .stat-card {
          border: none;
          border-radius: 12px;
          background: var(--card-bg);
          box-shadow: var(--box-shadow);
          transition: transform 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-icon {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 0;
        }

        .detail-card {
          border: none;
          border-radius: 16px;
          overflow: hidden;
          background: var(--card-bg);
          box-shadow: var(--box-shadow);
        }

        .detail-tabs {
          border-bottom: 1px solid var(--border-color);
        }

        .detail-tabs .nav-link {
          color: var(--text-muted);
          border: none;
          padding: 15px 20px;
          font-weight: 500;
          background: transparent;
        }

        .detail-tabs .nav-link:hover {
          color: var(--primary-color);
        }

        .detail-tabs .nav-link.active {
          color: var(--primary-color);
          background: transparent;
          border-bottom: 3px solid var(--primary-color);
        }

        .tab-content {
          background: var(--card-bg);
          color: var(--text-primary);
        }

        .tab-content h4,
        .tab-content h5 {
          color: var(--text-primary);
        }

        .tab-content p {
          color: var(--text-secondary);
        }

        .feature-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background: var(--bg-tertiary);
          border-radius: 10px;
        }

        .feature-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .tech-card {
          background: var(--bg-tertiary);
          border: none;
          border-radius: 10px;
        }

        .tech-card .card-body {
          padding: 12px;
        }

        .tech-card h6 {
          color: var(--text-primary);
          margin-top: 5px;
        }

        .tech-badge-large {
          font-size: 1rem;
          padding: 8px 16px;
          margin: 0 5px 10px 0;
          border-radius: 25px;
          background: var(--primary-color) !important;
          color: white !important;
        }

        .challenge-card .card {
          background: var(--bg-tertiary);
          border: none;
        }

        .challenge-card p {
          color: var(--text-secondary);
        }

        .sidebar-card {
          border: none;
          border-radius: 16px;
          background: var(--card-bg);
          box-shadow: var(--box-shadow);
        }

        .sidebar-card h5 {
          color: var(--text-primary);
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .info-icon {
          font-size: 1.2rem;
          color: var(--primary-color);
          margin-top: 3px;
        }

        .info-item p {
          color: var(--text-primary);
        }

        .action-buttons-vertical .btn {
          padding: 12px;
          font-weight: 500;
        }

        .screenshot-thumbnail {
          width: 100%;
          height: 100px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .screenshot-thumbnail:hover {
          transform: scale(1.05);
        }

        .navigation-card {
          border: none;
          border-radius: 16px;
          background: var(--card-bg);
          box-shadow: var(--box-shadow);
        }

        .navigation-card h5 {
          color: var(--text-primary);
        }

        .border-end-md {
          border-right: 1px solid var(--border-color);
        }

        @media (max-width: 768px) {
          .project-title {
            font-size: 1.8rem;
          }
          
          .project-subtitle {
            font-size: 1rem;
          }
          
          .project-detail-header {
            padding: 40px 0;
          }

          .border-end-md {
            border-right: none;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 15px;
            margin-bottom: 15px;
          }
            /* Challenge Tab Styles */
        .challenge-card .card {
          background: var(--bg-tertiary);
          border: none;
          border-radius: 12px;
          overflow: hidden;
        }

        .challenge-number {
          font-size: 0.9rem;
          font-weight: 600;
          background: rgba(220, 38, 38, 0.1);
          padding: 4px 12px;
          border-radius: 20px;
          color: #dc2626;
        }

        [data-theme="dark"] .challenge-number {
          background: rgba(239, 68, 68, 0.2);
          color: #f87171;
        }

        .challenge-text {
          color: var(--text-primary);
          line-height: 1.6;
          font-size: 0.95rem;
          word-wrap: break-word;
        }

        .solution-text {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 0.95rem;
          word-wrap: break-word;
        }

        .impact-box {
          background: var(--card-bg);
          border-left: 4px solid var(--primary-color);
          padding: 12px 15px;
          border-radius: 8px;
          margin-top: 10px;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .impact-badge {
          background: var(--primary-color) !important;
          color: white !important;
          font-size: 0.7rem;
          padding: 3px 8px;
          border-radius: 12px;
        }

        .impact-text {
          color: var(--text-primary);
          font-size: 0.9rem;
          line-height: 1.5;
          word-wrap: break-word;
          overflow-wrap: break-word;
          white-space: normal;
        }

        .border-end-lg {
          border-right: 1px solid var(--border-color);
        }

        @media (max-width: 991px) {
          .border-end-lg {
            border-right: none;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 15px;
            margin-bottom: 15px;
          }
        }

        @media (max-width: 576px) {
          .challenge-text,
          .solution-text,
          .impact-text {
            font-size: 0.9rem;
          }
          
          .impact-box {
            padding: 10px 12px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectDetail;
