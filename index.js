let activeView = 'player';

const audioPlayer = document.querySelector('.audio-player');
const libraryList = document.querySelector('.library-list');
const header = document.querySelector('header');

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

showPlayer();

// ------- create song library ---------------------
function createLibraryListItem(i){
    let item = document.createElement('li');
    item.classList.add('library-item');
    item.innerHTML = `<img class="library-art" src="${songObjects[i].cover}" alt="">
    <p>Song: ${songObjects[i].name}</p>
    <p>Artist: ${songObjects[i].artist}</p>`;
    item.id = songObjects[i].id - 1;
    libraryList.appendChild(item);
}

for(let i = 0; i < songObjects.length; i++){
    createLibraryListItem(i);
}

libraryList.addEventListener('click', (e) => {
    const listItem = e.target.closest('.library-item')
    const songId = listItem.id;
    audioPlayer.src = songObjects[songId].song;
    audioPlayer.play();
});

