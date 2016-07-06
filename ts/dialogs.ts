class DialogsPage  {
    init(): void {
        $("confirm").addEventListener("click", this.confirm.bind(this));
        $("alert").addEventListener("click", this.alert.bind(this));
        $("prompt").addEventListener("click", this.prompt.bind(this));
        $("beep").addEventListener("click", this.beep.bind(this));
    }
    confirm(): void {
        navigator.notification.confirm(
            "You are the winner",   // message
            this.callBack,          // callback
            "Game Over",            // title
            ["OK", "Cancel"]        // buttons
        );
    }
    alert():void {
        navigator.notification.alert(
            "You are the winner!",  // message
            this.callBack,          // callback
            "Game Over",            // title
            "Done"                  // buttons
        );
    }
    prompt(): void {
        navigator.notification.prompt(
            "You are the winner!",  // message
            this.callBack,          // callback
            "Game Over",            // title
            ["Done","Cancel"],      // buttons
            "default text"          // default text
        );
    }
    beep(): void {
        navigator.notification.beep(2);
    }
    callBack(): void {
        console.log("Dialog Callback: ");
    }
}

new DialogsPage().init();