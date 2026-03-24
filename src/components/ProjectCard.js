// src/components/ProjectCard.js - Enhanced Version
import React, { useState } from 'react';
import { Card, Badge, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaGithub, FaEye, FaStar, FaDownload, FaChartLine, FaCode, FaUsers, FaRocket, FaDatabase, FaShieldAlt, FaBolt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProjectCard.css'; // We'll create this

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Helper to render complexity stars
  const renderComplexity = (level) => {
    return '⭐'.repeat(level) + '☆'.repeat(5-level);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="project-card-enhanced h-100">
        {/* Header with Gradient */}
        <div 
          className="card-header-gradient" 
          style={{ background: project.gradient }}
        >
          <div className="header-content">
            <FaMobileAlt size={40} className="text-white mb-2" />
            <h3 className="text-white mb-0">{project.title}</h3>
          </div>
          
          {/* Floating Metrics Badges */}
          <div className="floating-metrics">
            {project.metrics && (
              <>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>App Store Rating</Tooltip>}
                >
                  <Badge bg="warning" text="dark" className="metric-badge">
                    <FaStar className="me-1" /> {project.metrics.rating}
                  </Badge>
                </OverlayTrigger>
                
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Downloads</Tooltip>}
                >
                  <Badge bg="success" className="metric-badge">
                    <FaDownload className="me-1" /> {project.metrics.downloads}
                  </Badge>
                </OverlayTrigger>
              </>
            )}
          </div>
        </div>

        <Card.Body>
          {/* Quick Stats Row */}
          <div className="quick-stats mb-3">
            <div className="stat-item" title="Active Users">
              <FaUsers className="stat-icon" />
              <span className="stat-value">{project.metrics?.users || 'N/A'}</span>
            </div>
            <div className="stat-item" title="Performance">
              <FaBolt className="stat-icon" />
              <span className="stat-value">{project.metrics?.performance || 'N/A'}</span>
            </div>
            <div className="stat-item" title="Code Coverage">
              <FaShieldAlt className="stat-icon" />
              <span className="stat-value">{project.metrics?.codeCoverage || 'N/A'}</span>
            </div>
          </div>

          {/* Description */}
          <Card.Text className="project-description">
            {project.shortDesc}
          </Card.Text>

          {/* Architecture Highlights */}
          {project.architecture && (
            <div className="architecture-section mb-3">
              <h6 className="section-title">
                <FaDatabase className="me-2" /> Architecture
              </h6>
              <div className="arch-badges">
                <Badge bg="info" className="me-1 mb-1">
                  {project.architecture.pattern}
                </Badge>
                <Badge bg="secondary" className="me-1 mb-1">
                  {project.architecture.stateManagement}
                </Badge>
              </div>
            </div>
          )}

          {/* Key Features with Icons */}
          <div className="features-section mb-3">
            <h6 className="section-title">
              <FaRocket className="me-2" /> Key Features
            </h6>
            <div className="feature-list">
              {project.features?.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <span className="feature-bullet">✓</span>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
              {project.features?.length > 3 && (
                <span className="more-features">+{project.features.length - 3} more</span>
              )}
            </div>
          </div>

          {/* Tech Stack with Tooltips */}
          <div className="tech-stack mb-3">
            {project.technologies?.slice(0, 4).map((tech, index) => (
              <OverlayTrigger
                key={index}
                placement="top"
                overlay={<Tooltip>Used in {project.title}</Tooltip>}
              >
                <Badge 
                  bg="light" 
                  text="dark" 
                  className="tech-badge-enhanced"
                >
                  {tech}
                </Badge>
              </OverlayTrigger>
            ))}
            {project.technologies?.length > 4 && (
              <Badge bg="secondary" className="tech-badge-enhanced">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Complexity Indicator */}
          {project.complexity && (
            <div className="complexity-indicator mb-3">
              <span className="complexity-label">Complexity:</span>
              <span className="complexity-stars">
                {renderComplexity(project.complexity)}
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="action-buttons">
            <Button 
              variant="outline-primary" 
              size="sm" 
              href={project.githubUrl}
              target="_blank"
              className="action-btn"
            >
              <FaGithub className="me-1" /> Code
            </Button>
            
            <Button 
              variant="primary" 
              size="sm"
              as={Link}
              to={`/project/${project.id}`}
              className="action-btn"
            >
              <FaEye className="me-1" /> Details
            </Button>

            {project.liveDemo && (
              <Button 
                variant="success" 
                size="sm"
                href={project.liveDemo}
                target="_blank"
                className="action-btn"
              >
                <FaRocket className="me-1" /> Demo
              </Button>
            )}
          </div>

          {/* Hover Details - Shown on hover */}
          {isHovered && (
            <motion.div 
              className="hover-details"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <hr />
              <div className="d-flex justify-content-between">
                <span className="detail-item">
                  <FaCode className="me-1" /> {project.codeQuality?.tests || 0} tests
                </span>
                <span className="detail-item">
                  <FaChartLine className="me-1" /> {project.timeline?.duration || 'N/A'}
                </span>
              </div>
            </motion.div>
          )}
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;