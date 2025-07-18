import { useState } from 'react';

export default function EducationForm() {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        startYear: '',
        endYear: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        try {
            const res = await fetch('http://localhost:3000/api/education', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error("Failed to add education entry");

            alert("Education entry saved!");
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    return (
        <>
            <h1>Add Education</h1>
            <form onSubmit={handleSubmit}>
                <label>School:</label>
                <input type="text" name="school" required onChange={handleChange} />
                <br /><br />

                <label>Degree:</label>
                <input type="text" name="degree" required onChange={handleChange} />
                <br /><br />

                <label>Start Year:</label>
                <input type="number" name="startYear" required onChange={handleChange} />
                <br /><br />

                <label>End Year:</label>
                <input type="number" name="endYear" required onChange={handleChange} />
                <br /><br />

                <label>Description:</label>
                <textarea name="description" onChange={handleChange}></textarea>
                <br /><br />

                <button type="submit">Save</button>
            </form>
        </>
    );
}
