import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Terms from "./terms";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <div id="container">
      <Router>
        <div id="header">
          <Header />
        </div>
        <div id="body" />
        <Route exact path="/Terms" component={Terms} />
        <div id="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}
