/**
 * Strength for Family + Hiking PWA
 * Core Architecture & Application Logic
 */

// =============================================================================
// 1. DATA STRUCTURES & WORKOUT DEFINITIONS
// =============================================================================

const WORKOUT_DATA = {
  monday: {
    dayName: 'Monday',
    title: 'Monday Strength',
    subtitle: 'Squat • Smith Press • Row • RDL • Farmer Carry',
    cardioTitle: 'Incline Treadmill Walk',
    cardioSubtitle: '7 Minutes • Conversational Pace (Hands off rails)',
    cardioDesc: 'Choose speed & incline allowing you to speak in complete sentences without holding the handrails.',
    exercises: [
      {
        id: 'mon_goblet_squat',
        name: 'Goblet Squat',
        defaultSets: 3,
        introSets: 2,
        repRange: '6–10',
        minReps: 6,
        maxReps: 10,
        defaultWeight: 45,
        weightUnit: 'lb TOTAL',
        stepWeight: 5,
        restSeconds: 120,
        restLabel: 'Rest 2m',
        notes: 'Start around 40–50 lb TOTAL. Keep chest tall, brace core. Rest 2 minutes.'
      },
      {
        id: 'mon_smith_bench',
        name: 'Smith Bench Press',
        defaultSets: 3,
        introSets: 2,
        repRange: '6–10',
        minReps: 6,
        maxReps: 10,
        defaultWeight: 85,
        weightUnit: 'lb TOTAL',
        stepWeight: 5,
        restSeconds: 120,
        restLabel: 'Rest 2m',
        notes: 'Try familiar 85 lb TOTAL only if controlled. Set Smith safety stops before lifting! Do 1 light practice set first.'
      },
      {
        id: 'mon_cable_row',
        name: 'Cable Row',
        defaultSets: 2,
        introSets: 2,
        repRange: '8–12',
        minReps: 8,
        maxReps: 12,
        defaultWeight: 70,
        weightUnit: 'lb',
        stepWeight: 5,
        restSeconds: 75,
        restLabel: 'Rest 60–90s',
        notes: 'Choose resistance leaving about 2 reps available (RIR 2). Pull toward abdomen, squeeze back.'
      },
      {
        id: 'mon_db_rdl',
        name: 'DB Romanian Deadlift',
        defaultSets: 2,
        introSets: 2,
        repRange: '8–10',
        minReps: 8,
        maxReps: 10,
        defaultWeight: 20,
        weightUnit: 'lb/hand',
        stepWeight: 5,
        restSeconds: 105,
        restLabel: 'Rest 90–120s',
        notes: 'Starting trial: 20–25 lb per hand. Learn hip hinge: soft knees, push hips backward.'
      },
      {
        id: 'mon_farmer_carry',
        name: 'Farmer Carry',
        defaultSets: 2,
        introSets: 2,
        repRange: '30s',
        minReps: 30,
        maxReps: 45,
        isCarry: true,
        defaultWeight: 30,
        weightUnit: 'lb/hand',
        stepWeight: 5,
        restSeconds: 60,
        restLabel: 'Rest 60s',
        notes: 'Stay at DB rack. Walk holding DB in each hand (30–35 lb/hand), torso upright. Standing holds or slow marches fine if space is limited.'
      }
    ]
  },
  wednesday: {
    dayName: 'Wednesday',
    title: 'Wednesday Strength',
    subtitle: 'Split Squat • Seated OHP • Lat Pulldown • RDL • Pallof Press',
    cardioTitle: 'Bike or Elliptical',
    cardioSubtitle: '7 Minutes • Moderate Conversational Effort',
    cardioDesc: 'Moderate effort: breathing harder, but still comfortably able to speak in full sentences.',
    exercises: [
      {
        id: 'wed_split_squat',
        name: 'Supported Split Squat',
        defaultSets: 2,
        introSets: 2,
        repRange: '8 / leg',
        minReps: 8,
        maxReps: 8,
        defaultWeight: 0,
        weightUnit: 'bodyweight',
        stepWeight: 2.5,
        restSeconds: 120,
        restLabel: 'Rest 2m after both legs',
        notes: 'Bodyweight; hold fixed support. Lower in controlled 2–3s (builds downhill knee control for hiking!).',
        substituteName: 'Goblet Squat (2 × 8)',
        substituteActive: false
      },
      {
        id: 'wed_seated_ohp',
        name: 'Seated DB Overhead Press',
        defaultSets: 3,
        introSets: 2,
        repRange: '6–10',
        minReps: 6,
        maxReps: 10,
        defaultWeight: 15,
        weightUnit: 'lb/hand',
        stepWeight: 2.5,
        restSeconds: 120,
        restLabel: 'Rest 2m',
        notes: 'Starting trial: 15–20 lb per hand; use nearly upright backrest. Do 1 light practice set first.'
      },
      {
        id: 'wed_lat_pulldown',
        name: 'Lat Pulldown (Two-Arm)',
        defaultSets: 2,
        introSets: 2,
        repRange: '8–12',
        minReps: 8,
        maxReps: 12,
        defaultWeight: 75,
        weightUnit: 'lb',
        stepWeight: 5,
        restSeconds: 75,
        restLabel: 'Rest 60–90s',
        notes: 'Pull elbows down toward sides, chest tall, without leaning way back.',
        substituteName: 'Single-Arm Cable Pulldown (if station is busy)',
        substituteActive: false
      },
      {
        id: 'wed_db_rdl',
        name: 'DB Romanian Deadlift',
        defaultSets: 2,
        introSets: 2,
        repRange: '8–10',
        minReps: 8,
        maxReps: 10,
        defaultWeight: 20,
        weightUnit: 'lb/hand',
        stepWeight: 5,
        restSeconds: 105,
        restLabel: 'Rest 90–120s',
        notes: 'Starting trial: 20–25 lb per hand. Push hips back, keep back flat.'
      },
      {
        id: 'wed_pallof_press',
        name: 'Pallof Press',
        defaultSets: 2,
        introSets: 2,
        repRange: '8 / side',
        minReps: 8,
        maxReps: 8,
        defaultWeight: 15,
        weightUnit: 'lb',
        stepWeight: 2.5,
        restSeconds: 60,
        restLabel: 'Rest 60s after both sides',
        notes: 'Stand sideways to chest-height cable. Press hands forward, hold 1–2s; resist rotation. Rest 60s after both sides.'
      }
    ]
  },
  friday: {
    dayName: 'Friday',
    title: 'Friday Strength',
    subtitle: 'Goblet Squat • Flat DB Bench • Single-Arm Row • Calf Raise • Suitcase Carry',
    cardioTitle: 'Incline Treadmill Walk',
    cardioSubtitle: '7 Minutes • Steady Conversational Pace',
    cardioDesc: 'Comfortable, steady effort without holding the handrails.',
    exercises: [
      {
        id: 'fri_goblet_squat',
        name: 'Goblet Squat',
        defaultSets: 3,
        introSets: 2,
        repRange: '6–10',
        minReps: 6,
        maxReps: 10,
        defaultWeight: 45,
        weightUnit: 'lb TOTAL',
        stepWeight: 5,
        restSeconds: 120,
        restLabel: 'Rest 2m',
        notes: 'Start 40–50 lb TOTAL. Controlled descent. Rest 2 minutes.'
      },
      {
        id: 'fri_flat_db_bench',
        name: 'Flat DB Bench Press',
        defaultSets: 3,
        introSets: 2,
        repRange: '8–12',
        minReps: 8,
        maxReps: 12,
        defaultWeight: 20,
        weightUnit: 'lb/hand',
        stepWeight: 2.5,
        restSeconds: 120,
        restLabel: 'Rest 2m',
        notes: 'Starting trial: 20–25 lb per hand. 1 light practice set first. Rest 2 minutes.'
      },
      {
        id: 'fri_single_arm_row',
        name: 'Single-Arm DB Row',
        defaultSets: 2,
        introSets: 2,
        repRange: '8–12 / arm',
        minReps: 8,
        maxReps: 12,
        defaultWeight: 30,
        weightUnit: 'lb/arm',
        stepWeight: 5,
        restSeconds: 75,
        restLabel: 'Rest 60–90s after both arms',
        notes: 'Starting trial: 30 lb (lighter if needed). Support non-working hand on bench. Rest after both arms.'
      },
      {
        id: 'fri_calf_raise',
        name: 'Standing DB Calf Raise',
        defaultSets: 2,
        introSets: 2,
        repRange: '12–20',
        minReps: 12,
        maxReps: 20,
        defaultWeight: 25,
        weightUnit: 'lb/hand',
        stepWeight: 5,
        restSeconds: 60,
        restLabel: 'Rest 60s',
        notes: 'Rise and lower slowly with a 1-second pause at the bottom stretch; use wall/rack support if needed.'
      },
      {
        id: 'fri_suitcase_carry',
        name: 'Suitcase Carry',
        defaultSets: 2,
        introSets: 2,
        repRange: '30s / side',
        minReps: 30,
        maxReps: 45,
        isCarry: true,
        isUnilateral: true,
        defaultWeight: 25,
        weightUnit: 'lb (1 DB)',
        stepWeight: 5,
        restSeconds: 60,
        restLabel: 'Rest 60s after both sides',
        notes: 'Hold one DB (25–30 lb); walk or march slowly without leaning sideways. Switch hands, then rest 60s.'
      }
    ]
  }
};

