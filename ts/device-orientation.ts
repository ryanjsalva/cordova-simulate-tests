class DeviceOrientationPage  {
    options: any
    ref: number
    init() {
        this.ref = 0
        $('watch').addEventListener('click', this.watch.bind(this));
    }
    
    watch() {
        var button = $('watch');
        if (this.ref!=0) {
            navigator.compass.clearWatch(this.ref);
            this.ref = 0;
            button.innerText = 'Start';
            button.className = '';
        } else {
            this.ref = navigator.compass.watchHeading(this.success.bind(this), this.error.bind(this), this.options);
            button.innerText = 'Stop';
            button.className = 'stop';            
        }
    }
    
    success(heading: CompassHeading) {
        $('heading').innerText = heading.magneticHeading.toString();
        console.log(heading);
    }
    
    error(error:any) {
        // error codes per source code, https://github.com/apache/cordova-plugin-device-orientation/blob/master/www/CompassError.js#L31
        var msg : string;
        switch (error.code) {
            case 0:
                msg = 'Compass: internal error';
            case 20:
                msg = 'Compass: not supported';
            default:
                msg = 'Compass: unknown error';
        }
        
        console.error('ERROR :', msg);
    }
}

new DeviceOrientationPage().init();