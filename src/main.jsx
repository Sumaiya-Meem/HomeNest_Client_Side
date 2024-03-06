
import ReactDOM from "react-dom/client";
import React from 'react'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <AuthProvider>
 <div className="">
    <RouterProvider router={router} />
  </div>
  </AuthProvider>
  </React.StrictMode>
  
 
);
