import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserPool from '../UserPool';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Path to your AuthContext file
function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setuserEmail } = useAuth();

    const submit = (e) => {
        e.preventDefault();
        console.log("submitted" + email);
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
        });
    
        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });
    
        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("onSuccess " + data);
                setuserEmail(email); // Set email in context
                navigate('/LoggedInPage'); // Navigate without email in URL
            },
            onFailure: (err) => {
                console.log("onFailure " + err);
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired " + data)
            }
        });
    }

    

    const onEmailChange = (e) => {
        const value = e.target.value;
        if (value.length <= 64) { // Limit email length
            setEmail(value);
        }
    }

    const onPasswordChange = (e) => {
        const value = e.target.value;
        if (value.length <= 20) { // Limit password length
            setPassword(value);
        }
    }

    return (
        <div className="flex flex-col items-center mt-8">
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            <form onSubmit={submit} className="flex flex-col items-center space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={email}
                    onChange={onEmailChange}
                    className="border border-gray-400 rounded-md px-4 py-3 w-64 focus:outline-none focus:border-blue-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onPasswordChange}
                    className="border border-gray-400 rounded-md px-4 py-3 w-64 focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Sign In
                </button>
            </form>
            <p className="mt-4">
                <Link to="https://kmadhukuncha-auth.auth.us-east-1.amazoncognito.com/signup?client_id=5mpkb6pvjt1csdl9rk4ctg9ded&response_type=code&scope=email+openid&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fsigninagain" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign Up Instead
                </Link>
            </p>
        </div>
    );
}

export default SignIn;