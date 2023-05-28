import { createBrowserRouter } from "react-router-dom";
import HomePage from "./home";
import CoinPage from "./coin";

export const routes = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <HomePage />
  },
  {
    path: ":id",
    element: <CoinPage />
  }
]);
