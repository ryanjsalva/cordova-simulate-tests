class AccelerometerPage  {
    private options: any = {}
    private x : HTMLElement
    private y : HTMLElement
    private z : HTMLElement
    private m : HTMLElement
    private s : HTMLElement
    private ms : HTMLElement
    private w : WatchHandle
    private button : HTMLElement

    init() {
        console.log('Initialize accelerometer');
        this.x = $('x');
        this.y = $('y');
        this.z = $('z');
        this.m = $('m');
        this.s = $('s');
        this.ms = $('ms');
        this.w = null;
        this.button = $('watch');
        this.button.addEventListener('click', this.watch.bind(this));
    }
    
    watch() {
        console.log('Start watching accelerometer', this.w);
        if (this.w) {
            navigator.accelerometer.clearWatch(this.w);
            this.w = false;
            this.button.className = '';
            this.button.innerText = 'Start';
        } else {
            this.w = navigator.accelerometer.watchAcceleration(this.success.bind(this), this.error.bind(this), { frequency: 200 });
            this.button.className = 'stop';
            this.button.innerText = 'Stop';
        }
    }
    
    success(a) {
        var t = new Date(a.timestamp);
        this.x.innerText = a.x;
        this.y.innerText = a.y;
        this.z.innerText = a.z;
        this.m.innerText = t.getMinutes().toString();
        this.s.innerText = t.getSeconds().toString();
        this.ms.innerText = t.getMilliseconds().toString();
    }
    
    error (error) {
        console.error('ERROR Accelerometer: ', error);
    }
};

new AccelerometerPage().init();
