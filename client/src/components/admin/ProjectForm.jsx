import { useState } from 'react';

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    githubLink: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const payload = {
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim())
    };

    try {
      const res = await fetch('http://localhost:3000/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Failed to add project");

      alert("Project saved!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <>
      <h1>Add Project</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" required onChange={handleChange} />
        <br /><br />

        <label>Description:</label>
        <textarea name="description" required onChange={handleChange}></textarea>
        <br /><br />

        <label>Technologies (comma separated):</label>
        <input type="text" name="technologies" onChange={handleChange} />
        <br /><br />

        <label>GitHub Link:</label>
        <input type="text" name="githubLink" onChange={handleChange} />
        <br /><br />

        <button type="submit">Save</button>
      </form>
    </>
  );
}