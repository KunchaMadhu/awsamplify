import React, { useState } from 'react';

import { useAuth } from './AuthContext';

import S1Image from './assets/images/S1.jpg';
import S2Image from './assets/images/S2.jpg';
import S3Image from './assets/images/S3.jpg';
import S4Image from './assets/images/S4.jpg';
import S5Image from './assets/images/S5.jpg';
import S6Image from './assets/images/S6.jpg';
import S7Image from './assets/images/S7.jpg';
import S8Image from './assets/images/S8.jpg';
import S9Image from './assets/images/S9.jpg';
import S10Image from './assets/images/S10.jpg';
import P1Image from './assets/images/P1.jpg';
import P2Image from './assets/images/P2.jpg';
import P3Image from './assets/images/P3.jpg';
import P4Image from './assets/images/P4.jpg';
import P5Image from './assets/images/P5.jpg';
import P6Image from './assets/images/P6.jpg';
import P7Image from './assets/images/P7.jpg';
import P8Image from './assets/images/P8.jpg';
import P9Image from './assets/images/P6.jpg';
import P10Image from './assets/images/P6.jpg';

const TailoringBusinessForm = () => {
    const { email } = useAuth();
    const [formDataS, setFormDataS] = useState({
        User_mail: email,
        Dress: 'shirt',
        "M1": '', "M2": '', "M3": '', "M4": '', "M5": '', "M6": '', "M7": '', "M8": '', "M9": '', "M10": '',
    });
    const [formDataP, setFormDataP] = useState({
        User_mail: email,
        Dress: 'trousers',
        "M1": '', "M2": '', "M3": '', "M4": '', "M5": '', "M6": '', "M7": '', "M8": '', "M9": '', "M10": '',
    });
    const [statusMessageS, setStatusMessageS] = useState('');
    const [statusMessageP, setStatusMessageP] = useState('');
    const [enlargedImage, setEnlargedImage] = useState(null);

    const openImage = (imgSrc) => {
        setEnlargedImage(imgSrc);
    };
    const closeImage = () => {
        setEnlargedImage(null);
    };
    const shirtImages = {
        "M1": S1Image,
        "M2": S2Image,
        "M3": S3Image,
        "M4": S4Image,
        "M5": S5Image,
        "M6": S6Image,
        "M7": S7Image,
        "M8": S8Image,
        "M9": S9Image,
        "M10": S10Image,
        "Dress": S10Image,
    };
    const pantImages={
        
            "M1": P1Image,
            "M2": P2Image,
            "M3": P3Image,
            "M4": P4Image,
            "M5": P5Image,
            "M6": P6Image,
            "M7": P7Image,
            "M8": P8Image,
            "M9": P9Image,
            "M10": P10Image,
            "Dress": S10Image,
        
    };
    const handleChangeS = (e) => {
        const { name, value } = e.target;
        setFormDataS(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleChangeP = (e) => {
        const { name, value } = e.target;
        setFormDataP(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmitS = async (e) => {
        e.preventDefault();
        setStatusMessageS('Updating profile...');
        try {
            const response = await fetch('https://q2rwcihup1.execute-api.us-east-1.amazonaws.com/Masurement', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: formDataS })
            });
            response.ok && response.status === 200
                ? setStatusMessageS('Your Shirt measurements are updated successfully.')
                : setStatusMessageS('An error happened, please try again after some time.');
        } catch (error) {
            console.error('Error fetching data:', error);
            setStatusMessageS('An error happened, please try again after some time.');
        }
    };
    const handleSubmitP = async (e) => {
        e.preventDefault();
        setStatusMessageP('Updating profile...');
        try {
            const response = await fetch('https://q2rwcihup1.execute-api.us-east-1.amazonaws.com/Masurement', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: formDataP })
            });
            response.ok && response.status === 200
                ? setStatusMessageP('Your trousers measurements are updated successfully.')
                : setStatusMessageP('An error happened, please try again after some time.');
        } catch (error) {
            console.error('Error fetching data:', error);
            setStatusMessageP('An error happened, please try again after some time.');
        }
    };
   

    return (
        <div style={{
            fontFamily: 'Roboto, sans-serif',
            backgroundColor: '#f0f2f5',
            display: 'flex',
            flexDirection: 'row', // Changed to row for side by side layout
            alignItems: 'flex-start', // Align items to the top
            justifyContent: 'flex-start', // Align container content to the left
            height: '100vh',
            position: 'relative',
            padding: '20px'
        }}>
            
            <form style={{
                position: 'absolute',
                top: '100px',
                left: '100px',
                justifyContent: 'space-around',
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: '40%', // Reduced width to fit side by side
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginRight: '20px' // Add margin between forms
            }} onSubmit={handleSubmitS}>
                <label>Enter your Shirt measurements here:</label>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <div key={num}>
                        <label htmlFor={`M${num}`}>M{num} in Inches:</label>
                        <img src={shirtImages[`M${num}`]} alt={shirtImages[{num}]} style={{ width: '50px', height: '50px', marginLeft: '10px' , cursor: 'pointer' }} onClick={() => openImage(shirtImages[`M${num}`])} />
                        <input type="number" id={`M${num}`} name={`M${num}`} required onChange={handleChangeS} value={formDataS[`M${num}`]} style={{
                            padding: '10px',
                            fontSize: '16px',
                            width: '100%',
                            margin: '10px 0',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            transition: 'border-color 0.3s'
                        }} onFocus={(e) => e.currentTarget.style.borderColor = '#007bff'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#ccc'} />
                    </div>
                ))}
                <button type="submit" style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '15px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'background-color 0.3s'
                }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                    Submit Shirt measurements
                </button>
                {statusMessageS && <div style={{
                    marginTop: '20px',
                    padding: '10px',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '4px',
                    whiteSpace: 'pre-wrap',
                    textAlign: 'center'
                }}>
                    {statusMessageS}
                </div>}
            </form>
            {enlargedImage && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }} onClick={closeImage}>
                    <img src={enlargedImage} alt="Enlarged" style={{ maxHeight: '90%', maxWidth: '90%', border: '8px solid white' }} />
                </div>
            )}
            <form style={{
                position: 'absolute',
                top: '100px',
                left: '750px',
                justifyContent: 'space-around',
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: '40%', // Maintained consistent form width
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }} onSubmit={handleSubmitP}>
                <label>Enter your Trousers measurements here:</label>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <div key={num}>
                        <label htmlFor={`M${num}`}>M{num} in Inches:</label>
                        <img src={pantImages[`M${num}`]} alt={pantImages[{num}]} style={{ width: '50px', height: '50px', marginLeft: '10px' , cursor: 'pointer' }} onClick={() => openImage(pantImages[`M${num}`])} />
                        <input type="number" id={`M${num}`} name={`M${num}`} required onChange={handleChangeP} value={formDataP[`M${num}`]} style={{
                            padding: '10px',
                            fontSize: '16px',
                            width: '100%',
                            margin: '10px 0',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            transition: 'border-color 0.3s'
                        }} onFocus={(e) => e.currentTarget.style.borderColor = '#007bff'}
                            onBlur={(e) => e.currentTarget.style.borderColor = '#ccc'} />
                    </div>
                ))}
                <button type="submit" style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '15px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'background-color 0.3s'
                }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                    Submit Trousers measurements
                </button>
                {statusMessageP && <div style={{
                    marginTop: '20px',
                    padding: '10px',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '4px',
                    whiteSpace: 'pre-wrap',
                    textAlign: 'center'
                }}>
                    {statusMessageP}
                </div>}
            </form>
            {enlargedImage && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }} onClick={closeImage}>
                    <img src={enlargedImage} alt="Enlarged" style={{ maxHeight: '90%', maxWidth: '90%', border: '8px solid white' }} />
                </div>
            )}
        </div>
    );
    
};

export default TailoringBusinessForm;
