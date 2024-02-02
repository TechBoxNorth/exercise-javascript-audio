const audioPlayer = document.querySelector('.audio-player');
const libraryList = document.querySelector('.library-list');
let playList = [];
// ------- create song library ---------------------
function createLibraryListItem(i){
    let item = document.createElement('li');
    item.classList.add('library-item');
    item.innerHTML = `<img class="library-art" src="${songObjects[i].cover}" alt="">
    <p>Song: ${songObjects[i].name}</p>
    <p>Artist: ${songObjects[i].artist}</p><img class="add-to-playlist" src="assets/gui/playlist_add.svg" alt="">`;
    item.id = songObjects[i].id;
    libraryList.appendChild(item);
}

for(let i = 0; i < songObjects.length; i++){
    createLibraryListItem(i);
}

libraryList.addEventListener('click', (e) => {
    const listItem = e.target.closest('.library-item')
    if(!e.target.classList.contains('add-to-playlist')){
        const songId = listItem.id;
        audioPlayer.src = songObjects[songId].song;
        audioPlayer.play();
    } 
    else {
        playList.push(listItem);
        console.log(playList);
    }
});

// --------------------------------------------------

