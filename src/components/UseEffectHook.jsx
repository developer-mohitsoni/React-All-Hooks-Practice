import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    console.log("Run only once");
  }, []);

  //   useEffect(() => {
  //     console.log("Render Every time");
  //   });

  useEffect(() => {
    if (count === 5) {
      setShowText(true);
    }
  }, [count]);
  return (
    <div>
      <h1>UseEffect Hook</h1>
      <h2>Count is: {count}</h2>
      {showText ? <p>Hello World</p> : null}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default UseEffectHook;
