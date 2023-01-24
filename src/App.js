import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Layouts = React.lazy(() => import('./Layouts'));
const Admin = React.lazy(() => import('./pages/Admin'));

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