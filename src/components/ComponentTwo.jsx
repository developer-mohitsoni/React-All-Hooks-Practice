import { useContext } from "react";
import { GlobalContext } from "./context";

const ComponentTwo = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <h1>Register</h1>
      <button
        style={
          theme === "dark"
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "red", color: "white" }
        }
      >
        Register
      </button>
    </div>
  );
};

export default ComponentTwo;
