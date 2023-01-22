import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Admin from "./Layouts/Admin";
import Layouts from "./Layouts";

function App() {
  return (
    <div className="_App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layouts/>}/>
            <Route path="/admin" element={<Admin/>}/>
            {/* <Route path="/" element={<Profile/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;