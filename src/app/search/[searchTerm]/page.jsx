import Results from '@/components/Results'
import React from 'react'

async function SearchPage({params}) {
    const API_KEY = process.env.API_KEY
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`)
    if (!res.ok){
        throw new Error("Error Fetchin data")
    }
    const {results} =await res.json()
    return (
    <div>
        {
            results && results.lenngth === 0 &&(
                <h1 className='text-center pt-6'>No results found</h1>
            )
        }
        {
            results &&  (<Results results={results} />)
        }
    </div>
  )
}

export default SearchPage