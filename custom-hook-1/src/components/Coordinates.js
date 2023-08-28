import React from "react"
import useFetch from "./useFetch"

const apiUrl = "http://api.open-notify.org/iss-now.json"

const Coordinates = () => {
    const { data, loading } = useFetch(apiUrl)

    return (
        <div>
            <div>
                {loading ? (
                    "loading..."
                ) : (
                    <div>
                        <h2>zeměpisná délka</h2>
                        <p>{data.iss_position.longitude}</p>
                        <h2>zeměpisná šířka</h2>
                        <p>{data.iss_position.latitude}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Coordinates
