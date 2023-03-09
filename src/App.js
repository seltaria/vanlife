import React from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { Home } from "./Pages/Home.jsx";
import { About } from "./Pages/About.jsx";
import { Vans, loader as vansLoader } from "./Pages/Vans.jsx";
import { VanDetail } from "./Pages/VanDetail.jsx";
import { Layout } from "./Components/Layout.jsx";

import { Dashboard } from "./Pages/Host/Dashboard.jsx";
import { Income } from "./Pages/Host/Income.jsx";
import { VansHost } from "./Pages/Host/HostVans/VansHost.jsx";
import { Reviews } from "./Pages/Host/Reviews.jsx";
import { HostLayout } from "./Pages/Host/HostLayout.jsx";
import { VansHostLayout } from "./Pages/Host/HostVans/VansHostLayout.jsx";
import { VansHostDetail } from "./Pages/Host/HostVans/VansHostDetail.jsx";
import { VansHostPricing } from "./Pages/Host/HostVans/VansHostPricing.jsx";
import { VansHostPhotos } from "./Pages/Host/HostVans/VansHostPhotos.jsx";
import { ErrorPage } from "./Pages/ErrorPage.jsx";
import { LoginPage, action as loginAction } from "./Pages/LoginPage.jsx";

import "./server";
import { Error } from "./Components/Error.jsx";
import { AuthRequired } from "./Components/AuthRequired.jsx";

export function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
      <Route path="vans/:id" element={<VanDetail />} />

      <Route element={<AuthRequired />}>
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<VansHost />} />
          <Route path="vans/:id" element={<VansHostLayout />}>
            <Route index element={<VansHostDetail />} />
            <Route path="pricing" element={<VansHostPricing />} />
            <Route path="photos" element={<VansHostPhotos />} />
          </Route>
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

      <Route path="/login" element={<LoginPage />} action={loginAction} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  );
}

