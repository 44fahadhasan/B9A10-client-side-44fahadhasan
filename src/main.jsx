// import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider.jsx";
import "./index.css";
import routes from "./routes/PubliceRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={routes} />
  </AuthProvider>
  //  </React.StrictMode>
);
