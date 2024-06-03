import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Maps from "./components/maps/Maps";
import Map_med from "./components/map_med_station/Map_med";
import Map_employee from "./components/map_employees/Map_employee";
import Station_list from "./components/dashboard_med_station_list/Station_list";
import Incident_list from "./components/dashboard_incidents_list/Incident_list";
import Employee_list from "./components/dashboard_employees_list/Employee_list";
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
  {
    path: "/dashboard_med_station_list",
    element: <Station_list />,
  },
  {
    path: "/dashboard_incidents_list",
    element: <Incident_list />,
  },
  {
    path: "/dashboard_employees_list",
    element: <Employee_list />,
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
