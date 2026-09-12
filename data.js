/* =========================================================
   DATA — mock corridor dataset shaped like the real export.
   Swap CORRIDORS with your generated summary JSON.
========================================================= */

const AGE_BANDS = [
  { id:"18_24", label:"18–24", personas:["campus_neighborhood_overlap","late_night_social","everyday_shoppers","rail_transfer"] },
  { id:"25_34", label:"25–34", personas:["office_routine","after_work_social","morning_commuters","dining_social","evening_commuters"] },
  { id:"35_44", label:"35–44", personas:["family_household","office_routine","morning_commuters","resident_value","hospital_workers"] },
  { id:"45_54", label:"45–54", personas:["family_household","resident_premium","faculty_staff","hospital_workers","retail_service_workers"] },
  { id:"55_64", label:"55–64", personas:["resident_premium","faculty_staff","luxury_shoppers","tourist_visitors"] },
  { id:"65_plus", label:"65+", personas:["resident_premium","tourist_visitors","luxury_shoppers","resident_value"] },
];

function recommendedPersonasForAge(ageBandId){
  const band = AGE_BANDS.find(b=>b.id===ageBandId);
  if(!band) return [];
  return band.personas.map(pid=>PERSONAS.find(p=>p.id===pid)).filter(Boolean);
}

const PERSONAS = [
  { id:"morning_commuters", family:"Commuters", name:"Morning commuters" },
  { id:"evening_commuters", family:"Commuters", name:"Evening commuters" },
  { id:"rail_transfer", family:"Commuters", name:"Rail transfer riders" },
  { id:"hospital_workers", family:"Workers", name:"Hospital workers" },
  { id:"office_routine", family:"Workers", name:"Office routine" },
  { id:"retail_service_workers", family:"Workers", name:"Retail & service workers" },
  { id:"after_work_social", family:"Evening & social", name:"After-work social" },
  { id:"late_night_social", family:"Evening & social", name:"Late-night social" },
  { id:"dining_social", family:"Evening & social", name:"Dining & social" },
  { id:"campus_neighborhood_overlap", family:"Students & campus", name:"Campus neighborhood overlap" },
  { id:"faculty_staff", family:"Students & campus", name:"Faculty & staff" },
  { id:"family_household", family:"Residential", name:"Family household" },
  { id:"resident_value", family:"Residential", name:"Resident (value)" },
  { id:"resident_premium", family:"Residential", name:"Resident (premium)" },
  { id:"everyday_shoppers", family:"Shopping", name:"Everyday shoppers" },
  { id:"luxury_shoppers", family:"Shopping", name:"Luxury shoppers" },
  { id:"tourist_visitors", family:"Visitors", name:"Tourists & visitors" },
];

const ARCHETYPES = [
  { id:"neighborhood_takeaway", name:"Neighborhood takeaway café" },
  { id:"office_district_express", name:"Office-district street express" },
  { id:"subway_kiosk", name:"Subway station kiosk" },
  { id:"hospital_captive_kiosk", name:"Hospital captive kiosk" },
  { id:"drive_through", name:"Drive-through" },
  { id:"destination_high_street", name:"Destination high-street café" },
];

