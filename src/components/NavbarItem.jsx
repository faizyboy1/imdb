"use client";
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'
import React from 'react'

function NavbarItem({title,param}) {
    const searchParam=useSearchParams()
    const genre= searchParam.get('genre');
  return (
    <Link href={`/?genre=${param}`} className={
        `m-4 p-2 hover:text-amber-600 font-semibold 
        ${genre && genre === param && 
        'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'}`
        
        } >
        {title}
    </Link>
  )
}

export default NavbarItem