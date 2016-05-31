app.accelerometer = {
    options: {},
    init: function() {
        this.x = $('x');
        this.y = $('y');
        this.z = $('z');
        this.t = $('t');
        this.w = false;
        this.button = $('watch');
        this.button.addEventListener('click', this.watch.bind(this));
    },
    
    watch: function() {
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
        this.x.innerText = a.x;
        this.y.innerText = a.y;
        this.z.innerText = a.z;
        this.t.innerText = this.formatTime(a.timestamp);
    },
    
    error: function () {
        console.error('error collection acceleration data');
    },
    
    formatTime: function(t) {
        t = new Date(t);
        var m = t.getMinutes();
        var s = t.getSeconds();
        var l = t.getMilliseconds();
        return m + ":" + s + ":" + l;
    }
};

app.accelerometer.init();
