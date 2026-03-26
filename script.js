console.log("script loaded");

const wrestlerProfiles = {
  "arianna grace": {
    style: "showboat",
    power: 42,
    striking: 58,
    grappling: 50,
    aerial: 38,
    submission: 28,
    speed: 62,
    agility: 66,
    stamina: 64,
    durability: 52,
    aggression: 44,
    crowd: 86,
    craftiness: 78,
    hardcore: 18,
    springboard: 12,
    running: 52,
    grounded: 42,
    limb: 30,
    recovery: 58
  },
  "brad baylor": {
    style: "cocky_striker",
    power: 56,
    striking: 74,
    grappling: 54,
    aerial: 48,
    submission: 26,
    speed: 72,
    agility: 70,
    stamina: 68,
    durability: 58,
    aggression: 72,
    crowd: 70,
    craftiness: 62,
    hardcore: 26,
    springboard: 20,
    running: 72,
    grounded: 46,
    limb: 32,
    recovery: 62
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
  },
  "cutler james": {
    style: "hybrid",
    power: 60,
    striking: 66,
    grappling: 68,
    aerial: 30,
    submission: 34,
    speed: 62,
    agility: 58,
    stamina: 66,
    durability: 64,
    aggression: 66,
    crowd: 56,
    craftiness: 42,
    hardcore: 28,
    springboard: 4,
    running: 58,
    grounded: 56,
    limb: 34,
    recovery: 62
  },
  "dion lennox": {
    style: "power_striker",
    power: 82,
    striking: 74,
    grappling: 72,
    aerial: 10,
    submission: 20,
    speed: 50,
    agility: 44,
    stamina: 66,
    durability: 80,
    aggression: 84,
    crowd: 60,
    craftiness: 26,
    hardcore: 38,
    springboard: 0,
    running: 54,
    grounded: 70,
    limb: 28,
    recovery: 70
  },
  "eli knight": {
    style: "athletic",
    power: 58,
    striking: 66,
    grappling: 60,
    aerial: 54,
    submission: 26,
    speed: 74,
    agility: 76,
    stamina: 68,
    durability: 56,
    aggression: 64,
    crowd: 68,
    craftiness: 48,
    hardcore: 20,
    springboard: 26,
    running: 74,
    grounded: 42,
    limb: 28,
    recovery: 60
  },
  "elio lefleur": {
    style: "flashy_aerial",
    power: 44,
    striking: 62,
    grappling: 46,
    aerial: 78,
    submission: 18,
    speed: 82,
    agility: 84,
    stamina: 70,
    durability: 48,
    aggression: 62,
    crowd: 80,
    craftiness: 54,
    hardcore: 16,
    springboard: 74,
    running: 78,
    grounded: 28,
    limb: 20,
    recovery: 56
  },
  "jackson drake": {
    style: "cocky_hybrid",
    power: 54,
    striking: 68,
    grappling: 60,
    aerial: 42,
    submission: 22,
    speed: 70,
    agility: 68,
    stamina: 66,
    durability: 56,
    aggression: 68,
    crowd: 74,
    craftiness: 58,
    hardcore: 22,
    springboard: 18,
    running: 72,
    grounded: 40,
    limb: 24,
    recovery: 60
  },
  "jasper troy": {
    style: "big_man",
    power: 90,
    striking: 70,
    grappling: 84,
    aerial: 6,
    submission: 14,
    speed: 40,
    agility: 34,
    stamina: 62,
    durability: 86,
    aggression: 80,
    crowd: 56,
    craftiness: 18,
    hardcore: 34,
    springboard: 0,
    running: 48,
    grounded: 78,
    limb: 20,
    recovery: 70
  },
  "kale dixon": {
    style: "crafty",
    power: 46,
    striking: 58,
    grappling: 52,
    aerial: 28,
    submission: 34,
    speed: 60,
    agility: 62,
    stamina: 62,
    durability: 50,
    aggression: 46,
    crowd: 64,
    craftiness: 82,
    hardcore: 16,
    springboard: 8,
    running: 50,
    grounded: 38,
    limb: 40,
    recovery: 54
  },
  "keanu carver": {
    style: "intense_power",
    power: 84,
    striking: 72,
    grappling: 76,
    aerial: 10,
    submission: 18,
    speed: 48,
    agility: 42,
    stamina: 64,
    durability: 82,
    aggression: 86,
    crowd: 54,
    craftiness: 20,
    hardcore: 42,
    springboard: 0,
    running: 52,
    grounded: 74,
    limb: 24,
    recovery: 68
  },
  "kendal grey": {
    style: "technical_athlete",
    power: 56,
    striking: 62,
    grappling: 74,
    aerial: 34,
    submission: 56,
    speed: 66,
    agility: 68,
    stamina: 72,
    durability: 58,
    aggression: 58,
    crowd: 60,
    craftiness: 52,
    hardcore: 14,
    springboard: 10,
    running: 60,
    grounded: 56,
    limb: 58,
    recovery: 62
  },
  "lainey reid": {
    style: "scrappy",
    power: 44,
    striking: 60,
    grappling: 56,
    aerial: 32,
    submission: 30,
    speed: 64,
    agility: 66,
    stamina: 64,
    durability: 52,
    aggression: 68,
    crowd: 58,
    craftiness: 46,
    hardcore: 20,
    springboard: 10,
    running: 62,
    grounded: 42,
    limb: 30,
    recovery: 56
  },
  "lucien price": {
    style: "heavy_hitter",
    power: 86,
    striking: 76,
    grappling: 74,
    aerial: 8,
    submission: 18,
    speed: 46,
    agility: 38,
    stamina: 64,
    durability: 84,
    aggression: 82,
    crowd: 62,
    craftiness: 22,
    hardcore: 40,
    springboard: 0,
    running: 50,
    grounded: 74,
    limb: 22,
    recovery: 68
  },
  "niko vance": {
    style: "big_hybrid",
    power: 78,
    striking: 68,
    grappling: 74,
    aerial: 12,
    submission: 20,
    speed: 50,
    agility: 46,
    stamina: 64,
    durability: 78,
    aggression: 74,
    crowd: 58,
    craftiness: 26,
    hardcore: 34,
    springboard: 0,
    running: 54,
    grounded: 68,
    limb: 24,
    recovery: 66
  },
  "osiris griffin": {
    style: "explosive_power",
    power: 88,
    striking: 72,
    grappling: 80,
    aerial: 14,
    submission: 16,
    speed: 52,
    agility: 48,
    stamina: 66,
    durability: 84,
    aggression: 82,
    crowd: 60,
    craftiness: 20,
    hardcore: 38,
    springboard: 0,
    running: 56,
    grounded: 72,
    limb: 22,
    recovery: 68
  },
  "ricky smokes": {
    style: "showboat_striker",
    power: 50,
    striking: 70,
    grappling: 54,
    aerial: 46,
    submission: 20,
    speed: 72,
    agility: 70,
    stamina: 64,
    durability: 54,
    aggression: 66,
    crowd: 84,
    craftiness: 64,
    hardcore: 18,
    springboard: 18,
    running: 74,
    grounded: 36,
    limb: 24,
    recovery: 58
  },
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
  "shiloh hill": {
    style: "athletic_power",
    power: 80,
    striking: 70,
    grappling: 72,
    aerial: 22,
    submission: 18,
    speed: 58,
    agility: 54,
    stamina: 68,
    durability: 78,
    aggression: 76,
    crowd: 58,
    craftiness: 24,
    hardcore: 30,
    springboard: 2,
    running: 60,
    grounded: 66,
    limb: 24,
    recovery: 66
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
const resultSubtitle = document.getElementById("resultSubtitle");
const wrestlerSelect = document.getElementById("wrestlerSelect");

function clamp(value, min, max) {
  return Math.max(min, Math.min(Math.round(value), max));
}

function formatLabel(text) {
  return text
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function seedFromName(name) {
  let seed = 0;
  for (let i = 0; i < name.length; i += 1) {
    seed = (seed * 31 + name.charCodeAt(i)) % 2147483647;
  }
  return seed || 12345;
}

function seededOffset(seed, slot, spread) {
  const value = Math.sin(seed * 0.001 + slot * 97.13) * 10000;
  const fraction = value - Math.floor(value);
  return Math.round((fraction * 2 - 1) * spread);
}

function stat(base, max, seed, slot, spread = 4, min = 0) {
  return clamp(base + seededOffset(seed, slot, spread), min, max);
}

function renderGrid(container, obj) {
  if (!container) return;
  container.innerHTML = "";

  Object.entries(obj).forEach(([key, value]) => {
    const div = document.createElement("div");
    div.className = "stat";
    div.innerHTML = `<strong>${formatLabel(key)}</strong><br>${value}`;
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

function styleMovePools(style) {
  const pools = {
    high_flyer: {
      signatures: [
        "Springboard Cutter",
        "Missile Dropkick",
        "Running Kick Combo",
        "450 Splash Setup"
      ],
      finishers: [
        "630 Senton",
        "Spiral Tap",
        "Springboard Cutter",
        "Top Rope Splash"
      ],
      taunts: [
        "Crowd hype taunt",
        "Fast pace challenge taunt",
        "Wake-up hands-down taunt"
      ]
    },
    flashy_aerial: {
      signatures: [
        "Springboard Clothesline",
        "Tilt-a-Whirl DDT",
        "Running Enzuigiri",
        "Crossbody Counter"
      ],
      finishers: [
        "450 Splash",
        "Corkscrew Moonsault",
        "Springboard Stunner",
        "Top Rope Splash"
      ],
      taunts: [
        "Showboat crowd taunt",
        "Arms-wide spotlight taunt",
        "Wake-up point taunt"
      ]
    },
    powerhouse: {
      signatures: [
        "Spinebuster",
        "Body Block",
        "Sidewalk Slam",
        "Clubbing Strike Combo"
      ],
      finishers: [
        "Powerbomb",
        "Chokeslam",
        "High-Impact Slam",
        "Sit-Out Powerbomb"
      ],
      taunts: [
        "Power pose",
        "Chest-out intimidation taunt",
        "Wake-up menace taunt"
      ]
    },
    big_man: {
      signatures: [
        "Corner Splash",
        "Bossman Slam",
        "Lariat",
        "Body Avalanche"
      ],
      finishers: [
        "Powerbomb",
        "Chokeslam",
        "Jackknife Powerbomb",
        "Running Slam"
      ],
      taunts: [
        "Towering stare taunt",
        "Slow menace taunt",
        "Wake-up threat taunt"
      ]
    },
    explosive_power: {
      signatures: [
        "Pop-Up Slam",
        "Running Shoulder Tackle",
        "Spinebuster",
        "Release Suplex"
      ],
      finishers: [
        "Powerbomb",
        "Military Press Slam",
        "High-Impact Slam",
        "Sit-Out Slam"
      ],
      taunts: [
        "Explosive power taunt",
        "Roar taunt",
        "Wake-up stalk taunt"
      ]
    },
    intense_power: {
      signatures: [
        "Lariat",
        "Spinebuster",
        "Exploder Suplex",
        "Corner Splash"
      ],
      finishers: [
        "Powerbomb",
        "Uranage",
        "Running Slam",
        "Sit-Out Powerbomb"
      ],
      taunts: [
        "Intense glare taunt",
        "Fired-up stomp taunt",
        "Wake-up rage taunt"
      ]
    },
    power_striker: {
      signatures: [
        "Running Knee",
        "Lariat",
        "Spinebuster",
        "Big Boot"
      ],
      finishers: [
        "Cyclone Kick",
        "Powerbomb",
        "Running Knee Strike",
        "Sit-Out Slam"
      ],
      taunts: [
        "Aggressive flex taunt",
        "Come on taunt",
        "Wake-up attack taunt"
      ]
    },
    heavy_hitter: {
      signatures: [
        "Big Boot",
        "Lariat",
        "Side Slam",
        "Corner Splash"
      ],
      finishers: [
        "Chokeslam",
        "Powerbomb",
        "Running Slam",
        "Lariat Finish"
      ],
      taunts: [
        "Heavy hitter taunt",
        "Cold stare taunt",
        "Wake-up attack taunt"
      ]
    },
    big_hybrid: {
      signatures: [
        "Spinebuster",
        "Short-Arm Lariat",
        "Back Suplex",
        "Big Boot"
      ],
      finishers: [
        "Powerbomb",
        "Uranage",
        "Running Slam",
        "Lariat Finish"
      ],
      taunts: [
        "Hybrid bruiser taunt",
        "Arms-out taunt",
        "Wake-up stalk taunt"
      ]
    },
    athletic_power: {
      signatures: [
        "Powerslam",
        "Running Shoulder Tackle",
        "Backbreaker",
        "Lariat"
      ],
      finishers: [
        "Spinning Slam",
        "Powerbomb",
        "Sit-Out Powerslam",
        "Running Slam"
      ],
      taunts: [
        "Athletic power taunt",
        "Chest tap taunt",
        "Wake-up challenge taunt"
      ]
    },
    athletic: {
      signatures: [
        "Dropkick",
        "Running Neckbreaker",
        "Snap Suplex",
        "Enzuigiri"
      ],
      finishers: [
        "Spinning Kick",
        "DDT",
        "Top Rope Splash",
        "Cutter"
      ],
      taunts: [
        "Athletic crowd taunt",
        "Confident nod taunt",
        "Wake-up point taunt"
      ]
    },
    technical_athlete: {
      signatures: [
        "German Suplex",
        "Dragon Screw",
        "Running Uppercut",
        "Crossface Setup"
      ],
      finishers: [
        "Armbar",
        "Crossface",
        "Bridging Suplex",
        "Submission Transition"
      ],
      taunts: [
        "Technical calm taunt",
        "Measured challenge taunt",
        "Wake-up ready taunt"
      ]
    },
    hybrid: {
      signatures: [
        "Neckbreaker",
        "Snap Suplex",
        "Running Forearm",
        "Backbreaker"
      ],
      finishers: [
        "Cutter",
        "Powerbomb",
        "DDT",
        "Rolling Elbow"
      ],
      taunts: [
        "Balanced fighter taunt",
        "Confident nod taunt",
        "Wake-up ready taunt"
      ]
    },
    cocky_hybrid: {
      signatures: [
        "Jumping Knee",
        "DDT",
        "Superkick",
        "Snap Powerslam"
      ],
      finishers: [
        "Cutter",
        "Spinning Kick",
        "Sit-Out Driver",
        "Top Rope Splash"
      ],
      taunts: [
        "Cocky crowd taunt",
        "Talk trash taunt",
        "Wake-up swagger taunt"
      ]
    },
    cocky_striker: {
      signatures: [
        "Superkick",
        "Running Knee",
        "Neckbreaker",
        "Forearm Smash"
      ],
      finishers: [
        "Cyclone Kick",
        "Cutter",
        "Rolling Elbow",
        "Running Knee Strike"
      ],
      taunts: [
        "Cocky grin taunt",
        "Come on taunt",
        "Wake-up challenge taunt"
      ]
    },
    showboat: {
      signatures: [
        "Dropkick",
        "Facebuster",
        "Snapmare Kick",
        "Running Forearm"
      ],
      finishers: [
        "DDT",
        "Roll-Up Variant",
        "Neckbreaker",
        "Spinning Kick"
      ],
      taunts: [
        "Pageant wave taunt",
        "Showboat pose taunt",
        "Wake-up teasing taunt"
      ]
    },
    showboat_striker: {
      signatures: [
        "Superkick",
        "Jumping Knee",
        "Facebuster",
        "Running Forearm"
      ],
      finishers: [
        "Cyclone Kick",
        "Cutter",
        "Top Rope Splash",
        "Spinning Kick"
      ],
      taunts: [
        "Crowd hype taunt",
        "Trash talk taunt",
        "Wake-up swagger taunt"
      ]
    },
    crafty: {
      signatures: [
        "Chop Block",
        "DDT",
        "Neckbreaker",
        "Small Package Setup"
      ],
      finishers: [
        "Roll-Up Variant",
        "DDT",
        "Submission Transition",
        "Cutter"
      ],
      taunts: [
        "Sneaky shrug taunt",
        "Crafty point taunt",
        "Wake-up bait taunt"
      ]
    },
    scrappy: {
      signatures: [
        "Running Forearm",
        "Dropkick",
        "Bulldog",
        "Snap Suplex"
      ],
      finishers: [
        "DDT",
        "Jumping Kick",
        "Neckbreaker",
        "Top Rope Splash"
      ],
      taunts: [
        "Scrappy hype taunt",
        "Fired-up taunt",
        "Wake-up clap taunt"
      ]
    }
  };

  return pools[style] || pools.hybrid;
}

function generateCoreAttributes(profile, seed) {
  const armBase = profile.striking * 0.55 + profile.power * 0.25 + profile.aggression * 0.2;
  const legBase = profile.striking * 0.45 + profile.speed * 0.2 + profile.agility * 0.15 + profile.aerial * 0.2;
  const grappleBase = profile.grappling * 0.6 + profile.power * 0.25 + profile.grounded * 0.15;
  const runBase = profile.running * 0.45 + profile.speed * 0.3 + profile.agility * 0.15 + profile.aggression * 0.1;
  const aerialOffBase = profile.aerial * 0.6 + profile.agility * 0.2 + profile.speed * 0.1 + profile.crowd * 0.1;
  const aerialRangeBase = profile.aerial * 0.55 + profile.agility * 0.25 + profile.springboard * 0.2;
  const powerSubBase = profile.submission * 0.45 + profile.power * 0.35 + profile.grappling * 0.2;
  const techSubBase = profile.submission * 0.6 + profile.limb * 0.25 + profile.grappling * 0.15;

  const strikeRevBase = profile.striking * 0.35 + profile.agility * 0.3 + profile.speed * 0.15 + profile.craftiness * 0.2;
  const grappleRevBase = profile.grappling * 0.4 + profile.agility * 0.2 + profile.craftiness * 0.15 + profile.durability * 0.25;
  const aerialRevBase = profile.agility * 0.45 + profile.speed * 0.35 + profile.craftiness * 0.2;

  const bodyDurBase = profile.durability * 0.6 + profile.stamina * 0.25 + profile.recovery * 0.15;
  const armDurBase = profile.durability * 0.5 + profile.recovery * 0.25 + profile.power * 0.15 + profile.grappling * 0.1;
  const legDurBase = profile.durability * 0.5 + profile.recovery * 0.2 + profile.speed * 0.15 + profile.agility * 0.15;

  const powerSubDefBase = profile.durability * 0.45 + profile.power * 0.3 + profile.craftiness * 0.25;
  const techSubDefBase = profile.craftiness * 0.35 + profile.agility * 0.3 + profile.durability * 0.35;

  const pinEscapeBase = profile.durability * 0.45 + profile.recovery * 0.25 + profile.stamina * 0.3;
  const strengthBase = profile.power * 0.7 + profile.grappling * 0.15 + profile.durability * 0.15;
  const staminaBase = profile.stamina * 0.75 + profile.recovery * 0.15 + profile.durability * 0.1;
  const agilityBase = profile.agility * 0.7 + profile.speed * 0.15 + profile.aerial * 0.15;
  const movementBase = profile.speed * 0.75 + profile.agility * 0.2 + profile.running * 0.05;
  const recoveryBase = profile.recovery * 0.7 + profile.durability * 0.15 + profile.stamina * 0.15;
  const specialBase = profile.crowd * 0.35 + profile.aggression * 0.2 + profile.running * 0.15 + profile.aerial * 0.1 + profile.craftiness * 0.2;
  const finisherBase = profile.aggression * 0.3 + profile.crowd * 0.2 + profile.power * 0.15 + profile.striking * 0.15 + profile.aerial * 0.1 + profile.grappling * 0.1;

  return {
    arm_power: stat(armBase, 90, seed, 1, 3, 25),
    leg_power: stat(legBase, 90, seed, 2, 3, 25),
    grapple_offense: stat(grappleBase, 85, seed, 3, 3, 25),
    running_offense: stat(runBase, 95, seed, 4, 4, 20),
    aerial_offense: stat(aerialOffBase, 95, seed, 5, 4, 0),
    aerial_range: stat(aerialRangeBase, 90, seed, 6, 4, 0),
    power_submission_offense: stat(powerSubBase, 80, seed, 7, 3, 0),
    technical_submission_offense: stat(techSubBase, 90, seed, 8, 3, 0),
    strike_reversal: stat(strikeRevBase, 100, seed, 9, 4, 20),
    grapple_reversal: stat(grappleRevBase, 100, seed, 10, 4, 20),
    aerial_reversal: stat(aerialRevBase, 90, seed, 11, 4, 10),
    body_durability: stat(bodyDurBase, 90, seed, 12, 3, 20),
    arm_durability: stat(armDurBase, 90, seed, 13, 3, 20),
    leg_durability: stat(legDurBase, 90, seed, 14, 3, 20),
    power_submission_defense: stat(powerSubDefBase, 90, seed, 15, 3, 10),
    technical_submission_defense: stat(techSubDefBase, 80, seed, 16, 3, 10),
    pin_escape: stat(pinEscapeBase, 100, seed, 17, 4, 20),
    strength: stat(strengthBase, 100, seed, 18, 3, 20),
    stamina: stat(staminaBase, 90, seed, 19, 3, 20),
    agility: stat(agilityBase, 90, seed, 20, 3, 20),
    movement_speed: stat(movementBase, 90, seed, 21, 3, 20),
    recovery: stat(recoveryBase, 95, seed, 22, 3, 20),
    special: stat(specialBase, 100, seed, 23, 4, 25),
    finisher: stat(finisherBase, 100, seed, 24, 4, 25)
  };
}

function generateAIAttributes(profile, seed) {
  const comboBase = profile.striking * 0.25 + profile.speed * 0.2 + profile.craftiness * 0.2 + profile.agility * 0.2 + profile.grappling * 0.15;
  const towardBase = comboBase * 0.55 + profile.aggression * 0.25 + profile.speed * 0.2;
  const neutralBase = comboBase * 0.65 + profile.grappling * 0.2 + profile.striking * 0.15;
  const awayBase = comboBase * 0.45 + profile.craftiness * 0.35 + profile.speed * 0.2;

  const submissionsBase = profile.submission * 0.7 + profile.limb * 0.3;
  const lightStrikeBase = profile.striking * 0.45 + profile.speed * 0.3 + profile.agility * 0.25;
  const heavyStrikeBase = profile.striking * 0.45 + profile.power * 0.3 + profile.aggression * 0.25;
  const lightGrappleBase = profile.grappling * 0.45 + profile.agility * 0.25 + profile.craftiness * 0.15 + profile.speed * 0.15;
  const heavyGrappleBase = profile.grappling * 0.45 + profile.power * 0.35 + profile.aggression * 0.2;

  const groundStrikeBase = profile.grounded * 0.45 + profile.striking * 0.35 + profile.aggression * 0.2;
  const groundGrappleBase = profile.grounded * 0.45 + profile.grappling * 0.35 + profile.submission * 0.2;
  const envStrikeBase = profile.aggression * 0.45 + profile.hardcore * 0.35 + profile.striking * 0.2;
  const envGrappleBase = profile.aggression * 0.4 + profile.hardcore * 0.35 + profile.grappling * 0.25;

  const diveBase = profile.aerial * 0.55 + profile.crowd * 0.2 + profile.speed * 0.15 + profile.aggression * 0.1;
  const daredevilBase = profile.aerial * 0.45 + profile.springboard * 0.2 + profile.aggression * 0.2 + profile.crowd * 0.15;
  const inRingSpringboardBase = profile.springboard * 0.75 + profile.aerial * 0.15 + profile.agility * 0.1;
  const ringsideSpringboardBase = profile.springboard * 0.65 + profile.aerial * 0.2 + profile.crowd * 0.15;
  const limbBase = profile.limb * 0.75 + profile.submission * 0.25;

  const runningBase = profile.running * 0.55 + profile.speed * 0.25 + profile.aggression * 0.2;
  const dodgingBase = profile.agility * 0.5 + profile.speed * 0.25 + profile.craftiness * 0.25;
  const weaponBase = profile.hardcore * 0.65 + profile.aggression * 0.2 + profile.craftiness * 0.15;
  const tableBase = profile.hardcore * 0.55 + profile.crowd * 0.25 + profile.aggression * 0.2;
  const possumBase = profile.craftiness * 0.6 + profile.crowd * 0.2 + profile.speed * 0.2;
  const instantRecoveryBase = profile.recovery * 0.55 + profile.aggression * 0.25 + profile.stamina * 0.2;
  const ringEscapeBase = profile.craftiness * 0.45 + (100 - profile.aggression) * 0.2 + profile.speed * 0.15 + (100 - profile.durability) * 0.2;
  const pinComboBase = profile.craftiness * 0.4 + profile.grappling * 0.25 + profile.striking * 0.2 + profile.speed * 0.15;

  return {
    combo_tendency: stat(comboBase, 100, seed, 31, 4, 0),
    combo_selection_towards: stat(towardBase, 100, seed, 32, 4, 0),
    combo_selection_neutral: stat(neutralBase, 100, seed, 33, 4, 0),
    combo_selection_away: stat(awayBase, 100, seed, 34, 4, 0),
    submissions_tendency: stat(submissionsBase, 100, seed, 35, 4, 0),
    light_strike_tendency: stat(lightStrikeBase, 100, seed, 36, 4, 0),
    heavy_strike_tendency: stat(heavyStrikeBase, 100, seed, 37, 4, 0),
    light_grapple_tendency: stat(lightGrappleBase, 100, seed, 38, 4, 0),
    heavy_grapple_tendency: stat(heavyGrappleBase, 100, seed, 39, 4, 0),
    ground_strike_tendency: stat(groundStrikeBase, 100, seed, 40, 4, 0),
    ground_grapple_tendency: stat(groundGrappleBase, 100, seed, 41, 4, 0),
    environmental_strike_tendency: stat(envStrikeBase, 100, seed, 42, 4, 0),
    environmental_grapple_tendency: stat(envGrappleBase, 100, seed, 43, 4, 0),
    dive_tendency: stat(diveBase, 100, seed, 44, 4, 0),
    daredevil_dive_tendency: stat(daredevilBase, 100, seed, 45, 4, 0),
    in_ring_springboard_tendency: stat(inRingSpringboardBase, 100, seed, 46, 4, 0),
    ringside_springboard_tendency: stat(ringsideSpringboardBase, 100, seed, 47, 4, 0),
    limb_targeting_tendency: stat(limbBase, 100, seed, 48, 4, 0),
    running_attack_tendency: stat(runningBase, 100, seed, 49, 4, 0),
    dodging_tendency: stat(dodgingBase, 100, seed, 50, 4, 0),
    weapon_usage_tendency: stat(weaponBase, 100, seed, 51, 4, 0),
    table_usage_tendency: stat(tableBase, 100, seed, 52, 4, 0),
    possum_attack_and_pin_tendency: stat(possumBase, 100, seed, 53, 4, 0),
    instant_recovery_tendency: stat(instantRecoveryBase, 100, seed, 54, 4, 0),
    ring_escape_tendency: stat(ringEscapeBase, 100, seed, 55, 4, 0),
    pin_combo_tendency: stat(pinComboBase, 100, seed, 56, 4, 0)
  };
}

function uniquePick(list, count, seed) {
  const copy = [...list];
  const picked = [];
  let localSeed = seed;

  while (copy.length && picked.length < count) {
    localSeed = (localSeed * 9301 + 49297) % 233280;
    const index = localSeed % copy.length;
    picked.push(copy.splice(index, 1)[0]);
  }

  return picked;
}

function generateSignatures(profile, seed) {
  return uniquePick(styleMovePools(profile.style).signatures, 2, seed + 101);
}

function generateFinishers(profile, seed) {
  return uniquePick(styleMovePools(profile.style).finishers, 2, seed + 202);
}

function generateTaunts(profile, seed) {
  return uniquePick(styleMovePools(profile.style).taunts, 3, seed + 303);
}

function generateSkillPoints(core) {
  return {
    offense_points: Math.round(
      (core.arm_power +
        core.leg_power +
        core.grapple_offense +
        core.running_offense +
        core.aerial_offense) / 5
    ),
    defense_points: Math.round(
      (core.strike_reversal +
        core.grapple_reversal +
        core.aerial_reversal +
        core.body_durability +
        core.pin_escape) / 5
    ),
    recovery_points: Math.round(
      (core.recovery +
        core.body_durability +
        core.arm_durability +
        core.leg_durability) / 4
    ),
    stamina_points: Math.round(
      (core.stamina + core.movement_speed + core.agility) / 3
    ),
    special_points: core.special,
    finisher_points: core.finisher,
    mobility_points: Math.round(
      (core.agility + core.movement_speed + core.aerial_range) / 3
    )
  };
}

function generateBuild(name) {
  const profile = wrestlerProfiles[name];
  const seed = seedFromName(name);
  const coreAttributes = generateCoreAttributes(profile, seed);

  return {
    core_attributes: coreAttributes,
    ai_attributes: generateAIAttributes(profile, seed),
    signatures: generateSignatures(profile, seed),
    finishers: generateFinishers(profile, seed),
    taunts: generateTaunts(profile, seed),
    skill_points: generateSkillPoints(coreAttributes)
  };
}

function syncSelectToInput() {
  if (!wrestlerSelect || !wrestlerInput) return;
  wrestlerSelect.value = wrestlerInput.value.trim().toLowerCase();
}

function showError(message) {
  if (statusEl) {
    statusEl.textContent = message;
  }
  if (resultsEl) {
    resultsEl.classList.add("hidden");
  }
}

function showBuild(name, build) {
  if (statusEl) {
    statusEl.textContent = `Generated prototype build for ${formatLabel(name)}.`;
  }
  if (resultWrestlerName) {
    resultWrestlerName.textContent = formatLabel(name);
  }
  if (resultSubtitle) {
    resultSubtitle.textContent = "Gameplay-focused prototype output";
  }
  if (resultsEl) {
    resultsEl.classList.remove("hidden");
  }

  renderGrid(coreAttributesEl, build.core_attributes);
  renderGrid(aiAttributesEl, build.ai_attributes);
  renderGrid(skillPointsEl, build.skill_points);
  renderList(signaturesEl, build.signatures);
  renderList(finishersEl, build.finishers);
  renderList(tauntsEl, build.taunts);
}

function handleGenerate() {
  console.log("generate clicked");

  if (!wrestlerInput) {
    console.error("Missing #wrestlerInput element");
    return;
  }

  const name = wrestlerInput.value.trim().toLowerCase();

  if (!name) {
    showError("Enter a wrestler name.");
    return;
  }

  if (!wrestlerProfiles[name]) {
    showError("Wrestler not found in the current prototype roster.");
    return;
  }

  const build = generateBuild(name);
  showBuild(name, build);

  if (wrestlerSelect) {
    wrestlerSelect.value = name;
  }
}

if (wrestlerSelect && wrestlerInput) {
  wrestlerSelect.addEventListener("change", () => {
    wrestlerInput.value = wrestlerSelect.value;
  });
}

if (wrestlerInput) {
  wrestlerInput.addEventListener("input", syncSelectToInput);

  wrestlerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleGenerate();
    }
  });
}

if (generateBtn) {
  generateBtn.addEventListener("click", handleGenerate);
} else {
  console.error("Missing #generateBtn element");
}