// =============================================================================
// 2. STATE MANAGEMENT & STORAGE
// =============================================================================

const STORAGE_KEYS = {
  STATE: 'sh_app_state_v1',
  HISTORY: 'sh_workout_history_v1',
  OUTDOOR: 'sh_outdoor_logs_v1',
  PROGRESSION: 'sh_progression_tracker_v1',
  SETTINGS: 'sh_settings_v1'
};

let appState = {
  currentDay: 'monday',
  introPhase: false,
  soundEnabled: true,
  screenAwake: false,
  sessionActive: false,
  sessionStartTime: null,
  sessionElapsedSeconds: 0,
  activeExerciseLogs: {} // key: exerciseId => array of { weight, reps, completed }
};

let activeTimer = {
  intervalId: null,
  remainingSeconds: 90,
  initialSeconds: 90,
  label: 'Rest Period',
  isRunning: false
};

let guidedStretchState = {
  active: false,
  stepIndex: 0,
  steps: [
    { title: 'Calf Stretch (Left Side)', duration: 30, cue: 'Hands against wall, back heel flat down on floor.' },
    { title: 'Calf Stretch (Right Side)', duration: 30, cue: 'Switch legs, press right heel down.' },
    { title: 'Hip Flexor (Left Forward)', duration: 30, cue: 'Staggered stance, tuck belt buckle UP, shift hips gently forward.' },
    { title: 'Hip Flexor (Right Forward)', duration: 30, cue: 'Switch stance, maintain pelvic tuck.' },
    { title: 'Chest Stretch (Both Arms)', duration: 45, cue: 'Forearms in doorway or corner, step gently forward to feel chest stretch.' }
  ]
};

