import BaseLayouts from "./BaseLayouts";
import AdminLayouts from "./AdminLayouts";
import { useLocation } from "react-router";
import { AdminLayout } from "../types";

const Layouts: React.FC<AdminLayout> = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname.startsWith("/admin") ? (
        <AdminLayouts>{children}</AdminLayouts>
      ) : (
        <BaseLayouts>{children}</BaseLayouts>
      )}
    </>
  );
};

export default Layouts;
