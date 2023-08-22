import React from "react";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <footer className="containerr">
        <section className="con_soc">
          <h5 className="hOne">Social</h5>
          <h5>Connect US</h5>
        </section>
        <section className="parent_socialsec_email">
          <section className="sec_social">
            <a href="https://www.linkedin.com/feed/?trk=onboarding-landing">
              LinkedIn
            </a>
            <a href="https://github.com/FadiAl-Najar">GitHub</a>
          </section>
          <section className="sec_email">
            <p>f.alnajar19@gmail.com</p>
          </section>
        </section>
      </footer>
    </>
  );
};
export default Footer;
