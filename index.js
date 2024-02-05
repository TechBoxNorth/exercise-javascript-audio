let activeView = 'player';

const audioPlayer = document.querySelector('.audio-player');
const libraryList = document.querySelector('.library-list');
const header = document.querySelector('header');
const playerControls = document.querySelector('.player-controls');

header.addEventListener('click', (e) => {
    if(e.target.closest('div').classList.contains('to-songs') && activeView === 'player'){
        showLibrary();
    } else {
        if(e.target.closest('div').classList.contains('to-player') && activeView === 'library'){
            showPlayer();
        }
    }
});

function showPlayer(){
    activeView = 'player';
    document.querySelector('.to-songs').style.display = 'inherit';
    document.querySelector('.player').style.display = 'inherit';
    document.querySelector('.to-player').style.display = 'none';
    document.querySelector('.library').style.display = 'none';
}

function showLibrary(){
    activeView = 'library';
    document.querySelector('.to-songs').style.display = 'none';
    document.querySelector('.player').style.display = 'none';
    document.querySelector('.to-player').style.display = 'inherit';
    document.querySelector('.library').style.display = 'inherit';
}

// ------- create song library ---------------------
function createLibraryListItem(i){
    let item = document.createElement('li');
    item.classList.add('library-item');
    item.innerHTML = `<img class="library-art" src="${songObjects[i].cover}" alt="">
    <div class="item-info">
        <p>Song: ${songObjects[i].name}</p>
        <p>Artist: ${songObjects[i].artist}</p>
    </div`;
    item.id = songObjects[i].id - 1;
    libraryList.appendChild(item);
}

for(let i = 0; i < songObjects.length; i++){
    createLibraryListItem(i);
}

playerControls.addEventListener('click', (e) => {
    const btnID = e.target.id;
    console.log(btnID);
    switch(btnID){
        case 'play-btn':
            pauseResume();
            break;
        default:
            console.log('meh!');
            break;
    }   
});

function pauseResume(){
    if(!audioPlayer.paused){
        console.log('playing');
        audioPlayer.pause();
        document.getElementById('play-btn').src="assets/gui/pause_circle.svg";
    } else if(audioPlayer.paused){
        console.log('paused');
        document.getElementById('play-btn').src="assets/gui/play_circle.svg";
        audioPlayer.play();
    }
}

libraryList.addEventListener('click', (e) => {
    const listItem = e.target.closest('.library-item')
    const songId = listItem.id;
    audioPlayer.src = songObjects[songId].song;
    audioPlayer.play();
});

showPlayer();