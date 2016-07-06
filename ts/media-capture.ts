class MediaCapture  {

    init(): void {
        $("image").addEventListener("click", this.image.bind(this));
        $("audio").addEventListener("click", this.audio.bind(this));
        $("video").addEventListener("click", this.video.bind(this));
    }
    image(): void {
        navigator.device.capture.captureImage(
            this.success.bind(this),
            this.error.bind(this),
            {limit:2});
    }
    audio(): void {
        navigator.device.capture.captureAudio(
            this.success.bind(this),
            this.error.bind(this),
            { limit: 2 });
    }
    video(): void {
        navigator.device.capture.captureVideo(this.success.bind(this), this.error.bind(this), { limit: 2 });
    }
    success(media: MediaFile[]): void {
        let i:number;
        for (i = 0; i < media.length; i++) {
            console.log(media[i].fullPath);
        }
    }
    error(error: CaptureError): void {
        console.error(error.code);
    }
}

new MediaCapture().init();