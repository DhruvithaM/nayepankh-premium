import "./Details.css";

import { Link }
from "react-router-dom";

function Details() {

  return (

    <section className="details">

      <div className="details-content">

        <p className="details-subtitle">
          NAYEPANKH FOUNDATION
        </p>

        <h1>
          Together,
          Let’s Make
          A Difference
        </h1>

        <p className="details-description">

          NayePankh Foundation is
          dedicated to uplifting
          underprivileged communities
          through education, food
          distribution, healthcare
          awareness, and women
          empowerment initiatives.

          <br /><br />

          Our mission is to create
          opportunities and inspire
          hope for children and
          families in need.

        </p>

        <div className="details-cards">

          <div className="details-card">
            Education Support
          </div>

          <div className="details-card">
            Food Distribution
          </div>

          <div className="details-card">
            Healthcare Awareness
          </div>

          <div className="details-card">
            Women Empowerment
          </div>

        </div>

        <Link to="/donate">

          <button className="details-btn">
            Donate Now
          </button>

        </Link>

      </div>

    </section>
  );
}

export default Details;