app.media = {
    options: {},
    init: function() {
        $('image').addEventListener('click', this.image.bind(this));
        $('audio').addEventListener('click', this.audio.bind(this));
        $('video').addEventListener('click', this.video.bind(this));
    },
    
    image: function() {
        navigator.device.capture.captureImage(this.success.bind(this), this.error.bind(this), {limit:2});
    },
    
    audio: function() {
        navigator.device.capture.captureAudio(this.success.bind(this), this.error.bind(this), {limit:2});
    },
    
    video: function() {
        navigator.device.capture.captureVideo(this.success.bind(this), this.error.bind(this), {limit:2});
    },
    
    success: function(media) {
        var i, path, len;
        for (i = 0; i < media.length; i++) {
            console.log(media[i].fullPath);
        }
    },
    
    error: function(error) {
        console.error(error.code);
    }
}

app.media.init();