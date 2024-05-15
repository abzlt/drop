function calculateTimeUntilReset() {
    const now = new Date();
    const dayOfWeek = 2; // Вторник
    const resetHourCT = 20; // 8:00 PM CT
    const resetHourPT = 18; // 6:00 PM PT (если нужно использовать CT, замените resetHourPT на resetHourCT)
    const resetHourUTC = resetHourCT + 5; // Центральное время (CT) + 5 часов = UTC

    let resetTime = new Date(now);
    resetTime.setUTCDate(now.getUTCDate() + ((dayOfWeek + 7 - now.getUTCDay()) % 7));
    resetTime.setUTCHours(resetHourUTC, 0, 0, 0);

    if (now > resetTime) {
        resetTime.setUTCDate(resetTime.getUTCDate() + 7);
    }

    const timeDifference = resetTime - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

function updateCountdown() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const { days, hours, minutes, seconds } = calculateTimeUntilReset();

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown()
document.getElementById('scrollPrompt').addEventListener('click', function() {
    document.getElementById('hiddenSection').scrollIntoView({ behavior: 'smooth' });
});
