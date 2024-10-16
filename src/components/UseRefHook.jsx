import { useRef } from "react";

const UseRefHook = () => {
  const countValue = useRef(0);

  const handleClick = () => {
    countValue.current++;

    console.log(countValue.current);
  };
  return (
    <>
      <div>
        <h1>Use Ref Hook</h1>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
};

export default UseRefHook;
