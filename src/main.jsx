import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Contact from "./componets/Contact";
import Home from "./componets/Home";
import CountryDetail from "./componets/CountryDetail";

// define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":country",
        element: <CountryDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

// render the app with routing
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
