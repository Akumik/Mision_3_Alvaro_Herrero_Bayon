export default function MonsterCard({ monster, onSelect}){
    return(
        <li className="card" onClick={() => onSelect(monster.id)}>
            <h3>{monster.name}</h3>
            <p>Species: {monster.species}</p>
            <p>Weaknesses: {monster.weaknesses.join(", ") || "None"}</p>
        </li>
    )
}