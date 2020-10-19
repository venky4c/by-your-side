import React from "react";
import Header from "./components/header";
import Login from "./components/Login";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/css/App.css";
//import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Login />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
