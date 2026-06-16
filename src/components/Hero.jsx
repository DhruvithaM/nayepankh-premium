import "./Hero.css";

import heroImage
from "../assets/hero.jpg";

import { motion }
from "framer-motion";

import { Link }
from "react-router-dom";

function Hero() {

  return (

    <section
      className="hero"
      id="home"

      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.45),
            rgba(0,0,0,0.6)
          ),
          url(${heroImage})
        `
      }}
    >

      <motion.div
        className="hero-content"

        initial={{
          opacity: 0,
          y: 80
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1.2
        }}
      >

        <p className="hero-subtitle">
          NAYEPANKH FOUNDATION
        </p>

        <h1>
          Inspiring Hope
          Through Education
        </h1>

        <p className="hero-description">

          Supporting communities
          through awareness,
          opportunities, and
          meaningful social impact.

        </p>

        <Link to="/details">

          <button className="hero-btn">
            Explore More
          </button>

        </Link>

      </motion.div>

    </section>
  );
}

export default Hero;