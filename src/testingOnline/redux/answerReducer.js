const initialState = {
  testAnswers: [],
  result: 0,
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    //check action type
    case "UPDATE_ANSWER":
      const cloneTestAnswers = [...state.testAnswers];
      let foundAnswer = cloneTestAnswers.find(
        (item) => item.questionId === action.payload.questionId
      );
      if (foundAnswer) {
        foundAnswer.answerId = action.payload.answerId;
        foundAnswer.answerContent = action.payload.answerContent;
      } else cloneTestAnswers.push(action.payload);

      return { ...state, testAnswers: cloneTestAnswers };
    case "UPDATE_RESULT":
      state.result = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
