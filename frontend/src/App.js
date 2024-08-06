import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AddReservationPage from './pages/AddReservationPage.jsx';

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/add-reservation' element={<AddReservationPage/>}/>
    
    
    </Routes>
    
    </Router>
  );
}

export default App;
