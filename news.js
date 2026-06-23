// News log entries. `summary` may contain HTML (links, <img>, gifs, etc.).
const NEWS = [
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
    n =>
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
