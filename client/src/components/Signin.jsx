import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://comp229-s2025-week2-az4k.onrender.com/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || 'Signin failed');

            localStorage.setItem('token', data.token);
            localStorage.setItem('userRole', data.user.role);
            localStorage.setItem('username', data.user.username || '');
            alert("Login successful!");

            if (data.user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/');
            }

        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    return (
        <>
            <h1>Signin</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={handleChange} />
                <br /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={handleChange} />
                <br /><br />

                <button type="submit">Login</button>
            </form>
        </>
    );
}
