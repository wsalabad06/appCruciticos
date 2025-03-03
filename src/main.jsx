import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Home } from './components/Home/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageNotFound } from './components/Home/PageNotFound.jsx';
import { CatalogCruise } from './components/Cruise/CatalogCruise.jsx';
import { ListCruise } from './components/Cruise/ListCruise.jsx';
import TableCruise from './components/Cruise/TableCruise.jsx';
import { DetailCruise } from './components/Cruise/DetailCruise.jsx';
import { CreateCruise } from './components/Cruise/CreateCruise.jsx';
import { UpdateCruise } from './components/Cruise/UpdateCruise.jsx';
import TableRoom from './components/Room/TableRoom.jsx';
import { CatalogRoom } from './components/Room/CatalogRoom.jsx';
import { ListRoom } from './components/Room/ListRoom.jsx';
import TableShip from './components/Ship/TableShip.jsx';
import { CatalogShip } from './components/Ship/CatalogShip.jsx';
import { ListShip } from './components/Ship/ListShip.jsx';
import TableReservation from './components/Reservation/TableReservation.jsx';
import { CatalogReservation } from './components/Reservation/CatalogReservation.jsx';
import { ListReservation } from './components/Reservation/ListReservation.jsx';
const rutas = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
      {
        path: '/catalog-cruise/',
        element: <CatalogCruise />,
      },
      {
        path: '/cruise',
        element: <ListCruise />,
      },
      {
        path: '/cruise-table',
        element: <TableCruise />,
      },
      {
        path: '/cruise/:id',
        element: <DetailCruise />
      },
      {
        path: '/cruise/crear/',
        element: <CreateCruise />,
      },
      {
        path: '/cruise/update/:id',
        element: <UpdateCruise />,
      },
  
      {
        path: '/room',
        element: <ListRoom />,
      },
      {
        path: '/room-table',
        element: <TableRoom />,
      },
      {
        path: '/catalog-room/',
        element: <CatalogRoom />,
      },
      {
        path: '/ship',
        element: <ListShip />,
      },
      {
        path: '/ship-table',
        element: <TableShip />,
      },
      {
        path: '/catalog-ship/',
        element: <CatalogShip />,
      },
      {
        path: '/reservation',
        element: <ListReservation />,
      },
      {
        path: '/reservation-table',
        element: <TableReservation />,
      },
      {
        path: '/catalog-reservation/',
        element: <CatalogReservation />,
      },
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rutas} />
</StrictMode>,
);
