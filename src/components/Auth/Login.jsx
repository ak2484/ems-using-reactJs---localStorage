import React, { useState } from "react";

function Login({ handleLogin }) {
  // two way binding
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    // console.log("Email is", email);
    // console.log("Password is", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-500 rounded-xl'>
        <form className='flex flex-col p-20' onSubmit={submitHandler}>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className='text-white outline-none bg-transparent border-2 border-emerald-500 rounded-full px-5 py-3 text-xl placeholder:text-gray-400'
            type='email'
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className='text-white outline-none bg-transparent border-2 border-emerald-500 rounded-full px-5 py-3 text-xl placeholder:text-gray-400 mt-3'
            type='password'
            placeholder='Enter your password'
          />
          <button className='text-white border-none  bg-emerald-500 hover:bg-emerald-600 rounded-full px-5 py-3 mt-5 text-lg'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
