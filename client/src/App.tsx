import { Route, Routes } from 'react-router'
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Blog from "./Pages/Blog/Blog";
import AdminBlog from "./Pages/Dashboard/Blog/Blog";
import AdminBlogCreate from "./Pages/Dashboard/Blog/BlogCreate";
import Bookmark from "./Pages/Bookmark/Bookmark";
import AdminBookmark from "./Pages/Dashboard/Bookmark/Bookmark";
import AdminBookmarkCreate from "./Pages/Dashboard/Bookmark/BookmarkCreate";
import Dump from "./Pages/Dump/Dump";
import AdminDump from "./Pages/Dashboard/Dump/Dump";
import AdminDumpCreate from "./Pages/Dashboard/Dump/DumpCreate";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Dashboard/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/bookmarks" element={<Bookmark/>}/>
        <Route path="/dump" element={<Dump/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin/blog" element={<AdminBlog/>}/>
        <Route path="/admin/blog/create" element={<AdminBlogCreate/>}/>
        <Route path="/admin/bookmark" element={<AdminBookmark/>}/>
        <Route path="/admin/bookmark/create" element={<AdminBookmarkCreate/>}/>
        <Route path="/admin/dump" element={<AdminDump/>}/>
        <Route path="/admin/dump/create" element={<AdminDumpCreate/>}/>
      </Routes>
    </>
  );
}

export default App;
