import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import { NavbarSimple } from './Components/Navbar';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar - Fixed to the left */}
        <div className="w-12 h-screen text-white shadow-sm">
          <Sidebar />
        </div>
        <div className="flex-1 p-5 overflow-auto">
          <div>
            <NavbarSimple/>
          </div>
          {/* Main Content - Takes Remaining Space */}
          <div >
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