const CORRIDORS = [
  {
    id:"st_george_ns", name:"St. George–North Shore", metro:"NYC", district:"Staten Island",
    coords:{ lat:40.6437, lng:-74.0865 },
    character:"Ferry-fed hillside downtown carrying every island commuter through a single gateway.",
    scores:{ morning_commuters:7, evening_commuters:7, hospital_workers:5, after_work_social:4, late_night_social:3, family_household:7, resident_value:7, everyday_shoppers:6, luxury_shoppers:1, campus_neighborhood_overlap:4, tourist_visitors:4, faculty_staff:5, office_routine:4, retail_service_workers:6, dining_social:5, resident_premium:4, rail_transfer:6 },
    safety:{ day:62, evening:52, late_night:38 },
    dayparts:{ am:68, midday:55, evening:55, late:28, weekend:62 },
    whitespace:{ cafe:65, qsr:55, fast_casual:62, fitness:65 },
    gentrify:{ direction:"GENTRIFYING", intensity:50 },
    migration:"INFLOWING",
    anchors:["St. George Ferry Terminal"],
    fits:[
      { archetype:"neighborhood_takeaway", score:0.71, tier:"STRONG" },
      { archetype:"subway_kiosk", score:0.44, tier:"MODERATE" },
      { archetype:"drive_through", score:0.21, tier:"WEAK" },
    ],
  },
  {
    id:"lic_court_sq", name:"Long Island City–Court Square", metro:"NYC", district:"Queens",
    coords:{ lat:40.7469, lng:-73.9445 },
    character:"Glass-tower office core stacked on top of a fast-turning residential boom.",
    scores:{ morning_commuters:8, evening_commuters:8, hospital_workers:3, after_work_social:7, late_night_social:4, family_household:5, resident_value:4, everyday_shoppers:6, luxury_shoppers:5, campus_neighborhood_overlap:2, tourist_visitors:3, faculty_staff:2, office_routine:8, retail_service_workers:5, dining_social:7, resident_premium:7, rail_transfer:8 },
    safety:{ day:78, evening:70, late_night:55 },
    dayparts:{ am:82, midday:70, evening:74, late:35, weekend:48 },
    whitespace:{ cafe:58, qsr:62, fast_casual:60, fitness:70 },
    gentrify:{ direction:"GENTRIFYING", intensity:78 },
    migration:"INFLOWING",
    anchors:["Court Square office cluster"],
    fits:[
      { archetype:"office_district_express", score:0.82, tier:"STRONG" },
      { archetype:"destination_high_street", score:0.55, tier:"MODERATE" },
      { archetype:"hospital_captive_kiosk", score:0.08, tier:"WEAK" },
    ],
  },
  {
    id:"morningside_heights", name:"Morningside Heights", metro:"NYC", district:"Manhattan",
    coords:{ lat:40.8075, lng:-73.9626 },
    character:"A campus spine where lecture-hall rhythm sets the pace of every storefront.",
    scores:{ morning_commuters:5, evening_commuters:4, hospital_workers:6, after_work_social:5, late_night_social:5, family_household:4, resident_value:5, everyday_shoppers:5, luxury_shoppers:2, campus_neighborhood_overlap:9, tourist_visitors:3, faculty_staff:8, office_routine:3, retail_service_workers:4, dining_social:6, resident_premium:4, rail_transfer:5 },
    safety:{ day:74, evening:66, late_night:50 },
    dayparts:{ am:58, midday:72, evening:68, late:44, weekend:55 },
    whitespace:{ cafe:70, qsr:50, fast_casual:58, fitness:48 },
    gentrify:{ direction:"STABLE", intensity:25 },
    migration:"STABLE",
    anchors:["Columbia University"],
    fits:[
      { archetype:"neighborhood_takeaway", score:0.68, tier:"STRONG" },
      { archetype:"destination_high_street", score:0.51, tier:"MODERATE" },
      { archetype:"drive_through", score:0.05, tier:"WEAK" },
    ],
  },
  {
    id:"fort_greene", name:"Fort Greene", metro:"NYC", district:"Brooklyn",
    coords:{ lat:40.6896, lng:-73.9748 },
    character:"Brownstone blocks and a park green anchoring a dense evening dining scene.",
    scores:{ morning_commuters:6, evening_commuters:6, hospital_workers:4, after_work_social:8, late_night_social:6, family_household:7, resident_value:5, everyday_shoppers:6, luxury_shoppers:5, campus_neighborhood_overlap:3, tourist_visitors:3, faculty_staff:3, office_routine:3, retail_service_workers:5, dining_social:8, resident_premium:6, rail_transfer:6 },
    safety:{ day:76, evening:68, late_night:52 },
    dayparts:{ am:52, midday:58, evening:80, late:48, weekend:70 },
    whitespace:{ cafe:52, qsr:45, fast_casual:50, fitness:55 },
    gentrify:{ direction:"GENTRIFYING", intensity:62 },
    migration:"INFLOWING",
    anchors:["BAM Cultural District"],
    fits:[
      { archetype:"destination_high_street", score:0.74, tier:"STRONG" },
      { archetype:"neighborhood_takeaway", score:0.49, tier:"MODERATE" },
      { archetype:"office_district_express", score:0.18, tier:"WEAK" },
    ],
  },
  {
    id:"mckinney_downtown", name:"McKinney–Historic Downtown", metro:"DFW", district:"Collin County",
    coords:{ lat:33.1983, lng:-96.6153 },
    character:"A preserved town square acting as the weekend living room for a fast-growing suburb.",
    scores:{ morning_commuters:3, evening_commuters:3, hospital_workers:3, after_work_social:5, late_night_social:2, family_household:9, resident_value:6, everyday_shoppers:7, luxury_shoppers:4, campus_neighborhood_overlap:1, tourist_visitors:7, faculty_staff:2, office_routine:2, retail_service_workers:5, dining_social:7, resident_premium:6, rail_transfer:1 },
    safety:{ day:82, evening:78, late_night:68 },
    dayparts:{ am:40, midday:58, evening:60, late:20, weekend:82 },
    whitespace:{ cafe:60, qsr:48, fast_casual:55, fitness:60 },
    gentrify:{ direction:"FAMILY_INFILL", intensity:75 },
    migration:"INFLOWING",
    anchors:["Historic Downtown Square"],
    fits:[
      { archetype:"destination_high_street", score:0.66, tier:"STRONG" },
      { archetype:"drive_through", score:0.53, tier:"MODERATE" },
      { archetype:"subway_kiosk", score:0.02, tier:"WEAK" },
    ],
  },
  {
    id:"deep_ellum", name:"Deep Ellum", metro:"DFW", district:"Dallas",
    coords:{ lat:32.7847, lng:-96.7802 },
    character:"Live-music warehouses and late bars pulling a citywide crowd after dark.",
    scores:{ morning_commuters:3, evening_commuters:3, hospital_workers:2, after_work_social:8, late_night_social:9, family_household:2, resident_value:4, everyday_shoppers:4, luxury_shoppers:3, campus_neighborhood_overlap:2, tourist_visitors:6, faculty_staff:1, office_routine:2, retail_service_workers:5, dining_social:8, resident_premium:3, rail_transfer:4 },
    safety:{ day:60, evening:55, late_night:42 },
    dayparts:{ am:30, midday:42, evening:75, late:80, weekend:78 },
    whitespace:{ cafe:48, qsr:40, fast_casual:44, fitness:35 },
    gentrify:{ direction:"GENTRIFYING", intensity:55 },
    migration:"OUTFLOWING",
    anchors:["Deep Ellum Entertainment District"],
    fits:[
      { archetype:"destination_high_street", score:0.58, tier:"MODERATE" },
      { archetype:"drive_through", score:0.30, tier:"WEAK" },
      { archetype:"hospital_captive_kiosk", score:0.02, tier:"WEAK" },
    ],
  },
  {
    id:"medical_district_dallas", name:"Southwestern Medical District", metro:"DFW", district:"Dallas",
    coords:{ lat:32.8106, lng:-96.8386 },
    character:"A hospital and research campus running a near-constant three-shift population.",
    scores:{ morning_commuters:6, evening_commuters:5, hospital_workers:9, after_work_social:2, late_night_social:1, family_household:2, resident_value:3, everyday_shoppers:3, luxury_shoppers:1, campus_neighborhood_overlap:4, tourist_visitors:1, faculty_staff:5, office_routine:4, retail_service_workers:4, dining_social:3, resident_premium:2, rail_transfer:5 },
    safety:{ day:72, evening:60, late_night:48 },
    dayparts:{ am:75, midday:70, evening:45, late:55, weekend:35 },
    whitespace:{ cafe:72, qsr:58, fast_casual:60, fitness:40 },
    gentrify:{ direction:"STABLE", intensity:20 },
    migration:"STABLE",
    anchors:["UT Southwestern Medical Center", "Parkland Hospital"],
    fits:[
      { archetype:"hospital_captive_kiosk", score:0.88, tier:"STRONG" },
      { archetype:"office_district_express", score:0.40, tier:"MODERATE" },
      { archetype:"destination_high_street", score:0.06, tier:"WEAK" },
    ],
  },
  {
    id:"bishop_arts", name:"Bishop Arts District", metro:"DFW", district:"Oak Cliff, Dallas",
    coords:{ lat:32.7488, lng:-96.8283 },
    character:"Walkable indie retail blocks that read as Dallas's answer to a Brooklyn side street.",
    scores:{ morning_commuters:2, evening_commuters:2, hospital_workers:2, after_work_social:7, late_night_social:5, family_household:5, resident_value:5, everyday_shoppers:7, luxury_shoppers:4, campus_neighborhood_overlap:1, tourist_visitors:7, faculty_staff:1, office_routine:1, retail_service_workers:5, dining_social:8, resident_premium:5, rail_transfer:2 },
    safety:{ day:70, evening:64, late_night:50 },
    dayparts:{ am:32, midday:55, evening:70, late:40, weekend:80 },
    whitespace:{ cafe:55, qsr:44, fast_casual:50, fitness:48 },
    gentrify:{ direction:"GENTRIFYING", intensity:60 },
    migration:"INFLOWING",
    anchors:["Bishop Arts Theatre"],
    fits:[
      { archetype:"neighborhood_takeaway", score:0.63, tier:"STRONG" },
      { archetype:"destination_high_street", score:0.60, tier:"STRONG" },
      { archetype:"drive_through", score:0.15, tier:"WEAK" },
    ],
  },
];