// =============================================================================
// 3. AUDIO SYNTHESIZER (Web Audio API - Zero External Dependencies)
// =============================================================================

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.2) {
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
  } catch (err) {
    console.warn('Audio tone failed', err);
  }
}

// Countdown pip at 3, 2, 1
function playPip() {
  playTone(880, 'sine', 0.1, 0.25);
  if (navigator.vibrate) navigator.vibrate(50);
}

// Timer finished chime (C5 -> G5)
function playRestFinishedChime() {
  if (!appState.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    // Note 1: C5
    playTone(523.25, 'triangle', 0.25, 0.35);
    // Note 2: E5
    setTimeout(() => playTone(659.25, 'triangle', 0.25, 0.35), 140);
    // Note 3: G5
    setTimeout(() => playTone(783.99, 'triangle', 0.5, 0.4), 280);

    if (navigator.vibrate) navigator.vibrate([100, 50, 200]);
  } catch (e) {}
}

// Workout complete celebratory fanfare
function playFanfare() {
  if (!appState.soundEnabled) return;
  [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
    setTimeout(() => playTone(freq, 'sine', 0.35, 0.35), i * 160);
  });
  if (navigator.vibrate) navigator.vibrate([150, 80, 150, 80, 300]);
}

// =============================================================================
// 4. SCREEN WAKE LOCK API (Prevents iPhone Auto-Lock)
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
    } catch (err) {
      console.log('Wake Lock request error:', err);
    }
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
  if (appState.screenAwake) {
    btn.classList.add('active');
    btn.title = 'Screen Awake: ON';
  } else {
    btn.classList.remove('active');
    btn.title = 'Screen Awake: OFF (tap to enable)';
  }
}

// Re-acquire wake lock if tab is switched back
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && appState.sessionActive) {
    requestWakeLock();
  }
});

// =============================================================================
// 5. SESSION TIMER & TIME BUDGET TRACKER (45 min target / 49 max)
// =============================================================================

let sessionIntervalId = null;

function startSessionTimer() {
  if (appState.sessionActive) return;
  appState.sessionActive = true;
  appState.sessionStartTime = Date.now();
  
  requestWakeLock();
  getAudioContext();

  const startBtn = document.getElementById('startSessionBtn');
  if (startBtn) {
    startBtn.textContent = '⏹ End Session';
    startBtn.style.background = 'rgba(244, 63, 94, 0.15)';
    startBtn.style.borderColor = 'rgba(244, 63, 94, 0.4)';
    startBtn.style.color = '#fda4af';
  }

  sessionIntervalId = setInterval(updateSessionClock, 1000);
  updateSessionClock();
}

function stopSessionTimer() {
  if (sessionIntervalId) {
    clearInterval(sessionIntervalId);
    sessionIntervalId = null;
  }
  appState.sessionActive = false;
  releaseWakeLock();

  const startBtn = document.getElementById('startSessionBtn');
  if (startBtn) {
    startBtn.textContent = '▶ Start Session';
    startBtn.style.background = 'rgba(251, 191, 36, 0.15)';
    startBtn.style.borderColor = 'rgba(251, 191, 36, 0.35)';
    startBtn.style.color = 'var(--accent-amber)';
  }
}

