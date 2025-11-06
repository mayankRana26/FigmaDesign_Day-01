import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import Education from "./pages/Education"; 
import YojanaDetail from './pages/YojanaDetail'; 
import Footer from './components/Footer';
import Community from './pages/Community';
import Shop from './pages/Shop';
import Nutrition from './pages/Nutrition';
import Tracker from './pages/Tracker';
import Yojanas from './pages/Yojanas';


function App() {
  
  return (
    <Router>
      <Navbar /> 
      
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/education" element={<Education />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/community" element={<Community />} />
          <Route path="/yojanas" element={<Yojanas />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/yojana/:yojanaSlug" element={<YojanaDetail />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;