import React, { Component } from "react";
import { connect } from "react-redux";

export class FillInBlank extends Component {
  handleChange = (e) => {
    const answerItem = {
      questionId: this.props.question.id,
      answerContent: e.target.value,
    };
    console.log(answerItem.answerContent);
    this.props.dispatch({
      type: "UPDATE_ANSWER",
      payload: answerItem,
    });
  };
  render() {
    const {
      question: { content },
      index,
    } = this.props;

    return (
      <div className="mb-3">
        <h1 className="display-4">
          Câu {index}: {content}
        </h1>

        <input
          className="form-control w-50"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect()(FillInBlank);
