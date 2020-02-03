let currentTime = new Date();
let currentHour = currentTime.getHours();
currentHour.toLocaleString()

let leadEl = $("#currentDay");
leadEl.text(currentTime);