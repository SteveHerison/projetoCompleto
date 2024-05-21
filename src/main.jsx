import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routers from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="h-screen w-screen bg-gradient-to-t from-Verydarksblue to-Darkdesaturatedblue">
      <Routers />
    </div>
  </React.StrictMode>
);
