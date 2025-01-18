function App() {
  return (
    <div className="h-screen w-full bg-black text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-5 px-10">
          {/* Profile Section */}
          <div className="flex items-center gap-5">
            <div className="h-24 w-24 bg-white rounded-full" />
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-bold">Haydar Özgür Mısırlı</h2>
              <p className="text-lg font-medium text-yellow-600 opacity-50">Taze developer</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <ul className="flex items-center space-x-4">
            <li className="bg-yellow-950 text-yellow-600 px-3 py-2 rounded-lg">
              Blog
            </li>
            <li className="px-3 py-2 rounded-lg hover:bg-yellow-600 hover:text-black transition duration-200">
              Siteler
            </li>
            <li className=" px-3 py-2 rounded-lg hover:bg-yellow-600 hover:text-black transition duration-200">
              Anlar
            </li>
          </ul>
        </div>
        <div>
          <h2>Hoşgeldin</h2>
          <p>Bu sitede genel hayatımdan yazılımdan,koddan,spordan,tiyatrodan,genel olarak ne varsa bahsediyorum</p>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
