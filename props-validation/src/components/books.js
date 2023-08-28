import Book from "./book"
import data from "../data"

const books = () => {
    return (
        <div>
            {data.map((oneBook) => {
                return <Book key={oneBook.id} {...oneBook} />
            })}
        </div>
    )
}

export default books
