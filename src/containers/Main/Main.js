import React, { Component } from "react";

import { Grid, Button, LinearProgress } from "@material-ui/core";
import classes from "./Main.module.css";
import Header from "../../components/Header/Header";
import Question from "../../components/Question/Question";
import QuestionOption from "../../components/QuestionOption/QuestionOption";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import LinearDeterminate from "../../components/UI/Spinners/LinearDeterminate/LinearDeterminate";

class Main extends Component {
  state = {
    currentQuestion: null,
    questionNumber: 0,
    isPlaying: true,
    loading: false,
  };

  componentDidMount() {
    this.nextQuestion();
    console.log(this.props.questions.length);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.questionNumber !== prevState.questionNumber) {
      this.nextQuestion();
    }
  }

  nextQuestion = () => {
    const currentQuestionNumber = this.state.questionNumber;
    const question = this.props.questions[currentQuestionNumber];
    this.setState({
      ...this.state,
      currentQuestion: question,
    });
  };

  checkAnswerHandler = (id) => {
    const correctAnswer = this.state.currentQuestion.correctAnswer;
    const answerSelected = this.state.currentQuestion.possibleAnswers[id];

    if (correctAnswer === answerSelected) {
      alert("Correct!");
      this.props.onAddScore();
      if (this.props.questions.length === this.state.questionNumber + 1) {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, isPlaying: false });
        }, 3000);

        console.log("game finsih");
      } else {
        this.setState({ questionNumber: this.state.questionNumber + 1 });
      }
    } else {
      this.props.onAddScoreFail();
      alert("Try harder!");
    }
  };

  reStartGameHandler = () => {
    this.props.onReStartGame();
    this.setState({
      questionNumber: 0,
      isPlaying: true,
    });
  };

  render() {
    let questionName = null;

    let choices = null;
    if (this.state.isPlaying) {
      if (this.state.currentQuestion) {
        questionName = this.state.currentQuestion.questionName;

        choices = this.state.currentQuestion.possibleAnswers.map(
          (choice, index) => {
            return (
              <Grid xs={6}>
                <QuestionOption
                  choiceName={choice}
                  id={index}
                  choiceSelected={() => this.checkAnswerHandler(index)}
                />
              </Grid>
            );
          }
        );
      }
    } else {
      choices = (
        <h2>
          Your Score: {this.props.currentScore} /{" "}
          {this.props.questions.length * 10}
        </h2>
      );
    }

    return (
      <Grid
        container
        direction="column"
        xs={8}
        spacing={0}
        className={classes.Main}
      >
        <Grid item xs={12}>
          <Header
            questionNumber={this.state.questionNumber + 1}
            currentScore={this.props.currentScore}
          />
        </Grid>
        <Grid item xs={12}>
          <Question questionName={questionName} />
        </Grid>
        <Grid
          container
          xs={12}
          style={{ textAlign: "center" }}
          justify="center"
          direction="center"
          alignItems="center"
        >
          {this.state.loading ? <LinearDeterminate /> : choices}
        </Grid>
        {!this.state.isPlaying ? (
          <Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={this.reStartGameHandler}
            >
              Start Again
            </Button>
          </Grid>
        ) : null}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions.questionBank,
    currentScore: state.score.currentScore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddScore: () => dispatch(actions.addScore()),
    onAddScoreFail: () => dispatch(actions.addScoreFail()),
    onReStartGame: () => dispatch(actions.reStartGame()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
