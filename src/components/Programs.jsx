import "./Programs.css";

import {
  FaBookReader,
  FaHandsHelping,
  FaUtensils,
  FaHeartbeat
} from "react-icons/fa";

import { motion } from "framer-motion";

function Programs() {
  return (
    <section className="programs" id="programs">

      <div className="programs-heading">

        <p>OUR PROGRAMS</p>

        <h2>
          Creating Impact
          Through Meaningful Initiatives
        </h2>

      </div>

      <motion.div
        className="programs-container"

        initial={{ opacity: 0, y: 80 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

        viewport={{ once: true }}
      >

        <div className="program-card">

          <FaBookReader className="program-icon" />

          <h3>Education Support</h3>

          <p>
            Providing learning opportunities,
            educational resources, and mentorship
            for students.
          </p>

        </div>

        <div className="program-card">

          <FaHandsHelping className="program-icon" />

          <h3>Volunteer Programs</h3>

          <p>
            Connecting passionate volunteers
            with impactful community initiatives.
          </p>

        </div>

        <div className="program-card">

          <FaUtensils className="program-icon" />

          <h3>Food Distribution</h3>

          <p>
            Supporting underprivileged communities
            through food and relief programs.
          </p>

        </div>

        <div className="program-card">

          <FaHeartbeat className="program-icon" />

          <h3>Health Awareness</h3>

          <p>
            Organizing awareness campaigns
            for healthier and safer communities.
          </p>

        </div>

      </motion.div>

    </section>
  );
}

export default Programs;