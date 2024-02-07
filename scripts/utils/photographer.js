/**
 * If this function is called without an id, it will return all photographers.
 * If an id is provided, it will return the photographer and their associated medias.
 */
async function getPhotographersData(id) {
    try {
        const response = await fetch("data/photographers.json");
        if (!response.ok) {
            throw new Error(`Failed to fetch photographers. Status: ${response.status}`);
        }

        const { photographers: rawP, media: rawM } = await response.json();
        const photographers = rawP.map(data => new Photographer(data));

        if(id) {
            const medias = rawM.map(data => new MediaFactory(data));
            const photographer = photographers.find(photographer => photographer.id === id);
            const photographerMedias = medias.filter(media => media.photographerId === id)
                .sort((a, b) => b.likes - a.likes);
            return { photographer, photographerMedias };
        }

        return { photographers };
    } catch(error) {
        console.log("Error while fetching photographers:", error);
        return { photographers: [], photographer: {}, photographerMedias: [] };
    }
}