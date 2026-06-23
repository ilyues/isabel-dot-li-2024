const BLANKS = [
  'thinking about making a board game zine',
  'browsing biscuit-shaped stools',
  'discovering cognates organically',
  'wearing ribbons and pearls',
  'sitting by the sea',
  'crossing the pacific ocean',
  'figure drawing in the park',
  'polishing their elephant teapot',
  'washing berry hair dye out from their fingernails',
  'ordering the spiciest item on the menu',
  'reading trashy revenge josei',
  'feeling the texture of a page for too long',
  'dancing to the riso printer ker-shunks',
  'petting brioche the cat',
  'stumped by their own poetry',
  'doing cryptic crosswords on an ipad at a chinese restaurant',
  'buying three cans of quail eggs',
  'recognising match-three patterns against their will',
  'afraid their big brain academy score will go down if they replay it',
  'hoarding tamagotchis with dead batteries',
  "certain this song sounds exactly like another song they've heard before",
  'excited(!)',
  'missing home',
  'panelling out their next comic',
  'flying down the chinatown slopes on a speeding bus',
  'crawling up the chinatown inclines with a huff and a puff',
  'at risk of being buried under a pile of unread books',
  'sleepy',
  'strange',
  'walking quickly',
  'blinking loudly',
  'hypnotising you',
  'planning a surprise',
  'sneaking up on someone',
  'in possession of too many scarves',
  'precious about their stickers',
  'against dog-earing borrowed books',
  'in love',
  '[redacted]',
  'making art with their hands',
  'looking for chinese music recommendations',
  'ready',
  "eagerly awaiting brianna lei's new game",
  'not sure what is going on',
  'on their way',
  'still waiting for the return of raise wa tanin ga ii',
  "cutting their friends' hair",
  "forgetting something but they just can't place it",
  'not cleaning the house right now',
  'joyful(!)',
  '... um... uh... uuuh... w-wait! i thought of one! w-',
  'coding this website',
  'not known to bite',
  'suspiciously quiet',
  'introverted but not shy',
  'on tambourine duty at jaguar karaoke',
  'not capable of eating one soft serve cone in one sitting',
  'not capable of eating two soft serve cones in one sitting',
  'not capable of eating three soft serve cones in one sitting',
  'laughing',
  'in their writing sanctuary',
  'scrambling 4 eggs with half a tomato',
  'sipping banana milk',
  'not lactose intolerant',
  'always a little cold',
  'not ready to get up',
  'unable to hear you over polkadot stingray',
  'pointing at a flower on the sidewalk',
  'due to renew their learner license soon',
  "obsessed with shakespeare's richard ii",
  'touching their bass for once',
  'playing moonsetter on piano',
  "looking at you as if they know something you don't",
  'a little less decisive than usual at sweet glory',
  'wearing mismatched socks',
  'afraid of physical exercise',
  'melting mozzarella',
  'listening for tūīs',
  'an intj',
  'a virgo',
];

(function renderBlanks() {
  const b1 = document.getElementById('blank1');
  const b2 = document.getElementById('blank2');
  if (!b1 || !b2 || typeof BLANKS === 'undefined' || !BLANKS.length) return;

  // Pick two distinct random entries (falls back to one if the list is short).
  const i = Math.floor(Math.random() * BLANKS.length);
  let j = i;
  if (BLANKS.length > 1) {
    j = Math.floor(Math.random() * (BLANKS.length - 1));
    if (j >= i) j++;
  }

  b1.innerHTML = BLANKS[i];
  b2.innerHTML = BLANKS[j];
})();
