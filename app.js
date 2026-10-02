/**
 * Strength for Family + Hiking PWA
 * Commercial Fitness App Player Engine (Directly matching user reference UI)
 */

// =============================================================================
// 1. WORKOUT DEFINITIONS & EXERCISES
// =============================================================================

const WORKOUT_PROGRAMS = {
  monday: {
    dayName: 'Monday',
    title: 'Monday Strength',
    subtitle: 'Squat • Smith Press • Row • RDL • Farmer Carry',
    cardioName: 'Incline Treadmill Walk',
    cardioIllustration: 'cardio_incline',
    cardioCues: [
      'Maintain conversational pace: speak in full sentences.',
      'Hands off the handrails to build true hiking balance.'
    ],
    exercises: [
      {
        id: 'mon_goblet_squat',
        name: 'Goblet Squat',
        illustration: 'goblet_squat',
        defaultSets: 3,
        introSets: 2,
        repRange: '6–10',
        minReps: 6,
        maxReps: 10,
        defaultWeight: 45,
        weightUnit: 'lb total',
        stepWeight: 5,
        restSeconds: 120,
        equipment: 'dumbbell',
        formCues: [
          'Hold dumbbell vertically against chest with elbows tucked in.',
          'Sit back & down between knees, chest tall. Finish with 2 good reps left.'
        ]
      },
      {
        id: 'mon_smith_bench',
        name: 'Smith Bench Press',
        illustration: 'smith_bench',
        defaultSets: 3,
        introSets: 2,
        repRange: '6–10',
        minReps: 6,
        maxReps: 10,
        defaultWeight: 85,
        weightUnit: 'lb total',
        stepWeight: 5,
        restSeconds: 120,
        equipment: 'smith',
        hasPracticeSet: true,
        formCues: [
          'Set Smith safety stops just above chest before lifting.',
          'Lower with control to mid-chest; press up without flaring elbows.'
        ]
      },
      {
        id: 'mon_cable_row',
        name: 'Cable Row',
        illustration: 'cable_row',
        defaultSets: 2,
        introSets: 2,
        repRange: '8–12',
        minReps: 8,
        maxReps: 12,
        defaultWeight: 70,
        weightUnit: 'lb',
        stepWeight: 5,
        restSeconds: 75,
        equipment: 'cable',
        formCues: [
          'Sit tall with chest proud; avoid swinging your torso.',
          'Drive elbows back into ribcage; squeeze shoulder blades 1 second.'
        ]
      },
      {
        id: 'mon_db_rdl',
        name: 'DB Romanian Deadlift',
        illustration: 'db_rdl',
        defaultSets: 2,
        introSets: 2,
        repRange: '8–10',
        minReps: 8,
        maxReps: 10,
        defaultWeight: 20,
        weightUnit: 'lb/hand',
        stepWeight: 5,
        restSeconds: 105,
        equipment: 'dumbbell',
        formCues: [
          'Soft knees, push hips straight back into the wall behind you.',
          'Keep dumbbells grazing shins; stop when hamstrings stretch.'
        ]
      },
      {
        id: 'mon_farmer_carry',
        name: 'Farmer Carry',
        illustration: 'farmer_carry',
        defaultSets: 2,
        introSets: 2,
        repRange: '30s',
        minReps: 30,
        maxReps: 45,
        isTimed: true,
        durationSeconds: 30,
        defaultWeight: 30,
        weightUnit: 'lb/hand',
        stepWeight: 5,
        restSeconds: 60,
        equipment: 'dumbbell',
        formCues: [
          'Stand tall like a string pulls your crown up; shoulders back.',
          'Walk or march in place with deliberate, controlled steps.'
        ]
      }
    ]
  },
  wednesday: {
    dayName: 'Wednesday',
    title: 'Wednesday Strength',
    subtitle: 'Split Squat • Seated OHP • Lat Pulldown • RDL • Pallof Press',
    cardioName: 'Bike or Elliptical',
    cardioIllustration: 'cardio_bike',
    cardioCues: [
      'Moderate effort: breathing harder, but still able to speak full sentences.',
      'Maintain steady cadence (pedal or glide smoothly).'
    ],
    exercises: [
      {
        id: 'wed_split_squat',
        name: 'Supported Split Squat',
        illustration: 'split_squat',
        defaultSets: 2,
        introSets: 2,
        repRange: '8 / leg',
        minReps: 8,
        maxReps: 8,
        defaultWeight: 0,
        weightUnit: 'bodyweight',
        stepWeight: 2.5,
        restSeconds: 120,
        equipment: 'bodyweight',
        formCues: [
          'Hold fixed support; lower slowly in 2–3s (builds downhill hiking control).',
          'Front knee stays over mid-foot; push through front heel to rise.'
        ]
      },
      {
        id: 'wed_seated_ohp',
        name: 'Seated DB Overhead Press',
        illustration: 'seated_db_ohp',
        defaultSets: 3,
        introSets: 2,
        repRange: '6–10',
        minReps: 6,
        maxReps: 10,
        defaultWeight: 15,
        weightUnit: 'lb/hand',
        stepWeight: 2.5,
        restSeconds: 120,
        equipment: 'dumbbell',
        hasPracticeSet: true,
        formCues: [
          'Backrest nearly upright; brace core to avoid arching lower back.',
          'Lower weights to ear level with elbows slightly angled forward.'
        ]
      },
      {
        id: 'wed_lat_pulldown',
        name: 'Lat Pulldown (Two-Arm)',
        illustration: 'lat_pulldown',
        defaultSets: 2,
        introSets: 2,
        repRange: '8–12',
        minReps: 8,
        maxReps: 12,
        defaultWeight: 75,
        weightUnit: 'lb',
        stepWeight: 5,
        restSeconds: 75,
        equipment: 'cable',
        formCues: [
          'Chest lifted high; pull elbows down toward your back pockets.',
          'Control the return; avoid leaning way back or swinging.'
        ]
      },
      {
        id: 'wed_db_rdl',
        name: 'DB Romanian Deadlift',
        illustration: 'db_rdl',
        defaultSets: 2,
        introSets: 2,
        repRange: '8–10',
        minReps: 8,
        maxReps: 10,
        defaultWeight: 20,
        weightUnit: 'lb/hand',
        stepWeight: 5,
        restSeconds: 105,
        equipment: 'dumbbell',
        formCues: [
          'Soft knees, hinge hips back with a flat back.',
          'Dumbbells glide down thighs to mid-shin level.'
        ]
      },
      {
        id: 'wed_pallof_press',
        name: 'Pallof Press',
        illustration: 'pallof_press',
        defaultSets: 2,
        introSets: 2,
        repRange: '8 / side',
        minReps: 8,
        maxReps: 8,
        defaultWeight: 15,
        weightUnit: 'lb',
        stepWeight: 2.5,
        restSeconds: 60,
        equipment: 'cable',
        formCues: [
          'Stand sideways to cable at chest height; knees soft, core braced.',
          'Press forward, hold 1–2s, resisting rotation. Switch sides after 8 reps.'
        ]
      }
    ]
  },
  friday: {
    dayName: 'Friday',
    title: 'Friday Strength',
    subtitle: 'Goblet Squat • Flat DB Bench • Single-Arm Row • Calf Raise • Suitcase Carry',
    cardioName: 'Incline Treadmill Walk',
    cardioIllustration: 'cardio_incline',
    cardioCues: [
      'Comfortable, steady effort without holding the handrails.',
      'Incline builds glutes & calves for hiking uphill.'
    ],
    exercises: [
      {
        id: 'fri_goblet_squat',
        name: 'Goblet Squat',
        illustration: 'goblet_squat',
        defaultSets: 3,
        introSets: 2,
        repRange: '6–10',
        minReps: 6,
        maxReps: 10,
        defaultWeight: 45,
        weightUnit: 'lb total',
        stepWeight: 5,
        restSeconds: 120,
        equipment: 'dumbbell',
        formCues: [
          'Hold dumbbell vertically against chest; elbows tucked.',
          'Sit between knees, chest tall. Stop with 2 reps in reserve.'
        ]
      },
      {
        id: 'fri_flat_db_bench',
        name: 'Flat DB Bench Press',
        illustration: 'flat_db_bench',
        defaultSets: 3,
        introSets: 2,
        repRange: '8–12',
        minReps: 8,
        maxReps: 12,
        defaultWeight: 20,
        weightUnit: 'lb/hand',
        stepWeight: 2.5,
        restSeconds: 120,
        equipment: 'dumbbell',
        hasPracticeSet: true,
        formCues: [
          'Feet planted firmly; dumbbells at 45° angle to torso (arrowhead).',
          'Lower with control until dumbbells touch outer chest, press back up.'
        ]
      },
      {
        id: 'fri_single_arm_row',
        name: 'Single-Arm DB Row',
        illustration: 'single_arm_db_row',
        defaultSets: 2,
        introSets: 2,
        repRange: '8–12 / arm',
        minReps: 8,
        maxReps: 12,
        defaultWeight: 30,
        weightUnit: 'lb/arm',
        stepWeight: 5,
        restSeconds: 75,
        equipment: 'dumbbell',
        formCues: [
          'Non-working hand & knee on bench, spine flat parallel to floor.',
          'Pull dumbbell toward hip with elbow tight; avoid rotating torso.'
        ]
      },
      {
        id: 'fri_calf_raise',
        name: 'Standing DB Calf Raise',
        illustration: 'standing_db_calf_raise',
        defaultSets: 2,
        introSets: 2,
        repRange: '12–20',
        minReps: 12,
        maxReps: 20,
        defaultWeight: 25,
        weightUnit: 'lb/hand',
        stepWeight: 5,
        restSeconds: 60,
        equipment: 'dumbbell',
        formCues: [
          'Rise high on balls of big toes; hold peak contraction 1 second.',
          'Lower slowly with a full 1-second pause at bottom stretch.'
        ]
      },
      {
        id: 'fri_suitcase_carry',
        name: 'Suitcase Carry',
        illustration: 'suitcase_carry',
        defaultSets: 2,
        introSets: 2,
        repRange: '30s / side',
        minReps: 30,
        maxReps: 45,
        isTimed: true,
        isUnilateral: true,
        durationSeconds: 30,
        defaultWeight: 25,
        weightUnit: 'lb (1 DB)',
        stepWeight: 5,
        restSeconds: 60,
        equipment: 'dumbbell',
        formCues: [
          'Hold 1 dumbbell on one side; keep shoulders and hips completely level.',
          'Walk or march in place with deliberate balance. 30s side 1, then side 2.'
        ]
      }
    ]
  }
};

