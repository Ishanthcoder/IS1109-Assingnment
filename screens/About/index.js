import React from "react";
import "./index.css";

function About() {
  return (
    <section className="hero  has-background-black block py-6 custom-font" id="contact">
      <div className="column is-4 mx-auto">
        <h2 data-aos="fade-out" className="title has-text-centered is-uppercase has-text-link">
          ABOUT ME
        </h2>
        <div className="title-underline" />
      </div>
      <div className="hero-body">
        <div className="column is-4 mx-auto">
          <div className="title-underline" />
        </div>
        <p data-aos="fade-up">
        </p><h2 className="title is-3 has-text-white">I am shanthos <br />
          A web developer with proven experience in developing consumer faced websites using<br />
          HTML,CSS,PHP,NodeJS,Javascript<br />
          Studied Bsc Information System in UCSC<br />
          Passed out with GPA 4.00<br />
          IEEE Chairperson of student branch of UCSC </h2><br />
        <br /><br /><br /><br />
        <h1 className="title has-text-info is-4">
         <a href="mailto:shanme@gmail">Email:shanme@gmail.com<br /></a>
         <a href="https://github.com/Ishanthcoder">Github: codenzesh</a><br /> 
          <a href="https://cmb.ac.lk/">University: University Of Colombo</a>
        </h1>
        <p />
      </div>
    </section>

  );
}
export default About;