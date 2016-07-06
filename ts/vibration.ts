class VibrationPage {
    button: HTMLElement;
    init(): void {
        this.button = $("start");
        this.button.addEventListener("click", this.vibrate.bind(this));
    }
    vibrate(): void {
        navigator.vibrate([500, 500, 500, 500, 500]);
        this.button.className = "shake";
        window.setTimeout(() => {
            this.button.className = "";
        }, 3000);
    }
};

new VibrationPage().init();