function formatMinutesSeconds(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateSessionClock() {
  if (!appState.sessionStartTime) return;
  const elapsed = Math.floor((Date.now() - appState.sessionStartTime) / 1000);
  appState.sessionElapsedSeconds = elapsed;

  const displayEl = document.getElementById('sessionTimerDisplay');
  if (displayEl) displayEl.textContent = formatMinutesSeconds(elapsed);

  // Time Budget bar calculations:
  // Target: 45m (2700s), Max: 49m (2940s)
  const targetSec = 2700;
  const maxSec = 2940;
  const percent = Math.min(100, (elapsed / targetSec) * 100);

  const fillEl = document.getElementById('budgetBarFill');
  if (fillEl) {
    fillEl.style.width = `${percent}%`;
    if (elapsed > maxSec) {
      fillEl.className = 'budget-bar-fill danger';
    } else if (elapsed > 2400) { // > 40 min
      fillEl.className = 'budget-bar-fill warning';
    } else {
      fillEl.className = 'budget-bar-fill';
    }
  }

  // Active segment highlighting
  const segWarmup = document.getElementById('segWarmup');
  const segStrength = document.getElementById('segStrength');
  const segCardio = document.getElementById('segCardio');
  const segCooldown = document.getElementById('segCooldown');

  [segWarmup, segStrength, segCardio, segCooldown].forEach(el => el && el.classList.remove('active'));

  if (elapsed < 360) { // 0 - 6 min
    if (segWarmup) segWarmup.classList.add('active');
  } else if (elapsed < 1980) { // 6 - 33 min (Warmup 6 + Strength 27)
    if (segStrength) segStrength.classList.add('active');
  } else if (elapsed < 2400) { // 33 - 40 min (Cardio 7)
    if (segCardio) segCardio.classList.add('active');
  } else {
    if (segCooldown) segCooldown.classList.add('active');
  }

  // Pace warning banner check
  const paceBanner = document.getElementById('pacingAlertBanner');
  if (paceBanner) {
    // If elapsed is > 30 mins and not yet at cardio/cooldown
    if (elapsed >= 1800 && elapsed < targetSec) {
      paceBanner.classList.add('visible');
    } else if (elapsed >= targetSec) {
      paceBanner.classList.add('visible');
      paceBanner.querySelector('span').textContent = '🚨 Over 45 min target! Skip carry/core set to keep within 49m cap.';
    } else {
      paceBanner.classList.remove('visible');
    }
  }
}

// =============================================================================
// 6. REST & INTERVAL TIMER ENGINE
// =============================================================================

function startRestTimer(seconds, label = 'Rest Period') {
  if (activeTimer.intervalId) {
    clearInterval(activeTimer.intervalId);
  }

  activeTimer.remainingSeconds = seconds;
  activeTimer.initialSeconds = seconds;
  activeTimer.label = label;
  activeTimer.isRunning = true;

  playTone(587.33, 'sine', 0.1, 0.2); // Start beep
  updateTimerUI();

  // Show floating banner
  const banner = document.getElementById('floatingRestBanner');
  if (banner) {
    banner.classList.add('visible');
    document.getElementById('restBannerTitle').textContent = label;
  }

  activeTimer.intervalId = setInterval(() => {
    if (activeTimer.remainingSeconds > 0) {
      activeTimer.remainingSeconds--;
      
      // Countdown pips at 3, 2, 1 seconds
      if (activeTimer.remainingSeconds <= 3 && activeTimer.remainingSeconds > 0) {
        playPip();
      }

      updateTimerUI();

      if (activeTimer.remainingSeconds === 0) {
        clearInterval(activeTimer.intervalId);
        activeTimer.isRunning = false;
        playRestFinishedChime();
        handleTimerFinish();
      }
    }
  }, 1000);
}

function handleTimerFinish() {
  const bannerTitle = document.getElementById('restBannerTitle');
  if (bannerTitle) bannerTitle.textContent = 'Time Up! Ready for Set';
  
  if (guidedStretchState.active) {
    advanceGuidedStretch();
  }
}

function updateTimerUI() {
  const formatted = formatMinutesSeconds(activeTimer.remainingSeconds);
  
  // Floating Banner UI
  const bannerDigits = document.getElementById('restTimerBannerDigits');
  if (bannerDigits) bannerDigits.textContent = formatted;

  // Dedicated Timer Tab UI
  const heroDigits = document.getElementById('heroTimerDigits');
  if (heroDigits) heroDigits.textContent = formatted;

  const heroSub = document.getElementById('heroTimerSub');
  if (heroSub) heroSub.textContent = activeTimer.label;

  const heroBtn = document.getElementById('heroPlayPauseBtn');
  if (heroBtn) {
    heroBtn.textContent = activeTimer.isRunning ? 'Pause' : 'Resume';
  }
}

function adjustActiveTimer(deltaSec) {
  activeTimer.remainingSeconds = Math.max(0, activeTimer.remainingSeconds + deltaSec);
  updateTimerUI();
}

function toggleHeroTimer() {
  if (activeTimer.isRunning) {
    clearInterval(activeTimer.intervalId);
    activeTimer.isRunning = false;
    updateTimerUI();
  } else {
    if (activeTimer.remainingSeconds <= 0) {
      activeTimer.remainingSeconds = activeTimer.initialSeconds || 90;
    }
    startRestTimer(activeTimer.remainingSeconds, activeTimer.label);
  }
}

function resetActiveTimer() {
  clearInterval(activeTimer.intervalId);
  activeTimer.remainingSeconds = activeTimer.initialSeconds;
  activeTimer.isRunning = false;
  updateTimerUI();
}

function dismissRestTimer() {
  if (activeTimer.intervalId) {
    clearInterval(activeTimer.intervalId);
  }
  activeTimer.isRunning = false;
  const banner = document.getElementById('floatingRestBanner');
  if (banner) banner.classList.remove('visible');
}

function setAndStartTimer(seconds, label) {
  startRestTimer(seconds, label);
}

function startCustomTimer(seconds, label) {
  startSessionTimer(); // Automatically start session if not already started
  startRestTimer(seconds, label);
}

// Carry special timers (30s / 45s)
function startCarryTimer(seconds, exerciseName, isUnilateral = false) {
  startSessionTimer();
  let label = `${exerciseName} (${seconds}s)`;
  if (isUnilateral) label = `${exerciseName} - Side 1 (${seconds}s)`;
  
  startRestTimer(seconds, label);

  // If unilateral (Suitcase carry), listen for end and prompt switch side
  if (isUnilateral) {
    // Custom audio indicator
    setTimeout(() => {
      // In 30s
    }, seconds * 1000);
  }
}

// Guided Stretch Routine Flow
function startGuidedStretches() {
  guidedStretchState.active = true;
  guidedStretchState.stepIndex = 0;
  startSessionTimer();
  runCurrentStretchStep();
}

function runCurrentStretchStep() {
  const step = guidedStretchState.steps[guidedStretchState.stepIndex];
  if (!step) {
    guidedStretchState.active = false;
    playFanfare();
    alert('🎉 Cooldown stretches complete! Great job maintaining hip and ankle mobility.');
    return;
  }

  const label = `Stretch ${guidedStretchState.stepIndex + 1}/5: ${step.title}`;
  startRestTimer(step.duration, label);
  const subtitle = document.getElementById('restBannerSubtitle');
  if (subtitle) subtitle.textContent = step.cue;
}

function advanceGuidedStretch() {
  if (!guidedStretchState.active) return;
  guidedStretchState.stepIndex++;
  if (guidedStretchState.stepIndex < guidedStretchState.steps.length) {
    setTimeout(runCurrentStretchStep, 1500); // 1.5s grace transition between stretches
  } else {
    guidedStretchState.active = false;
  }
}

// =============================================================================
// 7. EXERCISE RENDERING & SET TRACKING
// =============================================================================

function renderExercises() {
  const dayKey = appState.currentDay;
  const dayConfig = WORKOUT_DATA[dayKey];
  const container = document.getElementById('exerciseListContainer');
  if (!container || !dayConfig) return;

  // Update header text
  document.getElementById('dayTitleHeader').textContent = dayConfig.title;
  document.getElementById('daySubtitleHeader').textContent = dayConfig.subtitle;
  document.getElementById('cardioPhaseTitle').textContent = `Cardio (7 Minutes) — ${dayConfig.dayName}`;
  document.getElementById('cardioPhaseSubtitle').textContent = dayConfig.cardioTitle;
  document.getElementById('cardioMachineDesc').textContent = `7-min ${dayConfig.cardioTitle}`;
  document.getElementById('cardioInstructions').textContent = dayConfig.cardioDesc;

  const progressionData = getStoredProgression();

  let html = '';

  dayConfig.exercises.forEach((ex, exIdx) => {
    const numSets = appState.introPhase ? ex.introSets : ex.defaultSets;
    const isProgressionReady = progressionData[ex.id]?.consecutiveTopReps >= 2;

    // Load active logs or defaults
    if (!appState.activeExerciseLogs[ex.id]) {
      const pastLog = getPastExerciseStats(ex.id);
      const initialWeight = pastLog ? pastLog.weight : ex.defaultWeight;
      const initialReps = pastLog ? pastLog.reps : (ex.minReps || 8);

      appState.activeExerciseLogs[ex.id] = Array.from({ length: numSets }, () => ({
        weight: initialWeight,
        reps: initialReps,
        completed: false
      }));
    } else {
      // Adjust length if intro mode changed
      while (appState.activeExerciseLogs[ex.id].length < numSets) {
        const last = appState.activeExerciseLogs[ex.id][appState.activeExerciseLogs[ex.id].length - 1];
        appState.activeExerciseLogs[ex.id].push({
          weight: last ? last.weight : ex.defaultWeight,
          reps: last ? last.reps : 8,
          completed: false
        });
      }
      if (appState.activeExerciseLogs[ex.id].length > numSets) {
        appState.activeExerciseLogs[ex.id] = appState.activeExerciseLogs[ex.id].slice(0, numSets);
      }
    }

    const sets = appState.activeExerciseLogs[ex.id];

    html += `
      <div class="exercise-card" id="card_${ex.id}">
        <div class="exercise-top-row">
          <div>
            <div class="exercise-index">Exercise ${exIdx + 1} of 5</div>
            <div class="exercise-name">${ex.name}</div>
          </div>
          <div class="rest-recommend-badge" onclick="startRestTimer(${ex.restSeconds}, 'Rest: ${ex.name}')">
            ⏱️ ${ex.restLabel}
          </div>
        </div>

        <div class="exercise-instructions">
          <strong>Target:</strong> ${numSets} × ${ex.repRange} ${ex.weightUnit ? `(${ex.weightUnit})` : ''} • ${ex.notes}
        </div>

        ${isProgressionReady ? `
          <div class="progression-alert-pill visible">
            🏆 <strong>Progression Ready!</strong> Hit top reps for 2 sessions. Add +${ex.stepWeight} lb and reset to ${ex.minReps} reps!
          </div>
        ` : ''}

        ${ex.substituteName ? `
          <div style="margin-bottom: 8px;">
            <button class="rest-chip-btn" style="font-size: 0.72rem; padding: 4px 8px;" onclick="toggleSubstitute('${ex.id}')">
              🔄 ${ex.substituteActive ? `Switch back to ${ex.name}` : `Substitute: ${ex.substituteName}`}
            </button>
          </div>
        ` : ''}

        <!-- Set Table -->
        <div class="set-table">
          <div class="set-table-header">
            <span>Set</span>
            <span style="text-align: center;">Weight (${ex.weightUnit.includes('TOTAL') ? 'Total' : 'Per Hand'})</span>
            <span style="text-align: center;">${ex.isCarry ? 'Seconds' : 'Reps'}</span>
            <span style="text-align: center;">Done</span>
          </div>

          ${sets.map((set, sIdx) => `
            <div class="set-row ${set.completed ? 'completed' : ''}" id="row_${ex.id}_${sIdx}">
              <div class="set-num-badge">#${sIdx + 1}</div>
              
              <!-- Weight Stepper -->
              <div class="stepper-wrap">
                <button class="stepper-btn" onclick="stepWeight('${ex.id}', ${sIdx}, -${ex.stepWeight})">−</button>
                <input type="number" class="stepper-input" value="${set.weight}" 
                  onchange="updateSetWeight('${ex.id}', ${sIdx}, this.value)" step="${ex.stepWeight}">
                <button class="stepper-btn" onclick="stepWeight('${ex.id}', ${sIdx}, ${ex.stepWeight})">+</button>
              </div>

              <!-- Reps Stepper -->
              <div class="stepper-wrap">
                <button class="stepper-btn" onclick="stepReps('${ex.id}', ${sIdx}, -1)">−</button>
                <input type="number" class="stepper-input" value="${set.reps}" 
                  onchange="updateSetReps('${ex.id}', ${sIdx}, this.value)">
                <button class="stepper-btn" onclick="stepReps('${ex.id}', ${sIdx}, 1)">+</button>
              </div>

              <!-- Complete Checkmark Button -->
              <button class="check-set-btn" onclick="toggleSetComplete('${ex.id}', ${sIdx})">
                ${set.completed ? '✓' : '○'}
              </button>
            </div>
          `).join('')}
        </div>

        ${ex.isCarry ? `
          <div class="carry-timer-box">
            <div style="font-size: 0.76rem; color: var(--text-muted);">
              <strong>Carry Timer:</strong> Build from 30s to 45s before adding weight.
            </div>
            <div class="carry-btn-row">
              <button class="carry-trigger-btn" onclick="startCarryTimer(30, '${ex.name}', ${!!ex.isUnilateral})">
                ⏱️ 30s Carry
              </button>
              <button class="carry-trigger-btn" onclick="startCarryTimer(45, '${ex.name}', ${!!ex.isUnilateral})">
                ⏱️ 45s Carry
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  });

  container.innerHTML = html;
}

// Steppers and inputs
function stepWeight(exId, setIdx, delta) {
  const set = appState.activeExerciseLogs[exId][setIdx];
  set.weight = Math.max(0, (parseFloat(set.weight) || 0) + delta);
  renderExercises();
}

function updateSetWeight(exId, setIdx, val) {
  const set = appState.activeExerciseLogs[exId][setIdx];
  set.weight = Math.max(0, parseFloat(val) || 0);
}

function stepReps(exId, setIdx, delta) {
  const set = appState.activeExerciseLogs[exId][setIdx];
  set.reps = Math.max(1, (parseInt(set.reps, 10) || 0) + delta);
  renderExercises();
}

function updateSetReps(exId, setIdx, val) {
  const set = appState.activeExerciseLogs[exId][setIdx];
  set.reps = Math.max(1, parseInt(val, 10) || 1);
}

function toggleSetComplete(exId, setIdx) {
  startSessionTimer(); // Ensure clock is running
  const set = appState.activeExerciseLogs[exId][setIdx];
  set.completed = !set.completed;

  if (set.completed) {
    playTone(659.25, 'sine', 0.12, 0.25);
    // Find exercise config to start rest timer
    const dayConfig = WORKOUT_DATA[appState.currentDay];
    const ex = dayConfig.exercises.find(e => e.id === exId);
    if (ex) {
      startRestTimer(ex.restSeconds, `Rest: ${ex.name} (Set ${setIdx + 1})`);
    }
  }

  renderExercises();
}

function toggleSubstitute(exId) {
  const dayConfig = WORKOUT_DATA[appState.currentDay];
  const ex = dayConfig.exercises.find(e => e.id === exId);
  if (ex) {
    ex.substituteActive = !ex.substituteActive;
    if (ex.substituteActive) {
      ex.name = ex.substituteName;
    } else {
      // revert
      if (exId === 'wed_split_squat') ex.name = 'Supported Split Squat';
      if (exId === 'wed_lat_pulldown') ex.name = 'Lat Pulldown (Two-Arm)';
    }
    renderExercises();
  }
}

// =============================================================================
// 8. PROGRESSION SYSTEM & LOGGING
// =============================================================================

function getPastExerciseStats(exId) {
  const history = getStoredHistory();
  for (let i = history.length - 1; i >= 0; i--) {
    const session = history[i];
    if (session.exercises && session.exercises[exId]) {
      const sets = session.exercises[exId];
      if (sets.length > 0) return sets[0];
    }
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

function saveWorkoutToHistory() {
  const dayConfig = WORKOUT_DATA[appState.currentDay];
  const durationSec = appState.sessionElapsedSeconds || 2700; // default 45m if not started
  const now = new Date();

  const sessionRecord = {
    id: `workout_${Date.now()}`,
    date: now.toISOString(),
    displayDate: now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
    day: dayConfig.dayName,
    durationSeconds: durationSec,
    durationMinutes: Math.round(durationSec / 60),
    introPhase: appState.introPhase,
    exercises: JSON.parse(JSON.stringify(appState.activeExerciseLogs))
  };

  // Evaluate double progression for each exercise
  const progression = getStoredProgression();

  dayConfig.exercises.forEach(ex => {
    const sets = appState.activeExerciseLogs[ex.id] || [];
    const completedSets = sets.filter(s => s.completed);

    if (completedSets.length > 0) {
      // Check if all completed sets hit max reps
      const allHitMax = completedSets.every(s => s.reps >= ex.maxReps);
      const currWeight = completedSets[0].weight;

      if (!progression[ex.id]) {
        progression[ex.id] = {
          name: ex.name,
          currentWeight: currWeight,
          consecutiveTopReps: 0,
          lastUpdated: now.toISOString()
        };
      }

      progression[ex.id].currentWeight = currWeight;

      if (allHitMax) {
        progression[ex.id].consecutiveTopReps = (progression[ex.id].consecutiveTopReps || 0) + 1;
      } else {
        progression[ex.id].consecutiveTopReps = 0;
      }
    }
  });

  saveProgressionData(progression);

  const history = getStoredHistory();
  history.push(sessionRecord);
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));

  // Reset active state
  stopSessionTimer();
  dismissRestTimer();
  appState.sessionElapsedSeconds = 0;
  appState.activeExerciseLogs = {};

  playFanfare();
  alert(`🎉 Workout Saved! Session time: ${sessionRecord.durationMinutes} minutes. Progression updated!`);

  renderExercises();
  renderProgressTab();
  updateWeeklyCardioStats();
}

// =============================================================================
// 9. OUTDOOR HIKING & CARDIO TRACKER (150-Min Weekly Target)
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
    packWeight: packWeight
  };

  const logs = getStoredOutdoorLogs();
  logs.unshift(newLog);
  localStorage.setItem(STORAGE_KEYS.OUTDOOR, JSON.stringify(logs));

  document.getElementById('outdoorLogForm').reset();
  playTone(784, 'sine', 0.15, 0.25);
  
  renderOutdoorLogs();
  updateWeeklyCardioStats();
}

