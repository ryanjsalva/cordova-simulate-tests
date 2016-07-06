class DevicePage  {
    init(): void {
        $("cordova").innerText = device.cordova;
        $("model").innerText        = device.model;
        $("platform").innerText = device.platform;
        $("uuid").innerText = device.uuid;
        $("version").innerText = device.version;
        $("manufacturer").innerText = device.manufacturer;
        $("isVirtual").innerText = device.isVirtual.toString();
        $("serial").innerText = device.serial;
    }
};

new DevicePage().init();