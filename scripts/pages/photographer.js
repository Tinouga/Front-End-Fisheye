function populateBanner(photographer) {
    const { name, portrait, tagline } = photographer;
    const baseClass = "photograph-header";
    document.querySelector(`.${baseClass}__name`).textContent = name;
    document.querySelector(`.${baseClass}__location`).textContent = photographer.getLocation();
    document.querySelector(`.${baseClass}__tagline`).textContent = tagline;
    Object.assign(document.querySelector(`.${baseClass}__portrait img`), {
        src: portrait,
        alt: ""
    });
}

function displayData(medias) {
    const mediaSection = document.querySelector(".media_section");
    const fragment = document.createDocumentFragment();

    medias.forEach(media => {
        const mediaCardDOM = mediaTemplate(media);

        fragment.appendChild(mediaCardDOM);
    });

    mediaSection.appendChild(fragment);
}

async function init() {
    const id = parseInt(new URLSearchParams(window.location.search).get("id"));
    const photographer = await getPhotographer(id);
    console.log(photographer);
    const medias = await getMedias()
        .then(medias => medias.filter(media => media.photographerId === id));
    console.log(medias)

    document.title = `FishEye - ${photographer.name}`;
    populateBanner(photographer);
    displayData(medias);
}

init();