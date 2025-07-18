import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error('Signup failed');
            alert("Signup successful! You can now sign in.");
            navigate('/signin');
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    return (
        <>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Name:</label>
                <input type="text" id="username" name="username" required onChange={handleChange} />
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
