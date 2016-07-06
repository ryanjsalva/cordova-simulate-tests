class GlobalizationPage  {
    init():void {
        $("language").addEventListener("click", this.language.bind(this));
        $("locale").addEventListener("click", this.locale.bind(this));
        $("currency").addEventListener("click", this.currency.bind(this));
    }
    language(): void {
        navigator.globalization.getPreferredLanguage(
            this.success.bind(this), this.error.bind(this));
    }
    locale(): void {
        navigator.globalization.getLocaleName(
            this.success.bind(this),
            this.error.bind(this));
    }
    currency(): void {
        navigator.globalization.getCurrencyPattern(
            "USD",
             (pattern: GlobalizationCurrencyPattern) => {
                console.log(
                    "pattern: "  + pattern.pattern  + "\n" +
                    "code: "     + pattern.code     + "\n" +
                    "fraction: " + pattern.fraction + "\n" +
                    "rounding: " + pattern.rounding + "\n" +
                    "decimal: "  + pattern.decimal  + "\n" +
                    "grouping: " + pattern.grouping
                );
            },
             (error: GlobalizationError) => {
                 console.error("Error getting pattern: ", error);
            }
        );
    }
    success(result: string): void {
        alert(JSON.stringify(result));
        console.log("SUCCESS: ", result);
    }
    error(error: GlobalizationError): void {
        console.error("ERROR: ", error);
    }
}

new GlobalizationPage().init();