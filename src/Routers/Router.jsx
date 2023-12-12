import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Home/Home";

import ShowResult from "../ShowResult/ShowResult";
import Main from "../Main/Main";





const Router = createBrowserRouter([
    {
      path: "/",
      element:   <Main></Main> ,
      
    children:[
      {
        path: "/",
        element:   <Home></Home> ,
  
      },
  
      {
        path: "courses",
        element:   <ShowResult></ShowResult> ,
  
      },
      {
        path: "courses/:id",
        element:   <ShowResult></ShowResult> ,
        loader:  ({params}) => fetch(`https://gpacalulatorserver.vercel.app/courses/${params.id}`),
      },

    ]
    },
  

]);




export default Router;