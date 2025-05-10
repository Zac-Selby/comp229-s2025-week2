import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/projects" element={<h1>Projects</h1>} />
                <Route path="/services" element={<h1>Services</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
            </Routes>
        </div>
    )
}
export default MainRouter;