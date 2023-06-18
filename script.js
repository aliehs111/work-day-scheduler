
$(function () {

///To display current day and time///This is using day.js:

dayjs.extend(window.dayjs_plugin_localizedFormat)
let todaysDate = dayjs().format('lll')
$("#currentDay").text(todaysDate);


//When user clicks the save button, they get and alert and their input is saved in local storage:
$(".saveBtn").on("click", function () {
    alert("Event Saved! You may make changes to any events, but please be sure to click the save button each time!");
  console.log(this);
  var text = $(this).siblings(".description").val(); 
  var time = $(this).parent().attr("id"); 
  localStorage.setItem(time, text);
  
})
//Keeping commented out code here to go back and try to get this to work.  Abandoned this code from bootstrap for a more professional alert. The id (id="liveAlertBtn") needs to be on the parent div and that was problematic with the current design.  Plus it wouldn't x-out even though it has a built-in close feature.
//https://getbootstrap.com/docs/5.3/components/alerts/
// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Nice, you triggered this alert message!', 'success')
//   })
// }
/////////////////////////

//User input will be available again at refresh:
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));



//So that the hour blocks are color-coded for past present and future hours:
let currentTime = dayjs().hour()


$('.time-block').each(function(){
 let hour = Number($(this).attr("id").split('-')[1])
 if (hour < currentTime){
  $(this).addClass('past');
 
  } else if(currentTime === hour){
    $(this).removeClass('past');
    $(this).addClass('present');
  } else{
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }

})

});
