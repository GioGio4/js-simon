// TRACCIA
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
//******************************************************************************** */



const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const titleEl = document.getElementById("title");


let total_milliseconds = milliseconds_missing();






titleEl.innerHTML = "Prossima Lezione";
const clockCronometro = setInterval(stampaTempoTrascorso, 1000);
stampaTempoTrascorso();

function stampaTempoTrascorso() {

    total_milliseconds = total_milliseconds - 1000;

    const seconds = total_milliseconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    const remaining_seconds = Math.floor(seconds % 60);
    const remaining_minutes = Math.floor(minutes % 60);
    const remaining_hours = Math.floor(hours % 24);
    const remaining_days = Math.floor(days);



    secondsEl.innerHTML = (remaining_seconds < 10) ? "0" + remaining_seconds : remaining_seconds;
    minutesEl.innerHTML = (remaining_minutes < 10) ? "0" + remaining_minutes : remaining_minutes;
    hoursEl.innerHTML = (remaining_hours < 10) ? "0" + remaining_hours : remaining_hours;
    daysEl.innerHTML = (remaining_days < 10) ? "0" + remaining_days : remaining_days;
}





function milliseconds_missing() {
    const odiern_data = new Date();
    const new_data = new Date("2023-02-06 09:30");

    let odiern_milli = odiern_data.getTime();
    const new_milli = new_data.getTime();

    let missing_milli = (new_milli - odiern_milli);

    return missing_milli;
}
