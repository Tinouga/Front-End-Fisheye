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

function populateFooter(photographer, medias) {
    const footer = document.querySelector(".photograph-additional-info");
    const likes = medias.reduce((acc, media) => acc + media.likes, 0);

    footer.querySelector(".photograph-additional-info__likes").innerHTML = `${likes} <i class="fa-solid fa-heart"></i>`;
    footer.querySelector(".photograph-additional-info__price").textContent = `${photographer.price}€ / jour`;
}

function displayData(medias, clear) {
    const mediaSection = document.querySelector(".media-section");
    const fragment = document.createDocumentFragment();

    medias.forEach(media => {
        const mediaCardDOM = mediaTemplate(media).getMediaCardDOM();

        fragment.appendChild(mediaCardDOM);
    });

    if(clear) {
        mediaSection.replaceChildren(fragment);
    } else {
        mediaSection.appendChild(fragment);
    }
}

let photographer;
let medias;

async function init() {
    const id = parseInt(new URLSearchParams(window.location.search).get("id"));
    photographer = await getPhotographer(id);
    console.log(photographer);
    medias = await getMedias()
        .then(medias => medias.filter(media => media.photographerId === id).sort((a, b) => b.likes - a.likes));
    console.log(medias);

    document.title = `FishEye - ${photographer.name}`;
    document.getElementById("modalTitle").innerHTML = `Contactez-moi<br>${photographer.name}`;
    populateBanner(photographer);
    displayData(medias);
    populateFooter(photographer, medias);
}

init();