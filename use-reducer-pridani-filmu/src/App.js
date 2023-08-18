import Modal from "./components/Modal"
import data from "./data"
import { useState, useReducer } from "react"

const reducer = (state, action) => {
    if (action.type === "ADD_MOVIE") {
        return {
            ...state,
            movies: data,
            showNotification: true,
            notificationContent: "Film byl přidán",
        }
    }

    return state
}

const defaultState = {
    movies: [],
    showNotification: false,
    notificationContent: "",
}

const App = () => {
    const [movieName, setMovieName] = useState("")
    const [state, dispatch] = useReducer(reducer, defaultState)

    const submitForm = (e) => {
        e.preventDefault()

        if (movieName) {
            dispatch({ type: "ADD_MOVIE" })
        } else {
        }
    }

    return (
        <section>
            {state.showNotification && (
                <Modal notifContent={state.notificationContent} />
            )}
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
                {state.movies.map((oneMovie) => {
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
