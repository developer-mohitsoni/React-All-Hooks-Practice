import { useContext } from "react";
import { GlobalContext } from "./context";

const ComponentOne = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <h1>Login</h1>
      <button
        style={
          theme === "dark"
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "blue", color: "white" }
        }
      >
        Login
      </button>
    </div>
  );
};

export default ComponentOne;
