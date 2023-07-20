import { ADD_COUNTER, RESET_COUNTER } from "../actions/actions.types";

const initalState = {
  amount: 0,
  name: "abc"
};

const counter = (state = initalState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        amount: state.amount + 1
      };
    case RESET_COUNTER:
      return {
        amount: 0
      };
    default:
      return state;
  }
};

export default counter;
