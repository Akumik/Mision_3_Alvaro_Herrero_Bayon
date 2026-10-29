const BASE_URL = "https://mhw-db.com";

export async function getMonsters() {
    const response = await fetch(`${BASE_URL}/monsters`);
    if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}`);
    }

    return response.json();
}