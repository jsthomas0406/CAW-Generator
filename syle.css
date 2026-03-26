* {
  box-sizing: border-box;
}

:root {
  --bg: #0b0d12;
  --panel: #151922;
  --panel-2: #1b2130;
  --border: #2a3246;
  --text: #f5f7fb;
  --muted: #a9b3c7;
  --accent: #2f6fed;
  --accent-hover: #2558bf;
  --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background:
    radial-gradient(circle at top, #141a26 0%, #0b0d12 35%, #090b10 100%);
  color: var(--text);
  min-height: 100vh;
}

.app {
  max-width: 1150px;
  margin: 0 auto;
  padding: 28px 18px 48px;
}

.header {
  text-align: center;
  margin-bottom: 28px;
}

.header h1 {
  margin: 0 0 8px;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: 0.03em;
}

.header p {
  margin: 0;
  color: var(--muted);
  font-size: 1rem;
}

.search-card,
.card {
  background: linear-gradient(180deg, var(--panel) 0%, var(--panel-2) 100%);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--card-shadow);
}

.search-card {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 18px;
  margin-bottom: 16px;
}

.card {
  padding: 18px;
  margin-bottom: 18px;
}

.card h2 {
  margin: 0 0 14px;
  font-size: 1.15rem;
  color: var(--text);
}

.result-title-card h2 {
  margin-bottom: 6px;
}

.result-title-card p {
  margin: 0;
  color: var(--muted);
}

select,
input {
  flex: 1 1 240px;
  min-width: 220px;
  padding: 13px 14px;
  border-radius: 12px;
  border: 1px solid #39445d;
  background: #0f141d;
  color: var(--text);
  outline: none;
  font-size: 0.98rem;
  transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

select:focus,
input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(47, 111, 237, 0.18);
  background: #111826;
}

select {
  cursor: pointer;
}

button {
  padding: 13px 20px;
  border: none;
  border-radius: 12px;
  background: var(--accent);
  color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.98rem;
  transition: background 0.18s ease, transform 0.12s ease;
}

button:hover {
  background: var(--accent-hover);
}

button:active {
  transform: translateY(1px);
}

.search-divider {
  color: var(--muted);
  font-size: 0.95rem;
  padding: 0 2px;
}

.status {
  min-height: 24px;
  margin: 8px 2px 18px;
  color: var(--muted);
  font-size: 0.97rem;
}

.results.hidden {
  display: none;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 10px;
}

.stat {
  background: #0f141d;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 11px 12px;
  min-height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stat strong {
  display: block;
  margin-bottom: 6px;
  color: #d7def0;
  font-size: 0.95rem;
}

ul {
  margin: 0;
  padding-left: 20px;
}

li {
  margin-bottom: 9px;
  color: #e7ebf5;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 700px) {
  .app {
    padding: 18px 12px 36px;
  }

  .search-card {
    flex-direction: column;
    align-items: stretch;
  }

  .search-divider {
    text-align: center;
    width: 100%;
  }

  button,
  select,
  input {
    width: 100%;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}
