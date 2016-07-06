class BatteryStatusView {
    status: HTMLElement;
    // initialize the view
    init ():void {
        window.addEventListener("batterystatus", this.onStatusChange.bind(this), false);
        window.addEventListener("batterylow", this.onStatusChange.bind(this), false);
        window.addEventListener("batterycritical",  this.onStatusChange.bind(this), false);
        this.status = $("status");
    }

    onStatusChange(batStat:BatteryStatusEvent):void {
        var s: number = batStat.level;
        var c:string;
        switch (true) {
            case (s <= 10):
                c = "#cc0000";
                break;
            case (s > 10 && s <= 20):
                c = "#f7941d";
                break;
            default:
                c = "#22c064";
                break;
        }

        this.status.style.width = s + "%";
        this.status.style.backgroundColor = c;
        this.status.innerText = s.toString();

        console.log("Level: " + batStat.level + " isPlugged: " + batStat.isPlugged);
    }
}

new BatteryStatusView().init();

