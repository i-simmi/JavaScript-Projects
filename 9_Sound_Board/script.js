const sounds = 
    ["angelical","brain","epic","evidence","soft-piano","typical","buttons"];

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
           //stopSongs() 

        document.getElementById(sound).play() //play() method 
    })

    document.getElementById('buttons').appendChild(btn)
})

  function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause();
        song.currentTime = 0;
    })
}
 

 