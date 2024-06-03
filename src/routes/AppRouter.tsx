import MainLayout from '@layouts/MainLayout';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from '@pages/Home';
import About from '@pages/About';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Error from '@pages/Error';


const AppRouter = () => {


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error/>,
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
        element:<Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        },
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
