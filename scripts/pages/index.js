async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    const fragment = document.createDocumentFragment();

    photographers.forEach((photographer) => {
        const userCardDOM = photographerTemplate(photographer).getUserCardDOM();

        fragment.appendChild(userCardDOM);
    });

    photographersSection.appendChild(fragment);
}

async function init() {
    // Récupère les data des photographes
    const { photographers } = await getPhotographersData();
    // console.log(`Photographers: ${photographers}`);
    displayData(photographers);
}

init();
    
