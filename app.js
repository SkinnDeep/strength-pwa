/**
 * Strength for Family + Hiking PWA
 * Linear Progressive Workout Engine & Streamlined iOS Architecture
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
        formCues: [
          'Hold 1 dumbbell on one side; keep shoulders and hips completely level.',
          'Walk or march in place with deliberate balance. 30s side 1, then side 2.'
        ]
      }
    ]
  }
};

// =============================================================================
// 2. STATE MANAGEMENT & STORAGE
// =============================================================================

const STORAGE_KEYS = {
  HISTORY: 'sh_workout_history_v2',
  OUTDOOR: 'sh_outdoor_logs_v2',
  PROGRESSION: 'sh_progression_tracker_v2',
  PREFS: 'sh_user_prefs_v2'
};

let appState = {
  currentDay: 'monday',
  introPhase: false,
  soundEnabled: true,
  screenAwake: false,
  sessionActive: false,
  sessionStartTime: null,
  sessionElapsedSeconds: 0,
  
  // Linear Flow State
  linearSteps: [],
  currentStepIndex: 0,
  isResting: false,
  loggedStepData: {} // stepIndex => { weight, reps, completed }
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
// 3. AUDIO SYNTHESIZER (Web Audio API)
// =============================================================================

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
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
  playTone(523.25, 'triangle', 0.25, 0.35); // C5
  setTimeout(() => playTone(659.25, 'triangle', 0.25, 0.35), 140); // E5
  setTimeout(() => playTone(783.99, 'triangle', 0.5, 0.4), 280); // G5
  if (navigator.vibrate) navigator.vibrate([100, 50, 200]);
}

function playFanfare() {
  if (!appState.soundEnabled) return;
  [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
    setTimeout(() => playTone(freq, 'sine', 0.35, 0.35), i * 160);
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
  if (!btn) return;
  btn.classList.toggle('active', appState.screenAwake);
}

// =============================================================================
// 5. SESSION CLOCK & TIME BUDGET (45 min target / 49 max)
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

  const displayEl = document.getElementById('sessionTimerDisplay');
  if (displayEl) {
    displayEl.textContent = formatMinSec(elapsed);
    if (elapsed > 2940) { // > 49m cap
      displayEl.style.color = 'var(--accent-rose)';
    } else if (elapsed > 2400) { // > 40m
      displayEl.style.color = 'var(--accent-amber)';
    } else {
      displayEl.style.color = '#fff';
    }
  }

  // Update HUD progress bar
  const totalSteps = appState.linearSteps.length || 1;
  const progressPercent = Math.min(100, Math.round(((appState.currentStepIndex + 1) / totalSteps) * 100));
  const hudFill = document.getElementById('hudProgressFill');
  if (hudFill) hudFill.style.width = `${progressPercent}%`;
}

// =============================================================================
// 6. LINEAR STEP BUILDER (Unfolds Workout Into Step-by-Step Sequence)
// =============================================================================

function buildLinearSteps(dayKey, isIntroPhase) {
  const program = WORKOUT_PROGRAMS[dayKey];
  const steps = [];

  // PHASE 1: WARMUP (3 Steps)
  steps.push({
    type: 'warmup_cardio',
    phase: 'Warmup Phase • Step 1 of 3',
    title: 'Easy Treadmill Walk or Bike',
    illustration: 'warmup_cardio',
    durationSeconds: 180,
    isTimed: true,
    targetDesc: '3:00 Easy Warmup',
    formCues: [
      'Gradually elevate heart rate and body temperature at a light, easy effort.',
      'Breathe smoothly through nose or mouth; lubricate hips and ankles.'
    ]
  });

  steps.push({
    type: 'warmup_mobility',
    phase: 'Warmup Phase • Step 2 of 3',
    title: 'Dynamic Mobility Drill',
    illustration: 'warmup_mobility',
    targetDesc: '~1:00 Mobility Flow',
    isChecklist: true,
    formCues: [
      '8 bodyweight squats & 8 unweighted hip hinges.',
      '10 heel-to-toe rocks & 10 arm circles each direction.'
    ]
  });

  steps.push({
    type: 'warmup_practice',
    phase: 'Warmup Phase • Step 3 of 3',
    title: 'Light Practice Sets',
    illustration: 'warmup_practice',
    targetDesc: '1–2 Light Practice Sets',
    isChecklist: true,
    formCues: [
      '1–2 light practice sets of your first strength movement.',
      'Practice sets prepare your nervous system and do NOT count as working sets.'
    ]
  });

  // PHASE 2: STRENGTH MOVEMENTS (Unfolded Set-by-Set)
  program.exercises.forEach((ex, exIndex) => {
    const numSets = isIntroPhase ? ex.introSets : ex.defaultSets;
    const pastLog = getPastExerciseStats(ex.id);
    const initialWeight = pastLog ? pastLog.weight : ex.defaultWeight;
    const initialReps = pastLog ? pastLog.reps : ex.minReps;

    // Additional practice set prompt before the first press
    if (ex.hasPracticeSet) {
      steps.push({
        type: 'press_practice_set',
        exerciseId: ex.id,
        phase: `Strength Phase • Exercise ${exIndex + 1} of 5`,
        title: `${ex.name} (Practice Set)`,
        illustration: ex.illustration,
        targetDesc: '1 Light Practice Set (Included in Strength Time)',
        isChecklist: true,
        formCues: [
          'Warm up the pressing groove with a very light weight.',
          'Practice sets do not count as working sets.'
        ]
      });
    }

    // Working Sets
    for (let s = 1; s <= numSets; s++) {
      steps.push({
        type: 'working_set',
        exerciseId: ex.id,
        exerciseName: ex.name,
        phase: `Strength Phase • Exercise ${exIndex + 1} of 5`,
        title: ex.name,
        setNumber: s,
        totalSets: numSets,
        illustration: ex.illustration,
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
        targetDesc: `${s} of ${numSets} • Target: ${ex.repRange} ${ex.weightUnit}`,
        formCues: ex.formCues
      });
    }
  });

  // PHASE 3: CARDIO (7 Minutes)
  steps.push({
    type: 'cardio',
    phase: 'Cardio Phase',
    title: program.cardioName,
    illustration: program.cardioIllustration,
    durationSeconds: 420,
    isTimed: true,
    targetDesc: '7:00 Moderate Intensity Cardio',
    formCues: program.cardioCues
  });

  // PHASE 4: COOLDOWN (2m walk + 3m guided stretches)
  steps.push({
    type: 'cooldown_walk',
    phase: 'Cooldown Phase • Step 1 of 4',
    title: 'Gradual Slow-Down Walk',
    illustration: 'cooldown_walk',
    durationSeconds: 120,
    isTimed: true,
    targetDesc: '2:00 Easy Slow-Down',
    formCues: [
      'Gradually slow to an easy walk or pedal to return heart rate toward baseline.',
      'Take deep diaphragmatic breaths.'
    ]
  });

  steps.push({
    type: 'cooldown_stretch',
    phase: 'Cooldown Phase • Step 2 of 4',
    title: 'Calf Stretch (Hands on Wall)',
    illustration: 'stretch_calf',
    durationSeconds: 60, // 30s L + 30s R
    isTimed: true,
    targetDesc: '30s Per Side (Back Heel Down)',
    formCues: [
      'Hands against wall, back heel flat on floor. Gentle tension only.',
      'Do not bounce; breathe normally. Switch sides halfway (at 30s).'
    ]
  });

  steps.push({
    type: 'cooldown_stretch',
    phase: 'Cooldown Phase • Step 3 of 4',
    title: 'Hip Flexor Stretch',
    illustration: 'stretch_hip_flexor',
    durationSeconds: 60, // 30s L + 30s R
    isTimed: true,
    targetDesc: '30s Per Side (Supported Staggered Stance)',
    formCues: [
      'Supported staggered stance; gently tuck belt buckle UP and shift forward.',
      'Feel stretch in front of rear hip. Switch sides at 30s.'
    ]
  });

  steps.push({
    type: 'cooldown_stretch',
    phase: 'Cooldown Phase • Step 4 of 4',
    title: 'Chest Stretch (Doorway / Corner)',
    illustration: 'stretch_chest',
    durationSeconds: 45,
    isTimed: true,
    targetDesc: '30–45s Gentle Chest Opener',
    formCues: [
      'Forearms against doorway or corner; step gently forward.',
      'Keep chest tall, relax shoulders, breathe slowly.'
    ]
  });

  return steps;
}

// =============================================================================
// 7. LINEAR WORKOUT PLAYER LOGIC
// =============================================================================

function startLinearWorkout() {
  appState.linearSteps = buildLinearSteps(appState.currentDay, appState.introPhase);
  appState.currentStepIndex = 0;
  appState.isResting = false;
  appState.loggedStepData = {};

  // Switch View
  document.getElementById('homeSetupView').style.display = 'none';
  document.getElementById('linearWorkoutView').classList.add('active');

  startSessionClock();
  renderCurrentStep();
}

function renderCurrentStep() {
  const step = appState.linearSteps[appState.currentStepIndex];
  if (!step) {
    completeFullWorkout();
    return;
  }

  // Ensure rest mode is off when rendering step
  hideRestMode();

  // Top HUD
  document.getElementById('hudStepText').textContent = `Step ${appState.currentStepIndex + 1} of ${appState.linearSteps.length}`;
  updateSessionClock();

  // Main Card Elements
  document.getElementById('stepPhaseLabel').textContent = step.phase;
  document.getElementById('stepExerciseTitle').textContent = step.title;
  
  if (step.setNumber) {
    document.getElementById('stepSetCounter').textContent = `Set ${step.setNumber} of ${step.totalSets}`;
    document.getElementById('stepTargetReps').textContent = `Target: ${step.repRange} ${step.weightUnit ? `(${step.weightUnit})` : ''}`;
    document.getElementById('stepSetCounter').style.display = 'inline-block';
  } else {
    document.getElementById('stepSetCounter').style.display = 'none';
    document.getElementById('stepTargetReps').textContent = step.targetDesc;
  }

  // Illustration SVG
  const illuBox = document.getElementById('illustrationContainer');
  if (illuBox && window.EXERCISE_ILLUSTRATIONS) {
    illuBox.innerHTML = window.EXERCISE_ILLUSTRATIONS[step.illustration] || window.EXERCISE_ILLUSTRATIONS.warmup_cardio;
  }

  // Form Cues (1-2 Bullets)
  const cueList = document.getElementById('formCueList');
  if (cueList) {
    cueList.innerHTML = (step.formCues || []).map(cue => `<li>${cue}</li>`).join('');
  }

  // Differentiate between Lifting Set vs Timed Step vs Checklist Step
  const liftingLogger = document.getElementById('liftingSetLogger');
  const timedControls = document.getElementById('timedSetControls');
  const completeBtn = document.getElementById('completeStepBtn');

  if (step.type === 'working_set' && !step.isTimed) {
    liftingLogger.style.display = 'grid';
    timedControls.style.display = 'none';
    completeBtn.style.display = 'flex';
    completeBtn.innerHTML = '<span>✓ Complete Set</span>';

    // Populate Weight / Reps values
    const logged = appState.loggedStepData[appState.currentStepIndex];
    const weightVal = logged ? logged.weight : step.weight;
    const repsVal = logged ? logged.reps : step.reps;

    document.getElementById('currentWeightInput').value = weightVal;
    document.getElementById('currentRepsInput').value = repsVal;
    document.getElementById('weightLabelCaption').textContent = `Weight (${step.weightUnit || 'lb'})`;
  } else if (step.isTimed) {
    liftingLogger.style.display = 'none';
    timedControls.style.display = 'block';
    completeBtn.style.display = 'none';

    setupTimedStepCountdown(step.durationSeconds);
  } else {
    // Checklist step (Warmup / Mobility / Practice sets)
    liftingLogger.style.display = 'none';
    timedControls.style.display = 'none';
    completeBtn.style.display = 'flex';
    completeBtn.innerHTML = '<span>✓ Mark Completed & Next</span>';
  }
}

// Steppers
function stepCurrentWeight(delta) {
  const input = document.getElementById('currentWeightInput');
  const current = parseFloat(input.value) || 0;
  const nextVal = Math.max(0, current + delta);
  input.value = nextVal;
  handleCurrentWeightChange(nextVal);
}

function handleCurrentWeightChange(val) {
  const step = appState.linearSteps[appState.currentStepIndex];
  if (!appState.loggedStepData[appState.currentStepIndex]) {
    appState.loggedStepData[appState.currentStepIndex] = {};
  }
  appState.loggedStepData[appState.currentStepIndex].weight = parseFloat(val) || 0;
  step.weight = parseFloat(val) || 0;
}

function stepCurrentReps(delta) {
  const input = document.getElementById('currentRepsInput');
  const current = parseInt(input.value, 10) || 0;
  const nextVal = Math.max(1, current + delta);
  input.value = nextVal;
  handleCurrentRepsChange(nextVal);
}

function handleCurrentRepsChange(val) {
  const step = appState.linearSteps[appState.currentStepIndex];
  if (!appState.loggedStepData[appState.currentStepIndex]) {
    appState.loggedStepData[appState.currentStepIndex] = {};
  }
  appState.loggedStepData[appState.currentStepIndex].reps = parseInt(val, 10) || 1;
  step.reps = parseInt(val, 10) || 1;
}

// Complete Current Step
function handleCompleteCurrentStep() {
  const step = appState.linearSteps[appState.currentStepIndex];
  if (!step) return;

  // Log stats
  const weight = parseFloat(document.getElementById('currentWeightInput').value) || step.weight || 0;
  const reps = parseInt(document.getElementById('currentRepsInput').value, 10) || step.reps || 8;
  
  appState.loggedStepData[appState.currentStepIndex] = {
    exerciseId: step.exerciseId,
    weight,
    reps,
    completed: true
  };

  playTone(659.25, 'sine', 0.12, 0.25); // Set complete pip

  // If this step has a rest period, show Rest Screen!
  if (step.restSeconds && step.restSeconds > 0) {
    showRestMode(step.restSeconds);
  } else {
    advanceToNextStep();
  }
}

// Timed Exercises (Farmer carry, Cardio, Cooldown Stretches)
function setupTimedStepCountdown(seconds) {
  if (timedExerciseTimer.intervalId) clearInterval(timedExerciseTimer.intervalId);
  timedExerciseTimer.remainingSeconds = seconds;
  timedExerciseTimer.isRunning = false;

  document.getElementById('timedCountdownDisplay').textContent = formatMinSec(seconds);
  const btn = document.getElementById('timedActionBtn');
  btn.textContent = `▶ Start ${formatMinSec(seconds)} Timer`;
  btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
}

function handleTimedActionClick() {
  if (timedExerciseTimer.isRunning) {
    // Pause
    clearInterval(timedExerciseTimer.intervalId);
    timedExerciseTimer.isRunning = false;
    document.getElementById('timedActionBtn').textContent = '▶ Resume';
  } else {
    // Start
    timedExerciseTimer.isRunning = true;
    document.getElementById('timedActionBtn').textContent = '⏸ Pause';
    playTone(587.33, 'sine', 0.1, 0.2);

    timedExerciseTimer.intervalId = setInterval(() => {
      if (timedExerciseTimer.remainingSeconds > 0) {
        timedExerciseTimer.remainingSeconds--;

        if (timedExerciseTimer.remainingSeconds <= 3 && timedExerciseTimer.remainingSeconds > 0) {
          playPip();
        }

        document.getElementById('timedCountdownDisplay').textContent = formatMinSec(timedExerciseTimer.remainingSeconds);

        if (timedExerciseTimer.remainingSeconds === 0) {
          clearInterval(timedExerciseTimer.intervalId);
          timedExerciseTimer.isRunning = false;
          playFinishChime();
          
          const step = appState.linearSteps[appState.currentStepIndex];
          if (step && step.restSeconds) {
            showRestMode(step.restSeconds);
          } else {
            advanceToNextStep();
          }
        }
      }
    }, 1000);
  }
}

// =============================================================================
// 8. REST MODE IN-PLACE SCREEN
// =============================================================================

function showRestMode(restDuration) {
  appState.isResting = true;
  document.getElementById('activeSetMode').style.display = 'none';
  document.getElementById('restTimerMode').classList.add('active');

  restTimer.remainingSeconds = restDuration;
  restTimer.totalSeconds = restDuration;
  restTimer.isRunning = true;

  updateRestTimerDisplay();

  // Preview Up Next
  const nextStep = appState.linearSteps[appState.currentStepIndex + 1];
  const previewEl = document.getElementById('restNextPreview');
  if (nextStep) {
    if (nextStep.type === 'working_set') {
      previewEl.innerHTML = `Up Next: <strong>Set ${nextStep.setNumber} of ${nextStep.totalSets} — ${nextStep.title} (${nextStep.weight} lb)</strong>`;
    } else {
      previewEl.innerHTML = `Up Next: <strong>${nextStep.title}</strong>`;
    }
  } else {
    previewEl.innerHTML = 'Up Next: <strong>Final Stretch & Completion!</strong>';
  }

  if (restTimer.intervalId) clearInterval(restTimer.intervalId);
  restTimer.intervalId = setInterval(() => {
    if (restTimer.remainingSeconds > 0) {
      restTimer.remainingSeconds--;

      if (restTimer.remainingSeconds <= 3 && restTimer.remainingSeconds > 0) {
        playPip();
      }

      updateRestTimerDisplay();

      if (restTimer.remainingSeconds === 0) {
        clearInterval(restTimer.intervalId);
        restTimer.isRunning = false;
        playFinishChime();
        hideRestMode();
        advanceToNextStep();
      }
    }
  }, 1000);
}

function updateRestTimerDisplay() {
  document.getElementById('restTimerBigDigits').textContent = formatMinSec(restTimer.remainingSeconds);
  const btn = document.getElementById('restPlayPauseBtn');
  if (btn) btn.textContent = restTimer.isRunning ? 'Pause' : 'Resume';
}

function toggleRestTimerPlayPause() {
  if (restTimer.isRunning) {
    clearInterval(restTimer.intervalId);
    restTimer.isRunning = false;
    updateRestTimerDisplay();
  } else {
    if (restTimer.remainingSeconds <= 0) restTimer.remainingSeconds = 60;
    showRestMode(restTimer.remainingSeconds);
  }
}

function adjustRestTimer(deltaSec) {
  restTimer.remainingSeconds = Math.max(0, restTimer.remainingSeconds + deltaSec);
  updateRestTimerDisplay();
}

function skipRestTimer() {
  if (restTimer.intervalId) clearInterval(restTimer.intervalId);
  restTimer.isRunning = false;
  hideRestMode();
  advanceToNextStep();
}

function hideRestMode() {
  appState.isResting = false;
  document.getElementById('restTimerMode').classList.remove('active');
  document.getElementById('activeSetMode').style.display = 'block';
}

// Navigation
function advanceToNextStep() {
  if (appState.currentStepIndex < appState.linearSteps.length - 1) {
    appState.currentStepIndex++;
    renderCurrentStep();
  } else {
    completeFullWorkout();
  }
}

function stepPrevious() {
  if (appState.isResting) hideRestMode();
  if (appState.currentStepIndex > 0) {
    appState.currentStepIndex--;
    renderCurrentStep();
  }
}

function stepNext() {
  if (appState.isResting) hideRestMode();
  advanceToNextStep();
}

// =============================================================================
// 9. OVERVIEW DRAWER & SKIP SET 5
// =============================================================================

function openOverviewModal() {
  const container = document.getElementById('overviewStepList');
  if (!container) return;

  container.innerHTML = appState.linearSteps.map((step, idx) => {
    const isCurrent = idx === appState.currentStepIndex;
    const isDone = idx < appState.currentStepIndex;
    return `
      <div class="overview-step-item ${isCurrent ? 'active-step' : ''} ${isDone ? 'done-step' : ''}" onclick="jumpToStep(${idx})">
        <div>
          <span>${isDone ? '✓' : (idx + 1)}. ${step.title}</span>
          ${step.setNumber ? `<span style="font-size: 0.72rem; color: var(--text-dim);"> (Set ${step.setNumber})</span>` : ''}
        </div>
        <span style="font-size: 0.75rem;">${isCurrent ? '▶ Current' : ''}</span>
      </div>
    `;
  }).join('');

  openModal('overviewModal');
}

function jumpToStep(idx) {
  if (appState.isResting) hideRestMode();
  appState.currentStepIndex = idx;
  closeModal('overviewModal');
  renderCurrentStep();
}

function skipFinalCarrySet() {
  // Find steps for exercise 5 (Farmer carry / Suitcase carry / Pallof press)
  const initialLength = appState.linearSteps.length;
  appState.linearSteps = appState.linearSteps.filter((step, idx) => {
    // Keep warmup, cardio, cooldown, and exercises 1 to 4
    if (step.phase && step.phase.includes('Exercise 5 of 5')) {
      return false; // Skip!
    }
    return true;
  });

  closeModal('overviewModal');
  alert('Set 5 skipped to preserve your 45-minute target! Advancing smoothly.');
  if (appState.currentStepIndex >= appState.linearSteps.length) {
    appState.currentStepIndex = appState.linearSteps.length - 1;
  }
  renderCurrentStep();
}

function confirmExitWorkout() {
  if (confirm('Exit active workout? Session time will be stopped.')) {
    stopSessionClock();
    hideRestMode();
    document.getElementById('linearWorkoutView').classList.remove('active');
    document.getElementById('homeSetupView').style.display = 'block';
  }
}

// =============================================================================
// 10. WORKOUT COMPLETION & DOUBLE PROGRESSION LOGIC
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
    introPhase: appState.introPhase,
    stepsCompleted: appState.linearSteps.length
  };

  const history = getStoredHistory();
  history.push(sessionRecord);
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));

  // Evaluate Double Progression
  const progression = getStoredProgression();
  program.exercises.forEach(ex => {
    // Find all logged working sets for this exercise
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

  alert(`🎉 Workout Complete!\n• Time: ${totalMins} minutes (Target 45m)\n• All exercises logged to history.`);

  // Return to clean home view
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
// 11. HOME SETUP PREVIEW & TABS
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
          <span style="font-size: 0.78rem; color: var(--accent-sky);">${sets} × ${ex.repRange}</span>
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
// 12. OUTDOOR CARDIO & 150-MIN WEEKLY GOAL
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

  const gymEl = document.getElementById('gymCardioThisWeek');
  if (gymEl) gymEl.textContent = `Gym: ${gymCardioMins}m`;

  const outdoorEl = document.getElementById('outdoorCardioThisWeek');
  if (outdoorEl) outdoorEl.textContent = `Outdoor: ${outdoorMins}m`;

  const remainEl = document.getElementById('cardioRemainingLabel');
  if (remainEl) {
    const left = Math.max(0, target - totalCardio);
    remainEl.textContent = left > 0 ? `${left}m left` : '🎉 150m Goal Met!';
  }

  const miniEl = document.getElementById('homeCardioMiniStat');
  if (miniEl) miniEl.textContent = `${totalCardio} / 150m`;
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
      <div style="font-size: 1.1rem; font-weight: 800; color: var(--accent-emerald);">
        ${log.durationMinutes}m
      </div>
    </div>
  `).join('');
}

// =============================================================================
// 13. HISTORY & BACKUP
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
        <span style="color: var(--accent-emerald); font-weight: 700; font-size: 0.84rem;">${h.durationMinutes} min</span>
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

function openHostingGuideModal() {
  openModal('hostingModal');
}

// Auto-detect day of week
function autoDetectDay() {
  const day = new Date().getDay();
  if (day === 3 || day === 4) return 'wednesday';
  if (day === 5 || day === 6 || day === 0) return 'friday';
  return 'monday';
}

// =============================================================================
// 14. APP INITIALIZATION
// =============================================================================

window.addEventListener('DOMContentLoaded', () => {
  appState.currentDay = autoDetectDay();

  // Day buttons
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

  // Intro toggle
  const introToggle = document.getElementById('introPhaseToggle');
  if (introToggle) {
    introToggle.addEventListener('change', (e) => {
      appState.introPhase = e.target.checked;
      renderHomeExercisePreview();
    });
  }

  // Sound toggle
  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      appState.soundEnabled = !appState.soundEnabled;
      soundBtn.classList.toggle('active', appState.soundEnabled);
      document.getElementById('soundIcon').textContent = appState.soundEnabled ? '🔔' : '🔕';
      if (appState.soundEnabled) playTone(880, 'sine', 0.1, 0.2);
    });
  }

  // Wake lock
  const wakeBtn = document.getElementById('wakeLockBtn');
  if (wakeBtn) {
    wakeBtn.addEventListener('click', () => {
      if (appState.screenAwake) releaseWakeLock();
      else requestWakeLock();
    });
  }

  // Info modal
  const infoBtn = document.getElementById('infoModalBtn');
  if (infoBtn) {
    infoBtn.addEventListener('click', () => openModal('infoModal'));
  }

  // Initial renders
  renderHomeExercisePreview();
  renderHistoryTab();
  renderOutdoorLogs();
  updateWeeklyCardioStats();

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});
