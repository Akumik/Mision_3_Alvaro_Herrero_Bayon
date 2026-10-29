import './App.css'
import { useState, useEffect } from 'react';
import { getMonsters } from './api';
import { onlyLarge, simplify, filterBySpecies, countBySpecies } from './logic';
import MonsterList from './MonsterList.jsx'
import SpeciesFilter from './SpeciesFilter.jsx';




export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [species, setSpecies] = useState("");
  useEffect(() => {
    let ignore = false;
    getMonsters().then(data =>{
      if(ignore){
        return;
      }
      setMonsters(simplify(onlyLarge(data)));
      setStatus("ready");
    })
    .catch(err => {
      if(ignore){
        return;
      }
      setError(err.message);
      setStatus("error");
    });
    return () => {ignore = true; };
  }, []);
  
  if (status === "loading"){
    return <p className="loading">Loading monsters..</p>;
  }
  if (status === "error"){
    return <p className="error">Failed to load data: {error}</p>
  }
  const counts = countBySpecies(monsters);
  const visibleMonsters = filterBySpecies(monsters, species);
  return (
    <>
      <h1>Monster Hunter World Monsters</h1>
      <SpeciesFilter counts={counts} value={species} onChange={setSpecies}/>
      <MonsterList monsters = {visibleMonsters} onSelect={id => console.log("click", id)}/>
    </>
  );
}