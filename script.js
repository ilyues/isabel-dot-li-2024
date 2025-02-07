let friend_count = 0;
// import { playhtml } from "https://unpkg.com/playhtml@latest"

function addFriend() {
  console.log('its being called');
  if (friend_count < 4) {
    var newFriend = document.createElement('img');
    newFriend.src = 'assets/friends/' + friend_count + '.jpg';
    newFriend.setAttribute('class', 'friend-img');
    newFriend.setAttribute('position', 'absolute');
    newFriend.style.top = Math.floor((Math.random() * 1000) / 2);
    newFriend.style.left = Math.floor((Math.random() * 1000) / 2);
    newFriend.setAttribute('can-move', true);

    document.body.appendChild(newFriend);
    friend_count += 1;
    playhtml.setupPlayElement(newFriend);
  }
}

let writing = document.getElementById('writing');
let about = document.getElementById('about');
let research = document.getElementById('research');

function showAbout() {
  about.style.display = 'block';
  writing.style.display = 'none';
  research.style.display = 'none';
}

function showWriting() {
  about.style.display = 'none';
  writing.style.display = 'block';
  research.style.display = 'none';
}

function showResearch() {
  about.style.display = 'none';
  writing.style.display = 'none';
  research.style.display = 'block';
}
