import { useState } from 'react';
import { filterBySpecies, countBySpecies, findById } from './logic';
import MonsterList from './MonsterList.jsx'
import SpeciesFilter from './SpeciesFilter.jsx';
import MonsterDetail from './MonsterDetail.jsx';
import useMonsters from './useMonsters';




export default function App() {
  const {monsters, status, error} = useMonsters();
  const [species, setSpecies] = useState("");
  const [selectedID, setSelectedId] = useState(null);
  
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
      <MonsterList monsters = {visibleMonsters} onSelect={setSelectedId}/>
      {selectedMonster && (
        <MonsterDetail key={selectedMonster.id} monster={selectedMonster} onClose={() => setSelectedId(null)}/>
      )}
    </>
  );
}