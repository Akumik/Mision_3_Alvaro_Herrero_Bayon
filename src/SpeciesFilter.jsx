export default function SpeciesFilter({ counts, value, onChange}) {
    const speciesList = Object.keys(counts).sort();

    return(
        <select value={value} onChange={e =>onChange(e.target.value)}>
            <option value="">All Species</option>
            {speciesList.map(species => (
                <option key={species} value = {species}>
                    {species} ({counts[species]})
                </option>
            ))}
        </select>
    );
}