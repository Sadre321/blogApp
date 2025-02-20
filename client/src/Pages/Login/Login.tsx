import { message, Spin } from "antd";
import { useState } from "react";
import {EyeInvisibleOutlined, EyeOutlined, LoadingOutlined} from "@ant-design/icons"
import { useAuth } from "../../context/authContext";

const Login = () => {
  const {setToken} = useAuth();
  const apiUri = import.meta.env.VITE_API_URI;
  const [loading,setLoading] = useState<boolean>(false);
  const [hiddenPass,setHiddenPass] = useState<boolean>(false);
  const [formData,setFormData] = useState<{email:string,password:string}>({
    email:"",
    password:""
  })

  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
      const response = await fetch(`${apiUri}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      message.success("Giriş başarılı.");
      setToken(data.token);
      setInterval(()=>{
        window.location.pathname="/admin";
      },1000)
    }catch(error){
      message.error("Geçersiz email veya şifre");
      console.log("Hata : "+error);
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="my-12">
      <h1 className="text-5xl font-bold mb-5">Login</h1>
      <p className="opacity-75 text-lg mb-10">
        Geri eklemeler mi yapicaksin. Hosgeldin!
      </p>
      <hr className="opacity-15" />

      <form action="" onSubmit={handleSubmit} className="py-10 mb-16">
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-3 px-2">
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="px-4 py-3 rounded-3xl w-full text-black"
            placeholder="E-posta adresinizi girin"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-3 px-2">
            Şifre
          </label>
          <div className="relative">
          <input
            type={hiddenPass?"password":"text"}
            id="password"
            name="password"
            onChange={handleChange}
            className="px-4 py-3 rounded-3xl w-full text-black"
            placeholder="Şifrenizi girin"
            required
          />
          <button className="absolute top-3 right-5 text-black" type="button" onClick={()=>{
            setHiddenPass(!hiddenPass)
          }}>
            {hiddenPass?<EyeOutlined/>:<EyeInvisibleOutlined />}
          </button>
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-400 rounded-3xl text-lg font-semibold mt-3"
          >
            {loading?"":"Giriş Yap"}
            <Spin spinning={loading} indicator={<LoadingOutlined/>} size="large" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
