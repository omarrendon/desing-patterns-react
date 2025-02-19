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

import HOCProtected from "./components/HighOrdercomponet/HOCProtected";
import { LoginPage } from "./components/HighOrdercomponet/pages/LoginPage";
import { AuthProvider } from "./components/HighOrdercomponet";

function App() {
  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
}

export default App;
