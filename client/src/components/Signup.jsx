import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        created: new Date().toISOString(),
        updated: new Date().toISOString()
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://comp229-s2025-week2-az4k.onrender.com/api/user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                const errorMsg = errorData.message || 'Signup failed';
                throw new Error(errorMsg);
            }
            alert("Signup successful! You can now sign in.");
            navigate('/signin');
        } catch (err) {
            alert("Error: " + err.message);
            console.error("Signup error:", err);
        }
    };

    return (
        <>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required onChange={handleChange} />
                <br /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={handleChange} />
                <br /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={handleChange} />
                <br /><br />

                <button type="submit">Register</button>
            </form>
        </>
    );
}
