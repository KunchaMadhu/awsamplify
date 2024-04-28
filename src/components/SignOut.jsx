import React from 'react'
import { useAuth } from './AuthContext'; // Path to your AuthContext file
function SignOut() {
  const {setuserEmail } = useAuth();
  setuserEmail('');
  localStorage.removeItem('userEmail');
  return (
    <div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="/">You have successfully Signed out</a>
    </button>
</div>

  )
}

export default SignOut
