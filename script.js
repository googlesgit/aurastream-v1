document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.sound-card');
    const masterBtn = document.getElementById('masterPlay');
    let isPlaying = false;

    // Toggle active state and handle audio
    cards.forEach(card => {
        const audio = card.querySelector('audio');
        const slider = card.querySelector('.volume-slider');

        // Card Click Toggle
        card.addEventListener('click', (e) => {
            // Prevent trigger if clicking slider
            if (e.target.type === 'range') return;

            card.classList.toggle('active');
            
            if (card.classList.contains('active') && isPlaying) {
                audio.play();
            } else {
                audio.pause();
            }
        });

        // Volume Change
        slider.addEventListener('input', () => {
            audio.volume = slider.value;
        });
    });

    // Master Play/Pause Switch
    masterBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        masterBtn.innerText = isPlaying ? "Pause Session" : "Start Session";

        cards.forEach(card => {
            const audio = card.querySelector('audio');
            if (isPlaying && card.classList.contains('active')) {
                audio.play();
            } else {
                audio.pause();
            }
        });
    });
});
