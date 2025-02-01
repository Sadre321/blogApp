import { Route, Routes } from 'react-router'
import Home from "./Pages/Home";
import Blog from "./Pages/Blog/Blog";
import AdminBlog from "./Pages/Dashboard/Blog/Blog";
import Bookmark from "./Pages/Bookmark/Bookmark";
import AdminBookmark from "./Pages/Dashboard/Bookmark/Bookmark";
import Dump from "./Pages/Dump/Dump";
import AdminDump from "./Pages/Dashboard/Dump/Dump";
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
        <Route path="/admin/blog" element={<AdminBlog/>}/>
        <Route path="/admin/bookmark" element={<AdminBookmark/>}/>
        <Route path="/admin/dump" element={<AdminDump/>}/>
      </Routes>
    </>
  );
}

export default App;
