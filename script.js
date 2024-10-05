function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const month = now.toLocaleString('default', { month: 'short' });
    const day = now.getDate();
    
    const timeString = `${hours}:${minutes} ∙ ${month} ${day}`;
    document.getElementById('time-display').textContent = timeString;
}

// Update time immediately and then every minute
updateTime();
setInterval(updateTime, 0);

