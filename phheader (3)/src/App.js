import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Terms from "./terms";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <Route  />
        <Footer />
      </Router>
    </div>
  );
}
