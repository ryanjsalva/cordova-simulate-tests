app.geolocation = {
    options: { },
    
    // initialize the view
    init: function () {
        $('locate').addEventListener('click', this.locate.bind(this));
        $('watch').addEventListener('click', this.watch.bind(this));
        this.w = false;
    },
    

    // locate()
    // This method returns the GPS coordinates exactly once
    locate: function() {
        navigator.geolocation.getCurrentPosition(this.success.bind(this), this.error.bind(this));
    },
    
    // watch()
    // This method polls the current position every 500ms
    // returns the GPS coordinates
    watch: function() {
        var button = $('watch');
        if (this.w) {
            navigator.geolocation.clearWatch(this.w);
            button.innerText = 'Watch';
            button.className = '';
            this.w = false;
        } else {
            this.w = navigator.geolocation.watchPosition(this.success.bind(this), this.error.bind(this), { timeout: 500 });
            button.innerText = 'Stop';
            button.className = 'stop';
        }
    },

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    success: function(position) {
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
    },

    // onError Callback 
    // Receives a PositionError object
    error: function (error) {
        console.error(
            'code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n'
        );
    }
};

app.geolocation.init();

