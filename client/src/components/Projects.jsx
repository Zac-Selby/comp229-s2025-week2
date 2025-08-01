{/* 
    Filename: Projects.jsx
    Student Name: Zac Selby
    StudentID: 301464729
    Date: 2025-05-20
*/}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const getRole = () => localStorage.getItem('role');

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const userRole = localStorage.getItem('userRole');
    const navigate = useNavigate();

useEffect(() => {
    fetch("https://comp229-s2025-week2-az4k.onrender.com/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Failed to fetch projects:", err));
  }, []);

return (
    <div id="smalldiv">
        <h1>Projects</h1>

        {userRole === 'admin' && (
            <button onClick={() => navigate('/admin/add-project')}>
                Add Project
            </button>
        )}


        {projects.map((project) => (
            <div key={project._id}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p><strong>Technologies:</strong> {project.technologies?.join(", ")}</p>
                {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                )}
                <hr />
            </div>
         ))}
    </div>
  );
}

// Old version of Projects component
/*export default function Projects() {
    return (
        <>
            <div id="smalldiv">
                <h1>Projects</h1>
                <p>
                    Here are a few of the projects I’ve been working on, each rooted in my passion for using AI and technology to support accessibility, organization, and inclusion.
                </p>
                <br />

                <h2>AI-Based Meeting Summarizer</h2>
                <div id="colsdiv">
                    <p>
                        An intelligent tool designed to automatically summarize virtual or in-person meetings using natural language processing. This project helps streamline communication and makes meeting content more accessible for people with attention or memory challenges.
                    </p>
                    <img src="/assets/Meeting Summarizer pic.webp" alt="Meeting summerizer picture" width={200}/>
                </div>
                <br />

                <h2>Meal Kit Subscription Database</h2>
                <div id="colsdiv">
                    <p>
                        A structured relational database project for managing a meal kit subscription service. Designed with scalability and user personalization in mind, this project showcases my skills in data modeling, SQL, and backend logic for dynamic customer services.
                    </p>
                    <img src="/assets/meal kit delivery pic.webp" alt="Meal kit delivery picture" width={200}/>
                </div>
                <br />

                <h2>Daily Task Assistant for Neurodivergent Individuals</h2>
                <div id="colsdiv">
                    <p>
                        A productivity assistant tailored to support users with ADHD, autism, or other neurodivergent traits. Built with a focus on reminders, customizable scheduling, and mood-friendly task management to help users navigate their day with less friction.
                    </p>
                    <img src="/assets/daily task assistant pic.jpg" alt="daily task assistant picture" width={200}/>
                </div>
                <br />

                <h2>Wearable Ultrasonic Obstacle Detection Device</h2>
                <div id="colsdiv">
                    <p>
                        A hardware-software hybrid system that uses ultrasonic sensors to detect nearby obstacles and alert visually impaired users through haptic feedback. This project combines assistive hardware with AI-based signal processing for real-time safety support.
                    </p>
                    <img src="/assets/obsticle detection pic 2.jpg" alt="Obsticle detection picture" width={200}/>
                </div>
            </div>
        </>
    )
}*/