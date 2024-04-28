import React from 'react';

const SignInAgain = () => {
  const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0
      },
    h3: {
      color: '#333',
      textAlign: 'center',
      marginTop: '50px'
    },
    p: {
      textAlign: 'center',
      marginTop: '20px'
    },
    a: {
      color: '#fff',
      backgroundColor: '#007bff',
      padding: '10px 20px',
      textDecoration: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease'
    },
    aHover: { // Note: This won't work directly in inline styles
      backgroundColor: '#0056b3'
    }
  };

  return (
    <div style={styles.body}>
      <h3 style={styles.h3}>Welcome to Skilled Tailor</h3>
      <p style={styles.p}>
        <a style={styles.a} href="https://kmadhukuncha-auth.auth.us-east-1.amazoncognito.com/logout?client_id=5mpkb6pvjt1csdl9rk4ctg9ded&logout_uri=http://localhost:3000/signin">
          Please Sign In Again
        </a>
      </p>
    </div>
  );
};

export default SignInAgain;
