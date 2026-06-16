import "./Contact.css";

import { useState } from "react";

import axios from "axios";

function Contact() {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      message: ""
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const response =
          await axios.post(
            "http://localhost:5000/contact",
            formData
          );

        alert(
          response.data.message
        );

        setFormData({
          name: "",
          email: "",
          message: ""
        });

      }

      catch (error) {

        console.log(error);

        alert(
          "Failed to send message"
        );

      }

    };

  return (

    <section
      className="contact"
      id="contact"
    >

      <div className="contact-container">

        <div className="contact-left">

          <p className="contact-subtitle">
            CONTACT US
          </p>

          <h2>
            Let’s Build
            Change Together
          </h2>

          <p className="contact-description">
            Reach out to us for volunteering,
            collaborations, partnerships,
            or community initiatives.
          </p>

        </div>

        <form
          className="contact-form"

          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"

            value={formData.name}

            onChange={handleChange}

            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"

            value={formData.email}

            onChange={handleChange}

            required
          />

          <textarea
            name="message"
            placeholder="Your Message"

            value={formData.message}

            onChange={handleChange}

            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;