/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/name.png";

const imageAltText = "woman holding laptop standing by server room with glass wall";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="dark">
      <div id="homeContentText">
        <div>
          <h1>{name}</h1>
          <h2>{title}</h2>
          <a href="#about">
            <div className="flexRow bodyBtn">
              <h2 className="moreContentText">More</h2>
              <img src={arrowSvg} className="white" style={{ height: "1.5rem", width: "1.5rem" }} alt={imageAltText} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
