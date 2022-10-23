import './css/app.css';
import {v4 as uuidv4} from 'uuid';
import Home from './pages/Home';
import AddTechno from './pages/AddTechno';
import AllTechos from './pages/AllTechos';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import { useState } from 'react';
function App() {
  const [technos, setTechno] = useState([])
  /*un objet de techno
  [{name:"react",categorie:"front end",description:"objectif devenir un MERN"}]*/
  const handleAddTechno = (techno) => {
    setTechno([...technos, {...techno,technoid:uuidv4()}])
    console.log('la techno ajoute est:', techno);
  }
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/add'
          element={<AddTechno handleAddTechno={handleAddTechno} />}
        />
        <Route
          path='/all'
          element={<AllTechos technos={technos} />}
        />
      </Routes>
    </>
  );
}

export default App;
