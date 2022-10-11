const days = document.getElementById('days');   
const hours = document.getElementById('hours');   
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear;

const yksTime = new Date('June 18 $ 2023 00:00:00');

function updateTime(){
    const currentDate = new Date();
    const diff = yksTime - currentDate;

    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60) % 24;
    const m = Math.floor(diff/1000/60) % 60;
    const s = Math.floor(diff/1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

}
setInterval(updateTime, 1000);
