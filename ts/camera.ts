class CameraView  {
    options: CameraOptions =  {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    
    // initialize the view
    init():void {
        $('file-picker').addEventListener('click', this.filePicker.bind(this))
        $('get-picture').addEventListener('click', this.getPicture.bind(this))
        $('get-picture-thumbnail').addEventListener('click', this.thumbnails.bind(this))
    }
    
    // camera returned a photo
    success(img:string):void {
        console.log('success: ', img)
        $('photo').style.backgroundImage = 'url('+ img + ')'
    }

    // camera returned an error
    error(msg:string):void {
        alert(msg)
        console.error('error: ', msg)
    }
    
    // getPicture
    getPicture():void {
        console.log('getPicture()')
        navigator.camera.getPicture(this.success, this.error, this.options)
    }
    
    // get file URI
    filePicker():void {
        console.log('filePicker()')
        this.options.sourceType = Camera.PictureSourceType.SAVEDPHOTOALBUM
        navigator.camera.getPicture(this.success, this.error, this.options)
    }
    
    // resize pictures as thumbnails
    thumbnails(){
        console.log('thumbnails()')
        this.options.targetHeight = 100
        this.options.targetWidth = 100
        navigator.camera.getPicture(this.success, this.error, this.options)       
    }    
}
new CameraView().init()