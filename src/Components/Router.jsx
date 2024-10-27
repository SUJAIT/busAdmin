import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import DashBoard from "./DashBoard";
import AllServices from "./AllServices";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import DashHome from "./DashboardComponents/DashHome";
import BusInfo from "./DashboardComponents/BusInfo";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
    children:[
{
    path:"/",
    element:<Home></Home>
},
{
    path:"/dashboard",
    element:<DashBoard></DashBoard>,
children:[
   {
     path:"dashome",
    element:<DashHome></DashHome>
},
{
    path:'businfo',
    element:<BusInfo></BusInfo>
}

]
},
{
    path:"/allservices",
    element:<AllServices/>
},
{
    path:"/login",
    element:<Login/>
},
{
    path:"/register",
    element:<Register/>
},
    ]
    }

])