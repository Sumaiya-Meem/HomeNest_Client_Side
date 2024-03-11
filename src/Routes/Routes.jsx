
import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProperty from "../Pages/AllProperties/AllProperty/AllProperty";
import Dashboard from "../Pages/DashboardPage/Dashboard/Dashboard";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/Property",
          element: <AllProperty></AllProperty>,
        }
        
   
      ]
      },

      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            // path: "",
            // element: <Profile></Profile>,
          },
         
        ]
        }
  ]);

export default router ;