// =============================================================================
// 2. STATE & STORAGE
// =============================================================================

const STORAGE_KEYS = {
  HISTORY: 'sh_workout_history_v3',
  OUTDOOR: 'sh_outdoor_logs_v3',
  PROGRESSION: 'sh_progression_tracker_v3'
};

let appState = {
  currentDay: 'monday',
  introPhase: false,
  soundEnabled: true,
  screenAwake: false,
  sessionActive: false,
  sessionStartTime: null,
  sessionElapsedSeconds: 0,
  
  // Linear Player Flow
  linearSteps: [],
  currentStepIndex: 0,
  isResting: false,
  loggedStepData: {}
};

let restTimer = {
  intervalId: null,
  remainingSeconds: 0,
  totalSeconds: 0,
  isRunning: false
};

let timedExerciseTimer = {
  intervalId: null,
  remainingSeconds: 0,
  isRunning: false
};

// =============================================================================
// 3. AUDIO SYNTHESIZER
// =============================================================================

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.25) {
  if (!appState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(gainVal, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (err) {}
}

function playPip() {
  playTone(880, 'sine', 0.1, 0.3);
  if (navigator.vibrate) navigator.vibrate(50);
}

function playFinishChime() {
  if (!appState.soundEnabled) return;
  playTone(523.25, 'triangle', 0.22, 0.35); // C5
  setTimeout(() => playTone(659.25, 'triangle', 0.22, 0.35), 140); // E5
  setTimeout(() => playTone(783.99, 'triangle', 0.45, 0.4), 280); // G5
  if (navigator.vibrate) navigator.vibrate([100, 50, 200]);
}

function playFanfare() {
  if (!appState.soundEnabled) return;
  [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
    setTimeout(() => playTone(freq, 'sine', 0.3, 0.35), i * 160);
  });
  if (navigator.vibrate) navigator.vibrate([150, 80, 150, 80, 300]);
}

// =============================================================================
// 4. SCREEN WAKE LOCK
// =============================================================================

let wakeLockSentinel = null;

async function requestWakeLock() {
  if ('wakeLock' in navigator) {
    try {
      wakeLockSentinel = await navigator.wakeLock.request('screen');
      appState.screenAwake = true;
      updateWakeLockButton();
      wakeLockSentinel.addEventListener('release', () => {
        appState.screenAwake = false;
        updateWakeLockButton();
      });
    } catch (e) {}
  }
}

async function releaseWakeLock() {
  if (wakeLockSentinel) {
    await wakeLockSentinel.release();
    wakeLockSentinel = null;
    appState.screenAwake = false;
    updateWakeLockButton();
  }
}

function updateWakeLockButton() {
  const btn = document.getElementById('wakeLockBtn');
  if (btn) btn.classList.toggle('active', appState.screenAwake);
}

// =============================================================================
// 5. SESSION CLOCK (45m Target / 49m Cap)
// =============================================================================

let sessionIntervalId = null;

function startSessionClock() {
  if (appState.sessionActive) return;
  appState.sessionActive = true;
  appState.sessionStartTime = Date.now();
  requestWakeLock();
  getAudioContext();

  sessionIntervalId = setInterval(updateSessionClock, 1000);
  updateSessionClock();
}

function stopSessionClock() {
  if (sessionIntervalId) {
    clearInterval(sessionIntervalId);
    sessionIntervalId = null;
  }
  appState.sessionActive = false;
  releaseWakeLock();
}

function formatMinSec(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateSessionClock() {
  if (!appState.sessionStartTime) return;
  const elapsed = Math.floor((Date.now() - appState.sessionStartTime) / 1000);
  appState.sessionElapsedSeconds = elapsed;

  const clockEl = document.getElementById('playerSessionClock');
  if (clockEl) {
    clockEl.textContent = formatMinSec(elapsed);
    if (elapsed > 2940) clockEl.style.color = '#ef4444';
    else if (elapsed > 2400) clockEl.style.color = '#fbbf24';
    else clockEl.style.color = '#fff';
  }
}

// =============================================================================
// 6. BUILD LINEAR STEPS
// =============================================================================

function buildLinearSteps(dayKey, isIntroPhase) {
  const program = WORKOUT_PROGRAMS[dayKey];
  const steps = [];

  // PHASE 1: WARMUP (3 Steps)
  steps.push({
    type: 'warmup_cardio',
    phaseSubtitle: 'WARMUP • STEP 1 OF 3',
    title: 'TREADMILL OR BIKE',
    illustration: 'warmup_cardio',
    equipment: 'bodyweight',
    durationSeconds: 180,
    isTimed: true,
    digitsDisplay: '03:00',
    digitsCaption: '3:00 EASY CARDIO WARMUP',
    formCues: [
      'Gradually elevate heart rate and body temperature at a light, easy effort.',
      'Breathe smoothly through nose or mouth; lubricate hips and ankles.'
    ]
  });

  steps.push({
    type: 'warmup_mobility',
    phaseSubtitle: 'WARMUP • STEP 2 OF 3',
    title: 'DYNAMIC MOBILITY DRILL',
    illustration: 'warmup_mobility',
    equipment: 'bodyweight',
    digitsDisplay: '01:00',
    digitsCaption: '4 DYNAMIC EXERCISES',
    isChecklist: true,
    formCues: [
      '8 bodyweight squats & 8 unweighted hip hinges.',
      '10 heel-to-toe rocks & 10 arm circles each direction.'
    ]
  });

  steps.push({
    type: 'warmup_practice',
    phaseSubtitle: 'WARMUP • STEP 3 OF 3',
    title: 'LIGHT PRACTICE SETS',
    illustration: 'warmup_practice',
    equipment: 'dumbbell',
    digitsDisplay: '02:00',
    digitsCaption: '1–2 LIGHT PRACTICE SETS',
    isChecklist: true,
    formCues: [
      '1–2 light practice sets of your first strength movement.',
      'Practice sets prepare your nervous system and do NOT count as working sets.'
    ]
  });

  // PHASE 2: STRENGTH MOVEMENTS
  program.exercises.forEach((ex, exIndex) => {
    const numSets = isIntroPhase ? ex.introSets : ex.defaultSets;
    const pastLog = getPastExerciseStats(ex.id);
    const initialWeight = pastLog ? pastLog.weight : ex.defaultWeight;
    const initialReps = pastLog ? pastLog.reps : ex.minReps;

    if (ex.hasPracticeSet) {
      steps.push({
        type: 'press_practice_set',
        exerciseId: ex.id,
        phaseSubtitle: `EXERCISE ${exIndex + 1} OF 5 • PRACTICE SET`,
        title: `${ex.name.toUpperCase()} (PRACTICE)`,
        illustration: ex.illustration,
        equipment: ex.equipment,
        digitsDisplay: '1 SET',
        digitsCaption: 'LIGHT WARMUP GROOVE',
        isChecklist: true,
        formCues: [
          'Warm up the pressing groove with a very light weight.',
          'Practice sets do not count as working sets.'
        ]
      });
    }

    for (let s = 1; s <= numSets; s++) {
      steps.push({
        type: 'working_set',
        exerciseId: ex.id,
        exerciseName: ex.name,
        phaseSubtitle: `EXERCISE ${exIndex + 1} OF 5 • SET ${s} OF ${numSets}`,
        title: ex.name.toUpperCase(),
        setNumber: s,
        totalSets: numSets,
        illustration: ex.illustration,
        equipment: ex.equipment,
        repRange: ex.repRange,
        minReps: ex.minReps,
        maxReps: ex.maxReps,
        weight: initialWeight,
        weightUnit: ex.weightUnit,
        stepWeight: ex.stepWeight,
        reps: initialReps,
        restSeconds: ex.restSeconds,
        isTimed: !!ex.isTimed,
        durationSeconds: ex.durationSeconds || 30,
        isUnilateral: !!ex.isUnilateral,
        digitsDisplay: ex.isTimed ? formatMinSec(ex.durationSeconds || 30) : `${initialReps} REPS`,
        digitsCaption: `TARGET: ${ex.repRange} • ${initialWeight} ${ex.weightUnit.toUpperCase()}`,
        formCues: ex.formCues
      });
    }
  });

  // PHASE 3: CARDIO (7 Minutes)
  steps.push({
    type: 'cardio',
    phaseSubtitle: 'CARDIO PHASE • 7 MINUTES',
    title: program.cardioName.toUpperCase(),
    illustration: program.cardioIllustration,
    equipment: 'bodyweight',
    durationSeconds: 420,
    isTimed: true,
    digitsDisplay: '07:00',
    digitsCaption: 'MODERATE CONVERSATIONAL INTENSITY',
    formCues: program.cardioCues
  });

  // PHASE 4: COOLDOWN (2m walk + 3 stretches)
  steps.push({
    type: 'cooldown_walk',
    phaseSubtitle: 'COOLDOWN • STEP 1 OF 4',
    title: 'SLOW-DOWN WALK',
    illustration: 'cooldown_walk',
    equipment: 'bodyweight',
    durationSeconds: 120,
    isTimed: true,
    digitsDisplay: '02:00',
    digitsCaption: 'GRADUAL HEART RATE RECOVERY',
    formCues: [
      'Gradually slow to an easy walk or pedal to return heart rate toward baseline.',
      'Take deep diaphragmatic breaths.'
    ]
  });

  steps.push({
    type: 'cooldown_stretch',
    phaseSubtitle: 'COOLDOWN • STEP 2 OF 4',
    title: 'CALF STRETCH',
    illustration: 'stretch_calf',
    equipment: 'bodyweight',
    durationSeconds: 60,
    isTimed: true,
    digitsDisplay: '00:60',
    digitsCaption: '30s LEFT • 30s RIGHT',
    formCues: [
      'Hands against wall, back heel flat on floor. Gentle tension only.',
      'Do not bounce; breathe normally. Switch sides at 30 seconds.'
    ]
  });

  steps.push({
    type: 'cooldown_stretch',
    phaseSubtitle: 'COOLDOWN • STEP 3 OF 4',
    title: 'HIP FLEXOR STRETCH',
    illustration: 'stretch_hip_flexor',
    equipment: 'bodyweight',
    durationSeconds: 60,
    isTimed: true,
    digitsDisplay: '00:60',
    digitsCaption: '30s LEFT • 30s RIGHT',
    formCues: [
      'Supported staggered stance; gently tuck belt buckle UP and shift forward.',
      'Feel stretch in front of rear hip. Switch sides at 30 seconds.'
    ]
  });

  steps.push({
    type: 'cooldown_stretch',
    phaseSubtitle: 'COOLDOWN • STEP 4 OF 4',
    title: 'CHEST STRETCH',
    illustration: 'stretch_chest',
    equipment: 'bodyweight',
    durationSeconds: 45,
    isTimed: true,
    digitsDisplay: '00:45',
    digitsCaption: '30–45s GENTLE OPENER',
    formCues: [
      'Forearms against doorway or corner; step gently forward.',
      'Keep chest tall, relax shoulders, breathe slowly.'
    ]
  });

  return steps;
}

// =============================================================================
// 7. FITNESS APP PLAYER RENDERER
// =============================================================================

function startLinearWorkout() {
  appState.linearSteps = buildLinearSteps(appState.currentDay, appState.introPhase);
  appState.currentStepIndex = 0;
  appState.isResting = false;
  appState.loggedStepData = {};

  document.getElementById('homeSetupView').style.display = 'none';
  document.getElementById('linearWorkoutView').classList.add('active');

  startSessionClock();
  renderCurrentPlayerStep();
}

function renderCurrentPlayerStep() {
  const step = appState.linearSteps[appState.currentStepIndex];
  if (!step) {
    completeFullWorkout();
    return;
  }

  // 1. Render Segmented Progress Bar (Matching reference app top dashes)
  renderSegmentedProgressBar();

  // 2. Equipment Badge
  const eqIcon = document.getElementById('equipmentIcon');
  if (step.equipment === 'bodyweight') {
    eqIcon.innerHTML = `<span style="text-decoration: line-through; opacity: 0.8;">🏋️</span>`;
  } else {
    eqIcon.innerHTML = `🏋️`;
  }

  // 3. Visual Stage
  const stage = document.getElementById('playerVisualStage');
  if (stage && window.EXERCISE_ILLUSTRATIONS) {
    stage.innerHTML = window.EXERCISE_ILLUSTRATIONS[step.illustration] || window.EXERCISE_ILLUSTRATIONS.warmup_cardio;
  }

  // 4. Header Titles
  document.getElementById('playerStepSubtitle').textContent = step.phaseSubtitle;
  document.getElementById('playerExerciseTitle').textContent = step.title;

  // 5. Giant Digits & Caption
  const digitsEl = document.getElementById('playerGiantDigits');
  const captionEl = document.getElementById('playerDigitsCaption');

  // 6. Smart Tips
  const snippet = document.getElementById('smartTipsSnippet');
  if (snippet && step.formCues && step.formCues.length > 0) {
    snippet.textContent = step.formCues.join(' • ');
  }
  const tipsList = document.getElementById('smartTipsList');
  if (tipsList) {
    tipsList.innerHTML = (step.formCues || []).map(cue => `<li>${cue}</li>`).join('');
  }

  // 7. Adjust Stepper Chips & Main Pill Action Button
  const adjustBar = document.getElementById('quickAdjustBar');
  const actionText = document.getElementById('playerMainActionText');
  const actionIcon = document.getElementById('playerMainActionIcon');

  if (step.type === 'working_set' && !step.isTimed) {
    adjustBar.style.display = 'flex';
    actionText.textContent = 'DONE';
    actionIcon.textContent = '✓';

    const logged = appState.loggedStepData[appState.currentStepIndex];
    const currWeight = logged ? logged.weight : step.weight;
    const currReps = logged ? logged.reps : step.reps;

    document.getElementById('playerWeightVal').textContent = `${currWeight} ${step.weightUnit ? step.weightUnit.replace('lb', '').trim() : ''} lb`;
    document.getElementById('playerRepsVal').textContent = `${currReps} reps`;
    document.getElementById('adjustWeightLabel').textContent = `WEIGHT (${step.weightUnit || 'lb'})`;

    digitsEl.textContent = `${currReps} REPS`;
    captionEl.textContent = `TARGET: ${step.repRange} • ${currWeight} ${step.weightUnit.toUpperCase()}`;
  } else if (step.isTimed) {
    adjustBar.style.display = 'none';
    actionText.textContent = 'START';
    actionIcon.textContent = '▶';
    digitsEl.textContent = formatMinSec(step.durationSeconds);
    captionEl.textContent = step.digitsCaption || 'TIME REMAINING';

    setupTimedCountdown(step.durationSeconds);
  } else {
    // Checklist step
    adjustBar.style.display = 'none';
    actionText.textContent = 'DONE';
    actionIcon.textContent = '✓';
    digitsEl.textContent = step.digitsDisplay || 'READY';
    captionEl.textContent = step.digitsCaption || 'TAP DONE TO ADVANCE';
  }
}

function renderSegmentedProgressBar() {
  const container = document.getElementById('segmentedProgressBar');
  if (!container) return;

  const total = appState.linearSteps.length;
  const current = appState.currentStepIndex;

  container.innerHTML = appState.linearSteps.map((_, i) => {
    let cls = 'segment-dash';
    if (i < current) cls += ' completed';
    else if (i === current) cls += ' active';
    return `<div class="${cls}"></div>`;
  }).join('');
}

// Smart Tips Dropdown
function toggleSmartTips() {
  const dd = document.getElementById('smartTipsDropdown');
  if (dd) dd.classList.toggle('open');
}

// Steppers
function stepPlayerWeight(delta) {
  const step = appState.linearSteps[appState.currentStepIndex];
  if (!step) return;
  if (!appState.loggedStepData[appState.currentStepIndex]) {
    appState.loggedStepData[appState.currentStepIndex] = { weight: step.weight, reps: step.reps };
  }
  const curr = appState.loggedStepData[appState.currentStepIndex].weight;
  const nextVal = Math.max(0, curr + delta);
  appState.loggedStepData[appState.currentStepIndex].weight = nextVal;
  step.weight = nextVal;

  document.getElementById('playerWeightVal').textContent = `${nextVal} lb`;
  document.getElementById('playerDigitsCaption').textContent = `TARGET: ${step.repRange} • ${nextVal} ${step.weightUnit.toUpperCase()}`;
}

function stepPlayerReps(delta) {
  const step = appState.linearSteps[appState.currentStepIndex];
  if (!step) return;
  if (!appState.loggedStepData[appState.currentStepIndex]) {
    appState.loggedStepData[appState.currentStepIndex] = { weight: step.weight, reps: step.reps };
  }
  const curr = appState.loggedStepData[appState.currentStepIndex].reps;
  const nextVal = Math.max(1, curr + delta);
  appState.loggedStepData[appState.currentStepIndex].reps = nextVal;
  step.reps = nextVal;

  document.getElementById('playerRepsVal').textContent = `${nextVal} reps`;
  document.getElementById('playerGiantDigits').textContent = `${nextVal} REPS`;
}

// Transport Action Click
function playerMainActionClick() {
  const step = appState.linearSteps[appState.currentStepIndex];
  if (!step) return;

  if (appState.isResting) {
    // If resting, clicking button skips rest immediately
    skipRestPeriod();
    return;
  }

  if (step.isTimed) {
    toggleTimedCountdown();
  } else {
    // Completed lifting or checklist step
    handleStepCompleted();
  }
}

function handleStepCompleted() {
  const step = appState.linearSteps[appState.currentStepIndex];
  if (!step) return;

  const logged = appState.loggedStepData[appState.currentStepIndex] || {};
  appState.loggedStepData[appState.currentStepIndex] = {
    exerciseId: step.exerciseId,
    weight: logged.weight !== undefined ? logged.weight : (step.weight || 0),
    reps: logged.reps !== undefined ? logged.reps : (step.reps || 8),
    completed: true
  };

  playTone(659.25, 'sine', 0.12, 0.25); // done pip

  // If this step has a rest period, show Rest Screen!
  if (step.restSeconds && step.restSeconds > 0) {
    startRestPeriod(step.restSeconds);
  } else {
    playerStepNext();
  }
}

// =============================================================================
// 8. REST PERIOD (In-Place Screen Matching Reference)
// =============================================================================

function startRestPeriod(seconds) {
  appState.isResting = true;
  restTimer.remainingSeconds = seconds;
  restTimer.totalSeconds = seconds;
  restTimer.isRunning = true;

  // Visual Stage: Breathing rest graphic
  const stage = document.getElementById('playerVisualStage');
  if (stage && window.EXERCISE_ILLUSTRATIONS) {
    stage.innerHTML = window.EXERCISE_ILLUSTRATIONS.rest_breathing;
  }

  document.getElementById('quickAdjustBar').style.display = 'none';

  // Subtitle & Title
  const nextStep = appState.linearSteps[appState.currentStepIndex + 1];
  document.getElementById('playerStepSubtitle').textContent = 'REST PERIOD';
  document.getElementById('playerExerciseTitle').textContent = 'CATCH YOUR BREATH';

  // Digits in orange countdown
  document.getElementById('playerGiantDigits').textContent = formatMinSec(seconds);
  if (nextStep) {
    document.getElementById('playerDigitsCaption').textContent = `UP NEXT: ${nextStep.title}`;
  } else {
    document.getElementById('playerDigitsCaption').textContent = 'UP NEXT: WORKOUT COMPLETE';
  }

  // Central Pill becomes SKIP REST
  document.getElementById('playerMainActionIcon').textContent = '⏩';
  document.getElementById('playerMainActionText').textContent = 'SKIP REST';

  if (restTimer.intervalId) clearInterval(restTimer.intervalId);
  restTimer.intervalId = setInterval(() => {
    if (restTimer.remainingSeconds > 0) {
      restTimer.remainingSeconds--;

      if (restTimer.remainingSeconds <= 3 && restTimer.remainingSeconds > 0) {
        playPip();
      }

      document.getElementById('playerGiantDigits').textContent = formatMinSec(restTimer.remainingSeconds);

      if (restTimer.remainingSeconds === 0) {
        clearInterval(restTimer.intervalId);
        restTimer.isRunning = false;
        playFinishChime();
        appState.isResting = false;
        playerStepNext();
      }
    }
  }, 1000);
}

function skipRestPeriod() {
  if (restTimer.intervalId) clearInterval(restTimer.intervalId);
  restTimer.isRunning = false;
  appState.isResting = false;
  playerStepNext();
}

// Timed Countdown (Carries, Treadmill, Stretches)
function setupTimedCountdown(seconds) {
  if (timedExerciseTimer.intervalId) clearInterval(timedExerciseTimer.intervalId);
  timedExerciseTimer.remainingSeconds = seconds;
  timedExerciseTimer.isRunning = false;
}

function toggleTimedCountdown() {
  const btnText = document.getElementById('playerMainActionText');
  const btnIcon = document.getElementById('playerMainActionIcon');

  if (timedExerciseTimer.isRunning) {
    // Pause
    clearInterval(timedExerciseTimer.intervalId);
    timedExerciseTimer.isRunning = false;
    btnText.textContent = 'RESUME';
    btnIcon.textContent = '▶';
  } else {
    // Start
    timedExerciseTimer.isRunning = true;
    btnText.textContent = 'PAUSE';
    btnIcon.textContent = '⏸';
    playTone(587.33, 'sine', 0.1, 0.2);

    timedExerciseTimer.intervalId = setInterval(() => {
      if (timedExerciseTimer.remainingSeconds > 0) {
        timedExerciseTimer.remainingSeconds--;

        if (timedExerciseTimer.remainingSeconds <= 3 && timedExerciseTimer.remainingSeconds > 0) {
          playPip();
        }

        document.getElementById('playerGiantDigits').textContent = formatMinSec(timedExerciseTimer.remainingSeconds);

        if (timedExerciseTimer.remainingSeconds === 0) {
          clearInterval(timedExerciseTimer.intervalId);
          timedExerciseTimer.isRunning = false;
          playFinishChime();

          const step = appState.linearSteps[appState.currentStepIndex];
          if (step && step.restSeconds) {
            startRestPeriod(step.restSeconds);
          } else {
            playerStepNext();
          }
        }
      }
    }, 1000);
  }
}

// Navigation
function playerStepPrev() {
  if (appState.isResting) {
    clearInterval(restTimer.intervalId);
    appState.isResting = false;
  }
  if (timedExerciseTimer.intervalId) clearInterval(timedExerciseTimer.intervalId);

  if (appState.currentStepIndex > 0) {
    appState.currentStepIndex--;
    renderCurrentPlayerStep();
  }
}

function playerStepNext() {
  if (appState.isResting) {
    clearInterval(restTimer.intervalId);
    appState.isResting = false;
  }
  if (timedExerciseTimer.intervalId) clearInterval(timedExerciseTimer.intervalId);

  if (appState.currentStepIndex < appState.linearSteps.length - 1) {
    appState.currentStepIndex++;
    renderCurrentPlayerStep();
  } else {
    completeFullWorkout();
  }
}

function quickSkipFinalSet() {
  // Remove exercise 5 steps to preserve 45-min budget
  appState.linearSteps = appState.linearSteps.filter(step => {
    return !(step.phaseSubtitle && step.phaseSubtitle.includes('EXERCISE 5'));
  });
  alert('Set 5 skipped to preserve your 45-minute budget! Advancing smoothly.');
  if (appState.currentStepIndex >= appState.linearSteps.length) {
    appState.currentStepIndex = appState.linearSteps.length - 1;
  }
  renderCurrentPlayerStep();
}

function confirmExitWorkout() {
  if (confirm('Exit workout and return to overview?')) {
    stopSessionClock();
    if (restTimer.intervalId) clearInterval(restTimer.intervalId);
    if (timedExerciseTimer.intervalId) clearInterval(timedExerciseTimer.intervalId);
    document.getElementById('linearWorkoutView').classList.remove('active');
    document.getElementById('homeSetupView').style.display = 'block';
  }
}

// =============================================================================
// 9. WORKOUT COMPLETE & PROGRESSION
// =============================================================================

function completeFullWorkout() {
  stopSessionClock();
  playFanfare();

  const program = WORKOUT_PROGRAMS[appState.currentDay];
  const totalMins = Math.round(appState.sessionElapsedSeconds / 60) || 45;
  const now = new Date();

  // Save Session
  const sessionRecord = {
    id: `workout_${Date.now()}`,
    date: now.toISOString(),
    displayDate: now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
    day: program.dayName,
    durationMinutes: totalMins,
    introPhase: appState.introPhase
  };

  const history = getStoredHistory();
  history.push(sessionRecord);
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));

  // Double Progression
  const progression = getStoredProgression();
  program.exercises.forEach(ex => {
    const sets = Object.values(appState.loggedStepData).filter(s => s && s.exerciseId === ex.id && s.completed);
    if (sets.length > 0) {
      const allTopReps = sets.every(s => s.reps >= ex.maxReps);
      const currWeight = sets[0].weight;

      if (!progression[ex.id]) {
        progression[ex.id] = { name: ex.name, currentWeight: currWeight, consecutiveTopReps: 0 };
      }
      progression[ex.id].currentWeight = currWeight;

      if (allTopReps) {
        progression[ex.id].consecutiveTopReps = (progression[ex.id].consecutiveTopReps || 0) + 1;
      } else {
        progression[ex.id].consecutiveTopReps = 0;
      }
    }
  });
  saveProgressionData(progression);

  alert(`🎉 Workout Complete!\n• Time: ${totalMins} minutes (Target 45m)\n• All exercises logged.`);

  document.getElementById('linearWorkoutView').classList.remove('active');
  document.getElementById('homeSetupView').style.display = 'block';
  renderHomeExercisePreview();
  renderHistoryTab();
  updateWeeklyCardioStats();
}

