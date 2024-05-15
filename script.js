function calculateTimeUntilReset() {
    const now = new Date();
    const resetHour = 0; // час сброса дропа (например, полночь по UTC)
    const resetMinute = 0;
    const resetSecond = 0;

    let resetTime = new Date();
    resetTime.setUTCHours(resetHour, resetMinute, resetSecond, 0);

    if (now >= resetTime) {
        resetTime.setUTCDate(resetTime.getUTCDate() + 1);
    }

    const timeDifference = resetTime - now;

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
}

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const { hours, minutes, seconds } = calculateTimeUntilReset();

    countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
