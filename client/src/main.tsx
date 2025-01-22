import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Layouts from "./Layouts/BaseLayouts";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layouts>
      <App />
    </Layouts>
  </BrowserRouter>
);