function getPastExerciseStats(exId) {
  const prog = getStoredProgression();
  if (prog[exId]) {
    return { weight: prog[exId].currentWeight, reps: 8 };
  }
  return null;
}

function getStoredProgression() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESSION) || '{}');
  } catch (e) {
    return {};
  }
}

function saveProgressionData(data) {
  localStorage.setItem(STORAGE_KEYS.PROGRESSION, JSON.stringify(data));
}

function getStoredHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY) || '[]');
  } catch (e) {
    return [];
  }
}

// =============================================================================
// 10. HOME & TABS
// =============================================================================

function renderHomeExercisePreview() {
  const program = WORKOUT_PROGRAMS[appState.currentDay];
  if (!program) return;

  document.getElementById('homeDayTitle').textContent = `${program.dayName} Strength`;

  const container = document.getElementById('homeExercisePreview');
  if (container) {
    container.innerHTML = program.exercises.map((ex, i) => {
      const sets = appState.introPhase ? ex.introSets : ex.defaultSets;
      return `
        <div class="preview-row">
          <span>${i + 1}. <strong>${ex.name}</strong></span>
          <span style="font-size: 0.78rem; color: #ff5722; font-weight: 700;">${sets} × ${ex.repRange}</span>
        </div>
      `;
    }).join('');
  }
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(`tab-${tabId}`);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
  const activeBtn = Array.from(document.querySelectorAll('.nav-item')).find(btn => 
    btn.getAttribute('onclick')?.includes(`'${tabId}'`)
  );
  if (activeBtn) activeBtn.classList.add('active');

  if (tabId === 'hiking') {
    renderOutdoorLogs();
    updateWeeklyCardioStats();
  } else if (tabId === 'history') {
    renderHistoryTab();
  }
}

