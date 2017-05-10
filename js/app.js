var cats = [
    {
        clickCount : 0,
        name : 'Tabby',
        imgSrc : 'static/cat_picture1.jpg',
        nicknames: ['Mr.T', 'Tinge', 'Shepherd']
    },
    {
        clickCount : 0,
        name : 'Tiger',
        imgSrc : 'static/cat_picture2.jpeg',
        nicknames: ['meow', 'Tabtab']
    },
    {
        clickCount : 0,
        name : 'Scaredy',
        imgSrc : 'static/cat_picture3.jpeg',
        nicknames: ['T-Bone', 'Pussy Cat']
    },
    {
        clickCount : 0,
        name : 'Shadow',
        imgSrc : 'static/cat_picture4.jpeg',
        nicknames: ['Sipper', 'Grover']
    },
    {
        clickCount : 0,
        name : 'Sleepy',
        imgSrc : 'static/cat_picture5.jpeg',
        nicknames: ['Catty Cat', 'Furry Cat']
    }
];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nicknames = ko.observable(data.nicknames);

    this.title = ko.computed(function() {
        var title;
        var clicks = this.clickCount();
        if (clicks < 10) {
            title = 'Newborn';
        } else if (clicks < 50) {
            title = 'Infant';
        } else if (clicks < 100) {
            title = 'Child';
        } else if (clicks < 200) {
            title = 'Teen';
        } else if (clicks < 500) {
            title = 'Adult';
        } else {
            title = 'Ninja'
        }
        return title;
    }, this);
};


var AppViewModel = function () {

    var self = this;

    this.catList = ko.observableArray([]);

    cats.forEach( function(catItem) {
        self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable( self.catList()[0] );

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCat = function(selectedCat) {
        self.currentCat(selectedCat);
    };
};

ko.applyBindings(new AppViewModel());