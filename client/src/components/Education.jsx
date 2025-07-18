import { useEffect, useState } from 'react';

export default function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/education', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await res.json();
        setEducation(data);
      } catch (err) {
        console.error('Failed to load education:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  return (
    <div id="smalldiv">
      <h1>Education History</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        education.length > 0 ? (
          education.map((edu) => (
            <div key={edu._id} style={{ marginBottom: '2rem' }}>
              <h2>{edu.degree}</h2>
              <h3>{edu.school} ({edu.startYear} - {edu.endYear})</h3>
              <p>{edu.description}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No education entries found.</p>
        )
      )}
    </div>
  );
}
