function photographerTemplate({ id, name, city, country, tagline, price, portrait }) {

    function getUserCardDOM() {
        const baseClass= "photographer-card";

        const article = Object.assign(document.createElement( 'article' ), {
            className: baseClass
        });
        const pPortrait = Object.assign(document.createElement( 'img' ), {
            src: `assets/photographers/id/${portrait}`,
            alt: `Portrait of ${name}`,
            className: `${baseClass}__portrait`
        });
        const pName = Object.assign(document.createElement( 'h2' ), {
            textContent: name,
            className: `${baseClass}__name`
        });
        const pLocation = Object.assign(document.createElement( 'p' ), {
            textContent: `${city}, ${country}`,
            className: `${baseClass}__location`
        });
        const pTagline = Object.assign(document.createElement( 'p' ), {
            textContent: tagline,
            className: `${baseClass}__tagline`
        });
        const pPrice = Object.assign(document.createElement( 'p' ), {
            textContent: `${price}€/jour`,
            className: `${baseClass}__price`
        });

        article.append(pPortrait, pName, pLocation, pTagline, pPrice);
        return (article);
    }

    return { id, getUserCardDOM }
}