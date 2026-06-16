import "./AboutDetails.css";

import aboutImage from "../assets/about.jpg";

import { Link } from "react-router-dom";

function AboutDetails() {

  return (

    <section className="about-details">

      {/* HERO SECTION */}

      <div className="about-hero">

        <div className="hero-overlay">

          <p>
            NAYEPANKH FOUNDATION
          </p>

          <h1>
            Empowering Lives
            Through Hope & Action
          </h1>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="about-container">

        {/* LEFT IMAGE */}

        <div className="about-image">

          <img
            src={aboutImage}
            alt="about"
          />

        </div>

        {/* RIGHT TEXT */}

        <div className="about-text">

          <h2>
            About Us
          </h2>

          <p>

            NayePankh Foundation is a
            community-driven organization
            dedicated to uplifting
            underprivileged communities
            through education, awareness,
            food support, healthcare
            initiatives, and volunteer-driven
            social impact programs.

            <br /><br />

            We believe that every child
            deserves equal opportunities,
            every family deserves dignity,
            and every community deserves hope.

            <br /><br />

            Through collective action,
            compassionate volunteers,
            and meaningful initiatives,
            we strive to create lasting
            positive change in society.

          </p>

          <Link to="/donate">

            <button className="about-btn">
              Donate Now
            </button>

          </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutDetails;