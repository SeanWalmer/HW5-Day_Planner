// sets date at top of page and grabs time for use later
var dateGrab = new Date().toString();
console.log(dateGrab)
var dateArray = dateGrab.split(" ")
console.log(dateArray)

$("#currentDay").text(dateArray[0] + ", " + dateArray[1] + " " + dateArray[2])
