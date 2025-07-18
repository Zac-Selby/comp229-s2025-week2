{/* 
    Filename: MainRouter.jsx
    Student Name: Zac Selby
    StudentID: 301464729
    Date: 2025-05-20
*/}
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import EducationForm from './components/admin/EducationForm.jsx';
import ProjectForm from './components/admin/ProjectForm.jsx';

const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin/add-education" element={<EducationForm />} />
                <Route path="/admin/add-project" element={<ProjectForm />} />
            </Routes>
        </div>
    )
}
export default MainRouter;