const data = {
  "trick williams": {
    core_attributes: {
      arm_power: 85,
      leg_power: 80,
      grapple_offense: 74,
      running_offense: 82,
      aerial_offense: 42,
      aerial_range: 38,
      power_submission_offense: 20,
      technical_submission_offense: 24,
      strike_reversal: 79,
      grapple_reversal: 74,
      aerial_reversal: 61,
      body_durability: 84,
      arm_durability: 80,
      leg_durability: 79,
      power_submission_defense: 73,
      technical_submission_defense: 68,
      pin_escape: 85,
      strength: 82,
      stamina: 82,
      agility: 73,
      movement_speed: 78,
      recovery: 81,
      special: 89,
      finisher: 87
    },
    ai_attributes: {
      combo_tendency: 79,
      combo_selection_towards: 82,
      combo_selection_neutral: 77,
      combo_selection_away: 61,
      submissions_tendency: 18,
      light_strike_tendency: 82,
      heavy_strike_tendency: 86,
      light_grapple_tendency: 63,
      heavy_grapple_tendency: 76,
      ground_strike_tendency: 68,
      ground_grapple_tendency: 49,
      environmental_strike_tendency: 45,
      environmental_grapple_tendency: 42,
      dive_tendency: 30,
      daredevil_dive_tendency: 18,
      in_ring_springboard_tendency: 10,
      ringside_springboard_tendency: 8,
      limb_targeting_tendency: 25,
      running_attack_tendency: 83,
      dodging_tendency: 71,
      weapon_usage_tendency: 25,
      table_usage_tendency: 19,
      possum_attack_and_pin_tendency: 20,
      instant_recovery_tendency: 76,
      ring_escape_tendency: 24,
      pin_combo_tendency: 52
    },
    signatures: [
      "Running Pump Kick",
      "Spinebuster"
    ],
    finishers: [
      "Trick Shot style spinning kick",
      "Sit-Out Powerbomb"
    ],
    taunts: [
      "Crowd hype taunt",
      "Confident swagger taunt",
      "Wake-up challenge taunt"
    ],
    skill_points: {
      offense_points: 79,
      defense_points: 74,
      recovery_points: 81,
      stamina_points: 78,
      special_points: 89,
      finisher_points: 87,
      mobility_points: 63
    }
  },

  "oba femi": {
    core_attributes: {
      arm_power: 87,
      leg_power: 78,
      grapple_offense: 84,
      running_offense: 66,
      aerial_offense: 12,
      aerial_range: 10,
      power_submission_offense: 22,
      technical_submission_offense: 16,
      strike_reversal: 73,
      grapple_reversal: 76,
      aerial_reversal: 45,
      body_durability: 89,
      arm_durability: 86,
      leg_durability: 84,
      power_submission_defense: 80,
      technical_submission_defense: 61,
      pin_escape: 88,
      strength: 95,
      stamina: 80,
      agility: 58,
      movement_speed: 64,
      recovery: 84,
      special: 78,
      finisher: 90
    },
    ai_attributes: {
      combo_tendency: 34,
      combo_selection_towards: 46,
      combo_selection_neutral: 38,
      combo_selection_away: 18,
      submissions_tendency: 10,
      light_strike_tendency: 42,
      heavy_strike_tendency: 79,
      light_grapple_tendency: 44,
      heavy_grapple_tendency: 88,
      ground_strike_tendency: 62,
      ground_grapple_tendency: 71,
      environmental_strike_tendency: 48,
      environmental_grapple_tendency: 55,
      dive_tendency: 4,
      daredevil_dive_tendency: 1,
      in_ring_springboard_tendency: 0,
      ringside_springboard_tendency: 0,
      limb_targeting_tendency: 21,
      running_attack_tendency: 54,
      dodging_tendency: 29,
      weapon_usage_tendency: 20,
      table_usage_tendency: 22,
      possum_attack_and_pin_tendency: 8,
      instant_recovery_tendency: 68,
      ring_escape_tendency: 10,
      pin_combo_tendency: 22
    },
    signatures: [
      "Fall From Grace style slam",
      "Pop-up power move"
    ],
    finishers: [
      "Powerbomb variant",
      "High-impact slam finisher"
    ],
    taunts: [
      "Power pose",
      "Dominant stare down",
      "Wake-up intimidation taunt"
    ],
    skill_points: {
      offense_points: 81,
      defense_points: 77,
      recovery_points: 86,
      stamina_points: 67,
      special_points: 78,
      finisher_points: 90,
      mobility_points: 44
    }
  }
};

const wrestlerInput = document.getElementById("wrestlerInput");
const generateBtn = document.getElementById("generateBtn");
const statusEl = document.getElementById("status");
const resultsEl = document.getElementById("results");

function renderGrid(targetId, obj) {
  const container = document.getElementById(targetId);
  container.innerHTML = "";

  Object.entries(obj).forEach(([key, value]) => {
    const div = document.createElement("div");
    div.className = "stat";
    div.innerHTML = `<strong>${formatLabel(key)}</strong><br>${value}`;
    container.appendChild(div);
  });
}

function renderList(targetId, items) {
  const container = document.getElementById(targetId);
  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

function formatLabel(text) {
  return text
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

generateBtn.addEventListener("click", () => {
  const name = wrestlerInput.value.trim().toLowerCase();

  if (!name) {
    statusEl.textContent = "Enter a wrestler name.";
    resultsEl.classList.add("hidden");
    return;
  }

  const wrestler = data[name];

  if (!wrestler) {
    statusEl.textContent = "Wrestler not found in the free prototype yet.";
    resultsEl.classList.add("hidden");
    return;
  }

  statusEl.textContent = `Showing prototype build for ${formatLabel(name)}.`;
  resultsEl.classList.remove("hidden");

  renderGrid("coreAttributes", wrestler.core_attributes);
  renderGrid("aiAttributes", wrestler.ai_attributes);
  renderGrid("skillPoints", wrestler.skill_points);
  renderList("signatures", wrestler.signatures);
  renderList("finishers", wrestler.finishers);
  renderList("taunts", wrestler.taunts);
});
