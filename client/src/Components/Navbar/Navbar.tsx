import { NavLink } from "react-router"; // react-router-dom doğru import edilmeli

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5">
      {/* Profile Section */}
      <NavLink to="/" className="flex items-center gap-5">
        <div className="h-24 w-24 bg-white rounded-full">
          {/* Profil resmi veya ikonu burada ekleyebilirsiniz */}
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold">Haydar Özgür Mısırlı</h2>
          <p className="text-lg opacity-50">Taze developer</p>
        </div>
      </NavLink>

      {/* Navigation Menu */}
      <ul className="flex items-center space-x-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-950 text-yellow-600 px-3 py-2 rounded-lg"
                : "px-3 py-2 rounded-lg"
            }
            to="/blogs"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-950 text-yellow-600 px-3 py-2 rounded-lg"
                : "px-3 py-2 rounded-lg transition duration-200"
            }
            to="/bookmarks"
          >
            Siteler
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-950 text-yellow-600 px-3 py-2 rounded-lg"
                : "px-3 py-2 rounded-lg transition duration-200"
            }
            to="/moments"
          >
            Anlar
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
