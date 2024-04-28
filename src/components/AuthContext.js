import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

    export const AuthProvider = ({ children }) => {
        const [email, setuserEmail] = useState(localStorage.getItem('userEmail') || '');
        useEffect(() => {
            // Update localStorage when email changes
            localStorage.setItem('userEmail', email);
        }, [email]);

    return (
        <AuthContext.Provider value={{ email, setuserEmail }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

