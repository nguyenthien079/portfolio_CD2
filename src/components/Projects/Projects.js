import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Badge } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const projectCategories = [
    { id: 'all', label: 'All Projects', icon: '🎯' },
    { id: 'web', label: 'Web Development', icon: '🌐' },
    { id: 'mobile', label: 'Mobile Apps', icon: '📱' },
    { id: 'ai', label: 'AI & ML', icon: '🤖' },
    { id: 'research', label: 'Research', icon: '📚' }
  ];

  const projects = [
    {
      imgPath: chatify,
      title: "Chatify",
      description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      ghLink: "https://github.com/soumyajit4419/Chatify",
      demoLink: "https://chatify-49.web.app/",
      category: "web",
      objectives: "Create a real-time chat application with modern features",
      role: "Full-stack Developer",
      technologies: ["React", "Firebase", "Material-UI"]
    },
    {
      imgPath: bitsOfCode,
      title: "Personal Blog",
      description: "A feature-rich blog platform built with Next.js and Markdown support. Includes dark mode, SEO optimization, and responsive design.",
      ghLink: "https://github.com/yourusername/blog",
      demoLink: "https://blog-demo.com",
      category: "web",
      objectives: "Build a performant and SEO-friendly blog platform",
      role: "Frontend Developer",
      technologies: ["Next.js", "Tailwind CSS", "MDX"]
    },
    {
      imgPath: editor,
      title: "AI Image Generator",
      description: "An AI-powered image generation application using DALL-E API. Users can create unique images from text descriptions.",
      ghLink: "https://github.com/yourusername/ai-image-gen",
      demoLink: "https://ai-image-gen.demo.com",
      category: "ai",
      objectives: "Implement AI image generation with user-friendly interface",
      role: "ML Engineer & Frontend Developer",
      technologies: ["Python", "React", "OpenAI API"]
    },
    {
      imgPath: leaf,
      title: "Mobile Fitness App",
      description: "A comprehensive fitness tracking application with workout plans, nutrition tracking, and social features.",
      ghLink: "https://github.com/yourusername/fitness-app",
      demoLink: "https://fitness-app.demo.com",
      category: "mobile",
      objectives: "Create an engaging mobile fitness solution",
      role: "Mobile App Developer",
      technologies: ["React Native", "Firebase", "Redux"]
    },
    {
      imgPath: suicide,
      title: "Research Paper Analysis",
      description: "A machine learning project analyzing research papers to identify emerging trends and patterns in scientific literature.",
      ghLink: "https://github.com/yourusername/research-analysis",
      category: "research",
      objectives: "Develop ML models for research paper analysis",
      role: "Research Scientist",
      technologies: ["Python", "SciBERT", "NetworkX"]
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalShow(true);
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong>
        </h1>
        <p className="project-subtitle">
          Discover my latest work and creative innovations
        </p>

        <div className="project-filters">
          {projectCategories.map(category => (
            <Button
              key={category.id}
              variant="filter"
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => {
                setIsLoading(true);
                setFilter(category.id);
                setTimeout(() => setIsLoading(false), 300);
              }}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.label}
            </Button>
          ))}
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                onClick={() => handleProjectClick(project)}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="project-modal"
        centered
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="project-modal">
                {selectedProject.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedProject.imgPath}
                alt={selectedProject.title}
                className="img-fluid mb-4"
              />
              <h4>Project Objectives</h4>
              <p>{selectedProject.objectives}</p>
              
              <h4>My Role</h4>
              <p>{selectedProject.role}</p>
              
              <h4>Technologies Used</h4>
              <div className="mb-4">
                {selectedProject.technologies.map((tech, index) => (
                  <Badge bg="primary" className="me-2" key={index}>
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <h4>Description</h4>
              <p>{selectedProject.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setModalShow(false)}>
                Close
              </Button>
              <Button
                variant="primary"
                href={selectedProject.ghLink}
                target="_blank"
              >
                GitHub
              </Button>
              {selectedProject.demoLink && (
                <Button
                  variant="success"
                  href={selectedProject.demoLink}
                  target="_blank"
                >
                  Live Demo
                </Button>
              )}
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
}

export default Projects;
