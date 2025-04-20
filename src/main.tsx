import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./components/Footer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const footerRoot = document.getElementById("footer");
if (footerRoot) {
  ReactDOM.createRoot(footerRoot).render(<Footer />);
}