// =============================================================================
// 11. OUTDOOR HIKING & CARDIO
// =============================================================================

function getStoredOutdoorLogs() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.OUTDOOR) || '[]');
  } catch (e) {
    return [];
  }
}

function handleOutdoorLogSubmit(e) {
  e.preventDefault();
  const type = document.getElementById('hikeTypeInput').value;
  const duration = parseInt(document.getElementById('hikeDurationInput').value, 10);
  const elevation = parseInt(document.getElementById('hikeElevationInput').value, 10) || 0;
  const packWeight = parseInt(document.getElementById('hikePackWeightInput').value, 10) || 0;

  if (!duration || duration <= 0) return;

  const newLog = {
    id: `hike_${Date.now()}`,
    date: new Date().toISOString(),
    displayDate: new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
    type,
    durationMinutes: duration,
    elevationGain: elevation,
    packWeight
  };

  const logs = getStoredOutdoorLogs();
  logs.unshift(newLog);
  localStorage.setItem(STORAGE_KEYS.OUTDOOR, JSON.stringify(logs));

  document.getElementById('outdoorLogForm').reset();
  playTone(784, 'sine', 0.15, 0.25);
  
  renderOutdoorLogs();
  updateWeeklyCardioStats();
}

function updateWeeklyCardioStats() {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const weekStart = new Date(d.setDate(diff));
  weekStart.setHours(0, 0, 0, 0);

  const history = getStoredHistory();
  const gymSessionsThisWeek = history.filter(h => new Date(h.date) >= weekStart).length;
  const gymCardioMins = gymSessionsThisWeek * 7;

  const outdoorLogs = getStoredOutdoorLogs();
  const outdoorMins = outdoorLogs
    .filter(log => new Date(log.date) >= weekStart)
    .reduce((sum, log) => sum + (log.durationMinutes || 0), 0);

  const totalCardio = gymCardioMins + outdoorMins;
  const target = 150;
  const percent = Math.min(100, Math.round((totalCardio / target) * 100));

  const countEl = document.getElementById('weeklyCardioMinutes');
  if (countEl) countEl.textContent = totalCardio;

  const barEl = document.getElementById('weeklyCardioProgressBar');
  if (barEl) barEl.style.width = `${percent}%`;

  const miniBar = document.getElementById('homeCardioMiniBar');
  if (miniBar) miniBar.style.width = `${percent}%`;

  const miniStat = document.getElementById('homeCardioMiniStat');
  if (miniStat) miniStat.textContent = `${totalCardio} / 150 min`;

  const gymEl = document.getElementById('gymCardioThisWeek');
  if (gymEl) gymEl.textContent = `Gym: ${gymCardioMins}m`;

  const outdoorEl = document.getElementById('outdoorCardioThisWeek');
  if (outdoorEl) outdoorEl.textContent = `Outdoor: ${outdoorMins}m`;

  const remainEl = document.getElementById('cardioRemainingLabel');
  if (remainEl) {
    const left = Math.max(0, target - totalCardio);
    remainEl.textContent = left > 0 ? `${left}m left` : '🎉 150m Goal Met!';
  }
}

