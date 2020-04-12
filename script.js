// sets date at top of page and grabs time for use later
var dateGrab = new Date().toString();
var dateArray = dateGrab.split(" ");
var time = dateArray[4].match(/\d+/g).map(Number);
console.log(time);
var events


$("#currentDay").text(dateArray[0] + ", " + dateArray[1] + " " + dateArray[2])


// render events to page or create storage for events if no event array exists
function renderEvents(){
    events = JSON.parse(localStorage.getItem("events"))

    if( events === null){
        events = [{
            // 9:00 - position 1 - index 0
            event: ""
        },
        {
            // 10:00 - position 2 - index 1
            event: ""
        },
        {
            // 11:00 - position 3 - index 2
            event: ""
        },
        {
            // 12:00 - position 4 - index 3
            event: ""
        },
        {
            // 1:00 - position 5 - index 4
            event: ""
        },
        {
            // 2:00 - position 6 - index 5
            event: ""
        },
        {
            // 3:00 - position 7 - index 6
            event: ""
        },
        {
            // 4:00 - position 8 - index 7
            event: ""
        },
        {
            // 5:00 - position 9 - index 8
            event: ""
        }
        ];
        localStorage.setItem("events", JSON.stringify(events));
    } else{ 
        console.log("local storage exists so I render events to page");
        for(var i = 0; i < events.length; i++){
            $("#event"+(i+1)).attr("value", events[i].event);
        };
    };
};

renderEvents();

// event listener for save buttons
$(".btn").click(function(){
    // console.log("you clicked a save button");
    var btnNum = this.id.match(/\d+/g).map(Number);
    console.log("you clicked save button " + btnNum[0]);
    console.log("you saved '" + this.previousElementSibling.value +"' to position " + (btnNum-1) + "in events array.")
    events[btnNum - 1].event = this.previousElementSibling.value;
    console.log(events)
    console.log("saving to local storage")
    localStorage.setItem("events", JSON.stringify(events));
})