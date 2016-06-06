var app = {
    
    // initialize the app ondeviceready
    init: function() {
        this.history = [];          // SPA history stack
        this.title = $('title');    // reference to the title bar
        this.back = $('back');      // reference to the back button

        this.back.addEventListener('click', function(e) {
            this.goto('back', 'left');
        }.bind(this));

        this.goto('navigation.html');
    },
    
    // navigation router
    goto: function(url, direction) {
        
        // add this view to the history stack
        url = this.historify(url);
        
        // if the history stack is empty, hide the back button
        this.back.style.opacity = (this.history.length > 1)? 1 : 0;
        
        // load new views with an XHR request
        var xhr= new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange= function(e) {
            var response = e.currentTarget;
            if (response.readyState!==4) return;
            if (response.status!==200 && response.status !== 0) {
                console.error('error loading url: ', response.status, response.responseText);
            }
            
            // create a new view and populate it
            var el = document.createElement('div');
            el.className = 'app';
            el.innerHTML = response.responseText;

            this.hydrate(el);                   // create links and load scripts
            this.enter(el, direction);          // animate the new view in
            this.exit(this.page, direction);    // animate the old view out
            this.page = el;                     // create a reference to the active view

        }.bind(this);
        xhr.send();    
    },
    
    // animate a new view onto the screen
    enter: function (el, direction) {
        if (!el) return; // paranoia
        
        // load the new view off-screen
        var x = document.body.offsetWidth;
        if (direction == 'left') x = -x;
        el.style.transform = 'translateX(' + x + 'px)';
        document.body.appendChild(el);
        
        // after a short delay to allow DOM painting, animate the view onto the screen
        window.setTimeout( function() {
            el.style.transform = 'translateX(0)';
        }, 50);

    },
    
    // animate an outgoing view off of the screen
    exit: function (el, direction) {
        if (!el) return; // paranoia

        // find what constitutes "off screen"
        var x = -document.body.offsetWidth;
        if (direction == 'left') x = -x;

        // after a short delay to alow DOM painting, animate the old view off-screen
        window.setTimeout( function() {
            el.style.transform = 'translateX(' + x + 'px)';
        }, 50);

        // remove the element afer the transition is over
        window.setTimeout( function() {
            el.parentElement.removeChild(el);
        }, 1000);

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
            this.title.innerHTML = '';
            this.title.appendChild(title[0]);
        }
    },
    
    // manage the history stack
    historify: function(url) {
        if (url == 'back') {
            this.history.pop();
            url = this.history[this.history.length-1];
        } else {
            this.history.push(url);
        }
        return url;
    },
    
    // require scripts
    require: function(src) {
        var el = document.createElement('script');
        el.src = src;
        el.async = true;
        document.head.appendChild(el);   
    }
}

// convenience functions
function $(str) {
    return document.getElementById(str);
}

function $$(str) {
    return document.querySelectorAll(str);
}

// app lifecycle events
document.addEventListener( 'deviceready', function(e) { app.init(); }, false );
document.addEventListener( 'pause', function(e) { console.log('pause event'); }, false );
document.addEventListener( 'resume', function(e) { console.log('resume event'); }, false );
document.addEventListener( 'searchButton', function(e) { console.log('search event'); }, false );
document.addEventListener( 'backButton', function(e) { console.log('back event'); }, false );
