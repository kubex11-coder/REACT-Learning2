import data from "./data.js"
import { useState } from "react"

const App = () => {
    const [count, setCount] = useState(0)
    const [paragraphs, setParagraphs] = useState([])

    const submitForm = (e) => {
        e.preventDefault()
        const amount = parseInt(count)

        setParagraphs(data.slice(0, amount))
    }

    return (
        <section>
            <h1> Lorem Ipsum Generator (max. 10 odstavců)</h1>
            <form onSubmit={submitForm}>
                <label htmlFor="paragraphs">Odstavce:</label>
                <input
                    type="number"
                    id="paragraphs"
                    onChange={(e) => {
                        setCount(e.target.value)
                    }}
                />
                <br />
                <input type="submit" value="vygenerovat" />
            </form>

            <article>
                {paragraphs.map((oneParagraph, index) => {
                    return <p key={index}>{oneParagraph}</p>
                })}
            </article>
        </section>
    )
}

export default App
