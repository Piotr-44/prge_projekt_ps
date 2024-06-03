import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Maps from "./components/maps/Maps";
import Map_med from "./components/map_med_station/Map_med";
import Map_employee from "./components/map_employees/Map_employee";
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
  {
    path: "/map_med_station",
    element: <Map_med />,
  },
  {
    path: "/map_employees",
    element: <Map_employee />,
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
