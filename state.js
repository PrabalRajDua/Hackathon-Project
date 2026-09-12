/* =========================================================
   STATE — persisted via localStorage so it survives page
   navigation between index.html / filters.html / results.html
========================================================= */
const STATE_KEY = "corridorMatchState_v1";

function defaultState(){
  return {
    ageBand: null,
    personaId: null,
    filters: { metro:"BOTH", archetype:"ALL", minSafety:0, minWhitespace:0 },
    compareIds: [],
  };
}

function loadState(){
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    // merge with defaults in case of an older/partial shape
    return Object.assign(defaultState(), parsed, {
      filters: Object.assign(defaultState().filters, parsed.filters || {}),
    });
  } catch(e){
    return defaultState();
  }
}

function saveState(state){
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

function clearState(){
  localStorage.removeItem(STATE_KEY);
}
