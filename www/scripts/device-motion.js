app.accelerometer = {
    options: {},
    init: function() {
        console.log('Initialize accelerometer');
        this.x = $('x');
        this.y = $('y');
        this.z = $('z');
        this.m = $('m');
        this.s = $('s');
        this.ms = $('ms');
        this.w = false;
        this.button = $('watch');
        this.button.addEventListener('click', this.watch.bind(this));
    },
    
    watch: function() {
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
    },
    
    success: function(a) {
        var t = new Date(a.timestamp);
        this.x.innerText = a.x;
        this.y.innerText = a.y;
        this.z.innerText = a.z;
        this.m.innerText = t.getMinutes();
        this.s.innerText = t.getSeconds();
        this.ms.innerText = t.getMilliseconds();
    },
    
    error: function (error) {
        console.error('ERROR Accelerometer: ', error);
    }
};

app.accelerometer.init();
