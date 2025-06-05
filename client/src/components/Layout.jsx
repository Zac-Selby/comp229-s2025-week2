{/* 
    Filename: Layout.jsx
    Student Name: Zac Selby
    StudentID: 301464729
    Date: 2025-05-20
*/}
import { Link } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <img src="assets/Custom ZS logo 1.jpg" alt="logo" width={200}/>
            <h1>My Portfolio</h1>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact</Link>
            </nav>
        </>
    )
}