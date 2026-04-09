# HDFS Video Storage & Streaming Optimization
## BDA Lab — Unit II —(Hadoop Ecosystem + Storage + Optimization) 
## Project No - 28

---
##  Team

| Roll No | Name |
|---------|------|
| 55 | Hea Kapai |
| 56 | Ishika Mokati |
## Project Structure

```
hdfs_dashboard/
│
├── index.html          ← Main HTML file (open this in browser)
│
├── css/
│   └── styles.css      ← All CSS styles and layout
│
└── js/
    ├── data.js         ← Command output data (CMD_OUTPUTS object)
    ├── simulator.js    ← Streaming simulator logic (startStream function)
    └── commands.js     ← Command explorer interaction (showCmd function)
```

---

## How to Run

1. Download and extract the `hdfs_dashboard` folder
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox)
3. No server needed — runs entirely in the browser

---

## Features

- Live status bar showing daemon states (NameNode, DataNode, YARN)
- 4 metric cards (file size, blocks, replication, FSCK health)
- Block storage visualizer showing how sample.mp4 is stored
- Replication analysis table with status badges
- Throughput bar chart comparing 64 MB / 128 MB / 256 MB block sizes
- Interactive streaming simulator with configurable file size, block size, replication
- Annotated real FSCK output from the lab
- Command Explorer — click any command to see its output
- What We Did — 7-step explanation of every command run
- What We Learnt — 6 key learning cards

---

## Lab Details

| Field         | Value                                      |
|---------------|--------------------------------------------|
| Course        | Big Data Analytics Lab                     |
| Unit          | Unit II — Hadoop Ecosystem + Storage + Optimization       |
| Project No.   | 28                                         |
| Topic         | HDFS-Based Video Storage & Streaming       |
| Concepts      | Block storage, Replication, Throughput     |
| Hadoop        | Apache Hadoop 2.9.2 (Windows)              |
