import Movies from "./Movies"

const MovieBox = ({ data, deleteMovie }) => {
    return <Movies data={data} deleteMovie={deleteMovie} />
}

export default MovieBox
