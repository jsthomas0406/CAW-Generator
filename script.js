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
  },
  "bronco nima": {
    style: "powerhouse",
    power: 88,
    striking: 68,
    grappling: 80,
    aerial: 8,
    submission: 16,
    speed: 44,
    agility: 38,
    stamina: 64,
    durability: 82,
    aggression: 78,
    crowd: 58,
    craftiness: 24,
    hardcore: 36,
    springboard: 0,
    running: 52,
    grounded: 72,
    limb: 24,
    recovery: 68
  }
};

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

function clamp(v, min, max) {
  return Math.max(min, Math.min(Math.round(v), max));
}

function formatLabel(text) {
  return text.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

function renderGrid(container, obj) {
  container.innerHTML = "";
  Object.entries(obj).forEach(([k, v]) => {
    const div = document.createElement("div");
    div.className = "stat";
    div.innerHTML = "<strong>" + formatLabel(k) + "</strong><br>" + v;
    container.appendChild(div);
  });
}

function renderList(container, list) {
  container.innerHTML = "";
  list.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

function generateCore(p) {
  return {
    arm_power: clamp(p.striking * 0.5 + p.power * 0.5, 0, 90),
    leg_power: clamp(p.aerial * 0.6 + p.speed * 0.4, 0, 90),
    grapple_offense: clamp(p.grappling, 0, 85),
    running_offense: clamp(p.running, 0, 95),
    aerial_offense: clamp(p.aerial, 0, 95),
    strength: clamp(p.power, 0, 100),
    stamina: clamp(p.stamina, 0, 90),
    agility: clamp(p.agility, 0, 90),
    movement_speed: clamp(p.speed, 0, 90),
    recovery: clamp(p.recovery, 0, 95),
    special: clamp(p.crowd, 0, 100),
    finisher: clamp(p.aggression, 0, 100)
  };
}

function generateAI(p) {
  return {
    combo_tendency: clamp(p.striking, 0, 100),
    heavy_grapple_tendency: clamp(p.power, 0, 100),
    dive_tendency: clamp(p.aerial, 0, 100),
    running_attack_tendency: clamp(p.running, 0, 100),
    dodging_tendency: clamp(p.agility, 0, 100),
    weapon_usage_tendency: clamp(p.hardcore, 0, 100)
  };
}

function generateMoves(style) {
  if (style === "high_flyer") {
    return {
      signatures: ["Springboard Cutter", "Missile Dropkick"],
      finishers: ["630 Senton", "Spiral Tap"],
      taunts: ["Crowd hype", "Fast taunt", "Wake up taunt"]
    };
  }

  if (style === "powerhouse") {
    return {
      signatures: ["Spinebuster", "Body Block"],
      finishers: ["Powerbomb", "Chokeslam"],
      taunts: ["Power pose", "Intimidation", "Wake up stare"]
    };
  }

  return {
    signatures: ["DDT"],
    finishers: ["Cutter"],
    taunts: ["Basic taunt"]
  };
}

function generateSkillPoints(core) {
  return {
    offense: Math.round((core.arm_power + core.leg_power) / 2),
    defense: Math.round((core.strength + core.stamina) / 2),
    mobility: Math.round((core.agility + core.movement_speed) / 2),
    special: core.special,
    finisher: core.finisher
  };
}

generateBtn.addEventListener("click", () => {
  console.log("generate clicked");

  const name = wrestlerInput.value.trim().toLowerCase();

  if (!name) {
    statusEl.textContent = "Enter a wrestler name.";
    resultsEl.classList.add("hidden");
    return;
  }

  if (!wrestlerProfiles[name]) {
    statusEl.textContent = "Wrestler not found.";
    resultsEl.classList.add("hidden");
    return;
  }

  const profile = wrestlerProfiles[name];

  const core = generateCore(profile);
  const ai = generateAI(profile);
  const moves = generateMoves(profile.style);
  const skills = generateSkillPoints(core);

  statusEl.textContent = "Generated for " + formatLabel(name);
  resultWrestlerName.textContent = formatLabel(name);
  resultsEl.classList.remove("hidden");

  renderGrid(coreAttributesEl, core);
  renderGrid(aiAttributesEl, ai);
  renderGrid(skillPointsEl, skills);
  renderList(signaturesEl, moves.signatures);
  renderList(finishersEl, moves.finishers);
  renderList(tauntsEl, moves.taunts);
});
