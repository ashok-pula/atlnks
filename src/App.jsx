import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import AboutUs from "./components/aboutus/AboutUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mainContainer">
        <Sidebar />
        <div className="ashok">
          <AboutUs />
        </div>
      </div>
    </div>
  );
};

export default App;
