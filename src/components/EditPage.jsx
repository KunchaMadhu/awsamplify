import React, { useState} from 'react';

import { useAuth } from './AuthContext'; // Ensure this path is correct

const TailoringBusinessForm = () => {
    const { email } = useAuth();
    const [formData, setFormData] = useState({
        mailID: email,
        name: '',
        ucd_t: 'Customer',
        phone: '',
        address: '',
        location: ''
    });
    const [statusMessage, setStatusMessage] = useState('');


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMessage('Updating profile...'); // Initial message during the update
        try {
            const response = await fetch('https://x260e7gjdj.execute-api.us-east-1.amazonaws.com/UserCD_any', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: formData })
            });
            if (response.ok && response.status === 200) {
                setStatusMessage('Your profile is updated successfully.');
            } else {
                setStatusMessage('An error happened, please try again after some time.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setStatusMessage('An error happened, please try again after some time.');
        }
    };

   

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
            
            <form style={{
                backgroundColor: '#fff',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
                maxWidth: '600px',
                width: '100%',
                marginBottom: '20px' // Adds space between the form and the button
            }} onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required onChange={handleChange} value={formData.name} style={{ padding: '10px', fontSize: '16px', width: '100%', marginBottom: '10px', border: '1px solid #ccc' }} /><br />

                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required onChange={handleChange} value={formData.phone} style={{ padding: '10px', fontSize: '16px', width: '100%', marginBottom: '10px', border: '1px solid #ccc' }} /><br />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required onChange={handleChange} value={formData.address} style={{ padding: '10px', fontSize: '16px', width: '100%', marginBottom: '10px', border: '1px solid #ccc' }} /><br />

                <label htmlFor="location">Coordinates:</label>
                <input type="text" id="location" name="location" required onChange={handleChange} value={formData.location} style={{ padding: '10px', fontSize: '16px', width: '100%', marginBottom: '20px', border: '1px solid #ccc' }} /><br />
            </form>
            <button type="submit" onClick={handleSubmit} style={{
                backgroundColor: '#4caf50',
                color: '#fff',
                padding: '15px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px'
            }}>
                Submit
            </button>
            {statusMessage && <div style={{
                marginTop: '20px',
                padding: '10px',
                backgroundColor: '#e0e0e0',
                borderRadius: '4px',
                whiteSpace: 'pre-wrap',
                textAlign: 'center'
            }}>
                {statusMessage}
            </div>}
        </div>
    );
};

export default TailoringBusinessForm;
