import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";
  
const About = () => {
    return (
        <div>
            About
        </div>
    );
}

const Users = () => {
    return (
        <div>
            Users
        </div>
    );
}

const Home = () => {
    console.log('Home')
    return (<div>
        Home
        Home
        home
    </div>)
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
    path: "about",
    element: <About />,
    },
    {
    path: "users",
    element: <Users />,
    },
  ]);

  const rootElement = document.getElementById("root");

  if (!rootElement) {
    throw new Error("No root element found");
  }
  
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );