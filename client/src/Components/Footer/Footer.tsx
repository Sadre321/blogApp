const Footer = () => {
  return (
    <div className="border-t w-full border-yellow-600 bg-yellow-950 pt-16 pb-4">
      <div className="container mx-auto">
        <div className="mx-10 flex flex-col gap-2 items-start justify-start">
          <h2 className="text-3xl font-bold">Aninda haberdar ol!</h2>
          <p className="opacity-75">
            Yazdıklarımı kaçırmak istemezseniz abone olmak için aşağıdan e-posta
            adresinizi girip devam edebilirsiniz.
          </p>
          <div className="py-3 w-full flex gap-4">
            <input
              type="text"
              className="px-4 py-2 rounded-3xl w-1/3"
              placeholder="E-posta adresiniz"
            />
            <button className="px-6 py-2 bg-orange-400 rounded-3xl text-lg font-semibold">Abone Ol</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
