const MIN = -75;          // left limit (percentage)
const MAX = 0;             // right limit (percentage)
const ELASTICITY = 0.35;   // 0..1 (lower = stiffer, 0.35 ≈ iOS-ish)
const EPS = 0.0001;

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const dominantDelta = (e) =>
  Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

const setTrack = (track, nextPct, dur = 1200) => {
  track.dataset.percentage = String(nextPct);

  track.animate(
    { transform: `translate(${nextPct}%, -50%)` },
    { duration: dur, fill: "forwards", easing: "cubic-bezier(.2,.8,.2,1)" }
  );

  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      { objectPosition: `${100 + nextPct}% center` },
      { duration: dur, fill: "forwards", easing: "cubic-bezier(.2,.8,.2,1)" }
    );
  }
};

const snapToBounds = (track) => {
  const cur = parseFloat(track.dataset.percentage || "0");
  const snapped = clamp(cur, MIN, MAX);
  if (Math.abs(snapped - cur) > EPS) setTrack(track, snapped, 500);
};

const track = document.getElementById("image-track");

// initialize dataset safely
track.dataset.mouseDownAt ??= "0";
track.dataset.prevPercentage ??= "0";
track.dataset.percentage ??= "0";

// track hover detection (so wheel works without clicking)
let isOverTrack = false;
track.addEventListener("pointerenter", () => (isOverTrack = true));
track.addEventListener("pointerleave", () => (isOverTrack = false));

// drag
const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
  snapToBounds(track);
};

const handleOnMove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;
  const pctDelta = (mouseDelta / maxDelta) * -100;

  const current = parseFloat(track.dataset.prevPercentage || "0");
  const wanted = current + pctDelta;

  // rubber-band beyond edges while dragging
  let target = wanted;
  if (wanted > MAX)   target = MAX + (wanted - MAX) * ELASTICITY;
  if (wanted < MIN)   target = MIN + (wanted - MIN) * ELASTICITY;

  setTrack(track, target, 300);
};

// mouse + touch bindings
window.addEventListener("mousedown", (e) => handleOnDown(e));
window.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
window.addEventListener("mouseup", () => handleOnUp());
window.addEventListener("touchend", () => handleOnUp());
window.addEventListener("mousemove", (e) => handleOnMove(e));
window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));

// ====== WHEEL / SCROLL (GLOBAL) ======
// Listen on window so it works immediately on load.
// Only handle when the pointer is over the track.
let wheelSnapTimer;

const onWheel = (e) => {
  if (!isOverTrack) return; 

  const delta = dominantDelta(e);
  if (!delta && delta !== 0) return;

  const maxDelta = window.innerWidth / 2;
  const pctDelta = (delta / maxDelta) * -100;

  const current = parseFloat(track.dataset.percentage || "0");
  const wanted  = current + pctDelta;

  if (wanted <= MAX && wanted >= MIN) {
    e.preventDefault();
    setTrack(track, wanted, 250);
  } else {
    let target = wanted;
    if (wanted > MAX) target = MAX + (wanted - MAX) * ELASTICITY;
    if (wanted < MIN) target = MIN + (wanted - MIN) * ELASTICITY;

    const moved = Math.abs(target - current) > EPS;
    if (moved) setTrack(track, target, 200);
  }

  clearTimeout(wheelSnapTimer);
  wheelSnapTimer = setTimeout(() => snapToBounds(track), 140);
};

// passive:false so preventDefault works when needed
window.addEventListener("wheel", onWheel, { passive: false });

window.addEventListener("keydown", (e) => {
  if (!isOverTrack) return;
  const step = 6; // percent per key press
  if (e.key === "ArrowRight" || e.key === " ") {
    e.preventDefault();
    setTrack(track, clamp(parseFloat(track.dataset.percentage) - step, MIN, MAX), 200);
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    setTrack(track, clamp(parseFloat(track.dataset.percentage) + step, MIN, MAX), 200);
  }
});