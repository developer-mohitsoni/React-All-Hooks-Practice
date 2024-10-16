import { useState } from "react";

const UseStateHook = () => {
  const [toggleText, setToggleText] = useState(false);

  console.log(toggleText);

  const handleToggleText = () => {
    setToggleText(!toggleText);
  };

  return (
    <>
      <div className="App">
        <h1>UseStateHook</h1>
        <div>
          {toggleText ? <p>Hello World</p> : null}
          <button onClick={() => handleToggleText()}>Toggle Text</button>
        </div>
      </div>
    </>
  );
};

export default UseStateHook;
