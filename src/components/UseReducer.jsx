import { useReducer } from "react";

const initialState = {
  count: 0,
  showCountFlag: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, count: state.count + 1 };
    case "subtract":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "showCount":
      return { ...state, showCountFlag: !state.showCountFlag };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <>
      <div>
        <h1>Use Reducer Hook</h1>
        {state.showCountFlag ? <h3>Count: {state.count}</h3> : null}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button onClick={() => dispatch({ type: "add" })}>
            Increase Count
          </button>
          <button onClick={() => dispatch({ type: "subtract" })}>
            Decrease Count
          </button>
          <button onClick={() => dispatch({ type: "reset" })}>
            Reset Count
          </button>
          <button onClick={() => dispatch({ type: "showCount" })}>
            Show Count
          </button>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
