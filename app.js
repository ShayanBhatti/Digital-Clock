let hourElement = document.getElementById("hour");
let minuteELement = document.getElementById("minute");
let secondElement = document.getElementById("second");

setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  hourElement.innerText = hour;
  minuteELement.innerText = minute;
  secondElement.innerText = second;
}, 500);

let date = new Date();
document.getElementById("date").textContent = date.toDateString();
