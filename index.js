const audioPlayer = document.querySelector('.audio-player');
const libraryList = document.querySelector('.library-list');
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

