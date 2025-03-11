import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
