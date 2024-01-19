function photographerTemplate(photographer) {

    function getUserCardDOM() {
        const { id, name, portrait, tagline, price } = photographer;
        const baseClass= "photographer-card";

        const article = Object.assign(document.createElement( 'article' ), {
            className: baseClass
        });

        const pLink = Object.assign(document.createElement( 'a' ), {
            href: `photographer.html?id=${id}`,
            ariaLabel: name,
            className: `${baseClass}__link`
        });
        const pPortrait = Object.assign(document.createElement( 'img' ), {
            src: portrait,
            alt: ""
        });
        const pName = Object.assign(document.createElement( 'h2' ), {
            textContent: name,
        });
        pLink.append(pPortrait, pName);

        const pLocation = Object.assign(document.createElement( 'p' ), {
            textContent: photographer.getLocation(),
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

        article.append(pLink, pLocation, pTagline, pPrice);
        return (article);
    }

    return { id: photographer.id, getUserCardDOM }
}