import "@style/app.scss";
import { RouterProvider } from "react-router-dom";
import { routes } from "./page/routes";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
