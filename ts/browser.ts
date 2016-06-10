class BrowserView  {
     ref: InAppBrowser
    
     options: any = {
        location: 'yes',
        hidden: 'no',
        clearcache: 'yes',
        clearsessioncache: 'yes',
        zoom: 'no',
        hardwareback: 'no',
        mediaPlaybackRequiresUserAction: 'yes',
        closebuttoncaption: 'close',
        disallowoverscroll: 'yes',
        enableViewportScale: 'yes',
        allowInlineMediaPlayback: 'yes',
        keyboardDisplayRequiresUserInteraction: 'no',
        suppressIncrementalRendering: 'yes',
        presentationstyle: 'fullscreen',
        transitionstyle: 'coververtical',
        toolbarposition: 'bottom',
        fullscreen: 'yes'
    }
    
    // initialize the view
    init () {
        $('open').addEventListener('click', this.open)
    }
    
    open() {
        this.ref = window.open('http://cordova.apache.org', '_blank', this.options)
        this.ref.addEventListener('loadstart', (be) => {console.log(be)} )
        this.ref.removeEventListener('loadstart', (be) => {console.log(be)})
    }
    
};

new BrowserView().init()

