
// 1. Sabse pehle saare variables upar declare honge
// let timeDisplay = document.querySelector("#timeDisplay");
// let dateDisplay = document.querySelector("#dateDisplay");
// let formatBtn = document.querySelector("#formatBtn");

let is12HourMode = false; // <-- Isko hum sabse upar le aaye!

// 2. Button ka click event listener
formatBtn.addEventListener("click", function () {
  if (is12HourMode) {
    is12HourMode = false;
    formatBtn.textContent = `Switch to 12-Hour`;
  } else {
    is12HourMode = true;
    formatBtn.textContent = `Switch to 24-Hour`;
  }
  console.log(is12HourMode);
});

// 3. Pura live clock chalane wala interval
let dateTimer = setInterval(() => {
  // time
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  // date
  let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let date = currentTime.getDate();
  let monthIndex = currentTime.getMonth();
  let year = currentTime.getFullYear();

  let amPm = "";

  // 12-hour mode logic
  if (is12HourMode) {
    if (hours >= 12) {
      amPm = "PM";
    } else {
      amPm = "AM";
    }

    if (hours > 12) {
      hours = hours - 12;
    } else if (hours === 0) {
      hours = 12;
    }
  }

  // Displaying on screen
  timeDisplay.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
  dateDisplay.textContent = `${date} ${months[monthIndex]} ${year}`;
}, 1000);


