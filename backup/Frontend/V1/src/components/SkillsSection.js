import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const SkillsSection = () => {
  const skills = [
    { name: 'Flutter/Dart', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js/Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Firebase', level: 70 },
    { name: 'UI/UX Design', level: 65 },
  ];

  return (
    <section className="py-5 bg-light" id="skills">
      <Container>
        <h2 className="text-center mb-5">المهارات التقنية</h2>
        <Row>
          <Col lg={6} className="mb-4">
            <h4 className="mb-4">تطوير الموبايل</h4>
            {skills.slice(0, 3).map((skill, index) => (
              <div key={index} className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <ProgressBar now={skill.level} variant="primary" />
              </div>
            ))}
          </Col>
          <Col lg={6}>
            <h4 className="mb-4">تطوير الويب</h4>
            {skills.slice(3).map((skill, index) => (
              <div key={index} className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <ProgressBar now={skill.level} variant="success" />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;