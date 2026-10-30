const BASE_URL = "https://mhw-db.com";

export async function getMonsters(signal) {
    const response = await fetch(`${BASE_URL}/monsters`, {signal});
    if (!response.ok) {
        throw new Error(`Error HTTP ${response.status}`);
    }

    return response.json();
}