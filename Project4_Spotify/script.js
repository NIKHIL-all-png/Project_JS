console.log("Spotify");
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songsItems = Array.from(document.getElementsByClassName('songItem'))
let masterSongName = document.getElementById("masterSongsItem")

//Initailize the variables
let songIndex = 0;
let songs = [
    { songName: "Dil pe jhkm jha te hai", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Dil pe jhkm jha te hai", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Dil pe jhkm jha te hai", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },

    { songName: "Dil pe jhkm jha te hai", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },

    { songName: "Dil pe jhkm jha te hai", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },

    { songName: "Dil pe jhkm ", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Dil pe jhkm jha te hai", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Dil pe jhkm jha te hai", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Dil pe jhkm jha te hai", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Dil pe jhkm jha te hai", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
]

songsItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play()


//Handle play/pause click


masterPlay.addEventListener('click', () => {
    console.log("Click is working");
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});


//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //Update Seakbar
    if (audioElement.duration) {
        let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        myProgressBar.value = progress;
    }

})

myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        masterSongName.innerText = songs[songIndex].songName

        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    });
});
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex++;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex--;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
