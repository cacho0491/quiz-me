import React from "react";

import { Button } from "@material-ui/core";
import classes from "./QuestionOption.module.css";

const questionOption = (props) => {
  return (
    <Button
      color="primary"
      id={props.id}
      className={classes.QuestionOption}
      onClick={props.choiceSelected}
    >
      <p>{props.choiceName}</p>
    </Button>
  );
};

export default questionOption;
