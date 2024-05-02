import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./main.jsx";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
