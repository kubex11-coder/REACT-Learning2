import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Serials from "./pages/Serials"
import ErrorPage from "./pages/ErrorPage"
import OneMovie from "./components/OneMovie"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="serials" element={<Serials />} />
                        <Route
                            path="/all-movies/:movieId"
                            element={<OneMovie />}
                        />
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
