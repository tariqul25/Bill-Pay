import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
// import Home from "../Home/Home";
import Bills from "../Components/Bills/Bills";
import Login from "../Components/Signin/Signin";
import Register from "../Components/Register/Register";
import Profile from "../Profile/Profile";
import PrivateRoute from "../Provider/PrivateRoute";
import BillsDetails from "../Pages/BillsDetails";
import Home from "../Components/Home/Home";
import UpdateProfile from "../Pages/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
     Component:Root,
      children:[{
        index:true,
        Component: Home,
        loader:()=>fetch('/paybill.json')  
      },
      {
        path:'/bills',
        element: <PrivateRoute><Bills/></PrivateRoute>,
        // hydrateFallbackElement: <p>loading</p>,
        loader: ()=>fetch('/paybill.json')        
      },
      {
        path:'/bills/:id',
        element: <PrivateRoute><BillsDetails/></PrivateRoute>,
        // hydrateFallbackElement: <p>loading</p>,
        loader: ()=>fetch('/paybill.json')        
      },
      {
        path:'/profile',
        element: <PrivateRoute><Profile/></PrivateRoute>
      },
      {
        path:'/update',
        element: <PrivateRoute><UpdateProfile/></PrivateRoute>
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