import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useState, useEffect } from 'react';
import { getMonsters } from './api';
import { onlyLarge, simplify } from './logic';



export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const controller = new AbortController();
  
    getMonsters(controller.signal).then(data => {
      setMonsters(simplify(onlyLarge(data)));
      setStatus("ready");
    }).catch(err => {
    if(err.name === "AbortError") {
      return;
    }
    setError(err.message);
    setStatus("error");
  });
  return () => controller.abort();
  }, []);
  
  if (status === "loading"){
    return <p className="loading">Loading monsters..</p>;
    if (status === "error"){
      return <p className="error">Failed to load data: {error}</p>
    }
  }
  return (
    <>
      <h1>Monster Hunter World Monster</h1>
      <ul>
        {monsters.map(monsters => (
          <li key={monsters.id}>{monsters.name}</li>
        ))}
      </ul>
    </>
  );
}