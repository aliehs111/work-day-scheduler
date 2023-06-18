# work-day-scheduler
This is a daily schedule application that allows a user to save events for each hour of a typical working day.

## Overview

This scheduler uses HTML, CSS, JavaScript. There are also links in the HTML file for APIs; JQuery, Bootstrap and Day.js.  JQuery is used in the JavaScript.  Bootstrap provided some of the styling and the time elements and code use Day.js.

User is presented with a header with the details of styled hour blocks so they know that the present, past and future hours are color-coded.  The header also shows the current date and time.

The user can input their own events for each hour block.  When user clicks the save button, and alert indicates that the event has been saved and reminds user to click save again if they make any changes.

## Resources

Reviewing class videos was the primary source of understanding how to formulate a strategy.  Then further research online to understand the JQuery syntax. Secondly, it was instrumental to review documentation for APIs. For example, getting the date and time correct required careful attention to exactly which format to use.

The hint in the statercode JS comment about JQuery 'this' is what finally helped to think through the best way to save the user input to local storage. 

## Approach

First task was getting the date and time to work so to have something to work with for comparison on time block color codes.  Then worked through logic and jquery syntax to store user input to local storage.  Saving to local storage was tested through using the console and evaluating the local storage.  Coding it to show in local storage was easy in comparison to working through how to keep it after refresh.  There was an absurd amount of trial and error.  But once it worked, it was all worth it!

After it was technically complete, it seemed to need a little more instruction for the user.  So clarification of the hour blocks' colors was added to the heading and an alert was coded to confirm when input was save and remind user to save changes.

## Screenshot and Link 
https://user-images.githubusercontent.com/128503077/246677420-9b5447e3-2a2e-47dc-bbad-8135fd1c2092.png


https://aliehs111.github.io/work-day-scheduler/
