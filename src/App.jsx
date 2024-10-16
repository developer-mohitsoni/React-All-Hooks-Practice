// import UseStateHook from "./components/useStateHook";
// import UseEffectHook from "./components/useEffectHook";
import UseContextHook from "./components/UseContextHook";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";

const App = () => {
  return (
    <>
      {/* <UseStateHook/> */}
      {/* <UseEffectHook/> */}
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
        <UseContextHook />
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <ComponentOne />
          <ComponentTwo />
        </div>
      </div>
    </>
  );
};

export default App;
