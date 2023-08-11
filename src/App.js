import './App.css';
import Main from './comfonent/Main';
import Navbar from './comfonent/Navbar';
import Map from './comfonent/Map';
import Review from './comfonent/Review';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './loginForm/Login';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Router>

      <Navbar />
      <Main />
      <Map />
      <Review />
      
    </div>
  );
}

export default App;
