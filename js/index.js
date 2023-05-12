const countdownTime = prompt("Enter the countdown time in hours, minutes, and seconds (in the format hh:mm:ss):");

let countdownEl = document.getElementById("countdown");

const [hours, minutes, seconds] = countdownTime.split(":");

let totalSeconds = parseInt(seconds) + parseInt(minutes) * 60 + parseInt(hours) * 3600;

if (totalSeconds > 86400) {
  const days = Math.floor(totalSeconds / 86400);
  totalSeconds -= days * 86400;
}

const countdown = setInterval(function () {
  let remainingSeconds = totalSeconds;
  const remainingHours = Math.floor(remainingSeconds / 3600);
  remainingSeconds -= remainingHours * 3600;
  const remainingMinutes = Math.floor(remainingSeconds / 60);
  remainingSeconds -= remainingMinutes * 60;

  let formattedTime = remainingHours.toString().padStart(2, "0") + ":" +
    remainingMinutes.toString().padStart(2, "0") + ":" +
    remainingSeconds.toString().padStart(2, "0");
  countdownEl.innerText = formattedTime;

  if (remainingSeconds === 0 && remainingMinutes === 0 && remainingHours === 0) {
    clearInterval(countdown);
  }

  totalSeconds--;
}, 1000);

