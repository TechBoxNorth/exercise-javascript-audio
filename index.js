let playList = [];
let songObjects = [];
function createSongObject(name, song, cover, artist){
    obj = {
        name: name,
        song: song,
        cover: cover,
        artist: artist
    }
    songObjects.push(obj);
}

createSongObject('Boys, Girls, Toys & Words', 'assets/Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.mp3', 'assets/Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.jpg', 'Modern Pitch');

function createLibraryListItem(i){
    const libraryList = document.querySelector('.library-list');
    let item = document.createElement('li');
    item.classList.add('library-item');
    item.innerHTML = `<img src="${songObjects[i].cover}" alt="">
    <p>Song: ${songObjects[i].name}</p>
    <p>Artist: ${songObjects[i].artist}</p>`;
    libraryList.appendChild(item);
}
createLibraryListItem(0);


console.log(songObjects[0]);