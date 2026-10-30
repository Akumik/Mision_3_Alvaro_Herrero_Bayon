export default function TagList({ title, items, emptyText = "None"}){
    return (
        <section>
            <h3>{title}</h3>
            {items.length === 0 ? (
                <p className="empty">{emptyText}</p>
            ) : (
                <ul className = "tags">
                    {items.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            )}
        </section>
    );
}