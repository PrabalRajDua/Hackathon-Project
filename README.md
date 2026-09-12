# Hackathon-Project
A site for finding business corridors
# Know Your Audience — Retail & Commercial Corridor Screener

A modern, interactive commercial real estate and retail intelligence web dashboard designed to help brands, retail operators, and real estate strategists identify optimal commercial corridors based on target audience demographics, persona scores, safety metrics, gentrification trends, and retail whitespace[cite: 1, 2].

---

## 📌 Project Overview

**Know Your Audience** provides data-driven location analytics for launching or expanding brick-and-mortar concepts[cite: 1, 2]. By mapping consumer personas (such as *Morning Commuters*, *Hospital Workers*, or *Dining & Social*) against granular corridor datasets across major metropolitan areas, the application scores and ranks location suitability, helping users answer key expansion questions:

* Where is my target customer demographic concentrated during peak business hours[cite: 1]?
* Which corridors offer strong safety profiles during day, evening, and late-night periods[cite: 1]?
* Which location archetypes (e.g., *Subway Kiosk*, *Destination High-Street*, *Drive-Through*) best match a specific neighborhood[cite: 1]?
* Where are the market whitespace opportunities for Cafés, QSRs, Fast Casual, and Fitness spaces[cite: 1]?

---

## ✨ Features

- **Guided Step-by-Step Selection Workflow:**
  1. **Age Band & Recommended Personas:** Filter by target age demographic (18–24, 25–34, 35–44, etc.) to view tailored persona recommendations[cite: 1].
  2. **Persona Selection:** Select from 17 detailed consumer personas categorized under *Commuters*, *Workers*, *Evening & Social*, *Students & Campus*, *Residential*, *Shopping*, and *Visitors*[cite: 1].
  3. **Location & Criteria Refinement:** Filter results by Metro area (e.g., NYC, DFW), minimum safety scores, minimum average retail whitespace, and specific venue archetypes[cite: 1, 2].
  
- **Dynamic Scoring & Ranking Engine:**
  - Calculates real-time 0–100 suitability scores per corridor based on selected personas and filter constraints[cite: 1].
  - Evaluates gentrification direction/intensity and population migration trends (*Inflowing* vs. *Outflowing*)[cite: 1].
  - Generates plain-English explanatory insights explaining why each location ranked high[cite: 1].

- **Corridor Comparison & In-Depth Analytics:**
  - **Daypart Breakdown:** Visualizes foot-traffic patterns across AM, Midday, Evening, Late Night, and Weekends[cite: 1, 2].
  - **Safety Indices:** Displays granular day, evening, and late-night safety scores[cite: 1, 2].
  - **Side-by-Side Matrix:** Select multiple corridors to compare metrics in a side-by-side modal overlay[cite: 2].
  - **Interactive Map Integration:** Direct Google Maps navigation embedded for each corridor location[cite: 1, 2].

---

## 🗂️ Project Structure

```text
.
├── filters.html    # Core user interface, layout styles, and interactive modal templates
└── data.js         # Mock corridor dataset, persona definitions, archetypes, and pure scoring functions
