console.log("script loaded");

const wrestlerProfiles = {
  "arianna grace": { style: "showboat", power: 42, striking: 58, grappling: 50, aerial: 38, submission: 28, speed: 62, agility: 66, stamina: 64, durability: 52, aggression: 44, crowd: 86, craftiness: 78, hardcore: 18, springboard: 12, running: 52, grounded: 42, limb: 30, recovery: 58 },
  "brad baylor": { style: "cocky_striker", power: 56, striking: 74, grappling: 54, aerial: 48, submission: 26, speed: 72, agility: 70, stamina: 68, durability: 58, aggression: 72, crowd: 70, craftiness: 62, hardcore: 26, springboard: 20, running: 72, grounded: 46, limb: 32, recovery: 62 },
  "bronco nima": { style: "powerhouse", power: 88, striking: 68, grappling: 80, aerial: 8, submission: 16, speed: 44, agility: 38, stamina: 64, durability: 82, aggression: 78, crowd: 58, craftiness: 24, hardcore: 36, springboard: 0, running: 52, grounded: 72, limb: 24, recovery: 68 },
  "cutler james": { style: "hybrid", power: 60, striking: 66, grappling: 68, aerial: 30, submission: 34, speed: 62, agility: 58, stamina: 66, durability: 64, aggression: 66, crowd: 56, craftiness: 42, hardcore: 28, springboard: 4, running: 58, grounded: 56, limb: 34, recovery: 62 },
  "dion lennox": { style: "power_striker", power: 82, striking: 74, grappling: 72, aerial: 10, submission: 20, speed: 50, agility: 44, stamina: 66, durability: 80, aggression: 84, crowd: 60, craftiness: 26, hardcore: 38, springboard: 0, running: 54, grounded: 70, limb: 28, recovery: 70 },
  "eli knight": { style: "athletic", power: 58, striking: 66, grappling: 60, aerial: 54, submission: 26, speed: 74, agility: 76, stamina: 68, durability: 56, aggression: 64, crowd: 68, craftiness: 48, hardcore: 20, springboard: 26, running: 74, grounded: 42, limb: 28, recovery: 60 },
  "elio lefleur": { style: "flashy_aerial", power: 44, striking: 62, grappling: 46, aerial: 78, submission: 18, speed: 82, agility: 84, stamina: 70, durability: 48, aggression: 62, crowd: 80, craftiness: 54, hardcore: 16, springboard: 74, running: 78, grounded: 28, limb: 20, recovery: 56 },
  "jackson drake": { style: "cocky_hybrid", power: 54, striking: 68, grappling: 60, aerial: 42, submission: 22, speed: 70, agility: 68, stamina: 66, durability: 56, aggression: 68, crowd: 74, craftiness: 58, hardcore: 22, springboard: 18, running: 72, grounded: 40, limb: 24, recovery: 60 },
  "jasper troy": { style: "big_man", power: 90, striking: 70, grappling: 84, aerial: 6, submission: 14, speed: 40, agility: 34, stamina: 62, durability: 86, aggression: 80, crowd: 56, craftiness: 18, hardcore: 34, springboard: 0, running: 48, grounded: 78, limb: 20, recovery: 70 },
  "kale dixon": { style: "crafty", power: 46, striking: 58, grappling: 52, aerial: 28, submission: 34, speed: 60, agility: 62, stamina: 62, durability: 50, aggression: 46, crowd: 64, craftiness: 82, hardcore: 16, springboard: 8, running: 50, grounded: 38, limb: 40, recovery: 54 },
  "keanu carver": { style: "intense_power", power: 84, striking: 72, grappling: 76, aerial: 10, submission: 18, speed: 48, agility: 42, stamina: 64, durability: 82, aggression: 86, crowd: 54, craftiness: 20, hardcore: 42, springboard: 0, running: 52, grounded: 74, limb: 24, recovery: 68 },
  "kendal grey": { style: "technical_athlete", power: 56, striking: 62, grappling: 74, aerial: 34, submission: 56, speed: 66, agility: 68, stamina: 72, durability: 58, aggression: 58, crowd: 60, craftiness: 52, hardcore: 14, springboard: 10, running: 60, grounded: 56, limb: 58, recovery: 62 },
  "lainey reid": { style: "scrappy", power: 44, striking: 60, grappling: 56, aerial: 32, submission: 30, speed: 64, agility: 66, stamina: 64, durability: 52, aggression: 68, crowd: 58, craftiness: 46, hardcore: 20, springboard: 10, running: 62, grounded: 42, limb: 30, recovery: 56 },
  "lucien price": { style: "heavy_hitter", power: 86, striking: 76, grappling: 74, aerial: 8, submission: 18, speed: 46, agility: 38, stamina: 64, durability: 84, aggression: 82, crowd: 62, craftiness: 22, hardcore: 40, springboard: 0, running: 50, grounded: 74, limb: 22, recovery: 68 },
  "niko vance": { style: "big_hybrid", power: 78, striking: 68, grappling: 74, aerial: 12, submission: 20, speed: 50, agility: 46, stamina: 64, durability: 78, aggression: 74, crowd: 58, craftiness: 26, hardcore: 34, springboard: 0, running: 54, grounded: 68, limb: 24, recovery: 66 },
  "osiris griffin": { style: "explosive_power", power: 88, striking: 72, grappling: 80, aerial: 14, submission: 16, speed: 52, agility: 48, stamina: 66, durability: 84, aggression: 82, crowd: 60, craftiness: 20, hardcore: 38, springboard: 0, running: 56, grounded: 72, limb: 22, recovery: 68 },
  "ricky smokes": { style: "showboat_striker", power: 50, striking: 70, grappling: 54, aerial: 46, submission: 20, speed: 72, agility: 70, stamina: 64, durability: 54, aggression: 66, crowd: 84, craftiness: 64, hardcore: 18, springboard: 18, running: 74, grounded: 36, limb: 24, recovery: 58 },
  "saquon shugars": { style: "high_flyer", power: 42, striking: 68, grappling: 48, aerial: 86, submission: 18, speed: 84, agility: 88, stamina: 74, durability: 50, aggression: 68, crowd: 82, craftiness: 56, hardcore: 16, springboard: 82, running: 80, grounded: 24, limb: 18, recovery: 58 },
  "shiloh hill": { style: "athletic_power", power: 80, striking: 70, grappling: 72, aerial: 22, submission: 18, speed: 58, agility: 54, stamina: 68, durability: 78, aggression: 76, crowd: 58, craftiness: 24, hardcore: 30, springboard: 2, running: 60, grounded: 66, limb: 24, recovery: 66 }
};

