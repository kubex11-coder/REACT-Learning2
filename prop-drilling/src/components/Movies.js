const Movies = ({ data, deleteMovie }) => {
    return (
        <div>
            {data.map((oneMovie) => {
                const { id, name } = oneMovie
                return (
                    <div key={id}>
                        <p>{name}</p>
                        <button onClick={() => deleteMovie(id)}>Smazat</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Movies
