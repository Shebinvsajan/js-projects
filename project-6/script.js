const clockEl = document.getElementById("clock");
const dateEl = document.getElementById("date");


updateClock();

function updateClock(){
    const now = new Date();
    console.log("now", now);
    const hours = now.getHours().toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0");
    const second = now.getSeconds().toString().padStart(2,"0");
    const day = now.getDay();
    const days = ["sun","mon","tue","wed","thu","fri","sat"];
    const month = now.getMonth();
    const months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    const year = now.getFullYear();
    clockEl.textContent = `${hours}:${minutes}:${second}`;
    dateEl.textContent = `${days[day]}, ${months[month]} ${year}`


}

setInterval(updateClock,1000);