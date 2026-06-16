import "./About.css";

import aboutImage
from "../assets/about.jpg";

import { motion }
from "framer-motion";

import { Link }
from "react-router-dom";

function About() {

  return (

    <section
      className="about"
      id="about"
    >

      {/* LEFT IMAGE */}

      <div className="about-image">

        <img
          src={aboutImage}
          alt="about"
        />

      </div>

      {/* RIGHT CONTENT */}

      <motion.div
        className="about-content"

        initial={{
          opacity: 0,
          x: 80
        }}

        whileInView={{
          opacity: 1,
          x: 0
        }}

        transition={{
          duration: 1
        }}

        viewport={{
          once: true
        }}
      >

        <div className="about-text">

          <p className="about-subtitle">
            ABOUT US
          </p>

          <h2>
            Empowering Communities
            Through Meaningful Change
          </h2>

          <p className="about-description">

            NayePankh Foundation works towards
            education, awareness, and social impact
            by supporting students and communities
            through volunteer-driven initiatives.
            We believe in empowering lives through
            meaningful social programs, volunteer
            support, and community-driven change.

          </p>

          <Link to="/about-details">

            <button className="about-btn">
              Learn More
            </button>

          </Link>

        </div>

      </motion.div>

    </section>
  );
}

export default About;