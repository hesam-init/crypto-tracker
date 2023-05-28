import { createBrowserRouter } from "react-router-dom";

import CoinPage from "./coin";
import HomePage from "./home";

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
