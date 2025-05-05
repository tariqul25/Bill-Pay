import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Home/Home";
import Bills from "../Components/Bills/Bills";
import Login from "../Components/Signin/Signin";
import Register from "../Components/Register/Register";
import Profile from "../Profile/Profile";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
     Component:Root,
      children:[{
        index:true,
        Component:Home
      },
      {
        path:'/bills',
        element: <PrivateRoute><Bills/></PrivateRoute>
      },
      {
        path:'/profile',
        element: <PrivateRoute><Profile/></PrivateRoute>
      },
      {
        path:'/login',
        Component: Login
      },
      {
        path:'/register',
        Component: Register
      },
    ]
    },
  ]);

  export default router;