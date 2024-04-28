import Navbar from "./components/Navbar";
import About from "./components/About"
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import { AuthProvider } from './components/AuthContext'; // Path to your AuthContext file
import Explore from "./components/Explore";
import User from "./components/User";
import SignOut from "./components/SignOut";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import LoggedInPage from './components/LoggedInPage';
import SignInAgain from "./components/SignInAgain";
import EditPage from "./components/EditPage";
import ProfilePage from "./components/ProfilePage";
import MDpage from "./components/MDpage";
import EDpage from "./components/EDpage";
import Order1 from "./components/Order1";
import Order2 from "./components/Order2";
function App()
{
       return (
        <AuthProvider>  
            <Router>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <div className="flex-grow">
                        <Routes>
                            <Route path="/" element={<User />} />
                            <Route path="/explore" element={<Explore />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/signout" element={<SignOut />} />
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/LoggedInPage" element={<LoggedInPage />} />
                            <Route path="/SignInAgain" element={<SignInAgain />} />
                            <Route path="/EditPage" element={<EditPage />} />
                            <Route path="/ProfilePage" element={<ProfilePage />} />
                            <Route path="/MDpage" element={<MDpage />} />
                            <Route path="/EDpage" element={<EDpage />} />
                            <Route path="/Order1" element={<Order1 />} />
                            <Route path="/Order2" element={<Order2 />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </AuthProvider>
    
       );
}
export default  App