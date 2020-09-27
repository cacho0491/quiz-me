import React from "react";

import classes from "./Question.module.css";

const question = (props) => {
  return <h2 className={classes.Question}>{props.questionName}</h2>;
};

export default question;
