/* ============================================================
   simulator.js — Live Streaming Simulator logic
   BDA Lab Project #28 — HDFS Video Storage Dashboard
   ============================================================ */

console.log('✓ simulator.js loaded successfully');

/* Throughput values (MB/s) for each block size configuration */
const THROUGHPUT_MAP = {
  64:  190,
  128: 250,
  256: 340
};

/* Replication bonus multiplier — more replicas = more read parallelism */
const REPLICATION_BONUS = 0.05;

/* Holds the setInterval reference so we can clear it on re-run */
let streamInterval = null;

/**
 * startStream()
 * Reads values from the simulator controls, computes block count,
 * throughput, and estimated time, then animates the progress bar.
 */
function startStream() {

  /* Clear any previously running animation */
  if (streamInterval) {
    clearInterval(streamInterval);
    streamInterval = null;
  }

  /* Read control values */
  const fileSizeMB  = parseInt(document.getElementById('fsize').value);
  const blockSizeMB = parseInt(document.getElementById('bsize').value);
  const replication = parseInt(document.getElementById('repl').value);

  /* ── Calculations ── */
  const totalBlocks      = Math.max(1, Math.ceil(fileSizeMB / blockSizeMB));
  const baseThroughput   = THROUGHPUT_MAP[blockSizeMB];
  const throughput       = Math.round(baseThroughput * (1 + replication * REPLICATION_BONUS));
  const estimatedSeconds = fileSizeMB / throughput;

  /* ── Update stat cards ── */
  document.getElementById('ssBlk').textContent = totalBlocks;
  document.getElementById('ssSpd').textContent = throughput + ' MB/s';
  document.getElementById('ssTm').textContent  = estimatedSeconds < 1
    ? '<1s'
    : estimatedSeconds.toFixed(1) + 's';

  /* ── Update replication badge in metric card ── */
  document.getElementById('repTopVal').textContent = replication + '×';

  /* ── Reset progress bar ── */
  const bar   = document.getElementById('progBar');
  const pct   = document.getElementById('progPct');
  const label = document.getElementById('progLbl');

  bar.style.width = '0%';
  pct.textContent = '0%';
  label.textContent = 'Starting stream...';

  /* ── Animate progress ──
     We use a minimum animation time of 2s so the bar is always visible
     even when the file is tiny (17 MB streams in <0.1s at 250 MB/s).  */
  const animDuration = Math.max(2.0, estimatedSeconds);
  const intervalMs   = 40;                           /* update every 40 ms */
  const stepPerTick  = 100 / (animDuration * (1000 / intervalMs));
  let   currentPct   = 0;

  streamInterval = setInterval(function () {

    currentPct = Math.min(100, currentPct + stepPerTick);

    const readMB = (fileSizeMB * currentPct / 100).toFixed(1);

    bar.style.width       = currentPct + '%';
    pct.textContent       = Math.round(currentPct) + '%';
    label.textContent     = currentPct < 100
      ? 'Streaming ' + readMB + ' / ' + fileSizeMB + ' MB...'
      : 'Stream complete — ' + fileSizeMB + ' MB in '
        + (estimatedSeconds < 1 ? '<1' : estimatedSeconds.toFixed(1)) + 's';

    if (currentPct >= 100) {
      clearInterval(streamInterval);
      streamInterval = null;
    }

  }, intervalMs);
}
