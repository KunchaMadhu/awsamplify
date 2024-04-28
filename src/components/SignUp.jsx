/*import React, { useState } from 'react';
import UserPool from '../UserPool';

function SignUp() {
    
  return (
    <div className="flex items-center justify-center h-screen">
        <a href="https://kmadhukuncha-auth.auth.us-east-1.amazoncognito.com/login?client_id=5mpkb6pvjt1csdl9rk4ctg9ded&response_type=code&scope=email+openid&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Flogged_in.html" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            SIGN UP
        </a>
    </div>
);
}*/

/*export default SignUp;*/
// const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const onEmailChange = (e) => {
//         setEmail(e.target.value);
//     }

//     const onPasswordChange = (e) => {
//         setPassword(e.target.value);
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         UserPool.signUp(email, password,null, [], (err, data) => {
//             if (err) {
//                 console.log(err);
//             }
//             console.log(data);
//         })
//     }


// <div className="flex items-center justify-center">
// <div className="max-w-md w-full space-y-8">
//     <div>
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
//     </div>
//     <form className="mt-8 space-y-6" onSubmit={onSubmit}>
//         <input type="hidden" name="remember" value="true" />
//         <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//                 <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-5"
//                     placeholder="Email address"
//                     value={email}
//                     onChange={onEmailChange}
//                 />
//             </div>
//             <div>
//                 <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     autoComplete="current-password"
//                     required
//                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                     placeholder="Password"
//                     value={password}
//                     onChange={onPasswordChange}
//                 />
//             </div>
//         </div>

//         <div>
//             <button
//                 type="submit"
//                 className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//                 Sign up
//             </button>
//         </div>
//     </form>
// </div>
// </div>