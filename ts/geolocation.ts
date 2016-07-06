class GeolocationPage  {
    w: number;
    // initialize the view
    init(): void {
        $("locate").addEventListener("click", this.locate.bind(this));
        $("watch").addEventListener("click", this.watch.bind(this));
        this.w = 0;
    }
    // locate()
    // this method returns the GPS coordinates exactly once
    locate(): void {
        navigator.geolocation.getCurrentPosition(this.success.bind(this), this.error.bind(this));
    }
    // watch()
    // this method polls the current position every 500ms
    // returns the GPS coordinates
    watch(): void {
        var button:HTMLElement = $("watch");
        if (this.w!==0) {
            navigator.geolocation.clearWatch(this.w);
            button.innerText = "Watch";
            button.className = "";
            this.w = 0;
        } else {
            this.w = navigator.geolocation.watchPosition(this.success.bind(this), this.error.bind(this), { timeout: 500 });
            button.innerText = "Stop";
            button.className = "stop";
        }
    }

    // onSuccess Callback
    // this method accepts a Position object, which contains the
    // current GPS coordinates
    success(position: Position): void {
        console.log(
            "Latitude: "          + position.coords.latitude          + "\n" +
            "Longitude: "         + position.coords.longitude         + "\n" +
            "Altitude: "          + position.coords.altitude          + "\n" +
            "Accuracy: "          + position.coords.accuracy          + "\n" +
            "Altitude Accuracy: " + position.coords.altitudeAccuracy  + "\n" +
            "Heading: "           + position.coords.heading           + "\n" +
            "Speed: "             + position.coords.speed             + "\n" +
            "Timestamp: "         + position.timestamp                + "\n"
        );
    }

    // onError Callback 
    // receives a PositionError object
    error(error: PositionError): void {
        console.error(
            "code: "    + error.code    + "\n" +
            "message: " + error.message + "\n"
        );
    }
};

new GeolocationPage().init();

