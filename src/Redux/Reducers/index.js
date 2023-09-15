const initialState = {
  search: "",

  test: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH-CITY":
      return {
        ...state,
        search: action.payload,

        test: {
          ...state.test,
          content: [...state.test.content],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
