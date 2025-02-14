import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import { NavbarSimple } from './Components/Navbar';
import Dataset from './Pages/Dataset';

function App() {
  return (
    <Router>
      <div className="flex h-screen gap-0.5">
        {/* Sidebar - Fixed to the left */}
        <div className="w-12 h-screen text-white shadow-lg">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-auto">
          <div>
            <NavbarSimple/>
          </div>
          {/* Main Content - Takes Remaining Space */}
          <div >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Dataset />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
