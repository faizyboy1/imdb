"use client";
import React, { useEffect } from 'react'

function Error({error,reset}) {
    useEffect(()=>{
        console.log({error,reset});
    },[error])
  return (
    <div className='text-center mt-10'>
        <h1>Something went wrong</h1>
        <button onClick={()=>reset()} className='hover:text-amber-600' >Try again</button>
    </div>
  )
}

export default Error