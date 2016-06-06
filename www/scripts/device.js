app.device = {

    options: {
    },
    
    init: function () {
        
        $('cordova').innerText      = device.cordova;
        $('model').innerText        = device.model;
        $('platform').innerText     = device.platform
        $('uuid').innerText         = device.uuid
        $('version').innerText      = device.version
        $('manufacturer').innerText = device.manufacturer
        $('isVirtual').innerText    = device.isVirtual
        $('serial').innerText       = device.serial
    }
};

app.device.init();