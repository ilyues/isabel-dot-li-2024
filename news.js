// News log entries. `summary` may contain HTML (links, <img>, gifs, etc.).
const NEWS = [
  {
    date: '10-08-2026',
    summary:
      "i'm excited to be debuting a new comic at <a href='https://www.shortboxcomicsfair.com/' target='_blank'>shortbox comics fair</a> in 2027!'",
  },
  {
    date: '08-08-2026',
    summary:
      "some new poems on memory and return in the latest issues of <a href='https://www.starlingmag.com/issue-22/contents' target='_blank'>starling</a> and <a href='https://www.circularpublishing.co.nz/issues/rewind' target='_blank'>circular</a>.",
  },
  {
    date: '19-07-2026',
    summary:
      "i'll be tabling at <a href='https://www.sfzinefest.org/' target='_blank'>sf zine fest</a> for the first time this september 6th! also tabling for now place at <a href='https://sfartbookfair.com/' target='_blank'>sf art book fair</a> on july 25th :~)",
  },
  {
    date: '01-07-2026',
    summary:
      "i am curating a riso show around the themes of 跨: boundaries, in-betweens, transness, and movement! check out the <a href='https://www.instagram.com/p/DaRRydumFnx/?img_index=1' target='_blank'>open call</a>, submissions due august 1st.",
  },
  {
    date: '20-06-2026',
    summary:
      "<i>How Playwrights Use Software</i> won a best paper award at C&C26! see you in london - i'm excited to get a bajillion last-minute tickets for west end.",
  },

  {
    date: '20-06-2026',
    summary:
      'i hosted a traditional media techniques and art supplies share at <a href="https://www.nowplacesf.com/" target="_blank">now place</a>~',
  },
  {
    date: '14-06-2026',
    summary:
      'melted in singapore + presented <i>The Future of Creative Education</i> at DIS26! we also saw <a href="https://www.wildrice.com.sg/event/472273-girls-girls-girls/" target="_blank">an oral history of queer women in singapore</a>, and <a href="https://shop.knucklesandnotch.com/" target="_blank">a two-drum riso printer</a> for the first time...!',
  },
];

(function renderNews() {
  const el = document.getElementById('news');
  if (!el || typeof NEWS === 'undefined') return;
  el.innerHTML = NEWS.map(
    (n) =>
      '<div class="news-item">' +
      '<span class="meta">' +
      n.date +
      '</span> ' +
      '<span class="summary">' +
      n.summary +
      '</span>' +
      '</div>',
  ).join('');
})();
