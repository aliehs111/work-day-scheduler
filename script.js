// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

///To display current day///This is from day.js

dayjs.extend(window.dayjs_plugin_localizedFormat)
let todaysDate = dayjs().format('lll')
$("#currentDay").text(todaysDate);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  // HINT: What does `this` reference in the click listener function? //Answ: It refers to the element that generated the event//
  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? 
  // How might the id be useful when saving the description in local storage?


$(".saveBtn").on("click", function () {
    alert("Event Saved! You may make changes to any events, but please be sure to click the save button each time!");
  console.log(this);
  var text = $(this).siblings(".description").val(); 
  var time = $(this).parent().attr("id"); 
  localStorage.setItem(time, text);
  
})
//Keeping notes here to go back and try to get this to work.  Abandoned this code from bootstrap for a more professional alert. The id (id="liveAlertBtn") needs to be on the parent div and that was problematic with the current design.  Plus it wouldn't x-out even though it has a built-in close feature.
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
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));


// function handleSave(event){
//   event.preventDefault();
//   console.log("keep user events")
//   let userEvtInpt = $("input[id='eventInput']").val();
//   console.log(userEnvInpt)
// }
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
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
