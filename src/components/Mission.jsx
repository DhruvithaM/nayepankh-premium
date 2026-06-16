import "./Mission.css";

function Mission() {

  return (

    <section
      className="mission"
      id="mission"
    >

      <div className="mission-top">

        <p className="mission-subtitle">
          OUR MISSION
        </p>

        <h2>
          Creating Impact
          Through Meaningful
          Social Initiatives
        </h2>

      </div>

      <div className="mission-cards">

        <div className="mission-card">

          <h3>
            Education Support
          </h3>

          <p>
            Providing learning
            opportunities, school
            supplies, and guidance
            for underprivileged
            children.
          </p>

        </div>

        <div className="mission-card">

          <h3>
            Food Distribution
          </h3>

          <p>
            Supporting families
            with food drives and
            hunger relief programs
            across communities.
          </p>

        </div>

        <div className="mission-card">

          <h3>
            Health Awareness
          </h3>

          <p>
            Conducting healthcare
            awareness campaigns
            and community support
            initiatives.
          </p>

        </div>

        <div className="mission-card">

          <h3>
            Women Empowerment
          </h3>

          <p>
            Encouraging women
            empowerment through
            skill development and
            support programs.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Mission;