const audioTracks = [
    { src: './songs8/6 for 6.mp3', img: './images/player-pc-img-qqq.png', name: '6 for 6' },
    { src: './songs8/BAND4BAND.mp3', img: './images/player-pc-img-qqq.png', name: 'BAND$BAND' },
    { src: './songs8/Central Cee - 8 Ball.mp3', img: './images/player-pc-img-qqq.png', name: 'Central Cee - 8 Ball' },
    { src: './songs7/Central Cee - Air Bnb.mp3', img: './images/player-pc-img-qqq.png', name: 'Central Cee - Air Bnb' },
    { src: './songs7/Central Cee - BOLIDE NOIR (feat. JRK 19).mp3', img: './images/player-pc-img-qqq.png', name: 'BOLIDE NOIR' },
    { src: './songs7/Central Cee - Dun Deal.mp3', img: './images/player-pc-img-qqq.png', name: 'Dun Deal' },
    { src: './songs7/Central Cee - Entrapreneur.mp3', img: './images/player-pc-img-qqq.png', name: 'Entrapreneur' },
    { src: './songs6/Central Cee - Fraud.mp3', img: './images/player-pc-img-qqq.png', name: 'Fraud' },
    { src: './songs6/Central Cee - Hate It Or Luv It.mp3', img: './images/player-pc-img-qqq.png', name: 'Hate It Or Luv It' },
    { src: './songs6/Central Cee - Let Her Go.mp3', img: './images/player-pc-img-qqq.png', name: 'Let Her Go' },
    { src: './songs6/Central Cee - Little Bit of This.mp3', img: './images/player-pc-img-qqq.png', name: 'Little Bit of This' },
    { src: './songs5/Central Cee - Me & You.mp3', img: './images/player-pc-img-qqq.png', name: 'Me & You' },
    { src: './songs5/Central Cee - Molly.mp3', img: './images/player-pc-img-qqq.png', name: 'Molly' },
    { src: './songs5/Central Cee - Mrs.mp3', img: './images/player-pc-img-qqq.png', name: 'Mrs' },
    { src: './songs4/Central Cee - No Pain.mp3', img: './images/player-pc-img-qqq.png', name: 'No Pain' },
    { src: './songs5/Central Cee - One Up (OG).mp3', img: './images/player-pc-img-qqq.png', name: 'One Up (OG)' },
    { src: './songs4/Central Cee - Retail Therapy.mp3', img: './images/player-pc-img-qqq.png', name: 'Retail Therapy' },
    { src: './songs4/Central Cee - Tension.mp3', img: './images/player-pc-img-qqq.png', name: 'Tension' },
    { src: './songs4/Central Cee - Terminal 5.mp3', img: './images/player-pc-img-qqq.png', name: 'Terminal 5' },
    { src: './songs4/Central Cee - Ungrateful.mp3', img: './images/player-pc-img-qqq.png', name: 'Ungrateful' },
    { src: './songs3/Central Cee - Xmas Eve.mp3', img: './images/player-pc-img-qqq.png', name: 'Xmas Eve' },
    { src: './songs3/Cold Shoulder.mp3', img: './images/player-pc-img-qqq.png', name: 'Cold Shoulder' },
    { src: './songs3/Commitment Issues.mp3', img: './images/player-pc-img-qqq.png', name: 'Commitment Issues' },
    { src: './songs2/Day in the Life.mp3', img: './images/player-pc-img-qqq.png', name: 'Day in the Life' },
    { src: './songs3/gen z luv.mp3', img: './images/player-pc-img-qqq.png', name: 'gen z luv | ❤️' },
    { src: './songs2/Khabib.mp3', img: './images/player-pc-img-qqq.png', name: 'Khabib' },
    { src: './songs2/Loading.mp3', img: './images/player-pc-img-qqq.png', name: 'Loading' },
    { src: './songs2/Moi.mp3', img: './images/player-pc-img-qqq.png', name: 'Moi | ❤️' },
    { src: './songs1/Obsessed With You.mp3', img: './images/player-pc-img-qqq.png', name: 'Obsessed With You' },
    { src: './songs1/One By One.mp3', img: './images/player-pc-img-qqq.png', name: 'One By One' },
    { src: './songs1/One.mp3', img: './images/player-pc-img-qqq.png', name: 'One' },
    { src: './songs1/Sprinter.mp3', img: './images/player-pc-img-qqq.png', name: 'Sprinter | ❤️' },
];

