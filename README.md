# 🏋️‍♂️ STRENGTH FOR FAMILY + HIKING (PWA)

A sleek, Apple-inspired Progressive Web App (PWA) custom-built for iPhone to manage and guide your Monday, Wednesday, and Friday 45-minute strength, cardio, and hiking routine.

---

## ⏱️ Routine Time Budget & Protocol
- **Target Session Duration:** 45 minutes (Maximum hard cap: 49 minutes)
- **Time Budget Allocation:**
  - **Warmup:** 6 minutes
  - **Strength (including rest & station changes):** ~27 minutes
  - **Cardio:** 7 minutes
  - **Cooldown + Stretches:** 5 minutes
- **Pacing Engine:** Visual budget progress bar tracks elapsed time. If elapsed time exceeds 30–33 minutes while sets remain, an alert offers a 1-tap **"Skip Final Carry/Core Set"** to keep the 45-min promise without rushing reps.

---

## ✨ Features Engineered Specifically for iPhone

1. **Native iOS Dark Aesthetic:**
   - Apple SF font stack, dark slate surfaces (`#080d14`), subtle border glows, and iOS safe area padding (supports Dynamic Island, notch, and home bar).
   - Zero pinch-to-zoom jumping while tapping steppers.
2. **Screen Wake Lock API:**
   - Automatically keeps your iPhone screen awake while you are resting between sets or walking on the treadmill.
3. **Built-in Web Audio API Synthesizer:**
   - Generates warm gym chimes and 3-2-1 countdown pips directly in the browser—no external MP3 downloads required. Works instantly offline.
4. **100% Offline Gym Mode:**
   - Uses a Service Worker to cache the entire app so it works flawlessly in underground gyms or dead zones.
5. **Interactive 6-Minute Warmup:**
   - 3:00 Treadmill/Bike timer with audio.
   - 1:00 Dynamic mobility checklist (8 squats, 8 hip hinges, 10 heel-to-toe rocks, 10 arm circles).
   - 2:00 Light practice sets tracker.
6. **Monday / Wednesday / Friday Routines:**
   - Auto-selects today's day of week.
   - **Monday:** Goblet Squat (3×6-10), Smith Bench Press (3×6-10), Cable Row (2×8-12), DB RDL (2×8-10), Farmer Carry (2×30s).
   - **Wednesday:** Supported Split Squat (2×8/leg) [with Goblet Squat substitute toggle], Seated DB OHP (3×6-10), Lat Pulldown [with single-arm busy gym toggle], DB RDL (2×8-10), Pallof Press (2×8/side).
   - **Friday:** Goblet Squat (3×6-10), Flat DB Bench (3×8-12), Single-Arm DB Row (2×8-12/arm), Standing DB Calf Raise (2×12-20), Suitcase Carry (2×30s/side).
7. **Intro Phase Toggle:**
   - 1-tap switch for the first 2 weeks to limit exercises to 2 working sets wherever 3 are listed.
8. **Double Progression Rule Engine:**
   - Automatically tracks your rep streaks across sessions. When an exercise hits the top of its rep range for 2 consecutive sessions, an alert notifies you to increase weight by the smallest increment (+2.5 to 5 lb) and reset to the lower rep bound.
9. **Guided 5-Minute Cooldown & Stretches:**
   - 2:00 Easy slow-down walk/pedal.
   - 3:00 Guided stretch routine (Calf stretch 30s L/R, Hip flexor 30s L/R, Chest stretch 45s) with automated chime transitions between sides!
10. **150-Min Weekly Moderate Cardio & Hike Tracker:**
    - Aggregates your 7-min gym cardio sessions with outside brisk walks (Tue/Thu) and weekend hikes.
    - Tracks duration, elevation gain (ft), and backpack/ruck weight (lb).
11. **Data Safety:**
    - Full export & import to JSON for painless backups.

---

## 🚀 Free Hosting & Deployment

See the complete guide in [HOSTING-GUIDE.md](file:///C:/Users/funny/.gemini/antigravity/scratch/strength-hiking-pwa/HOSTING-GUIDE.md) for 2-minute deployment on **GitHub Pages** or **Cloudflare Pages**.
