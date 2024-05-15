import MainLayout from '@layouts/MainLayout';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from '@pages/Home';
import About from '@pages/About';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import Login from '@pages/Login';
import Register from '@pages/Register';


const AppRouter = () => {


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
       index:true,
       element:<Home />
      },{
        path:"about",
        element:<About/>
      },
      {
        path:"categories",
        element:<Categories />
      },
      {
        path:"/products/:prefix",
        element:<Products />
      }
      ,
      {
        path:"login",
        element:<Login />
      },
      {
        path:"register",
        element:<Register />
      }
    ]
  }
]);
  return <RouterProvider router={router} /> ;
};

export default AppRouter;
