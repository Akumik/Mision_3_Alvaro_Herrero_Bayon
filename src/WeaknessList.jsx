export default function WeaknessList({ weaknesses }){
    if(weaknesses.length === 0){
        return <p className="empty">None</p>;
    }
    return (
        <ul className="weaknesses">
            {weaknesses.map(({ element, stars }) => (
                <li key={element}>
                    <span>{element}</span>
                    <span className="stars">
                        {"★".repeat(stars)}
                    </span>
                </li>
            ))}
        </ul>

    );
}