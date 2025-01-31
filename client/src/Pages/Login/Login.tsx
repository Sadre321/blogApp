import React from "react";

const Login = () => {
  return (
    <div className="my-5">
      <h1 className="text-5xl font-bold mb-5">Login</h1>
      <p className="opacity-75 text-lg mb-10">
        Geri eklemeler mi yapicaksin. Hosgeldin!
      </p>
      <hr className="opacity-15" />

      <form action="" className="py-10 mb-16">
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-3 px-2">
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="px-4 py-3 rounded-3xl w-full"
            placeholder="E-posta adresinizi girin"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-3 px-2">
            Şifre
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="px-4 py-3 rounded-3xl w-full"
            placeholder="Şifrenizi girin"
            required
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-400 rounded-3xl text-lg font-semibold mt-3"
          >
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
