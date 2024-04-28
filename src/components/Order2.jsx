import React, { useState, useEffect } from 'react';

const TailorSelectionTable = () => {
    const [tailors, setTailors] = useState([]);
    const [selectedTailor, setSelectedTailor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTailors = async () => {
            try {
                const response = await fetch('https://qksidf21w6.execute-api.us-east-1.amazonaws.com/UserTF/');               
                const data = await response.json();
                if (data.statusCode === 200) {
                    // Collect all "body#" objects into an array
                    const tailorData = [];
                    Object.keys(data).forEach(key => {
                        if (key.startsWith('body')) {
                            tailorData.push(data[key]);
                        }
                    });
                    setTailors(tailorData);
                } else {
                    setError('Failed to fetch data from the server.');
                }
            } catch (error) {
                setError('Failed to load data. Please try again later.');
                console.error('Error fetching tailors:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTailors();
    }, []);

    const handleSelectTailor = (tailor) => {
        setSelectedTailor(tailor);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            position: 'relative'
        }}>
            <div style={{ textAlign: 'center', width: '100%', maxWidth: '800px' }}>
                <h1>Select a Tailor</h1>
                <table style={{
                    width: '100%',
                    marginTop: '20px',
                    borderCollapse: 'collapse',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    textAlign: 'left',
                    border: '1px solid #dddddd'
                }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Select</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Shop Name</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Phone</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Mail ID</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Address</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tailors.map((tailor, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    <input
                                        type="radio"
                                        name="tailorSelection"
                                        checked={selectedTailor === tailor}
                                        onChange={() => handleSelectTailor(tailor)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{tailor.ShopName}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{tailor.Phone}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{tailor.MailID}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{tailor.Address}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{tailor.Location.trim()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TailorSelectionTable;
