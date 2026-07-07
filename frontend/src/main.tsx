import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";

import App from "./App";

import { ThemeProvider } from "./context/ThemeContext";

AOS.init({
  duration: 800,
  once: true,
});

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>

      <ThemeProvider>

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2500,
            style: {
              borderRadius: "12px",
              background: "#1e293b",
              color: "#fff",
            },
          }}
        />

        <App />

      </ThemeProvider>

    </BrowserRouter>
  </React.StrictMode>
);