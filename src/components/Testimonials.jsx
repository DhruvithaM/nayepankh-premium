import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonials-heading">

        <p>TESTIMONIALS</p>

        <h2>
          Voices Of
          Positive Change
        </h2>

      </div>

      <div className="testimonials-container">

        <div className="testimonial-card">

          <p>
            “NayePankh Foundation truly changed
            the lives of many students through
            education and support initiatives.”
          </p>

          <h4>
            — Volunteer Member
          </h4>

        </div>

        <div className="testimonial-card">

          <p>
            “An inspiring organization creating
            meaningful social impact through
            awareness and community programs.”
          </p>

          <h4>
            — Community Supporter
          </h4>

        </div>

        <div className="testimonial-card">

          <p>
            “Their initiatives helped students
            gain opportunities and confidence
            for a brighter future.”
          </p>

          <h4>
            — Education Partner
          </h4>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;