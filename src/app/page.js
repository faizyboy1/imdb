import Results from "@/components/Results"

const API_KEY = process.env.API_KEY
export default async function Home({searchParams}) {
  const genre= searchParams.genre || 'fetchTrending'
  const res = await fetch(`https://api.themoviedb.org/3/${genre ==='fetchTopRated'?'movie/top_rated':'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`,{next:{revalidate:1000*10}})
  console.log({res});
  if(!res.ok) throw new Error("Failed to fetch the data")
  const {results}= await res.json()
  console.log({results})
  return (
      <div>
        <Results results={results} />
      </div>
      )
}
