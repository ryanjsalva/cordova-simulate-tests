app.dbmeter = {

    options: {
    },
    
    init: function () {
        this.listening = false;
        $('start').addEventListener('click', this.listen.bind(this));
    },
    
    listen: function() {
        var button = $('start');
        if (this.listening) {
            button.className = 'stop';
            button.innerText = 'Stop';
            DBMeter.stop(this.success.bind(this), this.error.bind(this));
        } else {
            button.className = '';
            button.innerText = 'Start';
            DBMeter.start(this.success.bind(this), this.error.bind(this));
        }
    },
    
    success: function(db) {
        console.log('DBMeter: ', db);
    },
    
    error: function(error) {
        console.error('ERROR: ', error);
    }
};

app.dbmeter.init();