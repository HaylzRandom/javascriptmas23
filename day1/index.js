const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
    const todaysDate = new Date().getTime();
    const xmasDate = new Date('Dec 25 2023').getTime();
    
    const countdown = xmasDate - todaysDate;
    
    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdown % (1000 * 60)) / 1000);
    
    if (days === 1) {
        countdownDisplay.innerText = `${days} day, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
    } else {
        countdownDisplay.innerText = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
    }
    
    
}
 
renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.