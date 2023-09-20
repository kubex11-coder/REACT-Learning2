import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import movies from "../data"

const OneMovie = () => {
    const { movieId } = useParams()

    const oneSpecificMovie = movies.find((oneMovie) => {
        return oneMovie.id === parseInt(movieId)
    })

    const { title, image, description, tags } = oneSpecificMovie

    return (
        <article>
            <h2>{title}</h2>
            <img src={image} alt="" />
            <p>{description}</p>
            <p>{tags}</p>
            <Link to="/movies">Zpět na všechny filmy</Link>
        </article>
    )
}

export default OneMovie
