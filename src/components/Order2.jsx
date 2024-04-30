import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
const TailorSelectionTable = () => {
    const { email } = useAuth();
    const [tailors, setTailors] = useState([]);
    const [selectedTailor, setSelectedTailor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [shirtDetails, setShirtDetails] = useState([]);
    const [trousersDetails, setTrousersDetails] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchTailors = async () => {
            try {
                const response = await fetch('https://qksidf21w6.execute-api.us-east-1.amazonaws.com/UserTF/');
                const data = await response.json();
                if (data.statusCode === 200) {
                    const tailorData = Object.keys(data).filter(key => key.startsWith('body')).map(key => data[key]);
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

        const savedShirts = JSON.parse(localStorage.getItem('shirtDetails')) || [];
        const savedTrousers = JSON.parse(localStorage.getItem('trousersDetails')) || [];
        setShirtDetails(savedShirts);
        setTrousersDetails(savedTrousers);
        fetchTailors();
    }, []);

    const placeOrder = async () => {
   
    
   
        
        
        const response = fetch('https://mhzgj4besa.execute-api.us-east-1.amazonaws.com/OrderPlace', { 

                
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                // body: '{\n  "data": {\n    "MailID": "kmadhukuncha@gmail.com",\n    "ShopName": "Varun Tailors"\n  },\n  "dress": {\n    "D1": {\n      "DressType": "Shirt1",\n      "Material": "white raymond",\n      "TypeOfFit": "exact fit",\n      "Quantity": 1\n    },\n    "D2": {\n      "DressType": "Shirt2",\n      "Material": "white raymond",\n      "TypeOfFit": "normal flexibility",\n      "Quantity": 1\n    },\n    "D3": {\n      "DressType": "Shirt3",\n      "Material": "white raymond",\n      "TypeOfFit": "extra flexibility",\n      "Quantity": 1\n    }\n  }\n}',
                body: JSON.stringify({
                  'data': {
                    'MailID': email,
                    'ShopName': selectedTailor.ShopName
                  },
                 
                  'dress': {
                    'D1': {
                        'DressType': "Shirt1",
                        'Material': "white raymond",
                        'TypeOfFit': "exact fit",
                        'Quantity': 1
                      }
                  }
                })
              });
              if (response.statusCode === 200) {
                setOrderPlaced('your order is placed successfully')
            } else {
                setOrderPlaced('An error happened, please try again after some time.');
            }
           
           
            
       
    };

    const navigateToOrders = () => {
        navigate('/OrdersView');
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
                                        onChange={() => setSelectedTailor(tailor)}
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
                {selectedTailor && !orderPlaced && (
                    <button onClick={placeOrder} style={{ padding: '10px 20px', margin: '5px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Place Order
                    </button>
                )}
                {orderPlaced && (
                    <div>
                        <p>Your order has been successfully placed.</p>
                        <button onClick={navigateToOrders} style={{ padding: '10px 20px', margin: '5px', backgroundColor: '#0056b3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                            View Your Orders
                        </button>
                    </div>
                )}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
    
};

export default TailorSelectionTable;