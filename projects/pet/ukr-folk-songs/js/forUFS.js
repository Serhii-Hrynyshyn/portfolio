import { songIndex, songGimn, songKalyna, songViter } from './textData.js';

const differentPages = document.getElementById('differentPages');
const buttons = {
    index: document.getElementById('index'),
    gimn: document.getElementById('gimn'),
    kalyna: document.getElementById('kalyna'),
    viter: document.getElementById('viter')
};

const songs = {
    index: { content: songIndex, audio: null },
    gimn: { content: songGimn, audio: 'audio/gimn-ukrayini.mp3' },
    kalyna: { content: songKalyna, audio: null },
    viter: { content: songViter, audio: null }
};

const audioStyles = {
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: '#003d99',
    borderRadius: '28px',
    opacity: '0.9'
};

// Initialize
differentPages.innerHTML = songIndex;
Object.assign(differentPages.style, {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'absolute',
    backgroundSize: 'contain',
    backgroundOrigin: 'content-box'
});
buttons.index.style.opacity = '20%';

// Event listeners
Object.entries(buttons).forEach(([key, button]) => {
    button.addEventListener('click', () => loadSong(key, button));
});

function loadSong(songKey, button) {
    const song = songs[songKey];
    differentPages.innerHTML = song.content;
    setActiveButton(button);

    if (song.audio) {
        const audio = document.createElement('audio');
        audio.src = song.audio;
        audio.controls = true;
        Object.assign(audio.style, audioStyles);
        differentPages.insertBefore(audio, differentPages.firstChild);
    }
}

function setActiveButton(activeButton) {
    Object.values(buttons).forEach(btn => btn.style.opacity = '100%');
    activeButton.style.opacity = '20%';
}