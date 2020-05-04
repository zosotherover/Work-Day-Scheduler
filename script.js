// Call moment for the date and time
moment(Date);
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

var businessHours = moment().startOf("day").add(9, "hours");

//9am time block

var time1 = businessHours.add(0, "h");
time1 = time1.format("hh:mm A");
$(".block1").text(time1);

//10am time block

var time1 = businessHours.add(1, "h");
time1 = time1.format("hh:mm A");
$(".block2").text(time1);

//11am time block

var time1 = businessHours.add(1, "h");
time1 = time1.format("hh:mm A");
$(".block3").text(time1);

//12pm time block

var time1 = businessHours.add(1, "h");
time1 = time1.format("hh:mm A");
$(".block4").text(time1);

//1pm time block

var time1 = businessHours.add(1, "h");
time1 = time1.format("hh:mm A");
$(".block5").text(time1);

//2pm time block

var time1 = businessHours.add(1, "h");
time1 = time1.format("hh:mm A");
$(".block6").text(time1);

//3pm time block

var time1 = businessHours.add(1, "h");
time1 = time1.format("hh:mm A");
$(".block7").text(time1);

//4pm time block

var time1 = businessHours.add(1, "h");
time1 = time1.format("hh:mm A");
$(".block8").text(time1);

//5pm time block

var time1 = businessHours.add(1, "h");
time1 = time1.format("hh:mm A");
$(".block9").text(time1);

// Save button Event listener for saving to local stroage

$(".saveBtn").on("click", function () {
  event.preventDefault();
  var formContent = $(this).siblings(".form-control").val();
  var listItem = $(this).parent().data("hour");

  localStorage.setItem(listItem, formContent);
});
