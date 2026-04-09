/* ============================================================
   data.js — Command output data for the Command Explorer
   BDA Lab Project #28 — HDFS Video Storage Dashboard
   ============================================================ */

const CMD_OUTPUTS = {

  jps: `<span class="info">29276 NameNode</span>
<span class="info">18152 DataNode</span>
<span class="dim">15468 Jps</span>

<span class="ok">✔  2 HDFS daemons running</span>
<span class="dim">   NameNode  (PID 29276)  — manages metadata, port 9000</span>
<span class="dim">   DataNode  (PID 18152)  — stores actual block data, port 50010</span>
<span class="warn">   ResourceManager and NodeManager not shown — run: start-yarn.cmd</span>`,

  ls: `<span class="ok">Found 1 items</span>
<span class="info">-rw-r--r--   1 HeaTash supergroup   17839845 2026-04-08 18:25 /video/sample.mp4</span>

<span class="dim">Permissions : -rw-r--r--  (owner: read/write, group & others: read-only)</span>
<span class="dim">Owner       : HeaTash</span>
<span class="dim">Group       : supergroup</span>
<span class="dim">Size        : 17,839,845 bytes  =  17.0 MB</span>
<span class="dim">Uploaded    : 2026-04-08 18:25 IST</span>`,

  fsck: `<span class="ok">FSCK started</span> by HeaTash (auth:SIMPLE) from /127.0.0.1
<span class="info">/video/sample.mp4</span>  17839845 bytes,  <span class="ok">1 block(s)</span>:  OK
  0. <span class="info">blk_1073741825_1001</span>  len=17839845  Live_repl=<span class="ok">1</span>
     [DatanodeInfoWithStorage[<span class="ok">127.0.0.1:50010</span>, DISK]]

Status:              <span class="ok">HEALTHY</span>
Total size         : 17,839,845 B
Total blocks       : <span class="ok">1</span>   (avg block size = 17.8 MB)
Min replicated     : <span class="ok">1 (100%)</span>
Under-replicated   : <span class="warn">1 (100%)</span>  ← setrep=2 but only 1 DataNode!
Missing replicas   : <span class="warn">1 (50%)</span>
Corrupt blocks     : <span class="ok">0</span>
DataNodes          : 1`,

  report: `<span class="ok">Configured Capacity</span> : 476.7 GB
<span class="ok">Present Capacity</span>    : 430.1 GB
<span class="info">DFS Used</span>            : 17.0 MB  (0.00%)
<span class="ok">DFS Remaining</span>       : 430.1 GB
<span class="warn">Under replicated    : 1 block(s)</span>
Blocks with corrupt : 0
Missing blocks      : 0

Live datanodes (<span class="ok">1</span>):
  Name   : <span class="info">127.0.0.1:50010</span>  (localhost)
  Status : Normal (not decommissioned)
  Capacity         : 476.7 GB
  DFS Used         : 17.0 MB
  DFS Remaining    : 430.1 GB
  Last contact     : Wed Apr 08 18:37:49 IST 2026`,

  stat: `<span class="warn">2</span>  <span class="info">17839845</span>  <span class="ok">sample.mp4</span>

<span class="dim">Format used : %r = replication factor, %b = size in bytes, %n = filename</span>
<span class="dim">Replication : 2  (set via setrep — but under-replicated, only 1 DataNode)</span>
<span class="dim">File size   : 17,839,845 bytes</span>
<span class="dim">Filename    : sample.mp4</span>`,

  setrep: `<span class="ok">Replication 2 set: /video/sample.mp4</span>
<span class="warn">Waiting for /video/sample.mp4 ................................ (Ctrl+C pressed)</span>

<span class="warn">⚠  Waiting loop is EXPECTED behavior on a single-node cluster.</span>
<span class="dim">   HDFS accepted replication=2 but cannot fulfill it with only 1 DataNode.
   The file remains fully accessible — this is a valid and correct lab result.
   To stop waiting  : press Ctrl+C
   To reset to 1    : hdfs dfs -setrep 1 /video/sample.mp4</span>`
};
