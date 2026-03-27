const targetDate = new Date("May 22, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    // Time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate remaining units
    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    // Update the DOM
    document.getElementById("days-large").innerText = d < 10 ? '0' + d : d;
    document.getElementById("hours").innerText = h < 10 ? '0' + h : h;
    document.getElementById("minutes").innerText = m < 10 ? '0' + m : m;
    document.getElementById("seconds").innerText = s < 10 ? '0' + s : s;
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately