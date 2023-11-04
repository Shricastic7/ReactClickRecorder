import logo from './logo.svg';
import './App.css';
import FunctionalComp from "./Components/FunctionalComp"
import ClassComp from "./Components/ClassComp"
import Click from "./Components/Click";
import Counter from "./Components/Counter";

function App() {
  return(
      <div class='container'>
        <h2>Click Recorder App</h2>
        <FunctionalComp />
        <ClassComp />
        <Click />
        <Counter />
      </div>

  );
}

export default App;
