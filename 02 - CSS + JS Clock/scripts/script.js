const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondDeg = ((seconds/60)*360)+90;
    secondHand.style.transform =`rotate(${secondDeg}deg)`;

    const minute = now.getMinutes();
    const minuteDeg = ((minute/60)*360)+90;
    minuteHand.style.transform =`rotate(${minuteDeg}deg)`;


    const hour = now.getHours();
    console.log(hour);
    const hourDeg = ((hour % 12) / 12) * 360 + 90;
    hourHand.style.transform =`rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);