/* =========================================================
   SCORING HELPERS — pure functions, no DOM/state dependency
========================================================= */
function scoreColorClass(score){
  if(score >= 70) return "score-high";
  if(score >= 50) return "score-mid";
  return "score-low";
}

function avgWhitespace(c){
  const vals = Object.values(c.whitespace);
  return Math.round(vals.reduce((a,b)=>a+b,0)/vals.length);
}

function getRecommendations(pid, f){
  if(!pid) return [];
  let list = CORRIDORS.filter(c=>{
    if(f.metro !== "BOTH" && c.metro !== f.metro) return false;
    if(c.safety.evening < f.minSafety) return false;
    if(avgWhitespace(c) < f.minWhitespace) return false;
    if(f.archetype !== "ALL" && !c.fits.some(ft=>ft.archetype===f.archetype)) return false;
    return true;
  });
  list = list.map(c=>{
    const personaRaw = c.scores[pid] ?? 0; // 0-10
    const score = Math.round(personaRaw*10); // 0-100
    return { corridor:c, score };
  });
  list.sort((a,b)=> b.score - a.score);
  return list;
}

function whyText(scored, pid){
  const c = scored.corridor;
  const personaName = PERSONAS.find(p=>p.id===pid)?.name.toLowerCase() || "this audience";
  const bits = [];
  if(c.safety.evening >= 65) bits.push("strong evening safety");
  if(c.gentrify.direction === "GENTRIFYING" && c.gentrify.intensity >= 50) bits.push("actively gentrifying");
  if(c.migration === "INFLOWING") bits.push("brands moving in");
  const ws = avgWhitespace(c);
  if(ws >= 60) bits.push("real whitespace still open");
  const topFit = [...c.fits].sort((a,b)=>b.score-a.score)[0];
  if(topFit) bits.push(`${topFit.tier.toLowerCase()} fit for ${ARCHETYPES.find(a=>a.id===topFit.archetype)?.name.toLowerCase()}`);
  const base = bits.length ? bits.slice(0,3).join(", ") : "a moderate overall profile for this persona";
  return `Ranks here for ${personaName} on ${base}.`;
}
