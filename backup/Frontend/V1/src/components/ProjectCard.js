import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaGithub, FaEye } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <Card className="h-100 shadow">
      <Card.Img 
        variant="top" 
        src={project.images[0] || "https://via.placeholder.com/300x200"} 
        alt={project.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.shortDesc}</Card.Text>
        
        <div className="mb-3">
          {project.technologies.map((tech, index) => (
            <Badge key={index} bg="secondary" className="me-1 mb-1">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="mt-auto d-flex justify-content-between">
          <Button 
            variant="outline-primary" 
            size="sm"
            href={project.githubUrl}
            target="_blank"
          >
            <FaGithub className="me-1" /> الكود
          </Button>
          <Button 
            variant="primary" 
            size="sm"
            href={`/project/${project.id}`}
          >
            <FaEye className="me-1" /> التفاصيل
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;