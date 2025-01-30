import { Route, Routes } from 'react-router'
import Home from "./Pages/Home";
import Blog from "./Pages/Blog/Blog";
import Bookmark from "./Pages/Bookmark/Bookmark";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/bookmarks" element={<Bookmark/>}/>
      </Routes>
    </>
  );
}

export default App;
