class GlobalizationPage  {
    options: {}
    init() {
        $('language').addEventListener('click', this.language.bind(this));
        $('locale').addEventListener('click', this.locale.bind(this));
        $('currency').addEventListener('click', this.currency.bind(this));
    }
    
    language() {
        navigator.globalization.getPreferredLanguage(this.success.bind(this), this.error.bind(this));
    }
    
    locale() {
        navigator.globalization.getLocaleName(this.success.bind(this), this.error.bind(this));
    }
    
    currency(currency) {
        navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {
                console.log(
                    'pattern: '  + pattern.pattern  + '\n' +
                    'code: '     + pattern.code     + '\n' +
                    'fraction: ' + pattern.fraction + '\n' +
                    'rounding: ' + pattern.rounding + '\n' +
                    'decimal: '  + pattern.decimal  + '\n' +
                    'grouping: ' + pattern.grouping
                );
            },
            function (error) { 
                console.error('Error getting pattern: ', error);
            }
        );
    }
    
    success(result) {
        alert(JSON.stringify(result));
        console.log('SUCCESS: ', result);
    }
    
    error(error) {
        console.error('ERROR: ', error);
    }
}

new GlobalizationPage().init();