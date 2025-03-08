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
import TableRoom from './components/Room/TableRoom.jsx';
import { DetailRoom } from './components/Room/DetailRoom.jsx';
import { CatalogRoom } from './components/Room/CatalogRoom.jsx';
import { ListRoom } from './components/Room/ListRoom.jsx';
import TableShip from './components/Ship/TableShip.jsx';
import { DetailShip } from './components/Ship/DetailShip.jsx';
import { CatalogShip } from './components/Ship/CatalogShip.jsx';
import { ListShip } from './components/Ship/ListShip.jsx';
import TableReservation from './components/Reservation/TableReservation.jsx';
import { DetailReservation } from './components/Reservation/DetailReservation.jsx';
import { CatalogReservation } from './components/Reservation/CatalogReservation.jsx';
import { ListReservation } from './components/Reservation/ListReservation.jsx';
/*import TableAddon from './components/Addon/TableAddon.jsx';
import { DetailAddon } from './components/Addon/DetailAddon.jsx';
import { CatalogAddon } from './components/Addon/CatalogAddon.jsx';
import { ListAddon } from './components/Addon/ListAddon.jsx';
import TablePort from './components/Port/TablePort.jsx';
import { DetailPort } from './components/Port/DetailPort.jsx';
import { CatalogPort } from './components/Port/CatalogPort.jsx';
import { ListPort } from './components/Port/ListPort.jsx';

import TableUser from './components/User/TableUser.jsx';
import { DetailUser } from './components/User/DetailUser.jsx';
import { CatalogUser } from './components/User/CatalogUser.jsx';
import { ListUser } from './components/User/ListUser.jsx';*/
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
        path: '/room',
        element: <ListRoom />,
      },
      {
        path: '/room/:id',
        element: <DetailRoom />,
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
        path: '/ship/:id',
        element: <DetailShip />,
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
        path: '/reservation/:id',
        element: <DetailReservation />,
      },
      {
        path: '/reservation-table',
        element: <TableReservation />,
      },
      {
        path: '/catalog-reservation/',
        element: <CatalogReservation />,
      },
      /*{
        path: '/addon',
        element: <ListAddon />,
      },
      {
        path: '/addon/:id',
        element: <DetailAddon />,
      },
      {
        path: '/addon-table',
        element: <TableAddon />,
      },
      {
        path: '/catalog-addon/',
        element: <CatalogAddon />,
      },

      {
        path: '/port',
        element: <ListPort />,
      },
      {
        path: '/port/:id',
        element: <DetailPort />,
      },
      {
        path: '/port-table',
        element: <TablePort />,
      },
      {
        path: '/catalog-port/',
        element: <CatalogPort />,
      },*/

    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rutas} />
</StrictMode>,
);
