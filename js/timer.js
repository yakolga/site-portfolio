const timerTime = document.querySelector('.timer__time');
const deadline = '28 march 2022';

let interval


const updateClock = () => {
  const date = new Date().getTime(); 
  const dateNew = new Date(deadline).getTime(); 
  const timeRes = (dateNew - date) / 1000;

  const days = Math.floor(timeRes / 60 / 60 / 24);
  const hours = Math.floor((timeRes / 60 / 60) % 24);
  const minutes = Math.floor((timeRes / 60) % 60);
  const seconds = Math.floor(timeRes % 60);

  const fDays = days < 10 ? '0' + days : days;
  const fHours = hours < 10 ? '0' + hours : hours;
  const fMinutes = minutes < 10 ? '0' + minutes : minutes;
  const fSeconds = seconds < 10 ? '0' + seconds : seconds;
  

  const definition = (`${fDays}:${fHours}:${fMinutes}:${fSeconds}`);
  timerTime.textContent = definition;

  if (timeRes <= 0) {
    clearInterval(interval);
    timerTime.textContent = "00:00:00";
  }
};

interval = setInterval(updateClock, 500);



