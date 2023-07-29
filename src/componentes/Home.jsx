import React from "react";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container " data-aos="zoom-in" data-aos-delay="100">
          <div className="d-flex justify-content-center align-content-center">
            <h1>Pizza</h1>
          </div>
        </div>
      </section>
      <About />

      <Contact />
    </div>
  );
}
