import "@style/index.scss";

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./index";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
