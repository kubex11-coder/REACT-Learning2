import React from "react"
import useFetch from "./useFetch"

const apiUrl = "http://api.open-notify.org/iss-now.json"

const Coordinates = () => {
    const { coordinates, loading } = useFetch(apiUrl)

    return (
        <div>
            <div>{loading ? "loading..." : "data"}</div>
        </div>
    )
}

export default Coordinates
