import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="hero-content">
                <h1 className="hero-title">
                  Hello, I'm <span className="highlight">Tian</span>
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋
                  </span>
                </h1>
                <h2 className="hero-subtitle">
                  Turning Vision Into Reality Through Code
                </h2>
                <div className="hero-type">
                  <Type />
                </div>
                <div className="hero-buttons">
                  <button 
                    onClick={() => {
                      document.getElementById("contact").scrollIntoView({ 
                        behavior: "smooth",
                        block: "start"
                      });
                    }} 
                    className="btn btn-primary mr-3"
                  >
                    Get In Touch
                  </button>
                  <button 
                    onClick={() => {
                      document.getElementById("projects").scrollIntoView({ 
                        behavior: "smooth",
                        block: "start"
                      });
                    }} 
                    className="btn btn-outline"
                  >
                    View My Work
                  </button>
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nguyenthien079"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
            
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tian_nht"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
