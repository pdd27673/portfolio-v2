import React from "react";
import Banner from "../../toolkit/Banner/Banner";
import Cover from "../../toolkit/Cover/Cover";
import Container from "react-bootstrap/Container";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div><Cover/></div>
      <div>Biography</div>
      <div>Education/Experience</div>
      <div>Skills</div>
      <div>Companies related</div>
      <div>Latest projects</div>
      <div>Testimonials</div>
      <div>Contact me</div>
      <div>Footer</div>
    </div>
  );
};

export default Portfolio;
