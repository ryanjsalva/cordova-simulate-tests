class camera  {

    private options: CameraOptions =  {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    
    // initialize the view
    init() {
        $('file-picker').addEventListener('click', this.filePicker.bind(this));
        $('get-picture').addEventListener('click', this.getPicture.bind(this));
        $('get-picture-thumbnail').addEventListener('click', this.thumbnails.bind(this));
    }
    
    // camera returned a photo
    success(img) {
        console.log('success: ', img);
        $('photo').style.backgroundImage = 'url('+ img + ')';
    }

    // camera returned an error
    error(msg) {
        alert(msg);
        console.error('error: ', msg);
    }
    
    // getPicture
    getPicture() {
        console.log('getPicture()');
        navigator.camera.getPicture(this.success, this.error, this.options);
    }
    
    // get file URI
    filePicker() {
        console.log('filePicker()');
        var o = this.options;
        o.sourceType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
        navigator.camera.getPicture(this.success, this.error, o);
    }
    
    // resize pictures as thumbnails
    thumbnails(){
        console.log('thumbnails()');
        var o = this.options;
        o.targetHeight = 100;
        o.targetWidth = 100;
        navigator.camera.getPicture(this.success, this.error, o);        
    }    
}
new camera().init();