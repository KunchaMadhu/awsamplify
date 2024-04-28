import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Ensure this path is correct

const LoggedInPage = () => {
    const { email } = useAuth();
    const navigate = useNavigate();

    const handleEditProfile = () => {
        navigate('/EditPage'); // Navigate to EditPage
    };

    const handleViewProfile = () => {
        navigate('/ProfilePage'); // Navigate to ProfilePage
    };
    const handlemeasurementdetails = () => {
        navigate('/MDpage'); // Navigate to EditPage
    };
    const handleeditdetails = () => {
        navigate('/EDpage'); // Navigate to EditPage
    };
    const handleorder1 = () => {
        navigate('/Order1'); // Navigate to EditPage
    };


    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            minHeight: '100vh',
            backgroundColor: '#f4f4f9',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start', // Ensures content starts from the top left
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                backgroundColor: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '900px',
                marginBottom: '20px', // Adds spacing below the box for any subsequent content
            }}>
                <h1 style={{ margin: '0 0 20px 0' }}>Welcome, {email}</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: '10px', // Provides consistent spacing between buttons
                }}>
                    <button onClick={handleViewProfile} style={{
                        padding: '10px 20px',
                        backgroundColor: '#4caf50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s' // Smooth transition for hover effects
                    }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#388e3c'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4caf50'}>
                        View Profile
                    </button>
                    <button onClick={handleEditProfile} style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s'
                    }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                        Edit Profile
                    </button>
                    <button onClick={handlemeasurementdetails} style={{
                        padding: '10px 20px',
                        backgroundColor: '#4caf50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s'
                    }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#388e3c'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4caf50'}>
                        View Measurements
                    </button>
                    <button onClick={handleeditdetails} style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s'
                    }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                        Edit Measurements
                    </button>
                    <button onClick={handleorder1} style={{
                        padding: '10px 60px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s'
                    }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                        Ask a Skilled Tailor for stitching
                    </button>
                </div>
            </div>
            {/* Other page content */}
        </div>
    );
    
};

export default LoggedInPage;
