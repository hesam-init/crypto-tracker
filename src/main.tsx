import "./styles/main.scss";

import { createRoot } from "react-dom/client";

import App from "./index";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
