function mediaTemplate(media) {
    const {id, photographerId, src, title, likes, date, price} = media;


    const baseClass = "media-card";
    const article = Object.assign(document.createElement('article'), {
        className: baseClass
    });
    const mLink = Object.assign(document.createElement('a'), {
        href: `photographer.html?id=${photographerId}`,
        ariaLabel: name,
        className: `${baseClass}__link`
    });
    if (media instanceof ImageMedia) {
        const img = Object.assign(document.createElement('img'), {
            src: src,
            alt: ""
        });
        mLink.appendChild(img);
    }

    const footer = Object.assign(document.createElement('footer'), {
        className: `${baseClass}__footer`
    });
    const mTitle = Object.assign(document.createElement('h2'), {
        textContent: title,
        className: `${baseClass}__title`
    });
    const mLikes = Object.assign(document.createElement('p'), {
        textContent: likes,
        className: `${baseClass}__likes`
    });
    footer.append(mTitle, mLikes);

    article.append(mLink, footer);
    return (article);
}