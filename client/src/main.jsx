import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPageCompiled from "./pages/LandingPage/LandingPage.jsx";
import NumberSequenceCompiled from "./pages/NumberSequence/NumberSequence.jsx";
import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageCompiled />
  },
  {
    path: "/number-sequence",
    element: <NumberSequenceCompiled />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
