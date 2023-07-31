import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import FuctionalCounter from "./components/FuctionalCounter";
import HookCounter from "./components/HookCounter";

function App() {
  return (
    <div className="App">
      {/* <FuctionalCounter /> */}
      <HookCounter />
    </div>
  );
}

export default App;
