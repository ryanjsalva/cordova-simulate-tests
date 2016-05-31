var app = {
    
    // initialize the app
    init: function() {
        console.log('device ready, init');
        this.page = $('app');
        this.titlebar = $('titlebar');
        this.goto('navigation.html');
    },
    
    // navigation router
    goto: function(url) {
        var xhr= new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange= function(e) {
            var response = e.currentTarget;
            if (response.readyState!==4) return;
            if (response.status!==200) {
                console.error('error loading url: ', response.responseText);
                return;
            }
            this.page.innerHTML = response.responseText;
            this.hydrate(this.page);
        }.bind(this);
        xhr.send();    
    },
    
    // create router links and load scripts
    hydrate: function(el) {
        var hrefs = el.querySelectorAll('*[data-href]');
        for ( var i=0; i<hrefs.length; i++ ) {
            hrefs[i].addEventListener('click', this.goto.bind(this, hrefs[i].getAttribute('data-href')), false);
        }
        
        var scripts = el.querySelectorAll('*[data-script]');
        for ( var i=0; i<scripts.length; i++ ) {
            this.require(scripts[i].getAttribute('data-script'));
        }
        
        var title = el.querySelectorAll('.title');
        if (title.length > 0) {
            this.titlebar.innerHTML = '';
            this.titlebar.appendChild(title[0]);
        }
    },
    
    // require scripts
    require: function(src) {
        var el = document.createElement('script');
        el.src = src;
        el.async = true;
        document.head.appendChild(el);   
    }    
}

document.addEventListener( 'deviceready', function(e) { app.init(); }, false );
document.addEventListener( 'pause', function(e) { console.log('pause event'); }, false );
document.addEventListener( 'resume', function(e) { console.log('resume event'); }, false );
document.addEventListener( 'searchButton', function(e) { console.log('search event'); }, false );
document.addEventListener( 'backButton', function(e) { console.log('back event'); }, false );

// convenience function
function $(str) {
    return document.getElementById(str);
}

