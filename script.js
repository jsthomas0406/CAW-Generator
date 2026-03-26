console.log("script loaded");

const wrestlerProfiles = {
  "saquon shugars": {
    style: "high_flyer",
    power: 42,
    striking: 68,
    grappling: 48,
    aerial: 86,
    submission: 18,
    speed: 84,
    agility: 88,
    stamina: 74,
    durability: 50,
    aggression: 68,
    crowd: 82,
    craftiness: 56,
    hardcore: 16,
    springboard: 82,
    running: 80,
    grounded: 24,
    limb: 18,
    recovery: 58
  }
};

const wrestlerInput = document.getElementById("wrestlerInput");
const generateBtn = document.getElementById("generateBtn");
const statusEl = document.getElementById("status");
const resultsEl = document.getElementById("results");
const coreAttributesEl = document.getElementById("coreAttributes");

function clamp(value, min, max) {
  return Math.max(min, Math.min(Math.round(value), max));
}

function formatLabel(text) {
  return text.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

function generateBuild(name) {
  const p = wrestlerProfiles[name];

  return {
    arm_power: clamp(p.power * 0.6 + p.striking * 0.4, 0, 90),
    leg_power: clamp(p.aerial * 0.5 + p.speed * 0.5, 0, 90),
    grapple_offense: clamp(p.grappling, 0, 85),
    running_offense: clamp(p.running, 0, 95),
    aerial_offense: clamp(p.aerial, 0, 95)
  };
}

function renderCore(core) {
  coreAttributesEl.innerHTML = "";

  Object.entries(core).forEach(([key, value]) => {
    const div = document.createElement("div");
    div.className = "stat";
    div.innerHTML = "<strong>" + formatLabel(key) + "</strong><br>" + value;
    coreAttributesEl.appendChild(div);
  });
}

generateBtn.addEventListener("click", () => {
  console.log("generate clicked");

  const name = wrestlerInput.value.trim().toLowerCase();

  if (!name) {
    statusEl.textContent = "Enter a wrestler name.";
    return;
  }

  if (!wrestlerProfiles[name]) {
    statusEl.textContent = "Wrestler not found.";
    return;
  }

  const build = generateBuild(name);

  statusEl.textContent = "Generated for " + formatLabel(name);
  resultsEl.classList.remove("hidden");

  renderCore(build);
});
