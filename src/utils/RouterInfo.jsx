import { createBrowserRouter } from "react-router-dom";
import { VisitPage } from "../component/Visit-Section/VisitPage";
import RPS from "../component/Games/RPS";
import SignInPage from "../component/Login-Section/SignInPage";

export const AppRouter = createBrowserRouter([
  { path: "/", element: <VisitPage /> },
  { path: "/game", element: <RPS /> },
  { path: "/signin", element: <SignInPage /> },
]);
