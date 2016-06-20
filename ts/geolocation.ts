class GeolocationPage  {
   
    w: number
    // initialize the view
    init () {
        $('locate').addEventListener('click', this.locate.bind(this));
        $('watch').addEventListener('click', this.watch.bind(this));
        this.w = 0;
    }
    

    // locate()
    // This method returns the GPS coordinates exactly once
    locate() {
        navigator.geolocation.getCurrentPosition(this.success.bind(this), this.error.bind(this));
    }
    
    // watch()
    // This method polls the current position every 500ms
    // returns the GPS coordinates
    watch() {
        var button = $('watch');
        if (this.w!=0) {
            navigator.geolocation.clearWatch(this.w);
            button.innerText = 'Watch';
            button.className = '';
            this.w = 0;
        } else {
            this.w = navigator.geolocation.watchPosition(this.success.bind(this), this.error.bind(this), { timeout: 500 });
            button.innerText = 'Stop';
            button.className = 'stop';
        }
    }

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    success(position: Position) {
        console.log(
            'Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n' +
            'Altitude: '          + position.coords.altitude          + '\n' +
            'Accuracy: '          + position.coords.accuracy          + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '           + position.coords.heading           + '\n' +
            'Speed: '             + position.coords.speed             + '\n' +
            'Timestamp: '         + position.timestamp                + '\n'
        );
    }

    // onError Callback 
    // Receives a PositionError object
    error (error:PositionError) {
        console.error(
            'code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n'
        );
    }
};

new GeolocationPage().init();