function getStartOfWeek() {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday is start of week
  const start = new Date(d.setDate(diff));
  start.setHours(0, 0, 0, 0);
  return start;
}

function updateWeeklyCardioStats() {
  const weekStart = getStartOfWeek();
  
  // 1. Gym cardio: 7 min per gym session completed this week
  const history = getStoredHistory();
  const gymSessionsThisWeek = history.filter(h => new Date(h.date) >= weekStart).length;
  const gymCardioMins = gymSessionsThisWeek * 7;

  // 2. Outdoor cardio
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
    remainEl.textContent = left > 0 ? `${left}m left` : '🎉 Goal Met!';
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
      <div style="font-size: 1.1rem; font-weight: 800; color: var(--accent-emerald);">
        ${log.durationMinutes}m
      </div>
    </div>
  `).join('');
}

// =============================================================================
// 10. PROGRESS TAB & HISTORY VIEW
// =============================================================================

function renderProgressTab() {
  // 1. Current working weights
  const progression = getStoredProgression();
  const grid = document.getElementById('progressionStatsGrid');
  if (grid) {
    const entries = Object.entries(progression);
    if (entries.length === 0) {
      grid.innerHTML = '<p style="font-size: 0.8rem; color: var(--text-dim); text-align: center; padding: 10px;">Log your first session to initialize progression weights.</p>';
    } else {
      grid.innerHTML = entries.map(([id, info]) => `
        <div style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-input); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <div>
            <div style="font-size: 0.84rem; font-weight: 600; color: #fff;">${info.name || id}</div>
            <div style="font-size: 0.72rem; color: var(--text-muted);">
              Top-rep streak: ${info.consecutiveTopReps} / 2 sessions
            </div>
          </div>
          <div style="font-size: 0.95rem; font-weight: 700; color: var(--accent-sky);">
            ${info.currentWeight} lb
          </div>
        </div>
      `).join('');
    }
  }

  // 2. Workout History List
  const history = getStoredHistory();
  const historyContainer = document.getElementById('workoutHistoryList');
  if (historyContainer) {
    if (history.length === 0) {
      historyContainer.innerHTML = '<p style="font-size: 0.8rem; color: var(--text-dim); text-align: center; padding: 14px;">No completed workouts yet.</p>';
    } else {
      historyContainer.innerHTML = history.slice().reverse().map(h => `
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
  }
}

