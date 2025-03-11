import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home';
import Select_GameOption from './pages/Select_GameOption';
import Select_GameMode_Auto from './pages/Select_GameMode_Auto';
import Select_GameMode_Custom from './pages/Select_GameMode_Custom';
import Setting from './pages/Setting';
import History_Home from './pages/History_Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Select_GameOption" element={<Select_GameOption />} />
        <Route path="/Select_GameMode_Auto" element={<Select_GameMode_Auto />} />
        <Route path="/Select_GameMode_Custom" element={<Select_GameMode_Custom />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/History_Home" element={<History_Home />} />
      </Routes>
    </Router>
  );
}

export default App;
