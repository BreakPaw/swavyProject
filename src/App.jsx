import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Footer from './components/layouts/Footer';
import List from './pages/List';
import Discover from './pages/Discover';
import Community from './pages/Community';
function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/list" element={<List />} />
        <Route path="/community" element={<Community />} />s
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App