import "./Gallery.css";

import image1 from "../assets/gallery1.jpg";
import image2 from "../assets/gallery2.jpg";
import image3 from "../assets/gallery3.jpg";
import image4 from "../assets/gallery4.jpg";

function Gallery() {
  return (
    <section className="gallery">

      <div className="gallery-heading">

        <p>OUR GALLERY</p>

        <h2>
          Moments Of
          Real Impact
        </h2>

      </div>

      <div className="gallery-container">

        <div className="gallery-card">
          <img src={image1} alt="" />
        </div>

        <div className="gallery-card">
          <img src={image2} alt="" />
        </div>

        <div className="gallery-card">
          <img src={image3} alt="" />
        </div>

        <div className="gallery-card">
          <img src={image4} alt="" />
        </div>

      </div>

    </section>
  );
}

export default Gallery;