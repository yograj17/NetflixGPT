import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AppRouter } from "./utils/RouterInfo.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter}>
    <App />
  </RouterProvider>
);
