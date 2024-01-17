    async function getPhotographers() {
        const { photographers } = await fetch("data/photographers.json")
            .then((response) => response.json());

        console.log(photographers);

        return [...photographers];
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        const fragment = document.createDocumentFragment();

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();

            fragment.appendChild(userCardDOM);
        });

        photographersSection.appendChild(fragment);
    }

    async function init() {
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
