import { ItemList } from "./ItemList";
import { connect } from "react-redux";
import { inputOnChange, addTodo, removeTodo } from "./redux/actions/index";

const ReduxTodo = (props) => {
  return (
    <>
      <div>
        <input
          onChange={(e) => props.inputOnChange(e.target.value)}
          value={props.input}
        />
        <button onClick={() => props.addTodo()}>+</button>
      </div>
      <ItemList item={props.items} handleRemove={(i) => props.removeTodo(i)} />
    </>
  );
};

const mapStateToProps = (state) => ({
  input: state.todo.input,
  items: state.todo.items
});

const mapDispatchToProps = (dispatch) => ({
  inputOnChange: (text) => dispatch(inputOnChange(text)),
  addTodo: () => dispatch(addTodo()),
  removeTodo: (i) => dispatch(removeTodo(i))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTodo);
