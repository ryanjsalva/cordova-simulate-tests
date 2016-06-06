app.contacts = {

    options: { },
    
    // initialize the view
    init: function () {
        console.log('init contacts');
        $('create-contact').addEventListener('click', this.create.bind(this));
        $('find-contact').addEventListener('click', this.find.bind(this));
        $('pick-contact').addEventListener('click', this.pick.bind(this));
    },
    
    create: function() {
        var c = navigator.contacts.create(this.sampleContact);
        c.save(this.success, this.error);
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
    
    sampleContact: {
        displayName: 'Ryan J. Salva',
        name: {
            familyName: 'Salva',
            givenName: 'Ryan',
            middleName: 'J.',
            honorificSuffix: 'Lord'
        },
        nickname: "RJS",
        phoneNumbers: [
            new ContactField('work', '555-555-5555', false),
            new ContactField('home', '666-666-6666', false),
            new ContactField('mobile', '777-777-7777', true) // preferred phone number
        ],
        emails: [
            new ContactField('work', 'rsalva@microsoft.com', false),
            new ContactField('home', 'ryanjsalva@gmail.com', true)
        ],
        addresses: [
            new ContactAddress({
                type: 'work',
                streetAddress: 'One Microsoft Way',
                locality: 'Redmond',
                region: 'WA',
                postalCode: '99999',
                country: 'USA'
            }),
            new ContactAddress({
                type: 'home',
                streetAddress: '1111 Space Cat Drive',
                locality: 'Seattle',
                region: 'WA',
                postalCode: '88888',
                country: 'USA'
            })
        ],
        ims: [
            new ContactField('work', 'xxx@gmail.com', false),
            new ContactField('home', 'yyy@yahoo.com', false),
            new ContactField('mobile', 'zzz@facebook.com', true) // preferred IM
        ],
        birthday: new Date('7/16/1977'),
        note: 'Powered by fear. Swayed by desire.',
        photos: [
            new ContactField('base64', 'data:image/jpeg;base64,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')
        ],
        urls: [
            new ContactField('work', 'http://www.visualstudio.com', false),
            new ContactField('home', 'http://www.ryanjsalva.com', true)
        ]
    }
};

app.contacts.init();