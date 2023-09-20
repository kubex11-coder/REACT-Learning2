import movies from "../data"
import { Link } from "react-router-dom"

const Movies = () => {
    return (
        <div>
            <h1>Movies</h1>
            <div>
                {movies.map((OneMovie) => {
                    return (
                        <article key={OneMovie.id}>
                            <h2>{OneMovie.title}</h2>
                            <img src={OneMovie.image} alt="" />
                            <br />
                            <Link to={`/all-movies/${OneMovie.id}`}>
                                Více Informací
                            </Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Movies
