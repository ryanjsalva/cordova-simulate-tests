app.batteryStatus = {
    options: {
    },
    
    // initialize the view
    init: function () {
        window.addEventListener("batterystatus", this.onStatusChange.bind(this), false);
        window.addEventListener("batterylow", this.onStatusChange.bind(this), false);
        window.addEventListener("batterycritical", this.onStatusChange.bind(this), false);
        this.status = $('status');  
    },

    onStatusChange: function (status) {
        var s = status.level;
        var c;
        switch (true) {
            case (s <= 10):
                c = '#cc0000';
                break;
            case (s > 10 && s <= 20):
                c = '#f7941d';
                break;
            default:
                c = '#22c064';
                break;
        }

        this.status.style.width = s + '%';
        this.status.style.backgroundColor = c;
        this.status.innerText = s;

        console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    },
};

app.batteryStatus.init();

