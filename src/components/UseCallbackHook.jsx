import { useCallback, useState } from "react";
import Child from "./ComponentThree";

const UseCallbackHook = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const memorizeSetCount1Func = useCallback(
    () => setCount1(count1 + 1),
    [count1]
  );
  const memorizeSetCount2Func = useCallback(
    () => setCount2(count2 + 1),
    [count2]
  );
  return (
    <>
      {count1} {count2}
      <Child text={"Button One"} onClick={memorizeSetCount1Func} />
      <Child text={"Button Two"} onClick={memorizeSetCount2Func} />
    </>
  );
};

export default UseCallbackHook;
