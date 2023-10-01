// if server is not running , please run manually this is my replt link
//https://replit.com/@Imransiddiqui2/fitness-api#index.js

import Dashboard from "./pages/Dashboard";
import Exercise from "./pages/Exercise";
import Food from "./pages/Food";
import Goal from "./pages/Goal";
import Sidebar from "./components/Sidebar";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="page-container">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/exercise" element={<Exercise />} />
          <Route exact path="/food" element={<Food />} />
          <Route exact path="/goal" element={<Goal />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
