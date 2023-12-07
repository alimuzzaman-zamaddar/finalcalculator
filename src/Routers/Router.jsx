import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Home/Home";

import ShowResult from "../ShowResult/ShowResult";





const Router = createBrowserRouter([
    {
      path: "/",
      element:   <Home></Home> ,
    },
    {
      path: "/ShowResult/:id",
      element:   <ShowResult></ShowResult> ,
      loader:  ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
    },
   

]);

export default Router;