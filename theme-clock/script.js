const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

toggleEl.addEventListener('click', function (e) {
  const html = document.querySelector('html');
  html.classList.toggle('dark');

  if (html.classList.contains('dark')) e.target.innerText = 'Light Mode';
  if (!html.classList.contains('dark')) e.target.innerText = 'Dark Mode';
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  // hoce da ne bude 24 nego 00
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${String(minutes).padStart(
    2,
    '0'
  )} ${ampm}`;

  hourEl.style.transition = `${hours === 0 ? "none" : "all 0.5s ease-in"}`
  minuteEl.style.transition = `${minutes === 0 ? "none" : "all 0.5s ease-in"}`
  secondEl.style.transition = `${seconds === 0 ? "none" : "all 0.5s ease-in"}`


  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${date}</span>`;
}

setInterval(setTime, 1000);

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
