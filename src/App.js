import './css/app.css';
import { v4 as uuidv4 } from 'uuid';
import Home from './pages/Home';
import AddTechno from './pages/AddTechno';
import AllTechos from './pages/AllTechos';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStrage';
function App() {
  const [technos, setTechno] = useState([])
  /*Use effect est charger q'une seule fois
  en un mot il nous permet de faire une surveillance*/
  const STORAGE_KEY = 'technos';
  const [tectnoStorage, setTechnoStorge] = useLocalStorage(STORAGE_KEY, []);
  useEffect(() => {
    console.log('useEffect with []');
    setTechno(tectnoStorage)
  }, [])
  useEffect(() => {
    console.log('useEffect with [techns]');
    setTechnoStorge(technos);
  }, [technos])
  /*un objet de techno
  [{name:"react",categorie:"front end",description:"objectif devenir un MERN"}]*/
  const handleAddTechno = (techno) => {
    setTechno([...technos, { ...techno, technoid: uuidv4() }])
    // console.log('la techno ajoute est:', techno);
  }
  const handleDelete = (id) => {
    /*React Prop drilling*/
    setTechno(technos.filter((techno) => techno.technoid !== id))
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
          element={<AllTechos technos={technos} handleDelete={handleDelete} />}
        />
      </Routes>
    </>
  );
}

export default App;
