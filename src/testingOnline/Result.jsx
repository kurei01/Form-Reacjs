//todo:
// 1. tạo component result với giao diện modal bs
// 2. connect StorageEvent, lấy question + testAnswers
// 3. check: dựa vào questionList => question, dựa vào answerId => exact
// 4. render điểm ra màn hình
import React, { Component } from "react";
import { connect } from "react-redux/es/exports";

export class Result extends Component {
  checkExact = () => {
    let result = 0;
    this.props.testAnswers.forEach((testAns) => {
      const question = this.props.questionList.find(
        (question) => question.id === testAns.questionId
      );

      if (question.questionType === 1) {
        const ans = question.answers.find((ans) => ans.id === testAns.answerId);
        ans.exact && result++;
      } else {
        question.answers[0].content === testAns.answerContent && result++;
      }
    });
    console.log(result);
    this.props.dispatch({
      type: "UPDATE_RESULT",
      payload: result,
    });
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={this.checkExact}
        >
          Nộp bài
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  tổng điểm của bạn là
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">{this.props.result}/8</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // propName: state
    testAnswers: state.answer.testAnswers,
    questionList: state.question.questionList,
    result: state.answer.result,
  };
};

export default connect(mapStateToProps)(Result);
