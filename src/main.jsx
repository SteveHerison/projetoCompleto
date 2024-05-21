import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="h-screen w-screen bg-gradient-to-t from-Verydarksblue to-Darkdesaturatedblue">
      <App />
    </div>
  </React.StrictMode>
);
