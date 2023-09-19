import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Strnáka nenalezena, pokračujte na homepage</p>
            <Link to="/">Homepage</Link>
        </div>
    )
}

export default ErrorPage
