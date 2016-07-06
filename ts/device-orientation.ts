class DeviceOrientationPage  {
    options: CompassOptions = {
        frequency: 1
    };
    ref: number;
    init(): void {
        this.ref = 0;
        $("watch").addEventListener("click", this.watch.bind(this));
    }
    watch(): void {
        var button : HTMLElement = $("watch");
        if (this.ref!==0) {
            navigator.compass.clearWatch(this.ref);
            this.ref = 0;
            button.innerText = "Start";
            button.className = "";
        } else {
            this.ref = navigator.compass.watchHeading(
                this.success.bind(this), this.error.bind(this),
                this.options);
            button.innerText = "Stop";
            button.className = "stop";
        }
    }
    success(heading: CompassHeading): void {
        $("heading").innerText = heading.magneticHeading.toString();
        console.log(heading);
    }
    error(error: CompassError): void {
        // error codes per source code, https://github.com/apache/cordova-plugin-device-orientation/blob/master/www/CompassError.js#L31
        var msg : string;
        switch (error.code) {
            case CompassError.COMPASS_INTERNAL_ERR:
                msg = "Compass: internal error";
            case CompassError.COMPASS_NOT_SUPPORTED:
                msg = "Compass: not supported";
            default:
                msg = "Compass: unknown error";
        }
        console.error("ERROR :", msg);
    }
}

new DeviceOrientationPage().init();