import { ADD_COUNTER, RESET_COUNTER } from "./actions.types";

export const addCounter = () => {
  return {
    type: ADD_COUNTER
  };
};

export const resetCounter = () => {
  return {
    type: RESET_COUNTER
  };
};

export const inputOnChange = (text) => ({
  type: "INPUT_ON_CHANGE",
  text
});

export const addTodo = () => ({
  type: "ADD_TODO"
});

export const removeTodo = (index) => ({
  type: "REMOVE_TODO",
  index
});
