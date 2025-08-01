import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const res = await fetch('https://comp229-s2025-week2-az4k.onrender.com/api/education', {
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
      <h1>Education</h1>

        {userRole === 'admin' && (
            <button onClick={() => navigate('/admin/add-education')}>
                Add Education
            </button>
        )}


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
