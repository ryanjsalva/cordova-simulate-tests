class DBMeterPage {
    listening: boolean;
    db: HTMLElement;
    init(): void {
        this.listening = false;
        this.db = $("db");
        $("start").addEventListener("click", this.listen.bind(this));
    }
    listen(): void {
        var button :HTMLElement= $("start");
        if (this.listening) {
            button.className = "";
            button.innerText = "Start";
            DBMeter.stop(this.success.bind(this), this.error.bind(this));
            this.listening = false;
        } else {
            button.className = "stop";
            button.innerText = "Stop";
            DBMeter.start(this.success.bind(this), this.error.bind(this));
            this.listening = true;
        }
    }
    success(db: number): void {
        var c :string;
        switch (true) {
            case (db > 70 && db < 90):
                c = "#f7941d";
                break;
            case (db >= 90):
                c = "cc0000";
                break;
            default:
                c = "#22c064";
                break;
        }

        this.db.style.width = db + "%";
        this.db.style.backgroundColor = c;

        console.log("DBMeter: ", db);
    }
    error(err: any): void {
        console.error("ERROR: ", err);
    }
}

new DBMeterPage().init();