import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ClothDetailsForm = () => {
    const [shirtDetails, setShirtDetails] = useState([]);
    const [trousersDetails, setTrousersDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedShirts = JSON.parse(localStorage.getItem('shirtDetails')) || [];
        const savedTrousers = JSON.parse(localStorage.getItem('trousersDetails')) || [];
        setShirtDetails(savedShirts);
        setTrousersDetails(savedTrousers);
    }, []);

    const addShirtDetail = () => {
        setShirtDetails([...shirtDetails, { cloth: '', fitting: '', pieces: 1 }]);
    };

    const addTrousersDetail = () => {
        setTrousersDetails([...trousersDetails, { cloth: '', fitting: '', pieces: 1 }]);
    };

    const handleShirtChange = (index, key, value) => {
        const updatedDetails = [...shirtDetails];
        updatedDetails[index][key] = value;
        setShirtDetails(updatedDetails);
        localStorage.setItem('shirtDetails', JSON.stringify(updatedDetails));
    };

    const handleTrousersChange = (index, key, value) => {
        const updatedDetails = [...trousersDetails];
        updatedDetails[index][key] = value;
        setTrousersDetails(updatedDetails);
        localStorage.setItem('trousersDetails', JSON.stringify(updatedDetails));
    };

    const removeShirtDetail = (index) => {
        const updatedDetails = [...shirtDetails];
        updatedDetails.splice(index, 1);
        setShirtDetails(updatedDetails);
        localStorage.setItem('shirtDetails', JSON.stringify(updatedDetails));
    };

    const removeTrousersDetail = (index) => {
        const updatedDetails = [...trousersDetails];
        updatedDetails.splice(index, 1);
        setTrousersDetails(updatedDetails);
        localStorage.setItem('trousersDetails', JSON.stringify(updatedDetails));
    };

    const clearData = () => {
        localStorage.removeItem('shirtDetails');
        localStorage.removeItem('trousersDetails');
        setShirtDetails([]);
        setTrousersDetails([]);
        navigate('/LoggedInPage');
    };

    const navigateNextPage = () => {
        navigate('/Order2'); // Adjust '/nextPage' to your actual route
    };

    // Styling objects...
    const formStyle = {padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',}; // Your existing styles
    const sectionStyle = {marginBottom: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px'};
    const inputStyle = {padding: '8px',
    margin: '5px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: 'calc(50% - 16px)',};
    const selectStyle = {padding: '8px',
    margin: '5px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '50%',};
    const buttonStyle = { padding: '10px 20px',
    margin: '5px',
    backgroundColor: '#0056b3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',};
    const buttonStyle1 = {padding: '10px 20px',
    margin: '100px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',};
    const buttonStyle2 = {padding: '10px 20px',
    margin: '100px',
    backgroundColor: '#fc0345',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',};

    return (
        <div style={formStyle}>
            <h1>Please enter the Cloth Details for each of the dress piece you need</h1>
            <div style={sectionStyle}>
                <h2>Shirt Details</h2>
                {shirtDetails.map((detail, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="text" placeholder="Shirt Cloth Material online source (only cloth of registered brands are allowed)" value={detail.cloth} onChange={(e) => handleShirtChange(index, 'cloth', e.target.value)} style={inputStyle} />
                        <select value={detail.fitting} onChange={(e) => handleShirtChange(index, 'fitting', e.target.value)} style={selectStyle}>
                            <option value="">Select Fitting</option>
                            <option value="exact">Exact Fit</option>
                            <option value="normal">Normal Flexibility</option>
                            <option value="extra">Extra Flexibility</option>
                        </select>
                        <input type="number" min="1" placeholder="Number of Pieces" value={detail.pieces} onChange={(e) => handleShirtChange(index, 'pieces', parseInt(e.target.value, 10) || '')} style={inputStyle} />
                        <button onClick={() => removeShirtDetail(index)} style={buttonStyle}>Remove</button>
                    </div>
                ))}
                <button onClick={addShirtDetail} style={buttonStyle}>Add Shirt Detail</button>
            </div>
            <div style={sectionStyle}>
                <h2>Trousers Details</h2>
                {trousersDetails.map((detail, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="text" placeholder="Trousers Cloth Material online source (only cloth of registered brands are allowed)" value={detail.cloth} onChange={(e) => handleTrousersChange(index, 'cloth', e.target.value)} style={inputStyle} />
                        <select value={detail.fitting} onChange={(e) => handleTrousersChange(index, 'fitting', e.target.value)} style={selectStyle}>
                            <option value="">Select Fitting</option>
                            <option value="exact">Exact Fit</option>
                            <option value="normal">Normal Flexibility</option>
                            <option value="extra">Extra Flexibility</option>
                        </select>
                        <input type="number" min="1" placeholder="Number of Pieces" value={detail.pieces} onChange={(e) => handleTrousersChange(index, 'pieces', parseInt(e.target.value, 10) || '')} style={inputStyle} />
                        <button onClick={() => removeTrousersDetail(index)} style={buttonStyle}>Remove</button>
                    </div>
                ))}
                <button onClick={addTrousersDetail} style={buttonStyle}>Add Trousers Detail</button>
            </div>
            <div style={sectionStyle}>
                <button onClick={clearData} style={buttonStyle2}>Back</button>
                <button onClick={navigateNextPage} style={buttonStyle1}>Submit</button>
            </div>
        </div>
    );
};

export default ClothDetailsForm;
