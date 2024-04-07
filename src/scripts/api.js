export async function getData() {
    try {
        const response = await fetch('https://openmusic-fake-api.onrender.com/api/musics');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation', error);
        throw error;
    }
}
