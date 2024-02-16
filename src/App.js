import './App.css';
import RegisterPage from './Page/register';
import Login from './Page/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Page/homePage';
import Navigationbar from './Component/navbar';



function App() {
  const isAuthenticated = true; // Set this to true if the user is authenticated

  return (
    <div>
      <Navigationbar/>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
