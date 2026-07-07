import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const register = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try{

      await api.post("/auth/register",{
        name,
        email,
        password
      });

      toast.success("Registration Successful");
      navigate("/");

    }catch(err){

      toast.error("Registration Failed");

      console.log(err);

    }

  }

  return (

<div className="min-h-screen bg-slate-900 flex justify-center items-center">

<div className="bg-white w-96 rounded-xl shadow-xl p-8">

<h1 className="text-3xl font-bold text-center text-blue-600 mb-6">

Create Account

</h1>

<form onSubmit={register}>

<input
className="border w-full p-3 rounded-lg mb-4"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
className="border w-full p-3 rounded-lg mb-4"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
className="border w-full p-3 rounded-lg mb-4"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="bg-blue-600 text-white w-full py-3 rounded-lg"
>

Register

</button>

</form>

<p className="text-center mt-5">

Already have an account?

<Link
to="/"
className="ml-2 text-blue-600"
>

Login

</Link>

</p>

</div>

</div>

  );
}

export default Register;