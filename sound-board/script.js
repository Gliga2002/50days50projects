const sounds = [];

const soundNodes = document.querySelectorAll('audio');
soundNodes.forEach((sound) => sounds.push(sound.id));

document.body.addEventListener('click', (e) => {
  if (!e.target.classList.contains('btn')) return;
    stopSongs()

    document.getElementById(e.target.innerText).play();
})

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;

  })
}
