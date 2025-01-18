const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5">
      {/* Profile Section */}
      <div className="flex items-center gap-5">
        <div className="h-24 w-24 bg-white rounded-full" />
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold">Haydar Özgür Mısırlı</h2>
          <p className="text-lg opacity-50">Taze developer</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <ul className="flex items-center space-x-4">
        <li className="bg-yellow-950 text-yellow-600 px-3 py-2 rounded-lg">
          Blog
        </li>
        <li className="px-3 py-2 rounded-lg transition duration-200">
          Siteler
        </li>
        <li className=" px-3 py-2 rounded-lg transition duration-200">
          Anlar
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
