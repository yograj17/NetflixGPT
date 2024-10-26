import { createBrowserRouter } from "react-router-dom";
import { VisitPage } from "../component/Visit-Section/VisitPage";
import SignInPage from "../component/Login-Section/SignInPage";
import GameHeader from "../component/Games/GameHeader";

export const AppRouter = createBrowserRouter([
  { path: "/", element: <VisitPage /> },
  { path: "/game", element: <GameHeader /> },
  { path: "/signin", element: <SignInPage /> },
]);
