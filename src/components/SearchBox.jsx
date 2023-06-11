'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function SearchBox() {
    const router = useRouter()

    const [value,setValue]=useState()
    const onHandleChange=(setFunction)=>(e)=>setFunction(e.target.value)
    const onHandleSubmit = (e) =>{
        e.preventDefault();
        if(!value) return;
        router.push(`/search/${value}`)
    }
  return (
    <form onSubmit={onHandleSubmit} className='flex max-w-6xl mx-auto justify-between items-center px-5'>
        <input type="text" placeholder='Search keywords...' 
        className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1'
        onChange={onHandleChange(setValue)} />
        <button type="submit" disabled={!value} value={value} 
        className='text-amber-500 disabled:text-gray-400'>
            Submit
        </button>
    </form>
  )
}

export default SearchBox