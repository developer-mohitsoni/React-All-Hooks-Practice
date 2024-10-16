import { useContext } from "react";
import { GlobalContext } from "./context";

const UseContextHook = () => {
  const { setTheme, theme } = useContext(GlobalContext);

  console.log(theme);

  return (
    <div>
      <h1>Use Context</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
};

export default UseContextHook;