// =============================================================================
// 11. BACKUP & RESTORE (JSON EXPORT/IMPORT)
// =============================================================================

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
      alert('✅ Backup data restored successfully!');
      renderProgressTab();
      renderOutdoorLogs();
      updateWeeklyCardioStats();
    } catch (err) {
      alert('❌ Error reading backup file. Please ensure it is valid JSON.');
    }
  };
  reader.readAsText(file);
}

function confirmResetAllData() {
  if (confirm('Are you sure you want to reset all workout and hike logs? This cannot be undone.')) {
    localStorage.clear();
    location.reload();
  }
}

// =============================================================================
// 12. UI NAVIGATION & MODALS
// =============================================================================

function switchTab(tabId) {
  // Update tabs
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(`tab-${tabId}`);
  if (target) target.classList.add('active');

  // Update nav buttons
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
  const activeBtn = Array.from(document.querySelectorAll('.nav-item')).find(btn => 
    btn.getAttribute('onclick')?.includes(`'${tabId}'`)
  );
  if (activeBtn) activeBtn.classList.add('active');

  if (tabId === 'hiking') {
    renderOutdoorLogs();
    updateWeeklyCardioStats();
  } else if (tabId === 'progress') {
    renderProgressTab();
  }
}

function togglePhaseCard(cardId) {
  const card = document.getElementById(cardId);
  if (card) card.classList.toggle('open');
}

