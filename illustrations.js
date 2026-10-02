/**
 * Sleek Minimalist Vector Illustrations for Exercises
 * Dark-mode optimized with neon posture accents (SF/Apple Fitness style)
 */

const EXERCISE_ILLUSTRATIONS = {
  // 1. Warmup Walk / Bike
  warmup_cardio: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <defs>
        <linearGradient id="gWarm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="240" height="150" rx="16" fill="url(#gWarm)" />
      <!-- Treadmill Deck -->
      <line x1="40" y1="120" x2="190" y2="105" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
      <line x1="170" y1="108" x2="178" y2="60" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
      <line x1="165" y1="60" x2="185" y2="60" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
      <!-- Walking Silhouette -->
      <circle cx="120" cy="50" r="10" fill="#38bdf8" />
      <line x1="120" y1="60" x2="124" y2="88" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
      <!-- Legs in stride -->
      <line x1="124" y1="88" x2="142" y2="108" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
      <line x1="124" y1="88" x2="104" y2="114" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
      <!-- Arms swinging free (no rails) -->
      <line x1="120" y1="68" x2="136" y2="82" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="120" y1="68" x2="106" y2="80" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
      <text x="120" y="138" fill="#64748b" font-size="11" text-anchor="middle" font-weight="600">EASY WARMUP PACE</text>
    </svg>
  `,

  // 2. Dynamic Mobility
  warmup_mobility: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <!-- Floor line -->
      <line x1="30" y1="125" x2="210" y2="125" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      <!-- Squat figure -->
      <circle cx="85" cy="55" r="9" fill="#10b981" />
      <line x1="85" y1="64" x2="80" y2="88" stroke="#10b981" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="80" y1="88" x2="68" y2="92" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
      <line x1="68" y1="92" x2="74" y2="122" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
      <line x1="85" y1="72" x2="102" y2="72" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Arm circle rotation arrow -->
      <circle cx="165" cy="65" r="9" fill="#fbbf24" />
      <line x1="165" y1="74" x2="165" y2="105" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
      <line x1="165" y1="105" x2="158" y2="125" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
      <line x1="165" y1="105" x2="172" y2="125" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
      <!-- Circling arms -->
      <circle cx="165" cy="78" r="22" fill="none" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="6 4"/>
      <text x="120" y="140" fill="#64748b" font-size="11" text-anchor="middle" font-weight="600">MOBILITY & ARM CIRCLES</text>
    </svg>
  `,

  // 3. Practice Sets
  warmup_practice: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <circle cx="120" cy="45" r="10" fill="#fbbf24" />
      <line x1="120" y1="55" x2="120" y2="92" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>
      <line x1="120" y1="92" x2="108" y2="125" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
      <line x1="120" y1="92" x2="132" y2="125" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
      <!-- Light Barbell in hands -->
      <line x1="80" y1="70" x2="160" y2="70" stroke="#e2e8f0" stroke-width="4" stroke-linecap="round"/>
      <rect x="76" y="62" width="6" height="16" rx="2" fill="#94a3b8"/>
      <rect x="158" y="62" width="6" height="16" rx="2" fill="#94a3b8"/>
      <text x="120" y="140" fill="#fbbf24" font-size="11" text-anchor="middle" font-weight="600">LIGHT PRACTICE SETS (WARMUP)</text>
    </svg>
  `,

  // 4. Goblet Squat
  goblet_squat: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <line x1="40" y1="130" x2="200" y2="130" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      <!-- Head & Torso in deep squat -->
      <circle cx="120" cy="42" r="10" fill="#10b981" />
      <!-- Upright Torso -->
      <line x1="120" y1="52" x2="114" y2="82" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
      <!-- Thigh parallel to floor -->
      <line x1="114" y1="82" x2="90" y2="84" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
      <!-- Shin angled down -->
      <line x1="90" y1="84" x2="96" y2="126" stroke="#10b981" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Front Shin -->
      <line x1="114" y1="82" x2="138" y2="84" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
      <line x1="138" y1="84" x2="144" y2="126" stroke="#10b981" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Dumbbell held vertically at chest -->
      <rect x="114" y="58" width="12" height="24" rx="3" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
      <rect x="110" y="55" width="20" height="5" rx="1" fill="#f59e0b"/>
      <rect x="110" y="80" width="20" height="5" rx="1" fill="#f59e0b"/>
      <!-- Arms holding DB -->
      <path d="M 120 56 Q 134 68 126 72" fill="none" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">CHEST TALL • KNEES OUT</text>
    </svg>
  `,

  // 5. Smith Bench Press
  smith_bench: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <!-- Smith Machine Vertical Rails -->
      <line x1="75" y1="20" x2="75" y2="130" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
      <line x1="165" y1="20" x2="165" y2="130" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
      <!-- Safety stops -->
      <rect x="70" y="80" width="10" height="6" rx="2" fill="#ef4444"/>
      <rect x="160" y="80" width="10" height="6" rx="2" fill="#ef4444"/>
      <!-- Bench -->
      <line x1="85" y1="95" x2="165" y2="95" stroke="#475569" stroke-width="7" stroke-linecap="round"/>
      <line x1="95" y1="95" x2="95" y2="130" stroke="#334155" stroke-width="4"/>
      <line x1="155" y1="95" x2="155" y2="130" stroke="#334155" stroke-width="4"/>
      <!-- Person lying down -->
      <circle cx="102" cy="85" r="9" fill="#38bdf8"/>
      <line x1="108" y1="90" x2="148" y2="90" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
      <!-- Arms pressing bar up -->
      <line x1="126" y1="90" x2="120" y2="60" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
      <!-- Smith Barbell on track -->
      <line x1="60" y1="58" x2="180" y2="58" stroke="#f8fafc" stroke-width="5" stroke-linecap="round"/>
      <rect x="68" y="50" width="8" height="16" rx="2" fill="#fbbf24"/>
      <rect x="164" y="50" width="8" height="16" rx="2" fill="#fbbf24"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">SAFETY STOPS SET • CONTROL DESCENT</text>
    </svg>
  `,

  // 6. Cable Row
  cable_row: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <!-- Cable Machine pulley -->
      <rect x="25" y="40" width="22" height="90" rx="4" fill="#1e293b"/>
      <circle cx="45" cy="85" r="7" fill="#64748b"/>
      <!-- Cable line -->
      <line x1="45" y1="85" x2="128" y2="85" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="4 2"/>
      <!-- Bench / Footplate -->
      <line x1="65" y1="85" x2="65" y2="115" stroke="#475569" stroke-width="5" stroke-linecap="round"/>
      <line x1="80" y1="110" x2="175" y2="110" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
      <!-- Seated figure -->
      <circle cx="150" cy="52" r="9" fill="#10b981"/>
      <line x1="150" y1="61" x2="146" y2="105" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
      <!-- Legs bracing forward -->
      <line x1="146" y1="105" x2="105" y2="100" stroke="#10b981" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="105" y1="100" x2="70" y2="92" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
      <!-- Arms rowing back (elbow driven behind torso) -->
      <line x1="148" y1="72" x2="164" y2="80" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <line x1="164" y1="80" x2="130" y2="85" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">SQUEEZE LATS • CHEST TALL</text>
    </svg>
  `,

  // 7. DB Romanian Deadlift (RDL)
  db_rdl: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <line x1="30" y1="130" x2="210" y2="130" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      <!-- Figure in Flat Back Hip Hinge -->
      <!-- Head -->
      <circle cx="165" cy="52" r="9" fill="#38bdf8"/>
      <!-- Flat Spine angled down ~45 deg -->
      <line x1="160" y1="58" x2="115" y2="78" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
      <!-- Soft bent knees (hips pushed BACK to left) -->
      <line x1="115" y1="78" x2="128" y2="105" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="128" y1="105" x2="125" y2="130" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Arms hanging vertically with DBs grazing shins -->
      <line x1="148" y1="65" x2="138" y2="105" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <!-- Dumbbell -->
      <rect x="130" y="102" width="16" height="8" rx="2" fill="#fbbf24"/>
      <rect x="128" y="98" width="5" height="16" rx="1" fill="#f59e0b"/>
      <rect x="143" y="98" width="5" height="16" rx="1" fill="#f59e0b"/>
      <!-- Hip hinge arrow pointing back -->
      <path d="M 115 65 L 85 70" stroke="#fbbf24" stroke-width="2" stroke-dasharray="3 2" marker-end="url(#arrow)"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">PUSH HIPS BACK • SOFT KNEES • FLAT BACK</text>
    </svg>
  `,

  // 8. Farmer Carry
  farmer_carry: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <line x1="30" y1="130" x2="210" y2="130" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      <!-- Tall Upright Walking Silhouette -->
      <circle cx="120" cy="38" r="9" fill="#10b981"/>
      <line x1="120" y1="47" x2="120" y2="88" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
      <!-- Legs walking -->
      <line x1="120" y1="88" x2="106" y2="128" stroke="#10b981" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="120" y1="88" x2="134" y2="126" stroke="#10b981" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Arm holding dumbbell on side -->
      <line x1="120" y1="56" x2="120" y2="88" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <!-- DB at hip -->
      <rect x="110" y="86" width="20" height="8" rx="2" fill="#fbbf24"/>
      <rect x="108" y="81" width="5" height="18" rx="1" fill="#f59e0b"/>
      <rect x="127" y="81" width="5" height="18" rx="1" fill="#f59e0b"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">TALL POSTURE • NO LEANING</text>
    </svg>
  `,

  // 9. Supported Split Squat
  split_squat: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <line x1="30" y1="130" x2="210" y2="130" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      <!-- Fixed Wall / Post Support -->
      <line x1="180" y1="35" x2="180" y2="130" stroke="#475569" stroke-width="6" stroke-linecap="round"/>
      <!-- Figure in split squat -->
      <circle cx="125" cy="48" r="9" fill="#10b981"/>
      <line x1="125" y1="57" x2="122" y2="92" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
      <!-- Front leg 90 degrees -->
      <line x1="122" y1="92" x2="148" y2="95" stroke="#10b981" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="148" y1="95" x2="146" y2="128" stroke="#10b981" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Back leg bent toward floor -->
      <line x1="122" y1="92" x2="95" y2="108" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
      <line x1="95" y1="108" x2="98" y2="126" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
      <!-- Hand holding fixed support -->
      <line x1="125" y1="65" x2="180" y2="65" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">SLOW 2–3s DESCENT • DOWNHILL CONTROL</text>
    </svg>
  `,

  // 10. Seated DB Overhead Press
  seated_db_ohp: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <!-- Incline / Upright Bench Backrest -->
      <line x1="95" y1="35" x2="105" y2="110" stroke="#475569" stroke-width="6" stroke-linecap="round"/>
      <line x1="105" y1="110" x2="145" y2="110" stroke="#475569" stroke-width="6" stroke-linecap="round"/>
      <line x1="120" y1="110" x2="120" y2="135" stroke="#334155" stroke-width="4"/>
      <!-- Seated figure -->
      <circle cx="120" cy="56" r="9" fill="#38bdf8"/>
      <line x1="120" y1="65" x2="118" y2="105" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
      <line x1="118" y1="105" x2="145" y2="105" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="145" y1="105" x2="148" y2="135" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Arms pressing dumbbells overhead -->
      <line x1="120" y1="68" x2="110" y2="35" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <line x1="120" y1="68" x2="132" y2="35" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <!-- Dumbbells at top -->
      <rect x="100" y="28" width="18" height="6" rx="1.5" fill="#fbbf24"/>
      <rect x="124" y="28" width="18" height="6" rx="1.5" fill="#fbbf24"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">PRESS TALL • BRACE CORE</text>
    </svg>
  `,

  // 11. Lat Pulldown
  lat_pulldown: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <!-- Machine Frame & Pulley -->
      <line x1="120" y1="15" x2="120" y2="38" stroke="#64748b" stroke-width="3"/>
      <!-- Pulldown Bar -->
      <path d="M 65 38 L 120 38 L 175 38" stroke="#e2e8f0" stroke-width="5" stroke-linecap="round"/>
      <!-- Bench Seat -->
      <line x1="100" y1="115" x2="155" y2="115" stroke="#475569" stroke-width="6" stroke-linecap="round"/>
      <line x1="125" y1="115" x2="125" y2="138" stroke="#334155" stroke-width="4"/>
      <!-- Figure pulling bar down -->
      <circle cx="120" cy="58" r="9" fill="#10b981"/>
      <line x1="120" y1="67" x2="122" y2="110" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
      <!-- Arms pulled into W-shape -->
      <line x1="120" y1="72" x2="95" y2="82" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <line x1="95" y1="82" x2="85" y2="40" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="120" y1="72" x2="145" y2="82" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <line x1="145" y1="82" x2="155" y2="40" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">ELBOWS TO SIDES • CHEST HIGH</text>
    </svg>
  `,

  // 12. Pallof Press
  pallof_press: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <line x1="30" y1="130" x2="210" y2="130" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      <!-- Cable stack on left -->
      <rect x="25" y="30" width="16" height="100" rx="3" fill="#334155"/>
      <circle cx="33" cy="75" r="5" fill="#94a3b8"/>
      <!-- Cable running to hands -->
      <line x1="33" y1="75" x2="145" y2="75" stroke="#f8fafc" stroke-width="2" stroke-dasharray="4 2"/>
      <!-- Standing figure sideways -->
      <circle cx="120" cy="45" r="9" fill="#fbbf24"/>
      <line x1="120" y1="54" x2="120" y2="92" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>
      <line x1="120" y1="92" x2="110" y2="128" stroke="#fbbf24" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="120" y1="92" x2="130" y2="128" stroke="#fbbf24" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Hands pressed straight forward holding cable handle -->
      <line x1="120" y1="65" x2="145" y2="75" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <circle cx="145" cy="75" r="4" fill="#38bdf8"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">HOLD 1–2s • RESIST ROTATION</text>
    </svg>
  `,

  // 13. Flat DB Bench Press
  flat_db_bench: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <!-- Bench -->
      <line x1="60" y1="100" x2="180" y2="100" stroke="#475569" stroke-width="8" stroke-linecap="round"/>
      <line x1="80" y1="100" x2="80" y2="132" stroke="#334155" stroke-width="4"/>
      <line x1="160" y1="100" x2="160" y2="132" stroke="#334155" stroke-width="4"/>
      <!-- Lying figure -->
      <circle cx="85" cy="90" r="9" fill="#10b981"/>
      <line x1="90" y1="94" x2="155" y2="94" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
      <!-- Feet planted -->
      <line x1="155" y1="94" x2="165" y2="128" stroke="#10b981" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Arms pressing dumbbells -->
      <line x1="115" y1="94" x2="110" y2="55" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <line x1="135" y1="94" x2="130" y2="55" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <!-- Dumbbells in hands -->
      <rect x="100" y="48" width="18" height="6" rx="2" fill="#fbbf24"/>
      <rect x="122" y="48" width="18" height="6" rx="2" fill="#fbbf24"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">45° ELBOW ANGLE • CONTROLLED DESCENT</text>
    </svg>
  `,

  // 14. Single-Arm DB Row
  single_arm_db_row: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <!-- Bench -->
      <line x1="60" y1="95" x2="170" y2="95" stroke="#475569" stroke-width="7" stroke-linecap="round"/>
      <line x1="75" y1="95" x2="75" y2="130" stroke="#334155" stroke-width="4"/>
      <line x1="155" y1="95" x2="155" y2="130" stroke="#334155" stroke-width="4"/>
      <!-- Figure: non-working knee on bench, flat back -->
      <circle cx="85" cy="55" r="9" fill="#38bdf8"/>
      <!-- Flat horizontal spine -->
      <line x1="90" y1="62" x2="145" y2="62" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
      <!-- Support hand on bench -->
      <line x1="95" y1="62" x2="95" y2="95" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <!-- Support knee on bench -->
      <line x1="145" y1="62" x2="145" y2="95" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
      <!-- Other leg standing on floor -->
      <line x1="145" y1="62" x2="165" y2="130" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
      <!-- Rowing arm driving elbow high -->
      <line x1="120" y1="62" x2="130" y2="45" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <line x1="130" y1="45" x2="120" y2="68" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <rect x="110" y="65" width="20" height="8" rx="2" fill="#fbbf24"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">ELBOW TO HIP • FLAT SPINE</text>
    </svg>
  `,

  // 15. Standing DB Calf Raise
  standing_db_calf_raise: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <!-- Raised step / floor -->
      <rect x="40" y="120" width="160" height="12" rx="3" fill="#334155"/>
      <!-- Figure raised high on toes -->
      <circle cx="120" cy="35" r="9" fill="#10b981"/>
      <line x1="120" y1="44" x2="120" y2="85" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
      <line x1="120" y1="85" x2="114" y2="115" stroke="#10b981" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="120" y1="85" x2="126" y2="115" stroke="#10b981" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Feet arched high on toes -->
      <circle cx="114" cy="118" r="3" fill="#fbbf24"/>
      <circle cx="126" cy="118" r="3" fill="#fbbf24"/>
      <!-- Arms holding DBs at sides -->
      <line x1="120" y1="52" x2="108" y2="78" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="120" y1="52" x2="132" y2="78" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="102" y="75" width="12" height="6" rx="1.5" fill="#fbbf24"/>
      <rect x="126" y="75" width="12" height="6" rx="1.5" fill="#fbbf24"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">HIGH ON TOES • 1s PAUSE AT BOTTOM</text>
    </svg>
  `,

  // 16. Suitcase Carry
  suitcase_carry: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <line x1="30" y1="130" x2="210" y2="130" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      <!-- Figure upright, single DB on right side -->
      <circle cx="120" cy="38" r="9" fill="#fbbf24"/>
      <line x1="120" y1="47" x2="120" y2="88" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>
      <line x1="120" y1="88" x2="108" y2="128" stroke="#fbbf24" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="120" y1="88" x2="132" y2="128" stroke="#fbbf24" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Empty arm free for balance -->
      <line x1="120" y1="55" x2="100" y2="75" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Loaded arm with heavy DB -->
      <line x1="120" y1="55" x2="135" y2="85" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
      <rect x="126" y="82" width="18" height="8" rx="2" fill="#10b981"/>
      <rect x="124" y="77" width="5" height="18" rx="1" fill="#059669"/>
      <rect x="141" y="77" width="5" height="18" rx="1" fill="#059669"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">ZERO SIDEWAYS LEAN • 30s PER SIDE</text>
    </svg>
  `,

  // 17. Cardio Treadmill
  cardio_incline: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <!-- Incline Deck -->
      <line x1="40" y1="125" x2="190" y2="95" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
      <line x1="175" y1="98" x2="182" y2="52" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
      <circle cx="125" cy="46" r="10" fill="#38bdf8"/>
      <line x1="125" y1="56" x2="126" y2="85" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
      <line x1="126" y1="85" x2="148" y2="102" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="126" y1="85" x2="108" y2="114" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Arms swinging (hands off rails) -->
      <line x1="125" y1="65" x2="140" y2="78" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="125" y1="65" x2="110" y2="76" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
      <text x="120" y="142" fill="#38bdf8" font-size="11" text-anchor="middle" font-weight="600">INCLINE WALK • SPEAK IN SENTENCES</text>
    </svg>
  `,

  // 18. Cardio Bike / Elliptical
  cardio_bike: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <!-- Stationary Bike Frame -->
      <circle cx="85" cy="105" r="20" fill="none" stroke="#334155" stroke-width="4"/>
      <circle cx="155" cy="105" r="20" fill="none" stroke="#334155" stroke-width="4"/>
      <line x1="85" y1="105" x2="120" y2="75" stroke="#475569" stroke-width="4"/>
      <line x1="155" y1="105" x2="120" y2="75" stroke="#475569" stroke-width="4"/>
      <!-- Rider -->
      <circle cx="108" cy="45" r="9" fill="#10b981"/>
      <line x1="108" y1="54" x2="114" y2="80" stroke="#10b981" stroke-width="5" stroke-linecap="round"/>
      <line x1="114" y1="80" x2="128" y2="105" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
      <!-- Arms to handlebars -->
      <line x1="110" y1="62" x2="142" y2="70" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
      <text x="120" y="142" fill="#10b981" font-size="11" text-anchor="middle" font-weight="600">MODERATE EFFORT • 7 MINUTES</text>
    </svg>
  `,

  // 19. Cooldown Walk
  cooldown_walk: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <line x1="30" y1="125" x2="210" y2="125" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      <circle cx="120" cy="45" r="10" fill="#a855f7"/>
      <line x1="120" y1="55" x2="120" y2="88" stroke="#a855f7" stroke-width="5" stroke-linecap="round"/>
      <line x1="120" y1="88" x2="110" y2="122" stroke="#a855f7" stroke-width="4" stroke-linecap="round"/>
      <line x1="120" y1="88" x2="130" y2="122" stroke="#a855f7" stroke-width="4" stroke-linecap="round"/>
      <text x="120" y="142" fill="#a855f7" font-size="11" text-anchor="middle" font-weight="600">EASY 2-MIN SLOW DOWN</text>
    </svg>
  `,

  // 20. Calf Stretch
  stretch_calf: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <line x1="30" y1="128" x2="210" y2="128" stroke="#1e293b" stroke-width="3"/>
      <!-- Wall on right -->
      <line x1="180" y1="25" x2="180" y2="128" stroke="#475569" stroke-width="6"/>
      <!-- Figure with hands on wall -->
      <circle cx="115" cy="48" r="9" fill="#a855f7"/>
      <line x1="115" y1="57" x2="122" y2="92" stroke="#a855f7" stroke-width="5"/>
      <line x1="118" y1="65" x2="180" y2="65" stroke="#94a3b8" stroke-width="4"/>
      <!-- Front bent leg -->
      <line x1="122" y1="92" x2="148" y2="126" stroke="#a855f7" stroke-width="4.5"/>
      <!-- Back straight leg with heel pressed to ground -->
      <line x1="122" y1="92" x2="85" y2="128" stroke="#a855f7" stroke-width="5" stroke-linecap="round"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">HANDS ON WALL • BACK HEEL DOWN</text>
    </svg>
  `,

  // 21. Hip Flexor Stretch
  stretch_hip_flexor: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <line x1="30" y1="128" x2="210" y2="128" stroke="#1e293b" stroke-width="3"/>
      <!-- Figure in staggered half-kneel -->
      <circle cx="115" cy="45" r="9" fill="#a855f7"/>
      <line x1="115" y1="54" x2="115" y2="88" stroke="#a855f7" stroke-width="5"/>
      <!-- Front leg 90 deg -->
      <line x1="115" y1="88" x2="145" y2="92" stroke="#a855f7" stroke-width="4.5"/>
      <line x1="145" y1="92" x2="145" y2="128" stroke="#a855f7" stroke-width="4.5"/>
      <!-- Back leg with knee on floor -->
      <line x1="115" y1="88" x2="90" y2="108" stroke="#a855f7" stroke-width="4.5"/>
      <line x1="90" y1="108" x2="88" y2="128" stroke="#a855f7" stroke-width="4.5"/>
      <!-- Pelvic tuck arrow (belt buckle up) -->
      <path d="M 105 88 Q 115 80 120 86" stroke="#fbbf24" stroke-width="2" fill="none"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">TUCK BELT BUCKLE UP • SHIFT FORWARD</text>
    </svg>
  `,

  // 22. Chest Stretch
  stretch_chest: `
    <svg viewBox="0 0 240 150" class="exercise-svg">
      <rect width="240" height="150" rx="16" fill="#0f172a" />
      <!-- Doorway jambs -->
      <line x1="60" y1="20" x2="60" y2="130" stroke="#475569" stroke-width="6"/>
      <line x1="180" y1="20" x2="180" y2="130" stroke="#475569" stroke-width="6"/>
      <!-- Figure stepping through doorway -->
      <circle cx="120" cy="45" r="9" fill="#a855f7"/>
      <line x1="120" y1="54" x2="120" y2="92" stroke="#a855f7" stroke-width="5"/>
      <!-- Step forward -->
      <line x1="120" y1="92" x2="132" y2="128" stroke="#a855f7" stroke-width="4.5"/>
      <line x1="120" y1="92" x2="110" y2="128" stroke="#a855f7" stroke-width="4"/>
      <!-- Forearms resting against door frame -->
      <line x1="120" y1="62" x2="60" y2="62" stroke="#94a3b8" stroke-width="4"/>
      <line x1="120" y1="62" x2="180" y2="62" stroke="#94a3b8" stroke-width="4"/>
      <text x="120" y="142" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">FOREARMS IN DOORWAY • STEP FORWARD</text>
    </svg>
  `
};
