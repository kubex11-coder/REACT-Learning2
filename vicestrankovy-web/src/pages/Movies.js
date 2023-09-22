import movies from "../data"
import { Link } from "react-router-dom"
import "./Movies.css"

const Movies = () => {
    return (
        <div>
            <div className="all-movies">
                {movies.map((OneMovie) => {
                    return (
                        <article className="one-movie" key={OneMovie.id}>
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
