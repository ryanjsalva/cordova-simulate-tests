class BrowserView  {
    ref: InAppBrowser;
    options: any = {
        location: "yes",
        hidden: "no",
        clearcache: "yes",
        clearsessioncache: "yes",
        zoom: "no",
        hardwareback: "no",
        mediaPlaybackRequiresUserAction: "yes",
        closebuttoncaption: "close",
        disallowoverscroll: "yes",
        enableViewportScale: "yes",
        allowInlineMediaPlayback: "yes",
        keyboardDisplayRequiresUserInteraction: "no",
        suppressIncrementalRendering: "yes",
        presentationstyle: "fullscreen",
        transitionstyle: "coververtical",
        toolbarposition: "bottom",
        fullscreen: "yes"
    };
    // initialize the view
    init (): void {
        $("open").addEventListener("click", this.open);
    }
    open(): void {
        this.ref = window.open("http://cordova.apache.org", "_blank", this.options);
        this.ref.addEventListener("loadstart", (be: InAppBrowserEvent) => { console.log(be); });
        this.ref.removeEventListener("loadstart", (be: InAppBrowserEvent) => { console.log(be); });
    }
}

new BrowserView().init();