function toggleCheckItem(el) {
  el.classList.toggle('checked');
  playTone(523.25, 'sine', 0.08, 0.2);
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

function closeModalOnOutsideClick(event, modalId) {
  if (event.target.id === modalId) {
    closeModal(modalId);
  }
}

function openHostingGuideModal() {
  openModal('hostingModal');
}

// Auto-select Day based on Day of Week
function autoDetectDay() {
  const day = new Date().getDay(); // 0 Sun, 1 Mon, 2 Tue, 3 Wed, 4 Thu, 5 Fri, 6 Sat
  if (day === 3 || day === 4) return 'wednesday';
  if (day === 5 || day === 6 || day === 0) return 'friday';
  return 'monday';
}

// =============================================================================
// 13. INITIALIZATION & EVENT LISTENERS
// =============================================================================

window.addEventListener('DOMContentLoaded', () => {
  // 1. Initial day setup
  appState.currentDay = autoDetectDay();

  // Day buttons
  document.querySelectorAll('.day-tab-btn').forEach(btn => {
    const day = btn.getAttribute('data-day');
    if (day === appState.currentDay) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }

    btn.addEventListener('click', () => {
      document.querySelectorAll('.day-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.currentDay = day;
      renderExercises();
    });
  });

  // 2. Intro phase toggle
  const introToggle = document.getElementById('introPhaseToggle');
  if (introToggle) {
    introToggle.addEventListener('change', (e) => {
      appState.introPhase = e.target.checked;
      renderExercises();
    });
  }

  // 3. Sound toggle button
  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      appState.soundEnabled = !appState.soundEnabled;
      soundBtn.classList.toggle('active', appState.soundEnabled);
      document.getElementById('soundIcon').textContent = appState.soundEnabled ? '🔔' : '🔕';
      if (appState.soundEnabled) playTone(880, 'sine', 0.1, 0.2);
    });
  }

  // 4. Wake lock button
  const wakeBtn = document.getElementById('wakeLockBtn');
  if (wakeBtn) {
    wakeBtn.addEventListener('click', () => {
      if (appState.screenAwake) {
        releaseWakeLock();
      } else {
        requestWakeLock();
      }
    });
  }

  // 5. Info modal button
  const infoBtn = document.getElementById('infoModalBtn');
  if (infoBtn) {
    infoBtn.addEventListener('click', () => openModal('infoModal'));
  }

  // 6. Session start/stop
  const sessionBtn = document.getElementById('startSessionBtn');
  if (sessionBtn) {
    sessionBtn.addEventListener('click', () => {
      if (appState.sessionActive) {
        if (confirm('End session timer?')) stopSessionTimer();
      } else {
        startSessionTimer();
      }
    });
  }

  // 7. Complete Workout
  const finishBtn = document.getElementById('finishWorkoutBtn');
  if (finishBtn) {
    finishBtn.addEventListener('click', saveWorkoutToHistory);
  }

  // 8. Skip set 5 banner button (for tight schedule per protocol)
  const skipCarryBtn = document.getElementById('skipCarryBannerBtn');
  if (skipCarryBtn) {
    skipCarryBtn.addEventListener('click', () => {
      const card = document.querySelector('.exercise-card:last-of-type');
      if (card) {
        card.style.display = 'none';
        alert('Set 5 skipped to preserve 45-minute budget. Good prioritization!');
      }
    });
  }

  // 9. Initial rendering
  renderExercises();
  renderProgressTab();
  renderOutdoorLogs();
  updateWeeklyCardioStats();

  // 10. Register Service Worker for 100% offline iPhone PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      console.log('Strength & Hike Service Worker registered successfully', reg.scope);
    }).catch((err) => {
      console.warn('Service Worker registration skipped or failed:', err);
    });
  }
});
