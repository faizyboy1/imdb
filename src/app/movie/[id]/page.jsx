import Image from 'next/image'
import React from 'react'
const getMovie= async ({id}) =>{
    const API_KEY = process.env.API_KEY
   const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
   return await res.json()
}
async function page({params}) {
    console.log({params})
    const movie = await getMovie(params)
  return (
    <div className='w-full'>
        <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
        <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            style={{ maxWidth:'100%',height:'auto' }}
            height={300}
            width={500}
            className={'rounded'}
            placeholder={'blur'}
            blurDataURL={'/spinner.svg'}
            alt='image Poster'
            />
        <div className='p-2'>
            <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
            <p className='text-lg mb-3'>
                <span className='font-semibold mr-1'>Overview:</span>
            {movie.overview}
            </p>
            <p className='mb-3'>
                <span className='font-semibold mr-1'>Date Released:</span>
                {movie.release_date || movie.first_air_date}
            </p>
            <p className='mb-3'>
                <span className='font-semibold mr-1'>Rating:</span>
                {movie.vote_count}
            </p>
        </div>

        </div>
        
    </div>
  )
}

export default page