import BaseLayouts from "./BaseLayouts";
import AdminLayouts from "./AdminLayouts";

const Layouts:React.Fc = ({children}:{children:React.node}) => {
  return (
    <AdminLayouts>
      {children}
    </AdminLayouts>
  )
}

export default Layouts