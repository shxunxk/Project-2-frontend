import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import { NavbarSimple } from './Components/Navbar';
import Dataset from './Pages/Dataset';
import Login from './Pages/Login';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const passUser = (user) => {
    Cookies.set('user', user);
    setUser(1);
  }

  useEffect(() => {
    const userCookie = Cookies.get('user');
    if (!userCookie) {
      setUser(null); // No user
    }
  }, []);

  return (
    <Router>
      <div className="flex-1 overflow-auto">
        <div className="fixed top-0 left-0 w-full z-10">
          <NavbarSimple />
        </div>
        {/* Main Content */}
        <div className="mt-20">
          <Routes>
            {/* Redirect based on user existence */}
            {!user ? (
              <>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login passUser={passUser}/>} />
              </>
            ) : (
              <>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/:id" element={<Dataset />} /> {/* Dataset route */}
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
