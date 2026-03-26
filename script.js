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
const movesetEl = document.getElementById("moveset");
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
  if (!container) return;
  container.innerHTML = "";
  Object.entries(obj).forEach(([k, v]) => {
    const div = document.createElement("div");
    div.className = "stat";
    div.innerHTML = "<strong>" + formatLabel(k) + "</strong><br>" + v;
    container.appendChild(div);
  });
}

function renderList(container, list) {
  if (!container) return;
  container.innerHTML = "";
  list.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

function pickByStyle(style, options) {
  return options[style] || options.default;
}

function generateCore(p) {
  return {
    arm_power: clamp(p.striking * 0.5 + p.power * 0.5, 0, 90),
    leg_power: clamp(p.aerial * 0.4 + p.speed * 0.3 + p.striking * 0.3, 0, 90),
    grapple_offense: clamp(p.grappling, 0, 85),
    running_offense: clamp(p.running, 0, 95),
    aerial_offense: clamp(p.aerial, 0, 95),
    aerial_range: clamp(p.aerial * 0.7 + p.springboard * 0.3, 0, 90),
    power_submission_offense: clamp(p.submission * 0.4 + p.power * 0.4 + p.grappling * 0.2, 0, 80),
    technical_submission_offense: clamp(p.submission * 0.6 + p.limb * 0.2 + p.grappling * 0.2, 0, 90),
    strike_reversal: clamp(p.striking * 0.45 + p.agility * 0.25 + p.craftiness * 0.3, 0, 100),
    grapple_reversal: clamp(p.grappling * 0.5 + p.craftiness * 0.2 + p.durability * 0.3, 0, 100),
    aerial_reversal: clamp(p.agility * 0.5 + p.speed * 0.3 + p.craftiness * 0.2, 0, 90),
    body_durability: clamp(p.durability, 0, 90),
    arm_durability: clamp(p.durability * 0.7 + p.power * 0.3, 0, 90),
    leg_durability: clamp(p.durability * 0.6 + p.speed * 0.2 + p.agility * 0.2, 0, 90),
    power_submission_defense: clamp(p.durability * 0.5 + p.power * 0.3 + p.craftiness * 0.2, 0, 90),
    technical_submission_defense: clamp(p.craftiness * 0.4 + p.agility * 0.3 + p.durability * 0.3, 0, 80),
    pin_escape: clamp(p.durability * 0.5 + p.recovery * 0.2 + p.stamina * 0.3, 0, 100),
    strength: clamp(p.power, 0, 100),
    stamina: clamp(p.stamina, 0, 90),
    agility: clamp(p.agility, 0, 90),
    movement_speed: clamp(p.speed, 0, 90),
    recovery: clamp(p.recovery, 0, 95),
    special: clamp(p.crowd, 0, 100),
    finisher: clamp(p.aggression * 0.5 + p.crowd * 0.2 + p.power * 0.15 + p.striking * 0.15, 0, 100)
  };
}

function generateAI(p) {
  return {
    combo_tendency: clamp(p.striking * 0.35 + p.speed * 0.2 + p.craftiness * 0.25 + p.grappling * 0.2, 0, 100),
    combo_selection_towards: clamp(p.aggression * 0.4 + p.speed * 0.3 + p.striking * 0.3, 0, 100),
    combo_selection_neutral: clamp(p.striking * 0.4 + p.grappling * 0.35 + p.craftiness * 0.25, 0, 100),
    combo_selection_away: clamp(p.craftiness * 0.5 + p.speed * 0.3 + p.striking * 0.2, 0, 100),
    submissions_tendency: clamp(p.submission * 0.8 + p.limb * 0.2, 0, 100),
    light_strike_tendency: clamp(p.striking * 0.6 + p.speed * 0.4, 0, 100),
    heavy_strike_tendency: clamp(p.striking * 0.45 + p.power * 0.35 + p.aggression * 0.2, 0, 100),
    light_grapple_tendency: clamp(p.grappling * 0.5 + p.agility * 0.25 + p.craftiness * 0.25, 0, 100),
    heavy_grapple_tendency: clamp(p.grappling * 0.4 + p.power * 0.4 + p.aggression * 0.2, 0, 100),
    ground_strike_tendency: clamp(p.grounded * 0.5 + p.striking * 0.3 + p.aggression * 0.2, 0, 100),
    ground_grapple_tendency: clamp(p.grounded * 0.45 + p.grappling * 0.35 + p.submission * 0.2, 0, 100),
    environmental_strike_tendency: clamp(p.aggression * 0.45 + p.hardcore * 0.35 + p.striking * 0.2, 0, 100),
    environmental_grapple_tendency: clamp(p.aggression * 0.4 + p.hardcore * 0.35 + p.grappling * 0.25, 0, 100),
    dive_tendency: clamp(p.aerial * 0.7 + p.crowd * 0.15 + p.aggression * 0.15, 0, 100),
    daredevil_dive_tendency: clamp(p.aerial * 0.45 + p.springboard * 0.35 + p.aggression * 0.2, 0, 100),
    in_ring_springboard_tendency: clamp(p.springboard * 0.8 + p.aerial * 0.2, 0, 100),
    ringside_springboard_tendency: clamp(p.springboard * 0.7 + p.aerial * 0.15 + p.crowd * 0.15, 0, 100),
    limb_targeting_tendency: clamp(p.limb * 0.7 + p.submission * 0.3, 0, 100),
    running_attack_tendency: clamp(p.running * 0.65 + p.speed * 0.2 + p.aggression * 0.15, 0, 100),
    dodging_tendency: clamp(p.agility * 0.5 + p.speed * 0.25 + p.craftiness * 0.25, 0, 100),
    weapon_usage_tendency: clamp(p.hardcore * 0.7 + p.aggression * 0.15 + p.craftiness * 0.15, 0, 100),
    table_usage_tendency: clamp(p.hardcore * 0.55 + p.crowd * 0.25 + p.aggression * 0.2, 0, 100),
    possum_attack_and_pin_tendency: clamp(p.craftiness * 0.65 + p.speed * 0.15 + p.crowd * 0.2, 0, 100),
    instant_recovery_tendency: clamp(p.recovery * 0.6 + p.aggression * 0.2 + p.stamina * 0.2, 0, 100),
    ring_escape_tendency: clamp(p.craftiness * 0.45 + (100 - p.aggression) * 0.25 + p.speed * 0.3, 0, 100),
    pin_combo_tendency: clamp(p.craftiness * 0.4 + p.grappling * 0.25 + p.striking * 0.2 + p.speed * 0.15, 0, 100)
  };
}

function generateMoveset(p) {
  const attacks = pickByStyle(p.style, {
    high_flyer: {
      light: "Quick Kick",
      heavy: "Jumping Enzuigiri",
      grapple: "Arm Drag",
      runLight: "Running Dropkick",
      runHeavy: "Running Knee",
      runGrapple: "Hurricanrana",
      rear: "Schoolboy Kick",
      ground: "Standing Moonsault",
      corner: "Corner Dropkick",
      rope: "Springboard Attack",
      rebound: "Flying Forearm",
      apron: "Apron Enzuigiri",
      dive: "Tope Con Hilo",
      spring: "Springboard Cutter",
      standingSub: "Sleeper Hold",
      groundSub: "Crossface"
    },
    powerhouse: {
      light: "Heavy Forearm",
      heavy: "Big Boot",
      grapple: "Body Slam",
      runLight: "Running Shoulder Tackle",
      runHeavy: "Body Avalanche",
      runGrapple: "Running Powerslam",
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
    },
    flashy_aerial: {
      light: "Fast Forearm",
      heavy: "Spin Kick",
      grapple: "Snapmare",
      runLight: "Running Dropkick",
      runHeavy: "Running Crossbody",
      runGrapple: "Tilt-A-Whirl Headscissors",
      rear: "Back Kick",
      ground: "Standing Shooting Star Press",
      corner: "Corner Knee Lift",
      rope: "Rope Springboard Strike",
      rebound: "Flying Clothesline",
      apron: "Apron Crossbody",
      dive: "Asai Moonsault",
      spring: "Springboard Clothesline",
      standingSub: "Arm Wrench Submission",
      groundSub: "Crossface"
    },
    technical_athlete: {
      light: "European Uppercut",
      heavy: "Jumping Knee",
      grapple: "Snap Suplex",
      runLight: "Running Forearm",
      runHeavy: "Running Uppercut",
      runGrapple: "Northern Lights Suplex",
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
    },
    crafty: {
      light: "Quick Jab",
      heavy: "Chop Block",
      grapple: "Neckbreaker",
      runLight: "Running Low Kick",
      runHeavy: "Running Bulldog",
      runGrapple: "Russian Legsweep",
      rear: "Roll-Up Trip",
      ground: "Stomp",
      corner: "Corner Cheap Shot",
      rope: "Rope Assisted Kick",
      rebound: "Drop Toe Hold",
      apron: "Apron DDT Setup",
      dive: "Top Rope Elbow Drop",
      spring: "No Springboard",
      standingSub: "Sleeper Hold",
      groundSub: "Single Leg Crab"
    },
    default: {
      light: "Forearm Smash",
      heavy: "Lariat",
      grapple: "Suplex",
      runLight: "Running Forearm",
      runHeavy: "Running Knee",
      runGrapple: "Running Powerslam",
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
    }
  });

  return {
    standing_front_light_attack_towards: attacks.light,
    standing_front_light_attack_neutral: attacks.light,
    standing_front_light_attack_away: attacks.light,
    standing_front_combo_chain_towards: attacks.light,
    standing_front_combo_chain_neutral: attacks.light,
    standing_front_combo_chain_away: attacks.light,
    standing_front_combo_enders_towards: attacks.heavy,
    standing_front_combo_enders_neutral: attacks.heavy,
    standing_front_combo_enders_away: attacks.heavy,
    standing_front_heavy_attack_towards: attacks.heavy,
    standing_front_heavy_attack_neutral: attacks.heavy,
    standing_front_heavy_attack_away: attacks.heavy,
    standing_front_light_grapple_neutral: attacks.grapple,
    standing_front_light_grapple_up: attacks.grapple,
    standing_front_light_grapple_left: attacks.grapple,
    standing_front_light_grapple_right: attacks.grapple,
    standing_front_light_grapple_down: attacks.grapple,
    standing_front_heavy_grapple_neutral: attacks.runGrapple,
    standing_front_heavy_grapple_up: attacks.runGrapple,
    standing_front_heavy_grapple_left: attacks.runGrapple,
    standing_front_heavy_grapple_right: attacks.runGrapple,
    standing_front_heavy_grapple_down: attacks.runGrapple,
    standing_front_running_light: attacks.runLight,
    standing_front_running_heavy: attacks.runHeavy,
    standing_front_running_grapple: attacks.runGrapple,
    standing_rear_light_attack: attacks.rear,
    standing_rear_heavy_attack: attacks.heavy,
    standing_rear_light_grapple_neutral: attacks.grapple,
    standing_rear_light_grapple_up: attacks.grapple,
    standing_rear_light_grapple_left: attacks.grapple,
    standing_rear_light_grapple_right: attacks.grapple,
    standing_rear_light_grapple_down: attacks.grapple,
    standing_rear_heavy_grapple_neutral: attacks.runGrapple,
    standing_rear_heavy_grapple_up: attacks.runGrapple,
    standing_rear_heavy_grapple_left: attacks.runGrapple,
    standing_rear_heavy_grapple_right: attacks.runGrapple,
    standing_rear_heavy_grapple_down: attacks.runGrapple,
    standing_rear_grapple: attacks.runGrapple,
    standing_power_bomb: "Powerbomb Carry",
    standing_firemans_carry: "Fireman's Carry",
    standing_shoulder_carry: "Shoulder Carry",
    standing_cradle_carry: "Cradle Carry",
    standing_foot_catch_light: "Foot Catch Kick",
    standing_foot_catch_heavy: "Foot Catch Lariat",
    standing_foot_catch_submission: attacks.standingSub,
    standing_foot_catch_reversal: "Foot Catch Counter",
    standing_front_leverage_pin: "Small Package",
    standing_rear_leverage_pin: "Schoolboy Pin",
    ground_supine_upper_heavy_attack: attacks.ground,
    ground_supine_upper_limb_target: "Head Stomp",
    ground_supine_upper_heavy_grapple: attacks.groundSub,
    ground_supine_side_heavy: attacks.ground,
    ground_supine_side_limb_target: "Arm Stomp",
    ground_supine_side_heavy_grapple: attacks.groundSub,
    ground_supine_lower_heavy: attacks.ground,
    ground_supine_lower_limb_target: "Leg Stomp",
    ground_supine_lower_heavy_grapple: attacks.groundSub,
    ground_supine_running_attack: attacks.runHeavy,
    ground_prone_upper_heavy_attack: attacks.ground,
    ground_prone_upper_limb_target: "Head Strike",
    ground_prone_upper_heavy_grapple: attacks.groundSub,
    ground_prone_side_heavy: attacks.ground,
    ground_prone_side_limb_target: "Arm Pull",
    ground_prone_side_heavy_grapple: attacks.groundSub,
    ground_prone_lower_heavy: attacks.ground,
    ground_prone_lower_limb_target: "Leg Pull",
    ground_prone_lower_heavy_grapple: attacks.groundSub,
    ground_kneeling_front_light_attack: attacks.light,
    ground_kneeling_front_heavy_attack: attacks.heavy,
    ground_kneeling_front_light_grapple: attacks.grapple,
    ground_kneeling_front_heavy_grapple: attacks.runGrapple,
    ground_kneeling_front_running_attack: attacks.runLight,
    ground_kneeling_rear_light_grapple: attacks.grapple,
    ground_kneeling_rear_heavy_grapple: attacks.runGrapple,
    ground_seated_front_heavy_attack: attacks.ground,
    ground_seated_front_grapple: attacks.groundSub,
    ground_seated_front_running_attack: attacks.runHeavy,
    ground_seated_rear_heavy_attack: attacks.ground,
    ground_seated_rear_grapple: attacks.groundSub,
    ground_corner_vs_grounded_opponent: attacks.corner,
    corner_leaning_front_light_attack: attacks.light,
    corner_leaning_front_heavy_attack: attacks.corner,
    corner_leaning_front_heavy_grapple_towards: attacks.runGrapple,
    corner_leaning_front_heavy_grapple_neutral: attacks.runGrapple,
    corner_leaning_front_heavy_grapple_away: attacks.runGrapple,
    corner_leaning_front_light_running_attack: attacks.runLight,
    corner_leaning_front_heavy_running_attack: attacks.runHeavy,
    corner_leaning_front_grab_running_attack: attacks.runGrapple,
    corner_leaning_rear_light_attack: attacks.light,
    corner_leaning_rear_heavy_attack: attacks.corner,
    corner_leaning_rear_heavy_grapple_towards: attacks.runGrapple,
    corner_leaning_rear_heavy_grapple_neutral: attacks.runGrapple,
    corner_leaning_rear_heavy_grapple_away: attacks.runGrapple,
    corner_leaning_rear_running_attack: attacks.runHeavy,
    corner_top_rope_stunned_front_heavy_attack: attacks.corner,
    corner_top_rope_stunned_front_grapple: attacks.runGrapple,
    corner_top_rope_stunned_rear_heavy_attack: attacks.corner,
    corner_top_rope_stunned_rear_grapple: attacks.runGrapple,
    corner_seated_heavy_attack: attacks.corner,
    corner_seated_grapple: attacks.runGrapple,
    corner_seated_running_attack: attacks.runHeavy,
    corner_tree_of_woe_heavy_attack: attacks.corner,
    corner_tree_of_woe_running_attack: attacks.runHeavy,
    rope_leaning_light_attack: attacks.rope,
    rope_leaning_heavy_attack: attacks.rope,
    rope_leaning_heavy_grapple_towards: attacks.runGrapple,
    rope_leaning_heavy_grapple_neutral: attacks.runGrapple,
    rope_leaning_heavy_grapple_away: attacks.runGrapple,
    rope_leaning_running_attack: attacks.runHeavy,
    rope_middle_rope_heavy_attack: attacks.rope,
    rope_middle_rope_running_attack: attacks.runHeavy,
    irish_whip_rebound_attack_light_attack: attacks.rebound,
    irish_whip_rebound_attack_heavy_attack: attacks.runHeavy,
    irish_whip_rebound_attack_grapple: attacks.runGrapple,
    irish_whip_pullback_action_light_attack: attacks.light,
    irish_whip_pullback_action_heavy_attack: attacks.heavy,
    apron_from_ring_front_heavy_attack: attacks.apron,
    apron_from_ring_front_heavy_grapple: attacks.runGrapple,
    apron_from_ring_front_grapple: attacks.grapple,
    apron_from_ring_rear_grapple: attacks.grapple,
    apron_from_apron_to_ring_heavy_attack: attacks.apron,
    apron_from_apron_to_ring_grapple: attacks.runGrapple,
    apron_from_apron_to_ringside_running_attack_to_standing_opponent: attacks.apron,
    apron_from_apron_to_ringside_running_attack_to_supine_opponent: attacks.apron,
    apron_to_apron_drag_to_apron: attacks.grapple,
    diving_top_rope_light_dive_attack: attacks.dive,
    diving_top_rope_heavy_dive_attack: attacks.dive,
    diving_top_rope_light_dive_to_supine_opponent: attacks.dive,
    diving_top_rope_heavy_dive_to_supine_opponent: attacks.dive,
    diving_middle_rope_light_dive: attacks.dive,
    diving_middle_rope_heavy_dive: attacks.dive,
    diving_middle_rope_light_dive_to_supine_opponent: attacks.dive,
    diving_middle_rope_heavy_dive_to_supine_opponent: attacks.dive,
    diving_ledge_dive_to_standing_opponent: attacks.dive,
    diving_ledge_dive_to_supine_opponent: attacks.dive,
    diving_equipment_box_dive_to_standing_opponent: attacks.dive,
    diving_equipment_box_dive_to_supine_opponent: attacks.dive,
    diving_barricade_dive_to_standing_opponent: attacks.dive,
    diving_barricade_dive_to_supine_opponent: attacks.dive,
    springboard_to_ring_standing_front_rope_springboard_attack: attacks.spring,
    springboard_to_ring_standing_front_running_springboard: attacks.spring,
    springboard_to_ring_standing_front_corner_springboard_standing_attack: attacks.spring,
    springboard_to_ring_standing_front_corner_springboard_running_attack: attacks.spring,
    springboard_to_ring_standing_front_springboard_from_apron: attacks.spring,
    holds_submission_standing_submission: attacks.standingSub,
    holds_submission_foot_catch_submission: attacks.standingSub,
    holds_submission_upper_body_ground_submission: attacks.groundSub,
    holds_submission_side_ground_submission: attacks.groundSub,
    holds_submission_lower_body_ground_submission: attacks.groundSub
  };
}

function generatePresentation(style) {
  const data = pickByStyle(style, {
    high_flyer: {
      signatures: ["Springboard Cutter", "Missile Dropkick"],
      finishers: ["630 Senton", "Spiral Tap"],
      taunts: ["Crowd hype taunt", "Fast pace challenge taunt", "Wake up taunt"]
    },
    powerhouse: {
      signatures: ["Spinebuster", "Body Block"],
      finishers: ["Powerbomb", "Chokeslam"],
      taunts: ["Power pose", "Intimidation taunt", "Wake up stare"]
    },
    flashy_aerial: {
      signatures: ["Springboard Clothesline", "Tilt-A-Whirl DDT"],
      finishers: ["450 Splash", "Corkscrew Moonsault"],
      taunts: ["Showboat taunt", "Spotlight pose", "Wake up point"]
    },
    technical_athlete: {
      signatures: ["German Suplex", "Dragon Screw"],
      finishers: ["Armbar", "Crossface"],
      taunts: ["Technical calm taunt", "Measured challenge", "Wake up ready"]
    },
    crafty: {
      signatures: ["Chop Block", "DDT"],
      finishers: ["Roll Up Variant", "Cutter"],
      taunts: ["Sneaky shrug", "Crafty point", "Wake up bait"]
    },
    default: {
      signatures: ["Running Forearm", "Neckbreaker"],
      finishers: ["Cutter", "Spinning Kick"],
      taunts: ["Crowd taunt", "Opponent taunt", "Wake up taunt"]
    }
  });

  return {
    signatures: {
      in_ring: data.signatures,
      ringside: [data.signatures[0]]
    },
    finishers: {
      in_ring: data.finishers,
      ringside: [data.finishers[0]],
      tag_team: ["Tag Team Finisher"],
      ladder: [data.finishers[0]],
      table: [data.finishers[0]],
      rumble: [data.finishers[0]]
    },
    taunts: {
      crowd: data.taunts,
      opponent: data.taunts,
      wake_up: data.taunts
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

function flattenSignatures(signatures) {
  return [
    "In Ring: " + signatures.in_ring.join(", "),
    "Ringside: " + signatures.ringside.join(", ")
  ];
}

function flattenFinishers(finishers) {
  return [
    "In Ring: " + finishers.in_ring.join(", "),
    "Ringside: " + finishers.ringside.join(", "),
    "Tag Team: " + finishers.tag_team.join(", "),
    "Ladder: " + finishers.ladder.join(", "),
    "Table: " + finishers.table.join(", "),
    "Rumble: " + finishers.rumble.join(", ")
  ];
}

function flattenTaunts(taunts) {
  return [
    "Crowd: " + taunts.crowd.join(", "),
    "Opponent: " + taunts.opponent.join(", "),
    "Wake Up: " + taunts.wake_up.join(", ")
  ];
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
  const moveset = generateMoveset(profile);
  const presentation = generatePresentation(profile.style);
  const skillPoints = generateSkillPoints(core);

  statusEl.textContent = "Generated for " + formatLabel(rawName);
  resultWrestlerName.textContent = formatLabel(rawName);
  resultSubtitle.textContent = "Gameplay-focused prototype output";
  resultsEl.classList.remove("hidden");

  renderGrid(coreAttributesEl, core);
  renderGrid(aiAttributesEl, ai);
  renderGrid(movesetEl, moveset);
  renderGrid(skillPointsEl, skillPoints);
  renderList(signaturesEl, flattenSignatures(presentation.signatures));
  renderList(finishersEl, flattenFinishers(presentation.finishers));
  renderList(tauntsEl, flattenTaunts(presentation.taunts));
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
