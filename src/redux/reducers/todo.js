const initState = {
  input: "",
  items: ["test"]
};

const todo = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "INPUT_ON_CHANGE":
      return {
        ...state,
        input: action.text
      };
    case "ADD_TODO":
      return {
        ...state,
        items: [...state.items, state.input]
      };
    case "REMOVE_TODO":
      console.log(action);
      let arr = state.items.slice(0);
      arr.splice(action.index, 1);
      return {
        input: state.input,
        items: arr
      };
    default:
      return state;
  }
};

export default todo;
