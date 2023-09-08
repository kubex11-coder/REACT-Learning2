import allMovies from "./data"
import { useState, useEffect } from "react"

const App = () => {
    const [searchingText, setSearchingText] = useState("")

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Hledaný film"
                    onChange={(e) => setSearchingText(e.target.value)}
                />
            </form>
            <div>
                {allMovies.map((oneMovie) => {
                    const { id, image, title, age, tags, description } =
                        oneMovie

                    return (
                        <div key={id}>
                            <img src={image} />
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
