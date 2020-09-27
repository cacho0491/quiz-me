import React from "react";

import classes from "./Header.module.css";

const header = (props) => {
  return (
    <header className={classes.Header}>
      <p>Q. Number {props.questionNumber}</p>
      <p>Score: {props.currentScore}</p>
    </header>
  );
};

export default header;
