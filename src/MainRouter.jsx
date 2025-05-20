{/* 
    Filename: MainRouter.jsx
    Student Name: Zac Selby
    StudentID: 301464729
    Date: 2025-05-19
*/}
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";

const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </div>
    )
}
export default MainRouter;