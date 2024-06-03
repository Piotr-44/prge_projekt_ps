import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Maps from "./components/maps/Maps";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/maps",
    element: <Maps />,
  },
]);

function App() {
  const imie = "world";

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
