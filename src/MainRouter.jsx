import { Routes, Route } from "react-router-dom";

const MainRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
            </Routes>
        </div>
    )
}
export default MainRouter;