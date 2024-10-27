import { useEffect, useState } from "react"
import MovieCarousel from "./MovieCarousel"

interface Movie {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}
export default function Movies({search}:{search:any}) {
    const apiKey = import.meta.env.VITE_API_KEY;

    const [movie, setMovies] = useState<Movie[]>([])
    console.log(apiKey)
    const getMovie = async () => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${search}`)
        const data = await response.json()
        console.log(data)
        if (data.Response !== "False") {
            setMovies(data.Search)
        }
    }
    useEffect(() => {
        getMovie()
    }, [search])
    if(movie.length===0){
        const dummy=async()=>{
            const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=avengers`)
            const data = await response.json()
            console.log(data)
            if (data.Response !== "False") {
                setMovies(data.Search)
            }
        }
        dummy()
    }
    return (
        <div className="flex overflow-x-auto w-auto items-center mx-auto hover:w-62">
            <MovieCarousel movies={movie}/>
        </div>
    );
}