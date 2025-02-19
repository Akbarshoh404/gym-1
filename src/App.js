import { Route, Routes } from "react-router-dom";

import LandingHome from "./Pages/Home/index";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingHome />} />
      </Routes>
    </>
  );
}

export default App;
