import { useState, useEffect } from 'react';
import { getMonsters } from './api';
import { onlyLarge, simplify, filterBySpecies, countBySpecies, findById } from './logic';
import MonsterList from './MonsterList.jsx'
import SpeciesFilter from './SpeciesFilter.jsx';
import MonsterDetail from './MonsterDetail.jsx';





export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [species, setSpecies] = useState("");
  const [selectedID, setSelectedID] = useState(null);

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
    return <p className="loading">Loading monsters...</p>;
  }
  if (status === "error"){
    return <p className="error">Failed to load data: {error}</p>
  }
  const counts = countBySpecies(monsters);
  const visibleMonsters = filterBySpecies(monsters, species);
  const selectedMonster = findById(monsters, selectedID);
  return (
    <>
      <h1>Monster Hunter World Monsters</h1>
      <SpeciesFilter counts={counts} value={species} onChange={setSpecies}/>
      <MonsterList monsters = {visibleMonsters} onSelect={setSelectedID}/>
      {selectedMonster && (
        <MonsterDetail key={selectedMonster.id} monster={selectedMonster} onClose={() => setSelectedID(null)}/>
      )}
    </>
  );
}