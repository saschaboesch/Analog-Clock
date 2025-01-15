// Select the clock hands from the DOM
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Function to set the time on the clock
function setTime() {
  // Get the current time
  const now = new Date();

  // Get the current seconds and calculate the rotation for the second hand
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  // Add 90 degrees because the clock hands start at 12 o'clock (vertical)
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Get the current minutes and calculate the rotation for the minute hand
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Get the current hours and calculate the rotation for the hour hand
  const hours = now.getHours() % 12;
  // Use modulo 12 to handle the 12-hour format
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  // Include the minute progress to adjust the hour hand smoothly
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Update the clock hands every second
setInterval(setTime, 1000);
setTime();
