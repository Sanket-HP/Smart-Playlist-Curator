async function getRecommendations() {
    const mood = document.getElementById('mood').value;
    if (!mood) {
        alert('Please enter a mood!');
        return;
    }

    try {
        const response = await fetch(`https://your-backend-api-url/recommendations?mood=${mood}`);
        const data = await response.json();
        
        const playlistResults = document.getElementById('playlist-results');
        playlistResults.innerHTML = '';

        if (data.length > 0) {
            data.forEach(song => {
                const li = document.createElement('li');
                li.textContent = `${song.name} by ${song.artist}`;
                playlistResults.appendChild(li);
            });
        } else {
            playlistResults.innerHTML = '<li>No recommendations found for this mood.</li>';
        }
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        alert('There was an error fetching the recommendations. Please try again later.');
    }
}
