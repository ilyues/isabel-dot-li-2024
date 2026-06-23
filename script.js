let friend_count = 0;
// import { playhtml } from "https://unpkg.com/playhtml@latest"

const PFP_1 =
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f9e139c7-53a0-43a3-899c-eb2c31a739d3/dk1oyo7-e062fa1a-7860-49f2-9b09-d5acd5d6d6fc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y5ZTEzOWM3LTUzYTAtNDNhMy04OTljLWViMmMzMWE3MzlkM1wvZGsxb3lvNy1lMDYyZmExYS03ODYwLTQ5ZjItOWIwOS1kNWFjZDVkNmQ2ZmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ME4g-kh3PCMGOe6HSXDJe45jmQD64etXuyv949qQaos';
const PFP_2 =
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f9e139c7-53a0-43a3-899c-eb2c31a739d3/dk1oyob-1c9c8824-a635-4c33-9d47-fdf82634a4f0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y5ZTEzOWM3LTUzYTAtNDNhMy04OTljLWViMmMzMWE3MzlkM1wvZGsxb3lvYi0xYzljODgyNC1hNjM1LTRjMzMtOWQ0Ny1mZGY4MjYzNGE0ZjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.F8Q72KQKsSmQB7dIWe3zs1rGtGvlR2pb6z9600h8G0w';

const PFP_3 =
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f9e139c7-53a0-43a3-899c-eb2c31a739d3/dmapjny-3b7b0c02-149b-4a68-9be4-704d2a15876c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9mOWUxMzljNy01M2EwLTQzYTMtODk5Yy1lYjJjMzFhNzM5ZDMvZG1hcGpueS0zYjdiMGMwMi0xNDliLTRhNjgtOWJlNC03MDRkMmExNTg3NmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AxXcyWV-fuFpjhWomgpl6G7BIybM3y9zm2pW7X7wl7E';

const pfpEl = document.getElementById('pfp');
if (pfpEl) {
  pfpEl.setAttribute(
    'src',
    Math.random() < 0.5 ? PFP_1 : Math.random() < 0.9 ? PFP_2 : PFP_3,
  );
}

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
let coding = document.getElementById('code');

function showSection(active) {
  [
    ['about', about],
    ['writing', writing],
    ['research', research],
    ['code', coding],
  ].forEach(([name, el]) => {
    if (el) {
      el.style.display = name === active ? 'block' : 'none';
    }
  });
}

function showAbout() {
  showSection('about');
}

function showWriting() {
  showSection('writing');
}

function showResearch() {
  showSection('research');
}

function showCoding() {
  showSection('code');
}

// inspired by suboptimalism on neocities
const colours = [
  ['245, 55, 153', '254, 129, 1', '77, 173, 40', '0, 161, 199'],

  ['254, 127, 180', '255, 172, 78', '249, 86, 77', '62, 108, 158'],

  ['255, 89, 173', '255, 23, 96', '39, 105, 179', '70, 161, 205'],

  [
    '255, 133, 172',
    '248, 154, 90',
    '103, 150, 206',
    '150, 114, 176',
    '235, 235, 101',
  ],
];

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function randomTurn(min, max) {
  return 'rotate(' + random(min, max) + 'deg)';
}

function setRandomTurn(element, min, max) {
  const newTurn = randomTurn(min, max);
  element.style.setProperty('transform', newTurn);
}

function setRandomColor(element, colors) {
  const newColor = 'rgb(' + colors[random(0, colors.length)] + ')';
  element.style.setProperty('color', newColor);
}

function randomize(element, doTurn, turnMin, turnMax, doColor) {
  if (!element) {
    return;
  }
  var children = element.children;
  var colours = [
    '141, 103, 134',
    '126, 179, 207',
    '247, 158, 160',
    '225, 91, 104',
    '83, 129, 150',
    '144, 168, 11',
    '237, 185, 78',
  ];
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (doTurn) {
      setRandomTurn(child, turnMin, turnMax);
    }
    if (doColor) {
      setRandomColor(child, colours);
    }
  }
}

setTimeout(() => {
  randomize(document.getElementById('isabel'), true, -40, 40, true);
  randomize(document.getElementById('yue'), true, -5, 5, true);
  randomize(document.getElementById('li'), true, -5, 5, true);
  // var doodles = document.getElementsByClassName('doodle');
  // for (let d of doodles) {
  //   d.style.opacity = 1;
  // }
}, 300);
