import { BrowserRouter, Route, Routes } from "react-router";
import {
  ContainerPresentationalView,
  ControlPropsView,
  CopoundComponentView,
  CustomHookView,
  HOCView,
  HomeView,
  RenderPropsView,
} from "./Views";
import { LoginPage } from "./components";
import HOCProtected from "./components/HighOrdercomponet/HOCProtected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/control-props" element={<ControlPropsView />} />
          <Route path="/render-props" element={<RenderPropsView />} />
          <Route path="/hoc" element={<HOCView />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/hoc-protected" element={<HOCProtected />} />

          <Route path="/custom-hook" element={<CustomHookView />} />
          <Route
            path="/container-presentational"
            element={<ContainerPresentationalView />}
          />
          <Route
            path="/compound-component"
            element={<CopoundComponentView />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
