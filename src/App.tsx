import "./App.css";
import {
  RenderProps,
  ControlProps,
  CompoundComponent,
  HOC,
} from "./components";

function App() {
  return (
    <>
      <header>
        <h1>Patrones de renderizado y composición </h1>
      </header>
      {/* <RenderProps /> */}
      {/* <ControlProps /> */}
      {/* <CompoundComponent /> */}
      <HOC />
    </>
  );
}

export default App;
