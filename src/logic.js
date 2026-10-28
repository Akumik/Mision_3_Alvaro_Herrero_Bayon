export function onlyLarge(monsters) {
    return monsters.filter(monster => monster.type === "large");
}

export function simplify(monsters) {
    return monsters.map(monster => {
        const weaknesses = monster.weaknesses ?? [];
        const resistances = monster.resistances ?? [];
        const locations = monster.locations ?? [];

        return {
            id: monster.id ?? "",
            name: monster.name ?? "",
            species: monster.species ?? "",
            description: monster.description ?? "",
            elements: monster.elements ?? [],
            weaknesses: [...new Set(weaknesses.filter(weakness => weakness.stars >= 3)
                .map(weakness => weakness.element))],
            weaknessStars: bestWeaknessStars(weaknesses),
            resistances: [...new Set(resistances.map(resistance => resistance.element))],
            locations: locations.map(location => location.name),
            image: monster.name ? `/monsters/${toFileName(monster.name)}.png` : ""
        };
    });
}

export function filterBySpecies(monsters, species) {
    if (!species) {
        return monsters;
    }
    return monsters.filter(monster => monster.species === species);
}

export function countBySpecies(monsters) {
    return monsters.reduce((acc, monster) => {
        acc[monster.species] = (acc[monster.species] || 0) + 1;
        return acc;
    }, {});
}

export function bestWeaknessStars(weaknesses) {
    const byElement = weaknesses.reduce((acc, weakness) => {
        acc[weakness.element] = Math.max(acc[weakness.element] || 0, weakness.stars);
        return acc;
    }, {});
    
    return Object.entries(byElement).map(([element, stars]) => ({ element, stars }))
    .sort((a, b) => b.stars - a.stars);

}

export function findById(monsters, id) {
    return monsters.find(monster => monster.id === id);
}

export function toFileName(name = ""){
    return name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/^-|-$/g, "");
}


