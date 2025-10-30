import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import useScrollAnimation from "./hooks/useScrollAnimation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  useScrollAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollProgress />
        <main>
          <section id="home" className="fade-in-section">
            <Home />
          </section>
          <section id="about" className="fade-in-section">
            <About />
          </section>
          <section id="projects" className="fade-in-section">
            <Projects />
          </section>
          <section id="experience" className="fade-in-section">
            <Experience />
          </section>
          <section id="blog" className="fade-in-section">
            <Blog />
          </section>
          <section id="contact" className="fade-in-section">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
