/* Runs synchronously before the body paints (no defer/async, loaded in <head>).
   If a session already exists, hide the landing page immediately via a CSS
   hook (see "html.has-session #landing" in styles.css) so returning signed-in
   users don't see a flash of the marketing landing page before app.js
   (deferred) finishes loading data and swaps in the dashboard. */
(function () {
  try {
    if (sessionStorage.getItem("crewmatch_session_v5")) {
      document.documentElement.classList.add("has-session");
    }
  } catch (_) {
    /* sessionStorage unavailable (e.g. privacy mode) — fall back to normal flow */
  }
})();
