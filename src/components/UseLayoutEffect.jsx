import { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const divRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    console.log("useEffect is called");

    inputRef.current.value = "John Wick";
  }, []);

  // This below layoutEffect is called once the paint is completed by the browser. For DOM operation

  // You can perform DOM manipulation inside useEffect()
  useLayoutEffect(() => {
    // console.log("useLayoutEffect is called");

    const getDivRefCurrent = divRef.current;
    console.log(getDivRefCurrent);

    getDivRefCurrent.style.opacity = 0;

    setTimeout(() => {
      getDivRefCurrent.style.opacity = 1;
      getDivRefCurrent.style.color = "orange";
    }, 1000);

    console.log(inputRef.current);
    
  }, []);
  return (
    <>
      <div>
        <h1>UseLayoutEffect Hook</h1>
        <div ref={divRef}>Hello World</div>
        <input ref={inputRef} type="text" value={"Mohit"} />
      </div>
    </>
  );
};

export default UseLayoutEffect;
