app.dialogs = {
    options: {},
    init: function() {
        $('confirm').addEventListener('click', this.confirm.bind(this));
        $('alert').addEventListener('click', this.alert.bind(this));
        $('prompt').addEventListener('click', this.prompt.bind(this));
        $('beep').addEventListener('click', this.beep.bind(this));
    },
    
    confirm: function() {
        navigator.notification.confirm(
            'You are the winner',   // message
            this.callBack,          // callback
            'Game Over',            // title
            ['OK', 'Cancel']        // buttons
        );
    },
    
    alert: function() {
        navigator.notification.alert(
            'You are the winner!',  // message
            this.callBack,          // callback
            'Game Over',            // title
            'Done'                  // buttons
        );
    },
    
    prompt: function() {
        navigator.notification.prompt(
            'You are the winner!',  // message
            this.callBack,          // callback
            'Game Over',            // title
            ['Done','Cancel'],      // buttons
            'default text'          // default text
        );
    },
    
    beep: function() {
        navigator.notification.beep(2);
    },
    
    callBack: function(i) {
        console.log('Dialog Callback: ', i);
    }
    
}

app.dialogs.init();