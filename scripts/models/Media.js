class Media {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._src = ""; // todo ask daouda about it
        this._title = data.title;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
    }

    get id() {
        return this._id;
    }

    get photographerId() {
        return this._photographerId;
    }

    get title() {
        return this._title;
    }

    get likes() {
        return this._likes;
    }

    get date() {
        return this._date;
    }

    get price() {
        return this._price;
    }
}

class ImageMedia extends Media {
    constructor(data) {
        super(data);
        this._src = data.image;
    }

    get src() {
        return `assets/photographers/${this._photographerId}/${this._src}`;
    }
}

class VideoMedia extends Media {
    constructor(data) {
        super(data);
        this._src = data.video;
    }

    get src() {
        return `assets/photographers/${this._photographerId}/${this._src}`;
    }
}