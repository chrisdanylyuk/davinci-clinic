alert('Шановні пацієнти! В період карантину ми працюємо та дотримуємось усіх протиепідемічних заходів щодо розповсюдження та зараження COVID 19.')

  
const clock = document.querySelector('.clock');
const options = {
    year: "numeric", month: "numeric",
    day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
};
const showClock = () => clock.innerText = 'Місцевий час ' + (new Date()).toLocaleTimeString("uk", options);
setInterval(showClock, 1000);
