import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import { ContextProvider } from "./Hooks/MyContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <NextUIProvider>
          <main className="dark text-foreground bg-background">
            <App />
          </main>
        </NextUIProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
