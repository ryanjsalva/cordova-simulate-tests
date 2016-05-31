app.vibration = {
    options: {},
    init: function() {
        $('start').addEventListener('click', this.vibrate.bind(this));
    },
    
    vibrate: function() {
        navigator.vibrate([1000,500,1000,500,1000]);
        var el = $('start');
    }
};

app.vibration.init();