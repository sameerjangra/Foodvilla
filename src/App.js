import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const Foodvilla = () => {
  return (
    <>
      <Heading />
      <Outlet />
      <Footer />
    </>
  );
};

// Create the router
const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Foodvilla />,
      errorElement: <Error />,
      children :[
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
          children :[
            {
              path:"profile",
              element:<Profile />
            }
          ]
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart/>,
        },
        {
          path: "/restaurant/:id",
          element: <RestaurantMenu/>
        }
      ]
    },
    
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
