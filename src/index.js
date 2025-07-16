import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { AppContext } from "./context/AppContent";
import AppContextProvider from "./context/AppContent";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <AppContextProvider>
    <App />
  </AppContextProvider>
  </BrowserRouter>
 
);
