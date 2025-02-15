import React, { lazy ,Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu"; 
import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";

const Contact = lazy(()=>import("./components/Contact"))
const About = lazy(()=>import("./components/About"))


const Foodvilla = () => {
  const[user ,setUser]=useState({
    name:"Sameer Jangra",
    email:"sameerjangra99913@gmail.com"
  });
  return (
   <Provider store={store}>
    <UserContext.Provider 
    value={{
       user:user,
       setUser:setUser
      }}>
      <Heading />   
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};

// Create the router
// const appRouter = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Foodvilla />,
//       errorElement: <Error />,
//       children :[
//         {
//           path: "/",
//           element: <Body />,
//         },
//         {
//           path: "/about",
//           element:
//           <Suspense> 
//             <About/>
//             </Suspense>,
//           children :[
//             {
//               path:"profile",
//               element:<Profile />
//             }
//           ]
//         },
//         { 
//           path: "/contact",
//           element: 
//           <Suspense fallback={<h3>Kuch bhi </h3>}>
//             <Contact />
//             </Suspense>,
//         },
//         {
//           path: "/cart",
//           element: <Cart/>,
//         },
//         {
//           path: "/instamart",
//           element: <Instamart/>,
//         },
//         {   
//           path: "/restaurant/:id",
//           element: <RestaurantMenu/>
//         }
//       ]
//     },
    
//   ],
//   {
//     future: {
//       v7_startTransition: true,
//       v7_relativeSplatPath: true,
//       v7_fetcherPersist: true,
//       v7_normalizeFormMethod: true,
//       v7_partialHydration: true,
//       v7_skipActionErrorRevalidation: true,
//     },
//   }
// );

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Foodvilla />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h3>Loading About...</h3>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h3>Loading Contact...</h3>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
