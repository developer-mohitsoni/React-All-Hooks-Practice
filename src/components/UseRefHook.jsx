import { useEffect, useRef } from "react";

const UseRefHook = () => {
  const countValue = useRef(0);
  const divReference = useRef();

  const handleClick = () => {
    countValue.current++;

    console.log(countValue.current);
  };

  useEffect(() => {
    const getDivReference = divReference.current;

    console.log(getDivReference);
  }, []);

  return (
    <>
      <div>
        <h1>Use Ref Hook</h1>
        <button onClick={handleClick}>Click Me</button>
        <div ref={divReference} className="hello">
          Hello World
        </div>
      </div>
    </>
  );
};

export default UseRefHook;
