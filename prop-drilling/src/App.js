import data from "./data"
import MovieBox from "./components/MovieBox"
import { useState } from "react"

const App = () => {
    const [movies, setMovies] = useState(data)

    const deleteMovie = (movieId) => {
        const filteredMovies = movies.filter((oneMovie) => {
            return oneMovie.id !== movieId
        })

        setMovies(filteredMovies)
    }

    return <MovieBox data={movies} deleteMovie={deleteMovie} />
}

export default App
