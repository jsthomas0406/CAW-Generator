console.log("script loaded");

const wrestlerInput = document.getElementById("wrestlerInput");
const generateBtn = document.getElementById("generateBtn");
const statusEl = document.getElementById("status");
const resultsEl = document.getElementById("results");
const coreAttributesEl = document.getElementById("coreAttributes");
const aiAttributesEl = document.getElementById("aiAttributes");
const signaturesEl = document.getElementById("signatures");
const finishersEl = document.getElementById("finishers");
const tauntsEl = document.getElementById("taunts");
const skillPointsEl = document.getElementById("skillPoints");
const resultWrestlerName = document.getElementById("resultWrestlerName");
const resultSubtitle = document.getElementById("resultSubtitle");
const wrestlerSelect = document.getElementById("wrestlerSelect");

async function fetchPageText(url) {
  const proxy = "https://corsproxy.io/?" + encodeURIComponent(url);

  try {
    const res = await fetch(proxy);
    const html = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    return doc.body ? doc.body.innerText : "";
  } catch (err) {
    console.error("Fetch failed:", err);
    return "";
  }
}

function buildCagematchURL(name) {
  const formatted = name.trim().replace(/\s+/g, "+");
  return `https://www.cagematch.net/?id=2&name=${formatted}`;
}

function extractTraits(text) {
  const lower = text.toLowerCase();

  const traits = {
    aerial: 0,
    power: 0,
    speed: 0,
    submission: 0,
    crowd: 0,
    aggression: 0,
    grapple: 0
  };

  function count(words, field) {
    words.forEach((word) => {
      if (lower.includes(word)) {
        traits[field] += 1;
      }
    });
  }

  count(["springboard", "moonsault", "450", "dive", "top rope", "shooting star"], "aerial");
  count(["powerbomb", "slam", "spinebuster", "dominant", "strength", "powerhouse"], "power");
  count(["fast", "quick", "explosive", "speed", "rapid"], "speed");
  count(["submission", "armbar", "crossface", "hold", "tap out"], "submission");
  count(["charismatic", "crowd", "taunt", "showboat", "swagger"], "crowd");
  count(["aggressive", "ruthless", "vicious", "violent", "fierce"], "aggression");
  count(["suplex", "grapple", "wrestling", "mat", "throw"], "grapple");

  return traits;
}

function renderGrid(container, obj) {
  if (!container) return;
  container.innerHTML = "";

  Object.entries(obj).forEach(([key, value]) => {
    const div = document.createElement("div");
    div.className = "stat";
    div.innerHTML = `<strong>${key}</strong><br>${value}`;
    container.appendChild(div);
  });
}

function renderList(container, items) {
  if (!container) return;
  container.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

async function handleGenerate() {
  console.log("generate clicked");

  const name = wrestlerInput.value.trim();

  if (!name) {
    statusEl.textContent = "Enter a wrestler name.";
    if (resultsEl) resultsEl.classList.add("hidden");
    return;
  }

  statusEl.textContent = "Scraping...";

  const url = buildCagematchURL(name);
  const text = await fetchPageText(url);

  if (!text || text.length < 100) {
    statusEl.textContent = "Failed to fetch usable data.";
    if (resultsEl) resultsEl.classList.add("hidden");
    return;
  }

  const traits = extractTraits(text);

  statusEl.textContent = "Generated from scraped data";

  if (resultWrestlerName) resultWrestlerName.textContent = name;
  if (resultSubtitle) resultSubtitle.textContent = "Source-based prototype output";
  if (resultsEl) resultsEl.classList.remove("hidden");

  renderGrid(coreAttributesEl, traits);
  renderGrid(aiAttributesEl, {
    aerial_keywords: traits.aerial,
    power_keywords: traits.power,
    speed_keywords: traits.speed,
    submission_keywords: traits.submission,
    crowd_keywords: traits.crowd,
    aggression_keywords: traits.aggression,
    grapple_keywords: traits.grapple
  });

  renderList(signaturesEl, ["Scraped data detected."]);
  renderList(finishersEl, ["Scraped data detected."]);
  renderList(tauntsEl, ["Scraped data detected."]);
  renderGrid(skillPointsEl, {
    text_length: text.length,
    aerial_hits: traits.aerial,
    power_hits: traits.power,
    speed_hits: traits.speed,
    submission_hits: traits.submission
  });

  console.log("SCRAPED URL:", url);
  console.log("TEXT SAMPLE:", text.substring(0, 300));
  console.log("TRAITS:", traits);
}

if (wrestlerSelect && wrestlerInput) {
  wrestlerSelect.addEventListener("change", () => {
    wrestlerInput.value = wrestlerSelect.value;
  });
}

if (generateBtn) {
  generateBtn.addEventListener("click", handleGenerate);
} else {
  console.error("generateBtn not found");
}

if (wrestlerInput) {
  wrestlerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleGenerate();
    }
  });
}
