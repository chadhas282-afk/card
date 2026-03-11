function openCard() {
    const song = document.getElementById('birthday-song');
    song.play();

    var duration = 8 * 1000;
    var animationEnd = Date.now() + duration;

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        var particleCount = 50 * (timeLeft / duration);
        confetti({
            particleCount,
            spread: 70,
            origin: { x: 0.2, y: 0.6 }
        });
        confetti({
            particleCount,
            spread: 70,
            origin: { x: 0.8, y: 0.6 }
        });
    }, 250);

    const welcome = document.getElementById('welcome-screen');
    const card = document.getElementById('birthday-card');

    welcome.classList.add('fade-out');
    setTimeout(() => {
        welcome.style.display = 'none';
        card.classList.remove('hidden');
        card.classList.add('fade-in');
    }, 800);
}

function showLongWish() {
    const card = document.getElementById('birthday-card');
    const longWish = document.getElementById('long-wish-screen');

    card.classList.add('fade-out');
    
    setTimeout(() => {
        card.style.display = 'none';
        longWish.style.display = 'block';
        setTimeout(() => {
            longWish.classList.remove('hidden');
            longWish.classList.add('fade-in');
        }, 50);
    }, 800);
}