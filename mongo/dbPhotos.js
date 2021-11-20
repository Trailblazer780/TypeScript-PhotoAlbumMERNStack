// drop collection if already exists
db.photos.drop();
// insert new documents into collection
db.photos.insert([
    {
        "title": "On the Beach",
        "caption": "On the beach on the labour day weekend.  September 2005",
        "source": "100_1245.jpg",
        "comments": [
            {
                "comment": "12",
                "author": "12"
            },
            {
                "comment": "new comment",
                "author": "new comment guy"
            },
            {
                "comment": "testing 123",
                "author": "Test"
            },
        ]
    },
    {
        "title": "My Little nephew",
        "caption": "Clowning around at my cousin's wedding reception",
        "source": "IMG_0258.jpg",
        "comments": [
            {
                "comment": "meow",
                "author": "kitty"
            },
            {
                "comment": "Will this work?",
                "author": "Computer wiz"
            },
        ]
    },
    {
        "title": "Bugs bugs bugs",
        "caption": "Befriending bugs",
        "source": "IMG_6085.jpg",
        "comments": [
            {
                "comment": "",
                "author": ""
            },
            {
                "comment": "123124124wqweqwasf",
                "author": "test"
            },
        ]
    },
    {
        "title": "Portage it!",
        "caption": "Portaging in algonquin park, Ontario, July 2004",
        "source": "IMG_6087.jpg",
        "comments": [
            {
                "comment": "bjhgvjhv",
                "author": "test"
            },
            {
                "comment": "portage special",
                "author": "Douche Canoe"
            }
        ]
    },
    {
        "title": "Dance Moves",
        "caption": "Showing off the skills from the latest hip hop dance lesson",
        "source": "HPIM0259.jpg",
        "comments": [
            {
                "comment": "wat",
                "author": "ahhhhh"
            },
            {
                "comment": "What is fun?",
                "author": "Fun times"
            }
        ]
    },
    {
        "title": "The Cat",
        "caption": "Get off my damn chair!",
        "source": "cat.jpg",
        "comments": [
            {
                "comment": "cats suck dogs rule",
                "author": "test"
            }
        ]
    },
    {
        "title": "De-weeding the barn",
        "caption": "Removing the decorative ivy from our newly purchased barn.",
        "source": "image6.jpg",
        "comments": [
            {
                "comment": "image 7?",
                "author": "testing"
            }
        ]
    },
    {
        "title": "Darcy in the weeds",
        "caption": "Darcy at age 2",
        "source": "image7.jpg",
        "comments": [
            {
                "comment": "I'm on a boat",
                "author": "Douche Canoue"
            }
        ]
    },
    {
        "title": "Lego Star Destroyer",
        "caption": "Best. Gift. Ever.",
        "source": "starDestroyer.jpg",
        "comments": [
            {
                "comment": "TEST",
                "author": "new"
            },
            {
                "comment": "TEST",
                "author": "new"
            },
        ]
    },
    {
        "title": "Darcy at the beach",
        "caption": "Darcy at the beach",
        "source": "image8.jpg",
        "comments": []
    },
    {
        "title": "Web Student Wellness!",
        "caption": "Web student wellness in 2009",
        "source": "wellness01.jpg",
        "comments": [
            {
                "comment": "bjhgvjhv",
                "author": "test"
            }
        ]
    }
]);