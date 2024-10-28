interface Movie{
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
export default function MovieCard({movie}:{movie:Movie}) {
  return (
    <div className='my-5 mx-4 w-56 flex-shrink-0'>
      <img src={movie.Poster} alt={movie.Title} className="w-full h-full" />
      <div className="overlay items-center justify-center">
        <p className="text-center">{movie.Title}</p>
        <p className="text-center">{movie.Year}</p>
      </div>
    </div>
  )
}
