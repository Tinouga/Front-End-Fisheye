function mediaTemplate(media) {

    function getMediaCardDOM() {
        const {id, src, title, likes} = media;

        const baseClass = "media-card";
        const article = Object.assign(document.createElement('article'), {
            className: baseClass
        });
        const mLink = Object.assign(document.createElement('a'), {
            href: "#",
            ariaLabel: `${title}, closeup view`,
            className: `${baseClass}__link`,
            onclick: () => {
                displayCarousel(id);
            }
        });
        if (media instanceof ImageMedia) {
            const img = Object.assign(document.createElement('img'), {
                src: src,
                alt: ""
            });
            mLink.appendChild(img);
        } else if (media instanceof VideoMedia) {
            const img = generateThumbnail();
            mLink.appendChild(img);
        }

        const footer = Object.assign(document.createElement('footer'), {
            className: `${baseClass}__footer`
        });
        const mTitle = Object.assign(document.createElement('h2'), {
            textContent: title,
            className: `${baseClass}__title`
        });
        const mLikes = Object.assign(document.createElement('button'), {
            innerHTML: `${likes} <i class="fa-solid fa-heart"></i>`,
            className: `${baseClass}__likes`,
            ariaLabel: "likes",
            onclick: () => {
                media.like();
                mLikes.innerHTML = `${media.likes} <i class="fa-solid fa-heart"></i>`;
                populateFooter(photographer, medias);
            }
        });
        footer.append(mTitle, mLikes);

        article.append(mLink, footer);
        return (article);
    }

    function generateThumbnail() {
        const thumbnail = Object.assign(document.createElement('img'), {
            alt: ""
        });

        const video = Object.assign(document.createElement('video'), {
          src: media.src,
          width: 360,
          height: 240
        });

        // The first time this event is triggered, it will generate a black thumbnail, we need to wait for the 2nd time it's triggered to get the thumbnail
        let nEvents = 0;
        video.addEventListener('canplay', function handlePlay()  {
            if(nEvents >= 2) {
                video.removeEventListener('canplay', handlePlay);
                return;
            }

            video.currentTime = 0;

            const canvas = Object.assign(document.createElement('canvas'), {
                width: video.videoWidth,
                height: video.videoHeight
            });
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            thumbnail.src = canvas.toDataURL("image/jpeg");

            nEvents++;
        });

        return thumbnail;
    }

    function generateSlide() {
        const {src, title} = media;

        const slide = Object.assign(document.createElement('li'), {
            className: "carousel__item",
            ariaHidden: true
        });
        if(media instanceof ImageMedia) {
            const sImg = Object.assign(document.createElement('img'), {
                src: src,
                alt: title
            });
            const sTitle = Object.assign(document.createElement('h3'), {
                textContent: title
            });
            slide.append(sImg, sTitle);
        } else if (media instanceof VideoMedia) {
            const sVideo = Object.assign(document.createElement('video'), {
                src: src,
                controls: true
            });
            const sTitle = Object.assign(document.createElement('h3'), {
                textContent: title
            });
            slide.append(sVideo, sTitle);
        }
        return slide;
    }

    return { id: media.id, getMediaCardDOM, generateSlide };
}