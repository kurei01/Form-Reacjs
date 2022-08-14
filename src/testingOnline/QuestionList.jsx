import React, { PureComponent } from "react";
import FillInBlank from "./FillInBlank";
import MultipleChoice from "./MultipleChoice";
import { connect } from "react-redux/es/exports";

export class QuestionList extends PureComponent {
  render() {
    console.log("render question list");
    return (
      <div>
        {/* optional chaining */}
        {this.props.questionList?.map((item, index) => {
          if (item.questionType === 1) {
            return (
              <MultipleChoice key={item.id} question={item} index={index + 1} />
            );
          }
          return (
            <FillInBlank key={item.id} question={item} index={index + 1} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // propName: state
    questionList: state.question.questionList,
  };
};

export default connect(mapStateToProps)(QuestionList);

// class Student {
//   constructor() {
//     this.fullName = "hieu";
//   }

//   static showName() {
//     console.log(this.fullName);
//   }
// }

// Student.showName();

// var studen1 = new Student();
