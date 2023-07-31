import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import FuctionalCounter from "./components/FuctionalCounter";
import HookCounter from "./components/HookCounter";
import UseStateWithObject from "./components/UseStateWithObject";

function App() {
  return (
    <div className="App">
      {/* <FuctionalCounter /> */}
      <UseStateWithObject />
    </div>
  );
}

export default App;
