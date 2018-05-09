import React from "react";

const Jumbotron = ({ children }) => (
  <div style={{ height: 175, clear: "both", border: "3px solid pink", background:"LightPink"}} className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;
