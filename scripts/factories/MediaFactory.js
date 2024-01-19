class MediaFactory {
    constructor(data) {
        if(data.image) {
            return new ImageMedia(data);
        } else if (data.video) {
            return new VideoMedia(data);
        } else {
            throw new Error("Unknown media type.");
        }
    }
}