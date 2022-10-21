import './css/app.css';
import Home from './pages/Home';
import AddTechno from './pages/AddTechno';
import AllTechos from './pages/AllTechos';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddTechno />} />
        <Route path='/all' element={<AllTechos />} />
      </Routes>
    </>
  );
}

export default App;
