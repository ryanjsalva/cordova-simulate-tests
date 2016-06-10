class MediaCapture  {
    options:any = {}
    init() {
        $('image').addEventListener('click', this.image.bind(this));
        $('audio').addEventListener('click', this.audio.bind(this));
        $('video').addEventListener('click', this.video.bind(this));
    }
    
    image() {
        navigator.device.capture.captureImage(this.success.bind(this), this.error.bind(this), {limit:2});
    }
    
    audio() {
        navigator.device.capture.captureAudio(this.success.bind(this), this.error.bind(this), {limit:2});
    }
    
    video() {
        navigator.device.capture.captureVideo(this.success.bind(this), this.error.bind(this), {limit:2});
    }
    
    success(media) {
        var i, path, len;
        for (i = 0; i < media.length; i++) {
            console.log(media[i].fullPath);
        }
    }
    
    error(error) {
        console.error(error.code);
    }
}

new MediaCapture().init();