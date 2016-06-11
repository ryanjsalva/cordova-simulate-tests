app.vibration = {
    options: {},
    init: function() {
        this.button = $('start');
        this.button.addEventListener('click', this.vibrate.bind(this));
    },
    
    vibrate: function() {
        navigator.vibrate([500,500,500,500,500]);
        this.button.className = 'shake';
        window.setTimeout(function(e){
            this.button.className = '';
        }.bind(this), 3000);
    }
};

app.vibration.init();