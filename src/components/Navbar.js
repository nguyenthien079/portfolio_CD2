import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { MdWork } from "react-icons/md";
import { FaBlog } from "react-icons/fa";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  // Xử lý thay đổi theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.body.classList.toggle('light-mode');
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
  
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link 
                href="#home"
                onClick={() => {
                  updateExpanded(false);
                  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#about"
                onClick={() => {
                  updateExpanded(false);
                  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                }}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#projects"
                onClick={() => {
                  updateExpanded(false);
                  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
                }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#experience"
                onClick={() => {
                  updateExpanded(false);
                  document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
                }}
              >
                <MdWork style={{ marginBottom: "2px" }} /> Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#blog"
                onClick={() => {
                  updateExpanded(false);
                  document.getElementById("blog").scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FaBlog style={{ marginBottom: "2px" }} /> Blog
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#contact"
                onClick={() => {
                  updateExpanded(false);
                  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                }}
              >
                <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="theme-btn">
              <Button
                onClick={toggleTheme}
                className="theme-btn-inner"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