function renderOutdoorLogs() {
  const logs = getStoredOutdoorLogs();
  const container = document.getElementById('outdoorLogsList');
  if (!container) return;

  if (logs.length === 0) {
    container.innerHTML = '<p style="font-size: 0.8rem; color: var(--text-dim); text-align: center; padding: 10px;">No outdoor walks logged yet this week.</p>';
    return;
  }

  container.innerHTML = logs.slice(0, 5).map(log => `
    <div class="outdoor-log-item">
      <div>
        <div style="font-size: 0.86rem; font-weight: 700; color: #fff;">${log.type}</div>
        <div style="font-size: 0.72rem; color: var(--text-muted);">
          ${log.displayDate} ${log.elevationGain ? `• +${log.elevationGain} ft` : ''} ${log.packWeight ? `• Pack: ${log.packWeight} lb` : ''}
        </div>
      </div>
      <div style="font-size: 1.1rem; font-weight: 800; color: #ff5722;">
        ${log.durationMinutes}m
      </div>
    </div>
  `).join('');
}

// =============================================================================
// 12. HISTORY & EXPORT
// =============================================================================

function renderHistoryTab() {
  const history = getStoredHistory();
  const container = document.getElementById('workoutHistoryList');
  if (!container) return;

  if (history.length === 0) {
    container.innerHTML = '<p style="font-size: 0.8rem; color: var(--text-dim); text-align: center; padding: 14px;">No completed workouts yet.</p>';
    return;
  }

  container.innerHTML = history.slice().reverse().map(h => `
    <div style="background: var(--bg-input); padding: 10px 12px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); margin-bottom: 8px;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
        <strong style="color: #fff; font-size: 0.88rem;">${h.day} Workout</strong>
        <span style="color: #ff5722; font-weight: 700; font-size: 0.84rem;">${h.durationMinutes} min</span>
      </div>
      <div style="font-size: 0.74rem; color: var(--text-muted);">
        ${h.displayDate} • ${h.introPhase ? 'Intro Phase (2 sets)' : 'Full 3 Sets'}
      </div>
    </div>
  `).join('');
}

