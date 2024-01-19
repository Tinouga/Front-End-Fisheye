async function getPhotographers() {
    try {
        const response = await fetch("data/photographers.json");
        if (!response.ok) {
            throw new Error(`Failed to fetch photographers. Status: ${response.status}`);
        }

        const { photographers } = await response.json();
        return photographers.map(data => new Photographer(data));
    } catch(error) {
        console.log("Error while fetching photographers:", error);
        return [];
    }
}

async function getPhotographer(id) {
    const photographers = await getPhotographers();
    return photographers.find(photographer => photographer.id === id);
}

async function getMedias() {
    try {
        const response = await fetch("data/photographers.json");
        if (!response.ok) {
            throw new Error(`Failed to fetch medias. Status: ${response.status}`);
        }

        const { media } = await response.json();
        return media.map(data => new MediaFactory(data));
    } catch(error) {
        console.log("Error while fetching medias:", error);
        return [];
    }
}