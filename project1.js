console.log("Welcome  to Spotify");

//Initilize the variables
let songIndex = 0;

let audioElement = new Audio('/1.mp3');

let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName('songItems'));
let songs = [
    { songName: "wariyo mortal", filePath: "/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "cielo", filePath: "/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "deaf kev", filePath: "/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "different heaven and hide", filePath: "/4.mp3", coverPath: "covers/1.jpg" },
    { songName: "janji heros tonight", filePath: "/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "rabba", filePath: "/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "shakiyaan", filePath: "/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "bhula dena", filePath: "/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "tumhari kasam", filePath: "/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "na jaaane", filePath: "/1.mp3", coverPath: "covers/1.jpg" },


]
/*
songItems.forEach((element, i)=> {
    element.getElementByTagName("img")[0].src= songs[i].coverPath;
    element.getElementByClassName("songName")[0].innerText= songs[i].songName;


})*/
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//audioElement.play();

//handle play pause click
masterPlay.addEventListener('click', () => {
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
})

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seeker
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');


    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays();

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    })


})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})