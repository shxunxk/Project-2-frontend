import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import { NavbarSimple } from './Components/Navbar';
import Dataset from './Pages/Dataset';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      {/* <div className="flex h-screen gap-0.5"> */}
        {/* Sidebar - Uncomment if needed */}
        {/* <div className="w-12 h-screen text-white shadow-lg">
          <Sidebar />
        </div> */}
        <div className="flex-1 overflow-auto">
          <div className="fixed top-0 left-0 w-full z-10">
          <NavbarSimple />
          </div>
          {/* Main Content - Takes Remaining Space */}
          <div className='mt-20'>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/:id" element={<Dataset />} />
            </Routes>
          </div>
        </div>
      {/* </div> */}
    </Router>
  );
}

export default App;
