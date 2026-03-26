console.log("script loaded");

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

const movesetStandingFrontEl = document.getElementById("movesetStandingFront");
const movesetStandingRearEl = document.getElementById("movesetStandingRear");
const movesetCarryEtcEl = document.getElementById("movesetCarryEtc");
const movesetGroundEl = document.getElementById("movesetGround");
const movesetCornerEl = document.getElementById("movesetCorner");
const movesetRopeIrishEl = document.getElementById("movesetRopeIrish");
const movesetApronEl = document.getElementById("movesetApron");
const movesetDivingSpringEl = document.getElementById("movesetDivingSpring");
const movesetSubmissionsEl = document.getElementById("movesetSubmissions");

function clamp(value, min, max) {
  return Math.max(min, Math.min(Math.round(value), max));
}

function formatLabel(text) {
  return text
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function normalizeName(name) {
  return name.trim().toLowerCase();
}

function slugifyForCagematch(name) {
  return name.trim().replace(/\s+/g, "+");
}

async function fetchPageText(url) {
  const proxyUrl = "https://corsproxy.io/?" + encodeURIComponent(url);

  try {
    const response = await fetch(proxyUrl);
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    if (!doc.body) {
      return "";
    }

    return doc.body.innerText.replace(/\s+/g, " ").trim();
  } catch (error) {
    console.error("Fetch failed:", error);
    return "";
  }
}

function buildCagematchURL(name) {
  return `https://www.cagematch.net/?id=2&name=${slugifyForCagematch(name)}`;
}

function countMatches(text, words) {
  let total = 0;

  words.forEach((word) => {
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\b${escaped}\\b`, "gi");
    const matches = text.match(regex);
    if (matches) {
      total += matches.length;
    }
  });

  return total;
}

function findMoveMentions(text, movePool) {
  const found = [];

  movePool.forEach((move) => {
    const escaped = move.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "i");
    if (regex.test(text)) {
      found.push(move);
    }
  });

  return found;
}

function levelFromScore(score) {
  if (score >= 8) return "very_high";
  if (score >= 5) return "high";
  if (score >= 3) return "medium";
  if (score >= 1) return "low";
  return "none";
}

function scoreFromLevel(level) {
  const map = {
    none: 5,
    low: 25,
    medium: 50,
    high: 75,
    very_high: 90
  };

  return map[level] ?? 50;
}

function extractTraits(text) {
  const lower = text.toLowerCase();

  const keywordGroups = {
    aerial: [
      "springboard", "moonsault", "450", "630", "spiral tap", "dive", "dives",
      "top rope", "shooting star", "crossbody", "plancha", "tope", "corkscrew"
    ],
    power: [
      "powerbomb", "slam", "spinebuster", "chokeslam", "dominant", "dominance",
      "strength", "powerhouse", "lariat", "military press", "body slam"
    ],
    speed: [
      "fast", "quick", "explosive", "speed", "rapid", "athletic", "athleticism",
      "burst", "agility", "agile"
    ],
    submission: [
      "submission", "armbar", "crossface", "hold", "tap out", "triangle",
      "stretch", "ankle lock", "crab", "sleeper"
    ],
    crowd: [
      "charismatic", "crowd", "taunt", "showboat", "swagger", "cocky",
      "confidence", "personality", "flashy", "showman"
    ],
    aggression: [
      "aggressive", "ruthless", "vicious", "violent", "fierce", "unrelenting",
      "dominant", "hard-hitting", "hard hitting", "brutal", "dangerous"
    ],
    grapple: [
      "suplex", "grapple", "wrestling", "mat", "throw", "technical",
      "chain wrestling", "backbreaker", "neckbreaker", "wrench"
    ],
    running: [
      "running", "charge", "charges", "rush", "burst", "momentum"
    ],
    springboard: [
      "springboard", "rope walk", "rope-run", "rope run"
    ],
    limb: [
      "target the arm", "target the leg", "worked the leg", "worked the arm",
      "joint", "limb", "dragon screw", "arm wrench"
    ]
  };

  const movePool = [
    "powerbomb", "spinebuster", "chokeslam", "lariat", "superkick", "dropkick",
    "cutter", "ddt", "crossbody", "moonsault", "450 splash", "630 senton",
    "spiral tap", "armbar", "crossface", "sleeper hold", "neckbreaker",
    "suplex", "bulldog", "running knee", "big boot", "springboard cutter",
    "missile dropkick", "german suplex", "dragon screw", "uranage"
  ];

  const movesFound = findMoveMentions(lower, movePool);

  const scores = {
    aerial: countMatches(lower, keywordGroups.aerial),
    power: countMatches(lower, keywordGroups.power),
    speed: countMatches(lower, keywordGroups.speed),
    submission: countMatches(lower, keywordGroups.submission),
    crowd: countMatches(lower, keywordGroups.crowd),
    aggression: countMatches(lower, keywordGroups.aggression),
    grapple: countMatches(lower, keywordGroups.grapple),
    running: countMatches(lower, keywordGroups.running),
    springboard: countMatches(lower, keywordGroups.springboard),
    limb: countMatches(lower, keywordGroups.limb)
  };

  return {
    scores,
    movesFound
  };
}

function buildSourceSummary(name, traits) {
  const styleNotes = [];
  const commonMoves = traits.movesFound.slice(0, 6);
  const finisherStyle = [];

  const aerialLevel = levelFromScore(traits.scores.aerial);
  const powerLevel = levelFromScore(traits.scores.power);
  const speedLevel = levelFromScore(traits.scores.speed);
  const submissionLevel = levelFromScore(traits.scores.submission);
  const crowdLevel = levelFromScore(traits.scores.crowd);
  const aggressionLevel = levelFromScore(traits.scores.aggression);
  const grappleLevel = levelFromScore(traits.scores.grapple);
  const runningLevel = levelFromScore(traits.scores.running);
  const springboardLevel = levelFromScore(traits.scores.springboard);
  const limbLevel = levelFromScore(traits.scores.limb);

  if (aerialLevel === "very_high" || aerialLevel === "high") {
    styleNotes.push("high flyer");
    finisherStyle.push("top rope finisher");
  }

  if (springboardLevel === "very_high" || springboardLevel === "high") {
    styleNotes.push("springboard heavy");
  }

  if (powerLevel === "very_high" || powerLevel === "high") {
    styleNotes.push("power offense");
    finisherStyle.push("power finisher");
  }

  if (grappleLevel === "very_high" || grappleLevel === "high") {
    styleNotes.push("grapple focused");
    finisherStyle.push("grapple finisher");
  }

  if (submissionLevel === "very_high" || submissionLevel === "high") {
    styleNotes.push("submission capable");
    finisherStyle.push("submission finisher");
  }

  if (crowdLevel === "very_high" || crowdLevel === "high") {
    styleNotes.push("charismatic");
  }

  if (aggressionLevel === "very_high" || aggressionLevel === "high") {
    styleNotes.push("aggressive");
  }

  if (speedLevel === "very_high" || speedLevel === "high") {
    styleNotes.push("fast paced");
  }

  if (runningLevel === "very_high" || runningLevel === "high") {
    styleNotes.push("running offense");
  }

  if (limbLevel === "very_high" || limbLevel === "high") {
    styleNotes.push("targets limbs");
  }

  if (styleNotes.length === 0) {
    styleNotes.push("balanced");
  }

  if (finisherStyle.length === 0) {
    finisherStyle.push("general impact finisher");
  }

  return {
    wrestler_name: name,
    power: powerLevel,
    speed: speedLevel,
    aerial_use: aerialLevel,
    grapple_use: grappleLevel,
    submission_use: submissionLevel,
    crowd_interaction: crowdLevel,
    aggression: aggressionLevel,
    running_use: runningLevel,
    springboard_use: springboardLevel,
    limb_targeting: limbLevel,
    style_notes: styleNotes,
    common_moves: commonMoves.length ? commonMoves : ["no direct move mentions found"],
    finisher_style: finisherStyle
  };
}

function buildConfidenceNotes(summary, traits) {
  let exactMatches = 0;
  let closeMatches = 0;
  let fallbackMatches = 0;

  if (traits.movesFound.length >= 4) {
    exactMatches += 2;
  } else if (traits.movesFound.length >= 2) {
    exactMatches += 1;
  }

  if (summary.aerial_use === "high" || summary.aerial_use === "very_high") {
    closeMatches += 2;
  }

  if (summary.power === "high" || summary.power === "very_high") {
    closeMatches += 2;
  }

  if (summary.submission_use === "none" || summary.submission_use === "low") {
    fallbackMatches += 2;
  }

  if (traits.movesFound.length < 2) {
    fallbackMatches += 4;
  }

  return {
    exact_matches_used: exactMatches,
    close_matches_used: closeMatches,
    fallback_matches_used: fallbackMatches,
    generation_notes: [
      "Core categories are derived from scraped page text and keyword matching.",
      "Moves explicitly found in text are treated as stronger evidence.",
      "Unmentioned areas use fallback logic to keep the build complete."
    ]
  };
}

function generateCoreAttributes(summary) {
  const power = scoreFromLevel(summary.power);
  const speed = scoreFromLevel(summary.speed);
  const aerial = scoreFromLevel(summary.aerial_use);
  const grapple = scoreFromLevel(summary.grapple_use);
  const submission = scoreFromLevel(summary.submission_use);
  const crowd = scoreFromLevel(summary.crowd_interaction);
  const aggression = scoreFromLevel(summary.aggression);
  const running = scoreFromLevel(summary.running_use);
  const springboard = scoreFromLevel(summary.springboard_use);
  const limb = scoreFromLevel(summary.limb_targeting);

  return {
    arm_power: clamp((power * 0.45) + (aggression * 0.25) + (grapple * 0.3), 0, 90),
    leg_power: clamp((aerial * 0.35) + (speed * 0.35) + (aggression * 0.3), 0, 90),
    grapple_offense: clamp(grapple, 0, 85),
    running_offense: clamp((running * 0.55) + (speed * 0.25) + (aggression * 0.2), 0, 95),
    aerial_offense: clamp(aerial, 0, 95),
    aerial_range: clamp((aerial * 0.65) + (springboard * 0.35), 0, 90),
    power_submission_offense: clamp((submission * 0.45) + (power * 0.35) + (grapple * 0.2), 0, 80),
    technical_submission_offense: clamp((submission * 0.6) + (limb * 0.2) + (grapple * 0.2), 0, 90),
    strike_reversal: clamp((aggression * 0.25) + (speed * 0.25) + (crowd * 0.1) + 35, 0, 100),
    grapple_reversal: clamp((grapple * 0.45) + (power * 0.2) + 25, 0, 100),
    aerial_reversal: clamp((speed * 0.45) + (aerial * 0.25) + 20, 0, 90),
    body_durability: clamp((power * 0.35) + (aggression * 0.25) + 30, 0, 90),
    arm_durability: clamp((power * 0.3) + (grapple * 0.25) + 25, 0, 90),
    leg_durability: clamp((speed * 0.25) + (aerial * 0.25) + 20, 0, 90),
    power_submission_defense: clamp((power * 0.45) + (grapple * 0.25) + 20, 0, 90),
    technical_submission_defense: clamp((submission * 0.25) + (grapple * 0.25) + (limb * 0.2) + 15, 0, 80),
    pin_escape: clamp((power * 0.2) + (aggression * 0.2) + 45, 0, 100),
    strength: clamp(power, 0, 100),
    stamina: clamp((speed * 0.3) + (aerial * 0.2) + (running * 0.2) + 20, 0, 90),
    agility: clamp((speed * 0.45) + (aerial * 0.35) + 5, 0, 90),
    movement_speed: clamp(speed, 0, 90),
    recovery: clamp((aggression * 0.25) + (power * 0.15) + 30, 0, 95),
    special: clamp((crowd * 0.6) + (aggression * 0.2) + 10, 0, 100),
    finisher: clamp((aggression * 0.35) + (power * 0.2) + (aerial * 0.15) + (crowd * 0.1) + 20, 0, 100)
  };
}

function generateAIAttributes(summary) {
  const power = scoreFromLevel(summary.power);
  const speed = scoreFromLevel(summary.speed);
  const aerial = scoreFromLevel(summary.aerial_use);
  const grapple = scoreFromLevel(summary.grapple_use);
  const submission = scoreFromLevel(summary.submission_use);
  const crowd = scoreFromLevel(summary.crowd_interaction);
  const aggression = scoreFromLevel(summary.aggression);
  const running = scoreFromLevel(summary.running_use);
  const springboard = scoreFromLevel(summary.springboard_use);
  const limb = scoreFromLevel(summary.limb_targeting);

  return {
    combo_tendency: clamp((speed * 0.35) + (aggression * 0.25) + 15, 0, 100),
    combo_selection_towards: clamp((aggression * 0.45) + (running * 0.25) + 10, 0, 100),
    combo_selection_neutral: clamp((speed * 0.25) + (grapple * 0.25) + 15, 0, 100),
    combo_selection_away: clamp((speed * 0.35) + 10, 0, 100),
    submissions_tendency: clamp((submission * 0.8) + (limb * 0.2), 0, 100),
    light_strike_tendency: clamp((speed * 0.45) + (aggression * 0.2) + 15, 0, 100),
    heavy_strike_tendency: clamp((power * 0.35) + (aggression * 0.35) + 10, 0, 100),
    light_grapple_tendency: clamp((grapple * 0.45) + (speed * 0.2) + 10, 0, 100),
    heavy_grapple_tendency: clamp((grapple * 0.4) + (power * 0.4), 0, 100),
    ground_strike_tendency: clamp((aggression * 0.45) + (power * 0.15) + 15, 0, 100),
    ground_grapple_tendency: clamp((grapple * 0.45) + (submission * 0.2) + 10, 0, 100),
    environmental_strike_tendency: clamp((aggression * 0.45) + 10, 0, 100),
    environmental_grapple_tendency: clamp((power * 0.3) + (aggression * 0.25) + 10, 0, 100),
    dive_tendency: clamp((aerial * 0.7) + (crowd * 0.1), 0, 100),
    daredevil_dive_tendency: clamp((aerial * 0.45) + (springboard * 0.35), 0, 100),
    in_ring_springboard_tendency: clamp((springboard * 0.8) + (aerial * 0.2), 0, 100),
    ringside_springboard_tendency: clamp((springboard * 0.6) + (aerial * 0.2), 0, 100),
    limb_targeting_tendency: clamp((limb * 0.7) + (submission * 0.3), 0, 100),
    running_attack_tendency: clamp((running * 0.65) + (speed * 0.15), 0, 100),
    dodging_tendency: clamp((speed * 0.55) + 10, 0, 100),
    weapon_usage_tendency: clamp((aggression * 0.4) + 5, 0, 100),
    table_usage_tendency: clamp((crowd * 0.25) + (aggression * 0.25), 0, 100),
    possum_attack_and_pin_tendency: clamp((speed * 0.2) + 10, 0, 100),
    instant_recovery_tendency: clamp((aggression * 0.3) + (speed * 0.2) + 20, 0, 100),
    ring_escape_tendency: clamp((speed * 0.35) + 10, 0, 100),
    pin_combo_tendency: clamp((speed * 0.25) + (grapple * 0.25) + 10, 0, 100)
  };
}

function uniqueItems(list, maxItems) {
  const seen = new Set();
  const result = [];

  list.forEach((item) => {
    const key = item.toLowerCase();
    if (!seen.has(key) && result.length < maxItems) {
      seen.add(key);
      result.push(item);
    }
  });

  return result;
}

function chooseSignatures(summary) {
  const found = summary.common_moves.map(formatLabel);
  const style = summary.style_notes.join(" ").toLowerCase();
  const signatures = [];

  if (found.length) {
    signatures.push(...found.slice(0, 2));
  }

  if (style.includes("high flyer")) {
    signatures.push("Springboard Cutter", "Missile Dropkick");
  }

  if (style.includes("power offense")) {
    signatures.push("Spinebuster", "Body Block");
  }

  if (style.includes("grapple focused")) {
    signatures.push("German Suplex", "Snap Suplex");
  }

  if (style.includes("charismatic")) {
    signatures.push("Running Forearm", "Flashy Strike Combo");
  }

  if (signatures.length === 0) {
    signatures.push("Running Forearm", "Neckbreaker");
  }

  return {
    in_ring: uniqueItems(signatures, 5),
    ringside: uniqueItems([signatures[0] || "Running Forearm"], 2)
  };
}

function chooseFinishers(summary) {
  const finishers = [];

  if (summary.finisher_style.includes("top rope finisher")) {
    finishers.push("630 Senton", "450 Splash");
  }

  if (summary.finisher_style.includes("power finisher")) {
    finishers.push("Powerbomb", "Chokeslam");
  }

  if (summary.finisher_style.includes("grapple finisher")) {
    finishers.push("Cutter", "Bridging Suplex");
  }

  if (summary.finisher_style.includes("submission finisher")) {
    finishers.push("Armbar", "Crossface");
  }

  if (summary.finisher_style.includes("general impact finisher")) {
    finishers.push("Spinning Kick", "DDT");
  }

  if (finishers.length === 0) {
    finishers.push("Cutter", "DDT");
  }

  const unique = uniqueItems(finishers, 5);

  return {
    in_ring: unique,
    ringside: uniqueItems([unique[0] || "Cutter"], 2),
    tag_team: ["Tag Team Finisher"],
    ladder: [unique[0] || "Cutter"],
    table: [unique[0] || "Cutter"],
    rumble: [unique[0] || "Cutter"]
  };
}

function chooseTaunts(summary) {
  const taunts = [];

  if (summary.crowd_interaction === "high" || summary.crowd_interaction === "very_high") {
    taunts.push("Crowd hype taunt", "Showboat pose");
  }

  if (summary.aggression === "high" || summary.aggression === "very_high") {
    taunts.push("Wake up challenge taunt", "Intimidation stare");
  }

  if (summary.style_notes.includes("high flyer")) {
    taunts.push("Fast pace taunt");
  }

  if (summary.style_notes.includes("grapple focused")) {
    taunts.push("Measured challenge taunt");
  }

  if (taunts.length === 0) {
    taunts.push("Crowd taunt", "Opponent taunt", "Wake up taunt");
  }

  const unique = uniqueItems(taunts, 7);

  return {
    crowd: uniqueItems(unique, 4),
    opponent: uniqueItems(unique, 4),
    wake_up: uniqueItems(unique, 7)
  };
}

function chooseBaseAttack(summary) {
  if (summary.style_notes.includes("high flyer")) {
    return {
      light: "Quick Kick",
      heavy: "Jumping Enzuigiri",
      grapple: "Arm Drag",
      runningLight: "Running Dropkick",
      runningHeavy: "Running Knee",
      runningGrapple: "Hurricanrana",
      rear: "Back Kick",
      ground: "Standing Moonsault",
      corner: "Corner Dropkick",
      rope: "Springboard Attack",
      rebound: "Flying Forearm",
      apron: "Apron Enzuigiri",
      dive: "Tope Con Hilo",
      spring: "Springboard Cutter",
      standingSub: "Sleeper Hold",
      groundSub: "Crossface"
    };
  }

  if (summary.style_notes.includes("power offense")) {
    return {
      light: "Heavy Forearm",
      heavy: "Big Boot",
      grapple: "Body Slam",
      runningLight: "Running Shoulder Tackle",
      runningHeavy: "Body Avalanche",
      runningGrapple: "Running Powerslam",
      rear: "Clubbing Blow",
      ground: "Grounded Elbow Drop",
      corner: "Corner Splash",
      rope: "Rope Choke Strike",
      rebound: "Lariat",
      apron: "Apron Clubbing Blow",
      dive: "Heavy Axe Handle",
      spring: "No Springboard",
      standingSub: "Bear Hug",
      groundSub: "Boston Crab"
    };
  }

  if (summary.style_notes.includes("grapple focused")) {
    return {
      light: "European Uppercut",
      heavy: "Jumping Knee",
      grapple: "Snap Suplex",
      runningLight: "Running Forearm",
      runningHeavy: "Running Uppercut",
      runningGrapple: "German Suplex",
      rear: "Hammerlock Throw",
      ground: "Knee Drop",
      corner: "Corner Uppercut",
      rope: "Rope Assisted Strike",
      rebound: "Kitchen Sink",
      apron: "Apron Knee Strike",
      dive: "Top Rope Elbow Drop",
      spring: "No Springboard",
      standingSub: "Armbar",
      groundSub: "Crossface"
    };
  }

  return {
    light: "Forearm Smash",
    heavy: "Lariat",
    grapple: "Suplex",
    runningLight: "Running Forearm",
    runningHeavy: "Running Knee",
    runningGrapple: "Running Powerslam",
    rear: "Back Elbow",
    ground: "Stomp",
    corner: "Corner Strike",
    rope: "Rope Strike",
    rebound: "Flying Forearm",
    apron: "Apron Strike",
    dive: "Top Rope Splash",
    spring: "No Springboard",
    standingSub: "Sleeper Hold",
    groundSub: "Boston Crab"
  };
}

function generateMoveset(summary) {
  const base = chooseBaseAttack(summary);

  return {
    standing_front_light_attack_towards: base.light,
    standing_front_light_attack_neutral: base.light,
    standing_front_light_attack_away: base.light,
    standing_front_combo_chain_towards: base.light,
    standing_front_combo_chain_neutral: base.light,
    standing_front_combo_chain_away: base.light,
    standing_front_combo_enders_towards: base.heavy,
    standing_front_combo_enders_neutral: base.heavy,
    standing_front_combo_enders_away: base.heavy,
    standing_front_heavy_attack_towards: base.heavy,
    standing_front_heavy_attack_neutral: base.heavy,
    standing_front_heavy_attack_away: base.heavy,
    standing_front_light_grapple_neutral: base.grapple,
    standing_front_light_grapple_up: base.grapple,
    standing_front_light_grapple_left: base.grapple,
    standing_front_light_grapple_right: base.grapple,
    standing_front_light_grapple_down: base.grapple,
    standing_front_heavy_grapple_neutral: base.runningGrapple,
    standing_front_heavy_grapple_up: base.runningGrapple,
    standing_front_heavy_grapple_left: base.runningGrapple,
    standing_front_heavy_grapple_right: base.runningGrapple,
    standing_front_heavy_grapple_down: base.runningGrapple,
    standing_front_running_light: base.runningLight,
    standing_front_running_heavy: base.runningHeavy,
    standing_front_running_grapple: base.runningGrapple,

    standing_rear_light_attack: base.rear,
    standing_rear_heavy_attack: base.heavy,
    standing_rear_light_grapple_neutral: base.grapple,
    standing_rear_light_grapple_up: base.grapple,
    standing_rear_light_grapple_left: base.grapple,
    standing_rear_light_grapple_right: base.grapple,
    standing_rear_light_grapple_down: base.grapple,
    standing_rear_heavy_grapple_neutral: base.runningGrapple,
    standing_rear_heavy_grapple_up: base.runningGrapple,
    standing_rear_heavy_grapple_left: base.runningGrapple,
    standing_rear_heavy_grapple_right: base.runningGrapple,
    standing_rear_heavy_grapple_down: base.runningGrapple,
    standing_rear_grapple: base.runningGrapple,

    standing_power_bomb: "Powerbomb Carry",
    standing_firemans_carry: "Fireman's Carry",
    standing_shoulder_carry: "Shoulder Carry",
    standing_cradle_carry: "Cradle Carry",

    standing_foot_catch_light: "Foot Catch Kick",
    standing_foot_catch_heavy: "Foot Catch Lariat",
    standing_foot_catch_submission: base.standingSub,
    standing_foot_catch_reversal: "Foot Catch Counter",

    standing_front_leverage_pin: "Small Package",
    standing_rear_leverage_pin: "Schoolboy Pin",

    ground_supine_upper_heavy_attack: base.ground,
    ground_supine_upper_limb_target: "Head Stomp",
    ground_supine_upper_heavy_grapple: base.groundSub,
    ground_supine_side_heavy: base.ground,
    ground_supine_side_limb_target: "Arm Stomp",
    ground_supine_side_heavy_grapple: base.groundSub,
    ground_supine_lower_heavy: base.ground,
    ground_supine_lower_limb_target: "Leg Stomp",
    ground_supine_lower_heavy_grapple: base.groundSub,
    ground_supine_running_attack: base.runningHeavy,

    ground_prone_upper_heavy_attack: base.ground,
    ground_prone_upper_limb_target: "Head Strike",
    ground_prone_upper_heavy_grapple: base.groundSub,
    ground_prone_side_heavy: base.ground,
    ground_prone_side_limb_target: "Arm Pull",
    ground_prone_side_heavy_grapple: base.groundSub,
    ground_prone_lower_heavy: base.ground,
    ground_prone_lower_limb_target: "Leg Pull",
    ground_prone_lower_heavy_grapple: base.groundSub,

    ground_kneeling_front_light_attack: base.light,
    ground_kneeling_front_heavy_attack: base.heavy,
    ground_kneeling_front_light_grapple: base.grapple,
    ground_kneeling_front_heavy_grapple: base.runningGrapple,
    ground_kneeling_front_running_attack: base.runningLight,
    ground_kneeling_rear_light_grapple: base.grapple,
    ground_kneeling_rear_heavy_grapple: base.runningGrapple,

    ground_seated_front_heavy_attack: base.ground,
    ground_seated_front_grapple: base.groundSub,
    ground_seated_front_running_attack: base.runningHeavy,
    ground_seated_rear_heavy_attack: base.ground,
    ground_seated_rear_grapple: base.groundSub,

    ground_corner_vs_grounded_opponent: base.corner,

    corner_leaning_front_light_attack: base.light,
    corner_leaning_front_heavy_attack: base.corner,
    corner_leaning_front_heavy_grapple_towards: base.runningGrapple,
    corner_leaning_front_heavy_grapple_neutral: base.runningGrapple,
    corner_leaning_front_heavy_grapple_away: base.runningGrapple,
    corner_leaning_front_light_running_attack: base.runningLight,
    corner_leaning_front_heavy_running_attack: base.runningHeavy,
    corner_leaning_front_grab_running_attack: base.runningGrapple,

    corner_leaning_rear_light_attack: base.light,
    corner_leaning_rear_heavy_attack: base.corner,
    corner_leaning_rear_heavy_grapple_towards: base.runningGrapple,
    corner_leaning_rear_heavy_grapple_neutral: base.runningGrapple,
    corner_leaning_rear_heavy_grapple_away: base.runningGrapple,
    corner_leaning_rear_running_attack: base.runningHeavy,

    corner_top_rope_stunned_front_heavy_attack: base.corner,
    corner_top_rope_stunned_front_grapple: base.runningGrapple,
    corner_top_rope_stunned_rear_heavy_attack: base.corner,
    corner_top_rope_stunned_rear_grapple: base.runningGrapple,

    corner_seated_heavy_attack: base.corner,
    corner_seated_grapple: base.runningGrapple,
    corner_seated_running_attack: base.runningHeavy,

    corner_tree_of_woe_heavy_attack: base.corner,
    corner_tree_of_woe_running_attack: base.runningHeavy,

    rope_leaning_light_attack: base.rope,
    rope_leaning_heavy_attack: base.rope,
    rope_leaning_heavy_grapple_towards: base.runningGrapple,
    rope_leaning_heavy_grapple_neutral: base.runningGrapple,
    rope_leaning_heavy_grapple_away: base.runningGrapple,
    rope_leaning_running_attack: base.runningHeavy,
    rope_middle_rope_heavy_attack: base.rope,
    rope_middle_rope_running_attack: base.runningHeavy,

    irish_whip_rebound_attack_light_attack: base.rebound,
    irish_whip_rebound_attack_heavy_attack: base.runningHeavy,
    irish_whip_rebound_attack_grapple: base.runningGrapple,
    irish_whip_pullback_action_light_attack: base.light,
    irish_whip_pullback_action_heavy_attack: base.heavy,

    apron_from_ring_front_heavy_attack: base.apron,
    apron_from_ring_front_heavy_grapple: base.runningGrapple,
    apron_from_ring_front_grapple: base.grapple,
    apron_from_ring_rear_grapple: base.grapple,
    apron_from_apron_to_ring_heavy_attack: base.apron,
    apron_from_apron_to_ring_grapple: base.runningGrapple,
    apron_from_apron_to_ringside_running_attack_to_standing_opponent: base.apron,
    apron_from_apron_to_ringside_running_attack_to_supine_opponent: base.apron,
    apron_to_apron_drag_to_apron: base.grapple,

    diving_top_rope_light_dive_attack: base.dive,
    diving_top_rope_heavy_dive_attack: base.dive,
    diving_top_rope_light_dive_to_supine_opponent: base.dive,
    diving_top_rope_heavy_dive_to_supine_opponent: base.dive,

    diving_middle_rope_light_dive: base.dive,
    diving_middle_rope_heavy_dive: base.dive,
    diving_middle_rope_light_dive_to_supine_opponent: base.dive,
    diving_middle_rope_heavy_dive_to_supine_opponent: base.dive,

    diving_ledge_dive_to_standing_opponent: base.dive,
    diving_ledge_dive_to_supine_opponent: base.dive,
    diving_equipment_box_dive_to_standing_opponent: base.dive,
    diving_equipment_box_dive_to_supine_opponent: base.dive,
    diving_barricade_dive_to_standing_opponent: base.dive,
    diving_barricade_dive_to_supine_opponent: base.dive,

    springboard_to_ring_standing_front_rope_springboard_attack: base.spring,
    springboard_to_ring_standing_front_running_springboard: base.spring,
    springboard_to_ring_standing_front_corner_springboard_standing_attack: base.spring,
    springboard_to_ring_standing_front_corner_springboard_running_attack: base.spring,
    springboard_to_ring_standing_front_springboard_from_apron: base.spring,

    holds_submission_standing_submission: base.standingSub,
    holds_submission_foot_catch_submission: base.standingSub,
    holds_submission_upper_body_ground_submission: base.groundSub,
    holds_submission_side_ground_submission: base.groundSub,
    holds_submission_lower_body_ground_submission: base.groundSub
  };
}

function splitMoveset(moveset) {
  return {
    standingFront: {
      standing_front_light_attack_towards: moveset.standing_front_light_attack_towards,
      standing_front_light_attack_neutral: moveset.standing_front_light_attack_neutral,
      standing_front_light_attack_away: moveset.standing_front_light_attack_away,
      standing_front_combo_chain_towards: moveset.standing_front_combo_chain_towards,
      standing_front_combo_chain_neutral: moveset.standing_front_combo_chain_neutral,
      standing_front_combo_chain_away: moveset.standing_front_combo_chain_away,
      standing_front_combo_enders_towards: moveset.standing_front_combo_enders_towards,
      standing_front_combo_enders_neutral: moveset.standing_front_combo_enders_neutral,
      standing_front_combo_enders_away: moveset.standing_front_combo_enders_away,
      standing_front_heavy_attack_towards: moveset.standing_front_heavy_attack_towards,
      standing_front_heavy_attack_neutral: moveset.standing_front_heavy_attack_neutral,
      standing_front_heavy_attack_away: moveset.standing_front_heavy_attack_away,
      standing_front_light_grapple_neutral: moveset.standing_front_light_grapple_neutral,
      standing_front_light_grapple_up: moveset.standing_front_light_grapple_up,
      standing_front_light_grapple_left: moveset.standing_front_light_grapple_left,
      standing_front_light_grapple_right: moveset.standing_front_light_grapple_right,
      standing_front_light_grapple_down: moveset.standing_front_light_grapple_down,
      standing_front_heavy_grapple_neutral: moveset.standing_front_heavy_grapple_neutral,
      standing_front_heavy_grapple_up: moveset.standing_front_heavy_grapple_up,
      standing_front_heavy_grapple_left: moveset.standing_front_heavy_grapple_left,
      standing_front_heavy_grapple_right: moveset.standing_front_heavy_grapple_right,
      standing_front_heavy_grapple_down: moveset.standing_front_heavy_grapple_down,
      standing_front_running_light: moveset.standing_front_running_light,
      standing_front_running_heavy: moveset.standing_front_running_heavy,
      standing_front_running_grapple: moveset.standing_front_running_grapple
    },
    standingRear: {
      standing_rear_light_attack: moveset.standing_rear_light_attack,
      standing_rear_heavy_attack: moveset.standing_rear_heavy_attack,
      standing_rear_light_grapple_neutral: moveset.standing_rear_light_grapple_neutral,
      standing_rear_light_grapple_up: moveset.standing_rear_light_grapple_up,
      standing_rear_light_grapple_left: moveset.standing_rear_light_grapple_left,
      standing_rear_light_grapple_right: moveset.standing_rear_light_grapple_right,
      standing_rear_light_grapple_down: moveset.standing_rear_light_grapple_down,
      standing_rear_heavy_grapple_neutral: moveset.standing_rear_heavy_grapple_neutral,
      standing_rear_heavy_grapple_up: moveset.standing_rear_heavy_grapple_up,
      standing_rear_heavy_grapple_left: moveset.standing_rear_heavy_grapple_left,
      standing_rear_heavy_grapple_right: moveset.standing_rear_heavy_grapple_right,
      standing_rear_heavy_grapple_down: moveset.standing_rear_heavy_grapple_down,
      standing_rear_grapple: moveset.standing_rear_grapple
    },
    carryEtc: {
      standing_power_bomb: moveset.standing_power_bomb,
      standing_firemans_carry: moveset.standing_firemans_carry,
      standing_shoulder_carry: moveset.standing_shoulder_carry,
      standing_cradle_carry: moveset.standing_cradle_carry,
      standing_foot_catch_light: moveset.standing_foot_catch_light,
      standing_foot_catch_heavy: moveset.standing_foot_catch_heavy,
      standing_foot_catch_submission: moveset.standing_foot_catch_submission,
      standing_foot_catch_reversal: moveset.standing_foot_catch_reversal,
      standing_front_leverage_pin: moveset.standing_front_leverage_pin,
      standing_rear_leverage_pin: moveset.standing_rear_leverage_pin
    },
    ground: {
      ground_supine_upper_heavy_attack: moveset.ground_supine_upper_heavy_attack,
      ground_supine_upper_limb_target: moveset.ground_supine_upper_limb_target,
      ground_supine_upper_heavy_grapple: moveset.ground_supine_upper_heavy_grapple,
      ground_supine_side_heavy: moveset.ground_supine_side_heavy,
      ground_supine_side_limb_target: moveset.ground_supine_side_limb_target,
      ground_supine_side_heavy_grapple: moveset.ground_supine_side_heavy_grapple,
      ground_supine_lower_heavy: moveset.ground_supine_lower_heavy,
      ground_supine_lower_limb_target: moveset.ground_supine_lower_limb_target,
      ground_supine_lower_heavy_grapple: moveset.ground_supine_lower_heavy_grapple,
      ground_supine_running_attack: moveset.ground_supine_running_attack,
      ground_prone_upper_heavy_attack: moveset.ground_prone_upper_heavy_attack,
      ground_prone_upper_limb_target: moveset.ground_prone_upper_limb_target,
      ground_prone_upper_heavy_grapple: moveset.ground_prone_upper_heavy_grapple,
      ground_prone_side_heavy: moveset.ground_prone_side_heavy,
      ground_prone_side_limb_target: moveset.ground_prone_side_limb_target,
      ground_prone_side_heavy_grapple: moveset.ground_prone_side_heavy_grapple,
      ground_prone_lower_heavy: moveset.ground_prone_lower_heavy,
      ground_prone_lower_limb_target: moveset.ground_prone_lower_limb_target,
      ground_prone_lower_heavy_grapple: moveset.ground_prone_lower_heavy_grapple,
      ground_kneeling_front_light_attack: moveset.ground_kneeling_front_light_attack,
      ground_kneeling_front_heavy_attack: moveset.ground_kneeling_front_heavy_attack,
      ground_kneeling_front_light_grapple: moveset.ground_kneeling_front_light_grapple,
      ground_kneeling_front_heavy_grapple: moveset.ground_kneeling_front_heavy_grapple,
      ground_kneeling_front_running_attack: moveset.ground_kneeling_front_running_attack,
      ground_kneeling_rear_light_grapple: moveset.ground_kneeling_rear_light_grapple,
      ground_kneeling_rear_heavy_grapple: moveset.ground_kneeling_rear_heavy_grapple,
      ground_seated_front_heavy_attack: moveset.ground_seated_front_heavy_attack,
      ground_seated_front_grapple: moveset.ground_seated_front_grapple,
      ground_seated_front_running_attack: moveset.ground_seated_front_running_attack,
      ground_seated_rear_heavy_attack: moveset.ground_seated_rear_heavy_attack,
      ground_seated_rear_grapple: moveset.ground_seated_rear_grapple,
      ground_corner_vs_grounded_opponent: moveset.ground_corner_vs_grounded_opponent
    },
    corner: {
      corner_leaning_front_light_attack: moveset.corner_leaning_front_light_attack,
      corner_leaning_front_heavy_attack: moveset.corner_leaning_front_heavy_attack,
      corner_leaning_front_heavy_grapple_towards: moveset.corner_leaning_front_heavy_grapple_towards,
      corner_leaning_front_heavy_grapple_neutral: moveset.corner_leaning_front_heavy_grapple_neutral,
      corner_leaning_front_heavy_grapple_away: moveset.corner_leaning_front_heavy_grapple_away,
      corner_leaning_front_light_running_attack: moveset.corner_leaning_front_light_running_attack,
      corner_leaning_front_heavy_running_attack: moveset.corner_leaning_front_heavy_running_attack,
      corner_leaning_front_grab_running_attack: moveset.corner_leaning_front_grab_running_attack,
      corner_leaning_rear_light_attack: moveset.corner_leaning_rear_light_attack,
      corner_leaning_rear_heavy_attack: moveset.corner_leaning_rear_heavy_attack,
      corner_leaning_rear_heavy_grapple_towards: moveset.corner_leaning_rear_heavy_grapple_towards,
      corner_leaning_rear_heavy_grapple_neutral: moveset.corner_leaning_rear_heavy_grapple_neutral,
      corner_leaning_rear_heavy_grapple_away: moveset.corner_leaning_rear_heavy_grapple_away,
      corner_leaning_rear_running_attack: moveset.corner_leaning_rear_running_attack,
      corner_top_rope_stunned_front_heavy_attack: moveset.corner_top_rope_stunned_front_heavy_attack,
      corner_top_rope_stunned_front_grapple: moveset.corner_top_rope_stunned_front_grapple,
      corner_top_rope_stunned_rear_heavy_attack: moveset.corner_top_rope_stunned_rear_heavy_attack,
      corner_top_rope_stunned_rear_grapple: moveset.corner_top_rope_stunned_rear_grapple,
      corner_seated_heavy_attack: moveset.corner_seated_heavy_attack,
      corner_seated_grapple: moveset.corner_seated_grapple,
      corner_seated_running_attack: moveset.corner_seated_running_attack,
      corner_tree_of_woe_heavy_attack: moveset.corner_tree_of_woe_heavy_attack,
      corner_tree_of_woe_running_attack: moveset.corner_tree_of_woe_running_attack
    },
    ropeIrish: {
      rope_leaning_light_attack: moveset.rope_leaning_light_attack,
      rope_leaning_heavy_attack: moveset.rope_leaning_heavy_attack,
      rope_leaning_heavy_grapple_towards: moveset.rope_leaning_heavy_grapple_towards,
      rope_leaning_heavy_grapple_neutral: moveset.rope_leaning_heavy_grapple_neutral,
      rope_leaning_heavy_grapple_away: moveset.rope_leaning_heavy_grapple_away,
      rope_leaning_running_attack: moveset.rope_leaning_running_attack,
      rope_middle_rope_heavy_attack: moveset.rope_middle_rope_heavy_attack,
      rope_middle_rope_running_attack: moveset.rope_middle_rope_running_attack,
      irish_whip_rebound_attack_light_attack: moveset.irish_whip_rebound_attack_light_attack,
      irish_whip_rebound_attack_heavy_attack: moveset.irish_whip_rebound_attack_heavy_attack,
      irish_whip_rebound_attack_grapple: moveset.irish_whip_rebound_attack_grapple,
      irish_whip_pullback_action_light_attack: moveset.irish_whip_pullback_action_light_attack,
      irish_whip_pullback_action_heavy_attack: moveset.irish_whip_pullback_action_heavy_attack
    },
    apron: {
      apron_from_ring_front_heavy_attack: moveset.apron_from_ring_front_heavy_attack,
      apron_from_ring_front_heavy_grapple: moveset.apron_from_ring_front_heavy_grapple,
      apron_from_ring_front_grapple: moveset.apron_from_ring_front_grapple,
      apron_from_ring_rear_grapple: moveset.apron_from_ring_rear_grapple,
      apron_from_apron_to_ring_heavy_attack: moveset.apron_from_apron_to_ring_heavy_attack,
      apron_from_apron_to_ring_grapple: moveset.apron_from_apron_to_ring_grapple,
      apron_from_apron_to_ringside_running_attack_to_standing_opponent: moveset.apron_from_apron_to_ringside_running_attack_to_standing_opponent,
      apron_from_apron_to_ringside_running_attack_to_supine_opponent: moveset.apron_from_apron_to_ringside_running_attack_to_supine_opponent,
      apron_to_apron_drag_to_apron: moveset.apron_to_apron_drag_to_apron
    },
    divingSpring: {
      diving_top_rope_light_dive_attack: moveset.diving_top_rope_light_dive_attack,
      diving_top_rope_heavy_dive_attack: moveset.diving_top_rope_heavy_dive_attack,
      diving_top_rope_light_dive_to_supine_opponent: moveset.diving_top_rope_light_dive_to_supine_opponent,
      diving_top_rope_heavy_dive_to_supine_opponent: moveset.diving_top_rope_heavy_dive_to_supine_opponent,
      diving_middle_rope_light_dive: moveset.diving_middle_rope_light_dive,
      diving_middle_rope_heavy_dive: moveset.diving_middle_rope_heavy_dive,
      diving_middle_rope_light_dive_to_supine_opponent: moveset.diving_middle_rope_light_dive_to_supine_opponent,
      diving_middle_rope_heavy_dive_to_supine_opponent: moveset.diving_middle_rope_heavy_dive_to_supine_opponent,
      diving_ledge_dive_to_standing_opponent: moveset.diving_ledge_dive_to_standing_opponent,
      diving_ledge_dive_to_supine_opponent: moveset.diving_ledge_dive_to_supine_opponent,
      diving_equipment_box_dive_to_standing_opponent: moveset.diving_equipment_box_dive_to_standing_opponent,
      diving_equipment_box_dive_to_supine_opponent: moveset.diving_equipment_box_dive_to_supine_opponent,
      diving_barricade_dive_to_standing_opponent: moveset.diving_barricade_dive_to_standing_opponent,
      diving_barricade_dive_to_supine_opponent: moveset.diving_barricade_dive_to_supine_opponent,
      springboard_to_ring_standing_front_rope_springboard_attack: moveset.springboard_to_ring_standing_front_rope_springboard_attack,
      springboard_to_ring_standing_front_running_springboard: moveset.springboard_to_ring_standing_front_running_springboard,
      springboard_to_ring_standing_front_corner_springboard_standing_attack: moveset.springboard_to_ring_standing_front_corner_springboard_standing_attack,
      springboard_to_ring_standing_front_corner_springboard_running_attack: moveset.springboard_to_ring_standing_front_corner_springboard_running_attack,
      springboard_to_ring_standing_front_springboard_from_apron: moveset.springboard_to_ring_standing_front_springboard_from_apron
    },
    submissions: {
      holds_submission_standing_submission: moveset.holds_submission_standing_submission,
      holds_submission_foot_catch_submission: moveset.holds_submission_foot_catch_submission,
      holds_submission_upper_body_ground_submission: moveset.holds_submission_upper_body_ground_submission,
      holds_submission_side_ground_submission: moveset.holds_submission_side_ground_submission,
      holds_submission_lower_body_ground_submission: moveset.holds_submission_lower_body_ground_submission
    }
  };
}

function generateSkillPoints(core) {
  return {
    offense_points: Math.round((core.arm_power + core.leg_power + core.grapple_offense + core.running_offense + core.aerial_offense) / 5),
    defense_points: Math.round((core.strike_reversal + core.grapple_reversal + core.aerial_reversal + core.body_durability + core.pin_escape) / 5),
    recovery_points: Math.round((core.recovery + core.body_durability + core.arm_durability + core.leg_durability) / 4),
    stamina_points: Math.round((core.stamina + core.movement_speed + core.agility) / 3),
    special_points: core.special,
    finisher_points: core.finisher,
    mobility_points: Math.round((core.agility + core.movement_speed + core.aerial_range) / 3)
  };
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

function renderMoveset(moveset) {
  const grouped = splitMoveset(moveset);

  renderGrid(movesetStandingFrontEl, grouped.standingFront);
  renderGrid(movesetStandingRearEl, grouped.standingRear);
  renderGrid(movesetCarryEtcEl, grouped.carryEtc);
  renderGrid(movesetGroundEl, grouped.ground);
  renderGrid(movesetCornerEl, grouped.corner);
  renderGrid(movesetRopeIrishEl, grouped.ropeIrish);
  renderGrid(movesetApronEl, grouped.apron);
  renderGrid(movesetDivingSpringEl, grouped.divingSpring);
  renderGrid(movesetSubmissionsEl, grouped.submissions);
}

function renderSourceBackedLists(summary, confidenceNotes) {
  renderList(signaturesEl, [
    `In Ring: ${chooseSignatures(summary).in_ring.join(", ")}`,
    `Ringside: ${chooseSignatures(summary).ringside.join(", ")}`,
    `Confidence Notes: ${confidenceNotes.generation_notes.join(" ")}`
  ]);

  const finishers = chooseFinishers(summary);
  renderList(finishersEl, [
    `In Ring: ${finishers.in_ring.join(", ")}`,
    `Ringside: ${finishers.ringside.join(", ")}`,
    `Tag Team: ${finishers.tag_team.join(", ")}`,
    `Ladder: ${finishers.ladder.join(", ")}`,
    `Table: ${finishers.table.join(", ")}`,
    `Rumble: ${finishers.rumble.join(", ")}`
  ]);

  const taunts = chooseTaunts(summary);
  renderList(tauntsEl, [
    `Crowd: ${taunts.crowd.join(", ")}`,
    `Opponent: ${taunts.opponent.join(", ")}`,
    `Wake Up: ${taunts.wake_up.join(", ")}`
  ]);
}

async function handleGenerate() {
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
  const sourceSummary = buildSourceSummary(name, traits);
  const confidenceNotes = buildConfidenceNotes(sourceSummary, traits);
  const coreAttributes = generateCoreAttributes(sourceSummary);
  const aiAttributes = generateAIAttributes(sourceSummary);
  const moveset = generateMoveset(sourceSummary);
  const skillPoints = generateSkillPoints(coreAttributes);

  statusEl.textContent = "Generated from scraped data.";

  if (resultWrestlerName) {
    resultWrestlerName.textContent = name;
  }

  if (resultSubtitle) {
    resultSubtitle.textContent = `Source-based prototype output | exact: ${confidenceNotes.exact_matches_used}, close: ${confidenceNotes.close_matches_used}, fallback: ${confidenceNotes.fallback_matches_used}`;
  }

  if (resultsEl) {
    resultsEl.classList.remove("hidden");
  }

  renderGrid(coreAttributesEl, coreAttributes);
  renderGrid(aiAttributesEl, aiAttributes);
  renderMoveset(moveset);
  renderGrid(skillPointsEl, skillPoints);
  renderSourceBackedLists(sourceSummary, confidenceNotes);

  console.log("SCRAPED URL:", url);
  console.log("TEXT SAMPLE:", text.substring(0, 400));
  console.log("TRAITS:", traits);
  console.log("SOURCE SUMMARY:", sourceSummary);
  console.log("CONFIDENCE NOTES:", confidenceNotes);
}

if (wrestlerSelect && wrestlerInput) {
  wrestlerSelect.addEventListener("change", () => {
    wrestlerInput.value = wrestlerSelect.value;
  });
}

if (wrestlerInput) {
  wrestlerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleGenerate();
    }
  });
}

if (generateBtn) {
  generateBtn.addEventListener("click", handleGenerate);
} else {
  console.error("generateBtn not found");
}
