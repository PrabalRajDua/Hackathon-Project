/* =========================================================
   STEPPER — 3-step nav shared across index / filters / results
========================================================= */
const STEP_PAGES = ["index.html", "filters.html", "results.html"];
const STEP_LABELS = ["Choose audience", "Refine", "Recommended corridors"];

function renderStepper(containerId, currentIndex){
  const state = loadState();
  const personaPicked = Boolean(state.personaId);
  const el = document.getElementById(containerId);
  if(!el) return;

  const parts = STEP_LABELS.map((label, i)=>{
    const unlocked = i === 0 || personaPicked;
    const isCurrent = i === currentIndex;
    const isDone = i < currentIndex;
    const cls = ["step-btn"];
    if(isCurrent) cls.push("current");
    if(isDone) cls.push("done");
    return `
      <button type="button" class="${cls.join(" ")}" data-step="${i}" ${unlocked ? "" : "disabled"}>
        <span class="num">${isDone ? "✓" : i+1}</span>
        <span class="label">${label}</span>
      </button>
      ${i < STEP_LABELS.length-1 ? '<span class="step-divider"></span>' : ""}
    `;
  }).join("");

  el.innerHTML = parts;
  el.querySelectorAll("button[data-step]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const idx = Number(btn.dataset.step);
      window.location.href = STEP_PAGES[idx];
    });
  });
}
