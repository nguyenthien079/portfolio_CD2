import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ImPointRight } from "react-icons/im";
import { AiOutlineDownload } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div className="personal-info mb-4">
            <h2 style={{ fontSize: "1.8em", marginBottom: "15px" }}>
              <span className="purple">Nguyen Hong Thanh (Tian)</span>
            </h2>
            <p style={{ fontSize: "1.1em", marginBottom: "10px" }}>
              <strong>Position:</strong> <span className="purple">Technical Operations Engineer</span>
            </p>
            <p style={{ fontSize: "1.1em", marginBottom: "10px" }}>
              <strong>Location:</strong> <span className="purple">Ho Chi Minh City, Vietnam</span>
            </p>
            <p style={{ fontSize: "1.1em", marginBottom: "10px" }}>
              <strong>Current Company:</strong> <span className="purple">DTA Solutions</span>
            </p>
            <p style={{ fontSize: "1.1em", marginBottom: "20px" }}>
              <strong>Education:</strong> B.Sc. in <span className="purple">Software Engineering</span> at <span className="purple">Van Lang University</span>
            </p>
          </div>

          <div className="about-description">
            <h3 className="purple" style={{ marginBottom: "15px" }}>Career Summary</h3>
            <p style={{ textAlign: "justify", lineHeight: "1.8" }}>
              I am a passionate <span className="purple">Software Engineer</span> with expertise in building 
              modern web applications and managing technical operations. My journey in technology has equipped 
              me with strong skills in both <span className="purple">Frontend</span> and <span className="purple">Backend</span> development, 
              along with a deep understanding of cloud infrastructure and DevOps practices.
            </p>
            
            <h3 className="purple" style={{ marginTop: "20px", marginBottom: "15px" }}>Professional Focus</h3>
            <p style={{ textAlign: "justify", lineHeight: "1.8" }}>
              Currently, I specialize in <span className="purple">Full-Stack Development</span>, with a focus on 
              React.js, Node.js, and cloud technologies. I am dedicated to creating efficient, scalable, and 
              user-friendly solutions that solve real-world problems.
            </p>

            <h3 className="purple" style={{ marginTop: "20px", marginBottom: "15px" }}>Key Strengths</h3>
            <ul style={{ textAlign: "left", lineHeight: "1.8" }}>
              <li className="about-activity">
                <ImPointRight /> <strong>Technical Excellence:</strong> Proficient in modern web technologies and best practices
              </li>
              <li className="about-activity">
                <ImPointRight /> <strong>Problem Solving:</strong> Strong analytical skills with focus on efficient solutions
              </li>
              <li className="about-activity">
                <ImPointRight /> <strong>Team Collaboration:</strong> Effective communication and teamwork abilities
              </li>
              <li className="about-activity">
                <ImPointRight /> <strong>Continuous Learning:</strong> Always eager to learn new technologies and methodologies
              </li>
              <li className="about-activity">
                <ImPointRight /> <strong>Project Management:</strong> Experience in leading and delivering projects on time
              </li>
            </ul>
          </div>

          <div className="hobbies-section" style={{ marginTop: "30px" }}>
            <h3 className="purple" style={{ marginBottom: "15px" }}>Beyond Coding</h3>
            <p style={{ textAlign: "justify" }}>
              Outside of my professional work, I enjoy activities that keep me creative and inspired:
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Games - Strategy and puzzle games
              </li>
              <li className="about-activity">
                <ImPointRight /> Building Models - Aircraft and technical models
              </li>
              <li className="about-activity">
                <ImPointRight /> Traveling and Exploring New Places - Learning about different cultures
              </li>
              <li className="about-activity">
                <ImPointRight /> Photography - Capturing moments and landscapes
              </li>
              <li className="about-activity">
                <ImPointRight /> Reading Tech Blogs - Staying updated with latest trends
              </li>
            </ul>
          </div>

          <p style={{ color: "rgb(155 126 172)", marginTop: "30px", fontSize: "1.1em", fontStyle: "italic" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          
          <div className="cv-download" style={{ marginTop: "30px", textAlign: "center" }}>
            <Button
              variant="primary"
              href="/resume.pdf"
              target="_blank"
              download="NguyenHongThanh_CV.pdf"
              className="download-cv-btn"
            >
              <AiOutlineDownload style={{ marginRight: "8px" }} />
              Download CV
            </Button>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