const wrestlerInput = document.getElementById("wrestlerInput");
const wrestlerSelect = document.getElementById("wrestlerSelect");
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
  const map = {
    high_flyer: {
      signatures: ["Springboard Cutter", "Missile Dropkick"],
      finishers: ["630 Senton", "Spiral Tap"],
      taunts: ["Crowd hype", "Fast taunt", "Wake up taunt"]
    },
    powerhouse: {
      signatures: ["Spinebuster", "Body Block"],
      finishers: ["Powerbomb", "Chokeslam"],
      taunts: ["Power pose", "Intimidation", "Wake up stare"]
    }
  };

  return map[style] || {
    signatures: ["DDT", "Running Forearm"],
    finishers: ["Cutter", "Spinning Kick"],
    taunts: ["Crowd taunt", "Opponent taunt", "Wake up taunt"]
  };
}

function generateSkillPoints(core) {
  return {
    offense_points: Math.round((core.arm_power + core.leg_power + core.grapple_offense + core.running_offense + core.aerial_offense) / 5),
    defense_points: Math.round((core.strength + core.stamina + core.recovery) / 3),
    recovery_points: core.recovery,
    stamina_points: core.stamina,
    special_points: core.special,
    finisher_points: core.finisher,
    mobility_points: Math.round((core.agility + core.movement_speed) / 2)
  };
}

function handleGenerate() {
  const rawName = wrestlerInput.value.trim().toLowerCase();

  if (!rawName) {
    statusEl.textContent = "Enter a wrestler name.";
    resultsEl.classList.add("hidden");
    return;
  }

  if (!wrestlerProfiles[rawName]) {
    statusEl.textContent = "Wrestler not found.";
    resultsEl.classList.add("hidden");
    return;
  }

  const profile = wrestlerProfiles[rawName];
  const core = generateCore(profile);
  const ai = generateAI(profile);
  const moves = generateMoves(profile.style);
  const skills = generateSkillPoints(core);

  statusEl.textContent = "Generated for " + formatLabel(rawName);
  resultWrestlerName.textContent = formatLabel(rawName);
  resultSubtitle.textContent = "Gameplay-focused prototype output";
  resultsEl.classList.remove("hidden");

  renderGrid(coreAttributesEl, core);
  renderGrid(aiAttributesEl, ai);
  renderGrid(skillPointsEl, skills);
  renderList(signaturesEl, moves.signatures);
  renderList(finishersEl, moves.finishers);
  renderList(tauntsEl, moves.taunts);
}

if (wrestlerSelect) {
  wrestlerSelect.addEventListener("change", () => {
    wrestlerInput.value = wrestlerSelect.value;
  });
}

if (wrestlerInput) {
  wrestlerInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      handleGenerate();
    }
  });
}

if (generateBtn) {
  generateBtn.addEventListener("click", handleGenerate);
}
