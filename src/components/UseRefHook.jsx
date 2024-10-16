import { useEffect, useRef } from "react";

const UseRefHook = () => {
  const countValue = useRef(0);
  const divReference = useRef();
  const inputReference = useRef();

  const handleClick = () => {
    countValue.current++;

    console.log(countValue.current);
  };

  useEffect(() => {
    const getDivReference = divReference.current;

    console.log(getDivReference);
  }, []);

  // On Page load it will focus on this input
  useEffect(() => {
    inputReference.current.focus();
    console.log(inputReference.current);
  }, []);

  // This below input is not yet created in the dom tree that's why it is undefined.
  console.log(inputReference.current);

  return (
    <>
      <div>
        <h1>Use Ref Hook</h1>
        <button onClick={handleClick}>Click Me</button>
        <div ref={divReference} className="hello">
          Hello World
        </div>
        <input
          ref={inputReference}
          type="text"
          placeholder="Enter Some Points..."
        />
      </div>
    </>
  );
};

export default UseRefHook;
