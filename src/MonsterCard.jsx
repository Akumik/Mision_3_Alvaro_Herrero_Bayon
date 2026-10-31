export default function MonsterCard({ monster, onSelect}){
    return(
        <li>
            <button className="card" onClick={() => onSelect(monster.id)}>
                <span className="card-title">{monster.name}</span>
                <span>Species: {monster.species}</span>
                <span>Weaknesses: {monster.weaknesses.join(", ") || "None"}</span>
            </button>
        </li>
    )
}