import React, { Component } from "react";
import QuestionList from "./QuestionList";
import axios from "axios";
import { connect } from "react-redux";
import Result from "./Result";

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-5">
        <h1 className="display-2 mb-5 text-center">Trắc nghiệm online</h1>
        <QuestionList />
        <Result/>
      </div>
    );
  }

  fetchQuestions = async () => {
    try {
      const res = await axios({
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
        method: "GET",
      });

      const action = {
        type: "UPDATE_QUESTION_LIST",
        payload: res.data,
      };
      this.props.dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchQuestions();
    //   axios
    //     .get(`https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions`)
    //     .then((res) => {
    //       const questionList = res.data;
    //       this.setState({ questionList });
    //     })
    //     .catch((error) => console.log(error));
  }
}

// lifecycle: vòng đời component

export default connect()(Home);
