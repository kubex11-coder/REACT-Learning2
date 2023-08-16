import Modal from "./components/Modal"
import data from "./data"
import { useState } from "react"

const App = () => {
    const [movies, setMovies] = useState(data)
    const [showNotification, setShowNotification] = useState(false)
    const [movieName, setMovieName] = useState("")

    const submitForm = (e) => {
        e.preventDefault()
    }

    return (
        <section>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    onChange={(e) => {
                        setMovieName(e.target.value)
                    }}
                />
                <input type="submit" value="přidat" />
            </form>
            <div>
                {movies.map((oneMovie) => {
                    return (
                        <div key={oneMovie.id}>
                            <p>{oneMovie.name}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default App
