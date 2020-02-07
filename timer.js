'use strict';
let timer = document.getElementById('timer');
//let deadline = '2020-02-08';

timer.textContent = 'Hello my musi-pusi';

function getTimer(hours, minutes, seconds, callback) {
    function setInt(){
        if(seconds < 0 && minutes >= 0){
            seconds = 59;
            minutes--;
        }
        if (minutes < 0 && hours >= 0){
            minutes = 59;
            hours--;
        }
        if (hours < 0){
            hours = 0;
        }
        if(hours <= 0 && minutes <= 0 && seconds <= 0){
            callback();
            clearInterval(interval);
        }
        timer.textContent =`${hours}:${minutes}:${seconds--}`;
        console.log(timer.textContent);
    }
    let interval = setInterval(setInt, 10);

}
getTimer(1, 1, 10, () => console.log("ding ding"));
