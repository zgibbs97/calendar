var todayDate = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
$("#currentDay").html(todayDate);


function hourlyTracker () {
  var currentTime = moment().hour();

  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("hour")[1])
    console.log(blockHour, currentTime)

      if (blockHour < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }

      else if (blockHour === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");

      }

      else {
        $(this).removeClass("past");
        $(this).addClass("future");
        $(this).removeClass("present");
      }
  })
}
hourlyTracker();

$(".saveBtn").on('click', function (){
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr('id');

  localStorage.setItem(time, text);
})

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));