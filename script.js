// sets date at top of page and grabs time for use later
var dateGrab = new Date().toString();
var dateArray = dateGrab.split(" ")
var time = dateArray[4]
console.log(time)


$("#currentDay").text(dateArray[0] + ", " + dateArray[1] + " " + dateArray[2])


// render events to page or create storage for events if no event array exists
function renderEvents(){
    var events = JSON.parse(localStorage.getItem("events"))

    if( events === null){
        events = [{
            // 1
            event: ""
        },
        {
            // 2
            event: ""
        },
        {
            // 3
            event: ""
        },
        {
            // 4
            event: ""
        },
        {
            // 5
            event: ""
        },
        {
            // 6
            event: ""
        },
        {
            // 7
            event: ""
        },
        {
            // 8
            event: ""
        },
        {
            // 9
            event: ""
        }
        ];
        localStorage.setItem("events", JSON.stringify(events))
    } else{ 
        console.log("local storage exists so I render events to page")
    }
}

renderEvents()

// function renderEvents(){

// }