import Info from "./Components/Info/Info"
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
function App() {
  return (
    <div className="h-screen bg-black text-white">
      <div className="container mx-auto">
        <div className="mx-10">
          <Navbar />
          <Info/>
          <Content/>
        </div>
      </div>
    </div>
  );
}

export default App;
