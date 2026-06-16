import "./Donate.css";

function Donate() {

  return (

    <section className="donate-page">

      {/* HERO */}

      <div className="donate-hero">

        <p>
          SUPPORT NAYEPANKH
        </p>

        <h1>
          Your Contribution
          Can Change Lives
        </h1>

      </div>

      {/* CONTENT */}

      <div className="donate-container">

        {/* LEFT SIDE */}

        <div className="donate-left">

          <h2>
            Why Donate?
          </h2>

          <p>

            Every contribution helps us
            support education, food drives,
            healthcare awareness, women
            empowerment, and community
            welfare initiatives.

            <br /><br />

            Your support allows us to
            create meaningful impact and
            provide hope to children and
            families in need.

          </p>

          <div className="impact-cards">

            <div className="impact-card">
              Education Support
            </div>

            <div className="impact-card">
              Food Distribution
            </div>

            <div className="impact-card">
              Health Awareness
            </div>

            <div className="impact-card">
              Women Empowerment
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="donate-right">

          <div className="donate-box">

            <h2>
              Donation Details
            </h2>

            <div className="donate-details">

              <p>
                UPI ID:
                nayepankh@upi
              </p>

              <p>
                Account Name:
                NayePankh Foundation
              </p>

              <p>
                Bank:
                State Bank of India
              </p>

              <p>
                IFSC:
                SBIN0001234
              </p>

            </div>

            <button className="donate-btn">
              Thank You ❤️
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Donate;