import React, { useState, useSyncExternalStore } from 'react'

const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const SubmitHandler=(e)=>{
        e.preventDefault();
        console.log("your Email "+email);
        console.log("your password "+password);

        setEmail('');
        setPassword('');
    }


  return (
    <div className='flex h-screen w-screen justify-center items-center'>
        <div className='border-2 p-20 border-emerald-400 rounded-xl'>
          <h2>Login</h2>

          <form onSubmit={(e)=>{
            SubmitHandler(e)
        }} 
          className='flex flex-col items-center justify-center'>
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required
            className='border-3 rounded-full border-emerald-600 px-10 py-2 bg-transparent text-xl outline-none placeholder:text-gray-400'
            type="email" placeholder='Enter your Email' 
            />
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required
            className='border-3 mt-5 rounded-full border-emerald-600 px-10 py-2 bg-transparent text-xl outline-none placeholder:text-gray-400'
            type="password" placeholder='Enter your Password' 
            />
            <button 
            className='mt-5 rounded-full bg-emerald-600 px-10 py-2 text-xl outline-none text-center placeholder:text-white'
            >Login in</button>
          </form>
        </div>
    </div>
  )
}

export default Login
