import "./Stats.css";

import {
  FaUsers,
  FaGlobeAsia,
  FaHandsHelping,
  FaBookOpen
} from "react-icons/fa";

import { motion } from "framer-motion";

function Stats() {
  return (
    <section className="stats">

      <div className="stats-heading">

        <p>OUR IMPACT</p>

        <h2>
          Transforming Communities
          Through Collective Action
        </h2>

      </div>

      <motion.div
        className="stats-container"

        initial={{ opacity: 0, y: 80 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

        viewport={{ once: true }}
      >

        <div className="stat-card">

          <FaUsers className="stat-icon" />

          <h1>20K+</h1>

          <p>Lives Impacted</p>

        </div>

        <div className="stat-card">

          <FaHandsHelping className="stat-icon" />

          <h1>500+</h1>

          <p>Volunteers</p>

        </div>

        <div className="stat-card">

          <FaBookOpen className="stat-icon" />

          <h1>120+</h1>

          <p>Education Drives</p>

        </div>

        <div className="stat-card">

          <FaGlobeAsia className="stat-icon" />

          <h1>15+</h1>

          <p>Cities Reached</p>

        </div>

      </motion.div>

    </section>
  );
}

export default Stats;