let currentTrackIndex = 0;
const audio = new Audio(audioTracks[currentTrackIndex].src);
const playBtn = document.querySelector('.play');
const img = document.querySelector('.pc-player-img');
const songNameElement = document.querySelector('.song-name');
const currentTimeElement = document.querySelector('.current-time');
const durationElement = document.querySelector('.duration');
const trackSlider = document.querySelector('.track-slider');
let isPlaying = false;

img.style.animationPlayState = 'paused';

function updateTrack() {
    audio.src = audioTracks[currentTrackIndex].src;
    img.src = audioTracks[currentTrackIndex].img;
    songNameElement.textContent = audioTracks[currentTrackIndex].name;

    audio.addEventListener('loadedmetadata', () => {
        durationElement.textContent = formatTime(audio.duration);
        trackSlider.max = Math.floor(audio.duration);
    });
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (isPlaying) {
        audio.pause();
        img.style.animationPlayState = 'paused'; // Остановить анимацию
    } else {
        audio.play().catch(error => {
            console.error("Playback failed:", error);
        });
        img.style.animationPlayState = 'running'; // Запустить анимацию
    }

    isPlaying = !isPlaying;
});

document.querySelector('.next').addEventListener('click', function(e) {
    e.preventDefault();
    currentTrackIndex = (currentTrackIndex + 1) % audioTracks.length;
    updateTrack();
    if (isPlaying) {
        audio.play().catch(error => {
            console.error("Playback failed:", error);
        });
    } else {
        img.style.animationPlayState = 'paused'; // Остановить анимацию, если на паузе
    }
});

document.querySelector('.back').addEventListener('click', function(e) {
    e.preventDefault();
    currentTrackIndex = (currentTrackIndex - 1 + audioTracks.length) % audioTracks.length;
    updateTrack();
    if (isPlaying) {
        audio.play().catch(error => {
            console.error("Playback failed:", error);
        });
    } else {
        img.style.animationPlayState = 'paused'; // Остановить анимацию, если на паузе
    }
});

audio.addEventListener('timeupdate', function() {
    currentTimeElement.textContent = formatTime(audio.currentTime);
    trackSlider.value = Math.floor(audio.currentTime);
    updateSliderColor();
});

audio.addEventListener('ended', function() {
    isPlaying = false;
    img.style.animationPlayState = 'paused'; // Убедиться, что анимация остановлена
});

// Обработка перемотки трека
trackSlider.addEventListener('input', function() {
    audio.currentTime = trackSlider.value;
});

function updateSliderColor() {
    const percentage = (audio.currentTime / audio.duration) * 100;
    trackSlider.style.background = `linear-gradient(to right, #00E5FF ${percentage}%, #3A3A3A ${percentage}%)`;
}

createSongMenu();

function createSongMenu() {
    const menuContainer = document.querySelector('.song-list');
    audioTracks.forEach((track, index) => {
        const songLink = document.createElement('a');
        songLink.href = '#';
        songLink.textContent = track.name;
        songLink.className = 'song-link';
        songLink.addEventListener('click', function(e) {
            e.preventDefault();
            currentTrackIndex = index;
            updateTrack();
            audio.play().catch(error => {
                console.error("Playback failed:", error);
            });
            img.style.animationPlayState = 'running'; // Начать вращение
        });
        menuContainer.appendChild(songLink);
    });
}