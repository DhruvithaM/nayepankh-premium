import "./Volunteer.css";

import { useState } from "react";

import axios from "axios";

function Volunteer() {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
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
            "https://nayepankh-premium.onrender.com/volunteer",
            formData
          );

        alert(
          response.data.message
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });

      }

      catch (error) {

        alert(
          "Error submitting form"
        );

      }

    };

  return (
    <section
      className="volunteer"
      id="volunteer"
    >

      <div className="volunteer-card">

        <p className="volunteer-subtitle">
          JOIN OUR MISSION
        </p>

        <h2>
          Become A Volunteer
          And Create Real Impact
        </h2>

        <p className="volunteer-description">
          Support education, awareness,
          and community initiatives by becoming
          a part of NayePankh Foundation.
        </p>

        <form
          className="volunteer-form"

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

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"

            value={formData.phone}

            onChange={handleChange}

            required
          />

          <textarea
            name="message"
            placeholder="Why do you want to volunteer?"

            value={formData.message}

            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Join Now
          </button>

        </form>

      </div>

    </section>
  );
}

export default Volunteer;