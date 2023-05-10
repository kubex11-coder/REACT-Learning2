import { useState } from "react"

const App = () => {
    const [oneUser, setOneUser] = useState({ fullName: "", email: "", age: "" })
    const [users, setUsers] = useState([])

    const formChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setOneUser({ ...oneUser, [name]: value })
    }

    const formSubmit = (event) => {
        event.preventDefault()

        if (oneUser.fullName && oneUser.email && oneUser.age) {
            // const newUser = {
            //     fullName: oneUser.fullName,
            //     email: oneUser.email,
            //     age: oneUser.age,
            // }
            const newUser = { ...oneUser, id: new Date().getTime() }
            setUsers((users) => {
                return [...users, newUser]
            })

            setOneUser({ fullName: "", email: "", age: "" })
        } else {
            console.log("něco neylo vyplněno")
        }
    }

    return (
        <article>
            <form onSubmit={formSubmit}>
                <input
                    value={oneUser.fullName}
                    onChange={formChange}
                    className="userInfo"
                    type="text"
                    placeholder="Jméno"
                    name="fullName"
                />
                <input
                    value={oneUser.email}
                    onChange={formChange}
                    className="userInfo"
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <input
                    value={oneUser.age}
                    onChange={formChange}
                    className="userInfo"
                    type="text"
                    placeholder="Věk"
                    name="age"
                />
                <input type="submit" />
            </form>

            {users.map((oneUser) => {
                const { id, fullName, email, age } = oneUser

                return (
                    <div key={id} className="item">
                        <h2>{fullName}</h2>
                        <p>{email}</p>
                        <p>{age}</p>
                    </div>
                )
            })}
        </article>
    )
}

export default App
