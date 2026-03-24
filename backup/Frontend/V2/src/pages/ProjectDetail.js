import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Card, Tab, Tabs, Image, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowLeft, FaExternalLinkAlt, FaMobileAlt, FaCode, FaRocket, FaChartLine, FaDatabase } from 'react-icons/fa';
import { getProjectById } from '../data/projects';
import AnimatedSection from '../components/AnimatedSection';

 
const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const foundProject = getProjectById(id);
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <Container className="py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header with Back Button */}
      <div className="py-4" style={{ background: project.gradient }}>
        <Container>
          <Row className="align-items-center">
            <Col>
              <Link to="/" className="text-white text-decoration-none d-inline-flex align-items-center">
                <FaArrowLeft className="me-2" />
                Back to Portfolio
              </Link>
            </Col>
            <Col className="text-end">
              <h1 className="text-white mb-0">{project.title}</h1>
              <p className="text-white-50 mb-0">{project.shortDesc}</p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row>
          <Col lg={8}>
            <AnimatedSection>
              <Card className="shadow-lg border-0 mb-4">
                <Card.Body className="p-4">
                  <Tabs
                    activeKey={activeTab}
                    onSelect={(k) => setActiveTab(k)}
                    className="mb-4"
                    fill
                  >
                    <Tab eventKey="overview" title="Overview">
                      <div className="p-3">
                        <h4 className="mb-3">Project Overview</h4>
                        <p className="lead">{project.fullDesc}</p>
                        <div className="bg-light p-4 rounded-3 mt-4">
                          <h5>Key Features</h5>
                          <Row className="mt-3">
                            {project.features.map((feature, index) => (
                              <Col md={6} key={index} className="mb-3">
                                <div className="d-flex align-items-center">
                                  <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                                    <FaRocket className="text-primary" />
                                  </div>
                                  <span>{feature}</span>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </div>
                      </div>
                    </Tab>
                    
                    <Tab eventKey="details" title="Technical Details">
                      <div className="p-3">
                        <h4 className="mb-3">Technical Implementation</h4>
                        <p style={{ whiteSpace: 'pre-line' }}>{project.longDesc}</p>
                        
                        <div className="mt-4">
                          <h5>Technologies Used</h5>
                          <div className="d-flex flex-wrap gap-2 mt-3">
                            {project.technologies.map((tech, index) => (
                              <Badge key={index} bg="primary" className="py-2 px-3 fs-6">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Tab>
                    
                    <Tab eventKey="challenges" title="Challenges">
                      <div className="p-3">
                        <h4 className="mb-3">Challenges & Solutions</h4>
                        <ul className="list-unstyled">
                          {project.challenges?.map((challenge, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="mb-4 p-3 bg-light rounded-3"
                            >
                              <h6 className="text-primary">Challenge {index + 1}</h6>
                              <p className="mb-0">{challenge}</p>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </Tab>
                  </Tabs>
                </Card.Body>
              </Card>
            </AnimatedSection>
          </Col>

          <Col lg={4}>
            <AnimatedSection delay={0.2}>
              {/* Project Info Card */}
              <Card className="shadow-lg border-0 mb-4">
                <Card.Body className="p-4">
                  <h5 className="mb-4">Project Information</h5>
                  
                  <div className="mb-4">
                    <h6 className="text-muted mb-2">My Role</h6>
                    <p className="mb-0">{project.role}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h6 className="text-muted mb-2">Tech Stack</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech, index) => (
                        <Badge key={index} bg="light" text="dark" className="py-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="d-grid gap-2">
                    <Button 
                      variant="outline-primary" 
                      href={project.githubUrl}
                      target="_blank"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <FaGithub className="me-2" />
                      View Source Code
                    </Button>
                    
                    {project.liveDemo && (
                      <Button 
                        variant="primary"
                        href={project.liveDemo}
                        target="_blank"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <FaExternalLinkAlt className="me-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>

              {/* Screenshots Preview */}
              <Card className="shadow-lg border-0">
                <Card.Body className="p-4">
                  <h5 className="mb-4">App Screenshots</h5>
                  <Row className="g-3">
                    {project.screens.map((screen, index) => (
                      <Col xs={6} key={index}>
                        <div className="border rounded-3 overflow-hidden" style={{ height: '150px' }}>
                          <div 
                            className="w-100 h-100 d-flex align-items-center justify-content-center"
                            style={{ background: project.gradient }}
                          >
                            <FaMobileAlt size={40} color="white" />
                          </div>
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
        <AnimatedSection delay={0.3}>
          <Card className="shadow-lg border-0 mt-4">
            <Card.Body className="p-4">
              <h5 className="mb-4">View Other Projects</h5>
              <div className="d-flex justify-content-between">
                <Button variant="outline-secondary" onClick={() => navigate('/')}>
                  <FaArrowLeft className="me-2" />
                  Back to All Projects
                </Button>
                <div>
                  <Button variant="outline-primary" className="me-2">
                    Previous Project
                  </Button>
                  <Button variant="primary">
                    Next Project
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </AnimatedSection>
      </Container>
    </motion.div>
  );
};

export default ProjectDetail;