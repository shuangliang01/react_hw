export const ItemList = (props) => {
  return (
    <>
      <ul>
        {props.item.map((e, i) => (
          <li style={{ overflow: "hidden" }} key={i}>
            {e}
            <button
              style={{ float: "right" }}
              onClick={() => props.handleRemove(i)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
