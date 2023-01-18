/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a software engineering student, a full-stack developer, and a UI designer. Passionate about learning new things.";

const About = () => {
  return (
    <section className="light" id="about">
      <div
        style={{
          color: "white",
          width: "50%",
          padding: "0rem 4rem",
          margin: "0rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
      </div>
    </section>
  );
};

export default About;
