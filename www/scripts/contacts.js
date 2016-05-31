app.contacts = {

    options: {
    },
    
    // initialize the view
    init: function () {
        console.log('init contacts');
        $('create-contact').addEventListener('click', this.create.bind(this));
        $('find-contact').addEventListener('click', this.find.bind(this));
        $('pick-contact').addEventListener('click', this.pick.bind(this));
    },
    
    create: function() {
        var c = navigator.contacts.create({"displayName": "Test User"});
        console.log('Create Contact: ', JSON.stringify(c));
    },
    
    find: function() {
        console.log('Find Contacts');
        var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
        navigator.contacts.find(fields, this.success.bind(this), this.error.bind(this), this.options);
    },
    
    pick: function() {
        console.log('Pick Contact');
        navigator.contacts.pickContact(this.success.bind(this), this.error.bind(this));
    },
    
    success: function(contact) {
        if (typeof(contact) == 'array') {
            console.log('SUCCESS: ', contacts.length, ' contacts found');
        } else {
            console.log('SUCCESS: ', JSON.stringify(contact));
        }
    },
    
    error: function(error) {
        console.error(error);
    },
};

app.contacts.init();