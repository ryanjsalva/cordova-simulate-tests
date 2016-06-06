app.dbmeter = {

    options: {
    },
    
    init: function () {
        this.listening = false;
        this.db = $('db');
        $('start').addEventListener('click', this.listen.bind(this));
    },
    
    listen: function() {
        var button = $('start');
        if (this.listening) {
            button.className = '';
            button.innerText = 'Start';
            DBMeter.stop(this.success.bind(this), this.error.bind(this));
            this.listening = false;
        } else {
            button.className = 'stop';
            button.innerText = 'Stop';
            DBMeter.start(this.success.bind(this), this.error.bind(this));
            this.listening = true;
        }
    },
    
    success: function(db) {
        this.db.style.width = db + '%';
        console.log('DBMeter: ', db);
    },
    
    error: function(error) {
        console.error('ERROR: ', error);
    }
};

app.dbmeter.init();