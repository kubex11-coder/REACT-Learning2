// stejná appka jako "prop-drilling" jen řešeno za použití hooku useContext

import data from "./data"
import MovieBox from "./components/MovieBox"
import { useState } from "react"
import MoviesContext from "./components/MoviesContext"

const App = () => {
    const [movies, setMovies] = useState(data)

    const deleteMovie = (movieId) => {
        const filteredMovies = movies.filter((oneMovie) => {
            return oneMovie.id !== movieId
        })

        setMovies(filteredMovies)
    }

    return (
        <MoviesContext.Provider value={{ deleteMovie, movies }}>
            <MovieBox />
        </MoviesContext.Provider>
    )
}

export default App
