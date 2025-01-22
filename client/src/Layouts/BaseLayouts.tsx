import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

interface BaseLayoutProps {
    children:React.node
};

const BaseLayouts:React.FC<BaseLayoutProps> = ({children}) => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto">
        <div className="mx-8">
          <Navbar />
          {children}
        </div>
      </div>
          <Footer/>
    </div>
)
}

export default BaseLayouts