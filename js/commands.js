/* ============================================================
   commands.js — Command Explorer interaction logic
   BDA Lab Project #28 — HDFS Video Storage Dashboard
   ============================================================ */

console.log('✓ commands.js loaded successfully');

/* Track the currently selected command card */
let activeCmd = null;

/**
 * showCmd(key)
 * Displays the output for the given command key in the output box.
 * Highlights the active command card with a blue border.
 *
 * @param {string} key - One of: 'jps', 'ls', 'fsck', 'report', 'stat', 'setrep'
 */
function showCmd(key) {

  /* Get the output element */
  const outputBox = document.getElementById('cmdOut');

  /* Look up output from the data file (CMD_OUTPUTS defined in data.js) */
  const output = CMD_OUTPUTS[key];

  if (!output) {
    outputBox.innerHTML = '<span class="dim">-- no output available for this command --</span>';
    return;
  }

  /* Animate the output — clear first, then set with a tiny delay */
  outputBox.style.opacity = '0';
  setTimeout(function () {
    outputBox.innerHTML   = output;
    outputBox.style.opacity = '1';
  }, 120);

  /* ── Highlight the active command card ──
     Remove highlight from previously active card, then add to clicked one. */
  const allCards = document.querySelectorAll('.cmd-c');

  allCards.forEach(function (card) {
    card.style.borderColor = '';
    card.style.background  = '';
  });

  /* Find the clicked card by its onclick attribute */
  allCards.forEach(function (card) {
    const onclickAttr = card.getAttribute('onclick');
    if (onclickAttr && onclickAttr.includes("'" + key + "'")) {
      card.style.borderColor = 'rgba(59, 130, 246, 0.8)';
      card.style.background  = 'rgba(59, 130, 246, 0.12)';
      activeCmd = card;
    }
  });
}

/* ── Smooth opacity transition for the output box ── */
(function initOutputTransition() {
  const outputBox = document.getElementById('cmdOut');
  if (outputBox) {
    outputBox.style.transition = 'opacity 0.12s ease';
  }
})();
