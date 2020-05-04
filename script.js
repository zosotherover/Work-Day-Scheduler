// Call moment for the date and time
moment(Date);
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

var businessHours = moment().startOf("day").add(9, "hours");

//9am

var time1 = businessHours.add(0, "h");
time1 = time1.format("hh:mm A");
$(".block1").text(time1);
