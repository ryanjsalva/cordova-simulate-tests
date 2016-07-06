class AccelerometerView  {
    x: HTMLElement;
    y: HTMLElement;
    z: HTMLElement;
    m: HTMLElement;
    s: HTMLElement;
    ms: HTMLElement;
    w: WatchHandle;
    button: HTMLElement;
    init():void {
        console.log("Initialize accelerometer");
        this.x = $("x");
        this.y = $("y");
        this.z = $("z");
        this.m = $("m");
        this.s = $("s");
        this.ms = $("ms");
        this.w = null;
        this.button = $("watch");
        this.button.addEventListener("click", this.watch.bind(this));
    }
    watch(): void {
        console.log("Start watching accelerometer", this.w);
        if (this.w) {
            navigator.accelerometer.clearWatch(this.w);
            this.w = false;
            this.button.className = "";
            this.button.innerText = "Start";
        } else {
            this.w = navigator.accelerometer.watchAcceleration(
                this.success.bind(this),
                this.error.bind(this),
                { frequency: 200 });
            this.button.className = "stop";
            this.button.innerText = "Stop";
        }
    }

    success(a: Acceleration): void {
        var t : Date= new Date(a.timestamp);
        this.x.innerText = a.x.toString();
        this.y.innerText = a.y.toString();
        this.z.innerText = a.z.toString();
        this.m.innerText = t.getMinutes().toString();
        this.s.innerText = t.getSeconds().toString();
        this.ms.innerText = t.getMilliseconds().toString();
    }
    error(): void {
        console.error("ERROR Accelerometer: ");
    }
};

new AccelerometerView().init();
