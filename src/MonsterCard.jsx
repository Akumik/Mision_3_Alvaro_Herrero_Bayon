export default function MonsterCard({ monster, onSelect}){
    function handleKeyDown(e){
        if(e.key == "Enter"){
            e.preventDefault();
            onSelect(monster.id);
        }
    }
    return(
        <li className="card" tabIndex={0} role="button" onKeyDown={handleKeyDown} onClick={() => onSelect(monster.id)}>
            <h3>{monster.name}</h3>
            <p>Species: {monster.species}</p>
            <p>Weaknesses: {monster.weaknesses.join(", ") || "None"}</p>
        </li>
    )
}