interface IListOfString {
    [name: string]: string;
}
class NetworkPage  {
    connection: HTMLElement;
    init(): void {
        console.log("init network");
        this.connection = $("connection-type");
        this.check();
        document.addEventListener("offline", this.offline.bind(this), false);
        document.addEventListener("online", this.online.bind(this), false);
    }
    check(): void {
        var s : string = navigator.connection.type;

        var states: IListOfString = {};
        states[Connection.UNKNOWN]  = "Unknown connection";
        states[Connection.ETHERNET] = "Ethernet connection";
        states[Connection.WIFI]     = "WiFi connection";
        states[Connection.CELL_2G]  = "Cell 2G connection";
        states[Connection.CELL_3G]  = "Cell 3G connection";
        states[Connection.CELL_4G]  = "Cell 4G connection";
        states[Connection.CELL]     = "Cell generic connection";
        states[Connection.NONE]     = "No network connection";

        this.connection.innerText = states[s];
    }
    online(): void {
        console.log("Coming online");
    }
    offline(): void {
        console.log("Going offline");
    }
}
new NetworkPage().init();