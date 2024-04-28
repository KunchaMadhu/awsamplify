import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCompass, faSignOut, faSmile } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 


function Navbar() {
   const navigate =useNavigate();
   const { email } = useAuth();
   
  
    
  
  return (
    <footer className='bg-slate-100 py-5 '>
             <div className='flex justify-around h-85 '>

             <div>
      {email.length > 0 ?  null : (<> <FontAwesomeIcon icon={faSmile} size="2x" onClick={()=> navigate("/")} /> <span>Welcome to Skilled Tailor</span> </> )}
      
           </div>
           <div>
      {email.length > 0 ? (<> <FontAwesomeIcon icon={faHome} size="2x" onClick={()=> navigate("/LoggedInPage")}/> <span> HOME </span> </> ) : null}
      </div>
            
              <div>
              <FontAwesomeIcon icon={faCompass} size="2x" onClick={()=> navigate("/explore")}/>  Explore 
              </div>

              <div>
      {email.length > 0 ? null : (<> <FontAwesomeIcon icon={faInfoCircle} size="2x" onClick={()=> navigate("/signin")} /> <span> Sign In</span> </> ) }
      </div>
              
              <div>
              {email.length > 0 ? (<> <FontAwesomeIcon icon={faSignOut} size="2x" onClick={()=> navigate("/signout")}/> <span> Sign Out</span> </> ) : null}   
              </div>
            </div>     
    </footer>
  )
}

export default Navbar
