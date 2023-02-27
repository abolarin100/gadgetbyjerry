import './App.css';
import Users from './components/Users';
import Blog from './components/Blog';
// import Colors from './components/colors';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './hoc/Navbar';
import DetailPage from './components/DetailPage';
import Home from './components/Home';
import AddGadgets from './components/AddGadgets';


function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/addGadgets' element={<AddGadgets />} />
        <Route path='/users' element={<Users />} />
        <Route path='/blog/:id' element={<DetailPage />} />
      {/* <Colors />. */}
      
      
     

      </Routes>
      
    </Router>
  );
}

export default App;
