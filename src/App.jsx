// import UseStateHook from "./components/useStateHook";
// import UseEffectHook from "./components/useEffectHook";
// import UseContextHook from "./components/UseContextHook";
// import ComponentOne from "./components/ComponentOne";
// import ComponentTwo from "./components/ComponentTwo";
// import UseReducer from "./components/UseReducer";
// import UseRefHook from "./components/UseRefHook";
import UseLayoutEffect from "./components/UseLayoutEffect";

const App = () => {
  return (
    <>
      {/* <UseStateHook/> */}
      {/* <UseEffectHook/> */}
      {/* <UseContextHook/> */}
      <div
        className="App"
        style={{
          display: "flex",
          height: "100vh",
          width: "100vh",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <UseContextHook />
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <ComponentOne />
          <ComponentTwo />
        </div> */}

        {/* <UseReducer /> */}

        {/* <UseRefHook /> */}

        <UseLayoutEffect />
      </div>
    </>
  );
};

export default App;
