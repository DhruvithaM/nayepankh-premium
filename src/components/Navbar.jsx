import "./Navbar.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import {
  FaBars,
  FaTimes
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "home",
        "about",
        "programs",
        "volunteer",
        "contact"
      ];

      sections.forEach((section) => {

        const element =
          document.getElementById(section);

        if (element) {

          const top =
            element.offsetTop - 120;

          const height =
            element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActiveSection(section);
          }

        }

      });

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <nav className="navbar">

      <div className="logo">
        NayePankh
      </div>

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >

        <li
          className={
            activeSection === "home"
              ? "active-link"
              : ""
          }
        >
          <a href="#home">Home</a>
        </li>

        <li
          className={
            activeSection === "about"
              ? "active-link"
              : ""
          }
        >
          <a href="#about">About</a>
        </li>

        <li
          className={
            activeSection === "programs"
              ? "active-link"
              : ""
          }
        >
          <a href="#programs">Programs</a>
        </li>

        <li
          className={
            activeSection === "volunteer"
              ? "active-link"
              : ""
          }
        >
          <a href="#volunteer">Volunteer</a>
        </li>

        <li
          className={
            activeSection === "contact"
              ? "active-link"
              : ""
          }
        >
          <a href="#contact">Contact</a>
        </li>

      </ul>

      <a href="#volunteer">
        <div className="nav-buttons">

  <a href="#volunteer">
    <button className="nav-btn">
      Join Us
    </button>
  </a>

  <Link to="/login">
    <button className="nav-btn admin-btn">
      Admin
    </button>
  </Link>

</div>
      </a>

      <div
        className="menu-icon"

        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >

        {
          menuOpen
            ? <FaTimes />
            : <FaBars />
        }

      </div>

    </nav>
  );
}

export default Navbar;