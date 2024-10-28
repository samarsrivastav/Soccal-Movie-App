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
    const [response,setResponse]=useState<boolean>(false)
    const [movie, setMovies] = useState<Movie[]>([])
    const getMovie = async () => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${search}`)
        const data = await response.json()
        if (data.Response !== "False") {
            setMovies(data.Search)
            setResponse(true)
        }else{
            setResponse(false)
        }
    }
    useEffect(() => {
        getMovie()
    }, [search])
    if(movie.length===0){
        const dummy=async()=>{
            const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=avengers`)
            const data = await response.json()
            if (data.Response !== "False") {
                setMovies(data.Search)
            }
        }
        dummy()
    }
    if((search!=="" && response===false) ){
        return(
            <div className="flex justify-center">
                <h1 className="mt-2 text-2xl ">Nothing Found 🚫</h1>
            </div>
        )
    }
    return (
        <div className="flex overflow-x-auto w-auto items-center mx-auto  mb-20">
            <MovieCarousel movies={movie}/>
        </div>
    );
}
