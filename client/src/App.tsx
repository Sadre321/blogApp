import { Route, Routes } from 'react-router'
import Home from "./Pages/Home";
import Blog from "./Pages/Blog/Blog";
import Bookmark from "./Pages/Bookmark/Bookmark";
import Dump from "./Pages/Dump/Dump";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/bookmarks" element={<Bookmark/>}/>
        <Route path="/dump" element={<Dump/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
