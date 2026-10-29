import MonsterCard from './MonsterCard.jsx';

export default function MonsterList({ monsters, onSelect}){
    if (monsters.length === 0) {
        return <p className="empty">No monsters found for the selected species.</p>;
    }

    return(
        <ul className="grid">
            {monsters.map(monster => (
                <MonsterCard key = {monster.id} monster = {monster} onSelect = {id => console.log("clisk, id")}/>
            ))}
        </ul>
    );
}