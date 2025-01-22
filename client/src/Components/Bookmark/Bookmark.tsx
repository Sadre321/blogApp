const Bookmark = () => {
  return (
    <div className="py-5">
      <h3 className="text-3xl font-bold mb-2 tracking-wide">Siteler</h3>
      <div className="flex flex-wrap gap-2 py-2">
        <div className="rounded px-4 py-2 group hover:border-yellow-600 hover:bg-yellow-950 hover:text-white hover:shadow-lg duration-200 w-full">
          <h6 className="text-xl font-medium group-hover:text-yellow-600">Lorem ipsum dolor sit amet.</h6>
          <p className="opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis.
          </p>
        </div>
        <div className="rounded px-4 py-2 group hover:border-yellow-600 hover:bg-yellow-950 hover:text-white hover:shadow-lg duration-200 w-full">
          <h6 className="text-xl font-medium group-hover:text-yellow-600">Lorem ipsum dolor sit amet.</h6>
          <p className="opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis.
          </p>
        </div>
        <div className="rounded px-4 py-2 group hover:border-yellow-600 hover:bg-yellow-950 hover:text-white hover:shadow-lg duration-200 w-full">
          <h6 className="text-xl font-medium group-hover:text-yellow-600">Lorem ipsum dolor sit amet.</h6>
          <p className="opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, omnis.
          </p>
        </div>
      </div>
      <div className="pb-10">
        <a href="#" className="mx-4 text-xl font-medium border-b">Tum Linkler</a>
      </div>
    </div>
  );
};

export default Bookmark;