function exportDataJSON() {
  const exportPayload = {
    history: getStoredHistory(),
    outdoor: getStoredOutdoorLogs(),
    progression: getStoredProgression(),
    exportedAt: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `strength_hiking_backup_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function triggerImportFileInput() {
  document.getElementById('importFileInput').click();
}

function handleFileImport(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (data.history) localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(data.history));
      if (data.outdoor) localStorage.setItem(STORAGE_KEYS.OUTDOOR, JSON.stringify(data.outdoor));
      if (data.progression) localStorage.setItem(STORAGE_KEYS.PROGRESSION, JSON.stringify(data.progression));
      alert('✅ Backup restored successfully!');
      renderHistoryTab();
      updateWeeklyCardioStats();
    } catch (err) {
      alert('❌ Error reading backup file.');
    }
  };
  reader.readAsText(file);
}

// Modals
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('active');
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('active');
}
function closeModalOnOutsideClick(e, id) {
  if (e.target.id === id) closeModal(id);
}
function openHostingGuideModal() { openModal('hostingModal'); }

function autoDetectDay() {
  const day = new Date().getDay();
  if (day === 3 || day === 4) return 'wednesday';
  if (day === 5 || day === 6 || day === 0) return 'friday';
  return 'monday';
}

// Initialization
window.addEventListener('DOMContentLoaded', () => {
  appState.currentDay = autoDetectDay();

  document.querySelectorAll('.day-tab-btn').forEach(btn => {
    const day = btn.getAttribute('data-day');
    btn.classList.toggle('active', day === appState.currentDay);

    btn.addEventListener('click', () => {
      document.querySelectorAll('.day-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.currentDay = day;
      renderHomeExercisePreview();
    });
  });

  const introToggle = document.getElementById('introPhaseToggle');
  if (introToggle) {
    introToggle.addEventListener('change', (e) => {
      appState.introPhase = e.target.checked;
      renderHomeExercisePreview();
    });
  }

  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      appState.soundEnabled = !appState.soundEnabled;
      soundBtn.classList.toggle('active', appState.soundEnabled);
      document.getElementById('soundIcon').textContent = appState.soundEnabled ? '🔔' : '🔕';
      if (appState.soundEnabled) playTone(880, 'sine', 0.1, 0.2);
    });
  }

  const wakeBtn = document.getElementById('wakeLockBtn');
  if (wakeBtn) {
    wakeBtn.addEventListener('click', () => {
      if (appState.screenAwake) releaseWakeLock();
      else requestWakeLock();
    });
  }

  const infoBtn = document.getElementById('infoModalBtn');
  if (infoBtn) infoBtn.addEventListener('click', () => openModal('infoModal'));

  renderHomeExercisePreview();
  renderHistoryTab();
  renderOutdoorLogs();
  updateWeeklyCardioStats();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});
