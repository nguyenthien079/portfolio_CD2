import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import Particle from "../Particle";

function Experience() {
  // FR-4.1: Education Timeline with detailed information
  const education = [
    {
      school: "Van Lang University",
      degree: "Bachelor of Science",
      field: "Software Engineering",
      year: "2021 - 2025 (Expected)",
      description: "Focused on software development, algorithms, data structures, and modern web technologies. Active participant in coding competitions and tech workshops.",
      gpa: "3.58/4.0",
      achievements: [
        "Dean's List for academic excellence",
        "Participated in National Coding Competition",
        "Member of Software Engineering Club"
      ]
    }
  ];

  // FR-4.2: Work Experience Timeline with detailed role descriptions
  const experience = [
    {
      company: "DTA Solutions",
      position: "Technical Operations Engineer",
      year: "2023 - Present",
      description: "Managing technical operations, implementing automation solutions, and ensuring system reliability. Working with cloud infrastructure and DevOps practices to optimize deployment processes and maintain 99.9% uptime.",
      skills: ["Cloud Computing", "DevOps", "System Administration", "Automation", "Monitoring"],
      responsibilities: [
        "Manage and monitor cloud infrastructure (AWS/Azure)",
        "Implement CI/CD pipelines for automated deployments",
        "Troubleshoot and resolve technical issues",
        "Collaborate with development team for system optimization"
      ]
    },
    {
      company: "University Projects",
      position: "Team Lead - Software Development",
      year: "2021 - 2022",
      description: "Led a team of 4 developers in creating innovative software solutions for academic projects. Focused on agile methodologies and best coding practices.",
      skills: ["Team Leadership", "Agile", "Git", "React", "Python"],
      responsibilities: [
        "Managed team of 4 developers",
        "Organized sprint planning and code reviews",
        "Implemented version control best practices",
        "Successfully delivered 2 major projects"
      ]
    }
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        {/* FR-4.2: Professional Experience Section */}
        <h1 className="project-heading">
          Professional <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
          My work journey and professional achievements
        </p>
        <VerticalTimeline>
          {experience.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={exp.year}
              iconStyle={{ background: "#6366f1", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title">{exp.position}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
              <p style={{ marginTop: "15px", marginBottom: "15px" }}>{exp.description}</p>
              
              {exp.responsibilities && (
                <div style={{ marginTop: "15px" }}>
                  <strong>Key Responsibilities:</strong>
                  <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} style={{ marginBottom: "5px" }}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="skill-tags" style={{ marginTop: "15px" }}>
                {exp.skills && exp.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {/* FR-4.1: Education Section */}
        <h1 className="project-heading" style={{ marginTop: "80px" }}>
          <strong className="purple">Education </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
          My academic background and certifications
        </p>
        <VerticalTimeline>
          {education.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              date={edu.year}
              iconStyle={{ background: "#8b5cf6", color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">{edu.degree}</h3>
              <h4 className="vertical-timeline-element-subtitle">{edu.school}</h4>
              <p style={{ marginTop: "10px" }}><strong>Field:</strong> {edu.field}</p>
              {edu.gpa && <p><strong>GPA:</strong> {edu.gpa}</p>}
              <p style={{ marginTop: "10px" }}>{edu.description}</p>
              
              {edu.achievements && (
                <div style={{ marginTop: "15px" }}>
                  <strong>Achievements:</strong>
                  <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} style={{ marginBottom: "5px" }}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default Experience;