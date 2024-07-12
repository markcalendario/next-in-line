import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArithmeticSequenceCompiled from "./pages/NumberSequence/ArithmeticSequence.jsx";
import GeometricSequenceCompiled from "./pages/NumberSequence/GeometricSequence.jsx";
import SequenceSelectCompiled from "./pages/SequenceSelect/SequenceSelect.jsx";
import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/sequence/geometric",
    element: <GeometricSequenceCompiled />
  },
  {
    path: "/sequence/arithmetic",
    element: <ArithmeticSequenceCompiled />
  },
  {
    path: "/",
    element: <SequenceSelectCompiled />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
