const initialState = {
  questionList: [],
};

//shallow comparison: so sánh nông
const reducer = (currenState = initialState, action) => {
  // nhạn action, chỉnh sủa currentState
  // return newState
  //action = {type, payload}
  switch (action.type) {
    case "UPDATE_QUESTION_LIST":
      currenState.questionList = action.payload;
      return { ...currenState };
    default:
      return currenState;
  }
};

export default reducer;
