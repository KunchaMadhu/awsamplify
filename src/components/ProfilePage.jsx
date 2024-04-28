import React, { useState, useEffect } from 'react';

import { useAuth } from './AuthContext'; // Ensure this path is correct

const TailoringBusinessForm = () => {
    
    const { email } = useAuth();

    const columnConfig = {
        "Name": {
            displayName: "Full Name",
            style: { fontWeight: 'bold' },
            format: (value) => value.toUpperCase(),
            order: 1,
            visible: true
        },
        "UCD_CT": {
            displayName: "Email",
            style: { fontStyle: 'italic' },
            format: (value) => value,
            order: 2,
            visible: true
        },
        "Phone": {
            displayName: "Phone Number",
            style: { fontWeight: 'bold', color: 'blue' },
            format: (value) => ` ${value}`,
            order: 3,
            visible: true
        },
        "Location": {
            displayName: "Coordinates",
            style: { color: 'green' },
            format: (value) => value.split(',').join(', '),
            order: 5,
            visible: true // Assuming you want to hide this field
        },
        "Address": {
            displayName: "Address",
            style: {},
            format: (value) => value,
            order: 4,
            visible: true
        },
        "UCD_CT_C": {
            displayName: "Customer Type",
            style: { color: 'red' },
            format: (value) => value,
            order: 6,
            visible: false
        }
    };
    // Assume a default order for unknown keys
    const defaultOrder = 1000;  // A large number to place unknown keys at the end
    
    
  
    const [response, setResponse] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch('https://x260e7gjdj.execute-api.us-east-1.amazonaws.com/UserCD_any', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ data: { UCD_CT: email, UCD_CT_C: 'Customer' } })
                });
                const responseData = await res.json();
                if (responseData.statusCode === 200) {
                    setResponse(responseData.body);
                } else if (responseData.statusCode === 404 || responseData.statusCode === 500) {
                    setErrorMessage('Data unavailable, please edit your profile.');
                } else {
                    setErrorMessage('An unexpected error occurred.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setErrorMessage('Error in connection or data retrieval.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [email]);

   

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
                <h1>Your details are</h1>
                {loading ? (
                    <p>Loading data...</p>
                ) : response ? (
                    <table style={{
                        width: '100%',
                        marginTop: '20px',
                        borderCollapse: 'collapse',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        textAlign: 'left',
                        border: '1px solid #dddddd'
                    }}>
                        <tbody>
                        {Object.entries(response).sort((a, b) =>
                                (columnConfig[a[0]]?.order || defaultOrder) - (columnConfig[b[0]]?.order || defaultOrder)
                            ).filter(([key]) => columnConfig[key]?.visible !== false).map(([key, value]) => (
                                <tr key={key} style={{ borderBottom: '1px solid #dddddd' }}>
                                    <td style={{
                                        padding: '8px 16px',
                                        fontWeight: 'bold',
                                        ...columnConfig[key]?.style
                                    }}>
                                        {columnConfig[key]?.displayName || key}
                                    </td>
                                    <td style={{ padding: '8px 16px' }}>
                                        {columnConfig[key]?.format(value) || value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>{errorMessage}</p>
                )}
            </div>
        </div>
    );
};

export default TailoringBusinessForm;