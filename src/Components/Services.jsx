/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

import src1 from "../images/gallery/img1.jpg";
import src2 from "../images/gallery/img2.jpg";
import src3 from "../images/gallery/img3.jpg";
import src4 from "../images/gallery/img4.jpg";
import src5 from "../images/gallery/img5.jpg";
import src6 from "../images/gallery/img6.jpg";
import src7 from "../images/gallery/img7.jpg";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const imageAltText = "purple and blue abstract background";

const Services = () => {
  return (
    <section className="light" id="services">
      {/* Image Gallery */}
      <div className="services-section">
        <div className="services-heading">
          <h2>Check out our services below!</h2>
        </div>
        <div className="services">
          <div className="services-cell">
            <img src={src1} className="services-cell_img" alt={imageAltText} />
            <div className="services-cell_text">Digital Marketing</div>
          </div>
          <div className="services-cell">
            <img src={src2} alt="" className="services-cell_img" />
            <div className="services-cell_text">Website devlopment</div>
          </div>
          <div className="services-cell">
            <img src={src3} alt="" className="services-cell_img" />
            <div className="services-cell_text">Videography</div>
          </div>
          <div className="services-cell">
            <img src={src4} alt="" className="services-cell_img" />
            <div className="services-cell_text">Photography</div>
          </div>
          <div className="services-cell">
            <img src={src5} alt="" className="services-cell_img" />
            <div className="services-cell_text">Consulting</div>
          </div>
          <div className="services-cell">
            <img src={src6} alt="" className="services-cell_img" />
            <div className="services-cell_text">SEO</div>
          </div>
          <div className="services-cell">
            <img src={src7} alt="" className="services-cell_img" />
            <div className="services-cell_text">Graphics Design</div>
          </div>
        </div>
      </div>
      <script src="JS/gallery.js"></script>
    </section>
  );
};

export default Services;
