class DialogsPage  {
    private options: any = {}
    
    init() {
        $('confirm').addEventListener('click', this.confirm.bind(this));
        $('alert').addEventListener('click', this.alert.bind(this));
        $('prompt').addEventListener('click', this.prompt.bind(this));
        $('beep').addEventListener('click', this.beep.bind(this));
    }
    
    confirm() {
        navigator.notification.confirm(
            'You are the winner',   // message
            this.callBack,          // callback
            'Game Over',            // title
            ['OK', 'Cancel']        // buttons
        );
    }
    
    alert() {
        navigator.notification.alert(
            'You are the winner!',  // message
            this.callBack,          // callback
            'Game Over',            // title
            'Done'                  // buttons
        );
    }
    
    prompt() {
        navigator.notification.prompt(
            'You are the winner!',  // message
            this.callBack,          // callback
            'Game Over',            // title
            ['Done','Cancel'],      // buttons
            'default text'          // default text
        );
    }
    
    beep() {
        navigator.notification.beep(2);
    }
    
    callBack():void {
        console.log('Dialog Callback: ');
    }
    
}

new DialogsPage().init();