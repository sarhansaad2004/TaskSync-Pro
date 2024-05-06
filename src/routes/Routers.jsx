import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Errorpage from "../components/Errorpage"
import Contactus from "../components/Contactus"
import Home from "../pages/home/Home";
import Register from "../pages/accounts/Register";
import Login from "../pages/accounts/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

const routers = createBrowserRouter(
    [
        {
            path:'/',
            element: <Root/>,
            errorElement:<Errorpage/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/register',
                    element:<Register/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/contactus',
                    element:<Contactus/>
                },
                {
                    path:'/dashboard',
                    element:<PrivateRoute><Dashboard/></PrivateRoute>
                }
            ]
        }
    ]
);

export default routers;