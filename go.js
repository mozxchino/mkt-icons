// Home-screen pass-through: link = <page>.html#n=<name>&u=<Apps Script URL>[&add]
// The hash never reaches GitHub, so a branch's POS link stays on the phone only.
// &add = show "add to home screen" steps (removed from the URL so the saved shortcut redirects).
(function () {
  var q = new URLSearchParams(location.hash.slice(1)), u = q.get('u') || '', n = q.get('n');
  if (n) document.title = n;
  var ua = navigator.userAgent;
  window.GO = { u: u, n: n || '', inapp: /\bLine\/|FBAN|FBAV|Instagram/i.test(ua), android: /Android/i.test(ua) };   // LINE/FB in-app browser cannot add to home screen
  // only Apps Script web-app links: never an open redirect to other sites
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/(exec|dev)(\?p=\w+)?$/.test(u)) { GO.mode = 'bad'; return; }
  if (q.has('add')) { q.delete('add'); history.replaceState(null, '', '#' + q.toString()); GO.mode = 'add'; return; }
  GO.mode = 'go'; location.replace(u);
})();
