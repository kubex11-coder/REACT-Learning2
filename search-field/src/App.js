import allMovies from "./data"
import { useState, useEffect } from "react"

const App = () => {
    const [searchingText, setSearchingText] = useState("")
    const [filteredMovies, setFilteredMovies] = useState([allMovies])

    useEffect(() => {
        const moviesAfterFilter = allMovies.filter((oneMovie) => {
            return oneMovie.title
                .toLowerCase()
                .includes(searchingText.toLowerCase())
        })
        setFilteredMovies(moviesAfterFilter)
    }, [searchingText])

    return (
        <div className="movies-box">
            <form>
                <input
                    type="text"
                    placeholder="Hledaný film"
                    onChange={(e) => setSearchingText(e.target.value)}
                />
            </form>
            <div className="all-movies">
                {filteredMovies.map((oneMovie) => {
                    const { id, image, title, age, tags, description } =
                        oneMovie

                    return (
                        <div key={id} className="movie-item">
                            <img src={image} alt={id} />
                            <h2>{title}</h2>
                            <p>{age}</p>
                            <p>{tags}</p>
                            <p>{description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App
