let meetingsRoom = [
    {
        name: "1",
        available: "yes",
        dateTaken: undefined,
    },

    {
        name: "2",
        available: "no",
        dateTaken: new Date("February 13, 2017 11:13:00"),
    },

    {
        name: "3",
        available: "yes",
        dateTaken: undefined,
    }
];


let gamesRoom = [
    {
        name: "1",
        available: "no",
        dateTaken: new Date("February 16, 2017 1:13:00"),
    },

    {
        name: "2",
        available: "no",
        dateTaken: new Date("February 12, 2017 4:13:00"),
    },

    {
        name: "3",
        available: "yes",
        dateTaken: undefined,
    },

    {
        name: "4",
        available: "yes",
        dateTaken: undefined
    },

    {
        name:  "5",
        available: "no",
        dateTaken: new Date("Februray 1, 2017 2:00:00");
    },

    {
        name: "6",
        available: "yes",
        dateTaken: undefined
    },

    {
        name: "7",
        available: "yes",
        dateTaken: undefined
    },

    {
        name: "8",
        available: "yes",
        dateTaken: undefined;
    }
]

let quietTimeRoom = [
    {
        name: "1",
        available: "no",
        dateTaken: new Date("February 16, 2017 1:13:00"),
    },

    {
        name: "2",
        available: "yes",
        dateTaken: undefined,
    },

    {
        name: "3",
        available: "yes",
        dateTaken: undefined,
    },

    {
        name: "4",
        available: "no",
        dateTaken: new Date("February 16, 2017 8:00:00")
    }
]

let learningRoom = [
    {
        name: "1",
        available: "no",
        dateTaken: new Date("February 5, 2017 4:00:00"),
    },

    {
        name: "2",
        available: "no",
        dateTaken: new Date("February 16, 2017 1:13:00"),
    },

    {
        name: "3",
        available: "no",
        dateTaken: new Date("February 2, 2017 3:00:00"),
    },

    {
        name: "4",
        available:"no",
        dateTaken: new Date("February 3, 2017 3:00:00")
    },
    
    {
        name: "5",
        available: "yes",
        dateTaken: undefined,
    },

    {
        name: "6",
        available: "yes",
        dateTaken: undefined,
    }

]

let workingRoom = [
    {
        name: "1",
        available: "no",
        dateTaken: new Date("February 6, 2017 3:00:00"),
    },

    {
        name: "2",
        available: "yes",
        dateTaken: undefined,
    },

    {
        name: "3",
        available: "yes",
        dateTaken: undefined
    },

    {
        name: "4",
        available: "no",
        dateTaken: new Date("February 6, 2017 2:00:00")
    },

    {
        name: "5",
        available: "yes",
        dateTaken: undefined
    },

    {
        name: "6",
        available: "yes",
        dateTaken: undefined
    },

    {
        name: "7",
        available: "no",
        dateTaken: undefined
    },

    {
        name: "8",
        available: "no",
        dateTaken: new Date("February 1, 2017 8:00:00");
    }

]




function Room() {
    let categories = document.getElementById("categories");
    let  result = document.getElementById("result");
    selectedIndex = categories.selectedIndex;
    switch (selectedIndex) {
        case 0:
            result.innerHtml = JSON.stringify(meetingsRoom);
            break;
        case 1:
            result.innerHtml = JSON.stringify(gamesRoom);
            break;
        case 2:
            result.innerHtml = JSON.stringify(quietTimeRoom);
            break;
        case 3:
            result.innerHtml = JSON.stringify(learningRoom);
            break;
        case 4:
            result.innerHtml = JSON.stringify(workingRoom);
            break;

        
    }

}