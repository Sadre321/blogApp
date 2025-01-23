import { Route, Routes } from 'react-router'
import Home from "./Pages/Home";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs" element={<Blog/>}/>
      </Routes>
    </>
  );
}

export default App;
