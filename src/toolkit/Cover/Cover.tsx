import React from "react";
import Container from "react-bootstrap/Container";
import styles from "./Cover.module.scss";

const Cover = () => {
  return (
    <Container>
      <div className={styles.cover}>
        <h1>Paul Doho</h1>
        <h1>Full Stack Developer</h1>
        <h1>Based in SLC</h1>
      </div>
    </Container>
  );
};

export default Cover;
