import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Layouts from "./Layouts/Layouts";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/authContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <Layouts>
        <App />
      </Layouts>
    </AuthProvider>
  </BrowserRouter>
);
