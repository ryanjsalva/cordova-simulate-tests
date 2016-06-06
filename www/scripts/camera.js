app.camera = {

    options: {
        quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.CAMERA,
        encodingType: navigator.camera.EncodingType.JPEG,
        mediaType: navigator.camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
    },
    
    // initialize the view
    init: function () {
        $('file-picker').addEventListener('click', this.filePicker.bind(this));
        $('get-picture').addEventListener('click', this.getPicture.bind(this));
        $('get-picture-thumbnail').addEventListener('click', this.thumbnails.bind(this));
    },
    
    // camera returned a photo
    success: function(img) {
        console.log('success: ', img);
        $('photo').style.backgroundImage = 'url('+ img + ')';
    },

    // camera returned an error
    error: function(msg) {
        alert(msg);
        console.error('error: ', msg);
    },
    
    // getPicture
    getPicture: function() {
        console.log('getPicture()');
        navigator.camera.getPicture(this.success, this.error, this.options);
    },
    
    // get file URI
    filePicker: function() {
        console.log('filePicker()');
        var o = this.options;
        o.sourceType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
        navigator.camera.getPicture(this.success, this.error, o);
    },
    
    // resize pictures as thumbnails
    thumbnails: function() {
        console.log('thumbnails()');
        var o = this.options;
        o.targetHeight = 100;
        o.targetWidth = 100;
        navigator.camera.getPicture(this.success, this.error, o);        
    }    
}
app.camera.init();