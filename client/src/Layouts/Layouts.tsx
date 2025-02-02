import BaseLayouts from "./BaseLayouts";
import AdminLayouts from "./AdminLayouts";
import { useLocation } from "react-router";

const Layouts: React.Fc = ({ children }: { children: React.node }) => {
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
