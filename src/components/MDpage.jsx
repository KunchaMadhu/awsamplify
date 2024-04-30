import React, { useState, useEffect } from 'react';
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


const MeasurementDetails = () => {
    const { email } = useAuth();
   
    const [shirtData, setShirtData] = useState(null);
    const [pantData, setPantData] = useState(null);
    const [shirtError, setShirtError] = useState('');
    const [pantError, setPantError] = useState('');
    const [shirtLoading, setShirtLoading] = useState(true);
    const [pantLoading, setPantLoading] = useState(true);
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
    
    const columnConfig = {
        "M1": { displayName: "M1", style: { fontWeight: 'bold' }, format: value => `${parseFloat(value).toFixed(2)} Inches`, order: 2, visible: true },
        "M2": { displayName: "M2", style: { fontWeight: 'bold' }, format: value => `${parseFloat(value).toFixed(2)} Inches`, order: 3, visible: true },
        "M3": { displayName: "M3", style: { fontWeight: 'bold' }, format: value => `${parseFloat(value).toFixed(2)} Inches`, order: 4, visible: true },
        "M4": { displayName: "M4", style: { fontWeight: 'bold' }, format: value => `${parseFloat(value).toFixed(2)} Inches`, order: 5, visible: true },
        "M5": { displayName: "M5", style: { fontWeight: 'bold' }, format: value => `${parseFloat(value).toFixed(2)} Inches`, order: 6, visible: true },
        "M6": { displayName: "M6", style: { fontWeight: 'bold' }, format: value => `${parseFloat(value).toFixed(2)} Inches`, order: 7, visible: true },
        "M7": { displayName: "M7", style: { fontWeight: 'bold' }, format: value => `${parseFloat(value).toFixed(2)} Inches`, order: 8, visible: true },
        "M8": { displayName: "M8", style: { fontWeight: 'bold' }, format: value => `${parseFloat(value).toFixed(2)} Inches`, order: 9, visible: true },
        "M9": { displayName: "M9", style: { fontWeight: 'bold' }, format: value => `${parseFloat(value).toFixed(2)} Inches`, order: 10, visible: true },
        "M10": { displayName: "M10", style: { fontWeight: 'bold' }, format: value => `${parseFloat(value).toFixed(2)} Inches`, order: 11, visible: true },
        "User_mail": {
            displayName: "M1",
            style: { fontWeight: 'bold' },
            format: (value) => value.toUpperCase(),
            order: 1,
            visible: false
        },
        "Dress": {
            displayName: "Dress Type",
            style: { fontWeight: 'bold' },
            format: (value) => value.toUpperCase(),
            order: 1,
            visible: false
        }
    };
    
    
    const defaultOrder = 1000; // Default order for unknown keys
    
    useEffect(() => {
        fetchMeasurement('shirt', setShirtData, setShirtError, setShirtLoading);
        fetchMeasurement('trousers', setPantData, setPantError, setPantLoading);
    }, [email]);

    const fetchMeasurement = async (type, setData, setError, setLoading) => {
        setLoading(true);
        try {
            const response = await fetch('https://q2rwcihup1.execute-api.us-east-1.amazonaws.com/Masurement', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: { User_mail: email, Dress: type } })
            });
            const responseData = await response.json();
            if (responseData.statusCode === 200) {
                setData(responseData.body);
            } else {
                setError(`Data unavailable, please edit your ${type} measurements.`);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(`Error in connection or data retrieval for ${type}.`);
        } finally {
            setLoading(false);
        }
    };

   
    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            position: 'relative'
        }}>
            
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', padding: '100px 0' }}>
                {/* Shirt measurements table */}
                <div style={{ textAlign: 'center', maxWidth: '50%' }}>
                    <h1>Your Shirt Measurements are:</h1>
                    {shirtLoading ? (
                        <p>Loading data...</p>
                    ) : shirtData ? (
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
                                {Object.entries(shirtData)
                                    .sort((a, b) => (columnConfig[a[0]]?.order || defaultOrder) - (columnConfig[b[0]]?.order || defaultOrder))
                                    .filter(([key]) => columnConfig[key]?.visible !== false)
                                    .map(([key, value]) => (
                                        <tr key={key}>
                                            <td style={{ textAlign: 'center' }}>
                                                <img src={shirtImages[key]} alt={key} style={{ width: '100px', height: 'auto', cursor: 'pointer' }} onClick={() => openImage(shirtImages[key])} />
                                            </td>
                                            <td style={{ padding: '8px 16px', fontWeight: 'bold', ...columnConfig[key]?.style }}>
                                                {columnConfig[key]?.displayName}
                                            </td>
                                            <td style={{ padding: '8px 16px' }}>
                                                {columnConfig[key]?.format(value)}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>{shirtError}</p>
                    )}
                </div>
                {/* Pant measurements table */}
                <div style={{ textAlign: 'center', maxWidth: '50%' }}>
                    <h1>Your Trousers Measurements are:</h1>
                    {pantLoading ? (
                        <p>Loading data...</p>
                    ) : pantData ? (
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
                                {Object.entries(pantData)
                                    .sort((a, b) => (columnConfig[a[0]]?.order || defaultOrder) - (columnConfig[b[0]]?.order || defaultOrder))
                                    .filter(([key]) => columnConfig[key]?.visible !== false)
                                    .map(([key, value]) => (
                                        <tr key={key}>
                                            <td style={{ textAlign: 'center' }}>
                                                <img src={pantImages[key]} alt={key} style={{ width: '100px', height: 'auto', cursor: 'pointer' }} onClick={() => openImage(pantImages[key])} />
                                            </td>
                                            <td style={{ padding: '8px 16px', fontWeight: 'bold', ...columnConfig[key]?.style }}>
                                                {columnConfig[key]?.displayName}
                                            </td>
                                            <td style={{ padding: '8px 16px' }}>
                                                {columnConfig[key]?.format(value)}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>{pantError}</p>
                    )}
                </div>
                {enlargedImage && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }} onClick={closeImage}>
                    <img src={enlargedImage} alt="Enlarged" style={{ maxHeight: '90%', maxWidth: '90%', border: '8px solid white' }} />
                </div>
            )}
            </div>
        </div>
    );
    
};

export default MeasurementDetails;
