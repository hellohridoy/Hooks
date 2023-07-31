import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import FuctionalCounter from "./components/FuctionalCounter";
import HookCounter from "./components/HookCounter";
import UseStateWithObject from "./components/UseStateWithObject";
import UseStateWithArray from "./components/UseStateWithArray";

function App() {
  return (
    <div className="App">
      {/* <FuctionalCounter /> */}
      {/* <UseStateWithObject /> */}
      <UseStateWithArray />
    </div>
  );
}

export default App;
