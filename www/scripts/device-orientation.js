app.deviceOrientation = {
    options: {
        frequency: 500
    },
    
    init: function() {
        this.ref = false;
        $('watch').addEventListener('click', this.watch.bind(this));
    },
    
    watch: function() {
        var button = $('watch');
        if (this.ref) {
            navigator.compass.clearWatch(this.ref);
            this.ref = false;
            button.innerText = 'Start';
            button.className = '';
        } else {
            this.ref = navigator.compass.watchHeading(this.success.bind(this), this.error.bind(this), this.options);
            button.innerText = 'Stop';
            button.className = 'stop';            
        }
    },
    
    success: function(heading) {
        $('heading').innerText = heading.magneticHeading;
        console.log(heading);
    },
    
    error: function(error) {
        console.error('ERROR :', error)
    }
}

app.deviceOrientation.init();