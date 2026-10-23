---
layout: page
title: "HarvestSpeak: Language-Conditioned Selective-Harvest Sequencing with Occlusion Reveals and Protected Objects"
description: "Language-conditioned selective-harvest planning with dynamic clearing, reveal look-ahead, and protection constraints."
---

# HarvestSpeak: Language-Conditioned Selective-Harvest Sequencing with Occlusion Reveals and Protected Objects

<div class="project-meta">
  <strong>Xuechen Li</strong>, Ce Yang<br>
  ICRA, 2027. Under Review.
</div>

<figure class="project-figure">
  <img src="{{ "/assets/img/HarvestSpeak.png" | relative_url }}" alt="HarvestSpeak pipeline overview">
  <figcaption><strong>Figure.</strong> Frozen CLIP assigns binary eligibility to mango images, independently of the vineyard geometry input. Ground-truth grape masks supply adjacency, with synthetic target labels and reveal directions. The planner selects non-target 14 to reveal targets 13 and 16, then updates the graph and replans. These component examples and model-based updates do not establish physical reveal dynamics or safety.</figcaption>
</figure>

## Abstract

Selective harvesting requires robots to translate user instructions into decisions about which fruit to collect and which objects to leave undisturbed. In cluttered canopies, identifying eligible fruit is insufficient because removing one object can change access to others. The resulting planning problem couples language-conditioned selection, clearing actions, and protection constraints under a limited execution budget. We present HarvestSpeak, a classical planner that combines language-conditioned eligibility and priorities with a dynamic reveal graph and supplied protection constraints. Matched simulations show that dynamic clearing accounts for most of the harvest gain over eligible-only picking. Immediate reveal look-ahead adds a moderate increment, yielding 0.83 more eligible fruit per scene than matched clearing without look-ahead at the nominal occlusion level. Comparisons with Beam-32 characterize the trade-off between planning latency and simulated execution cost. The protection module combines supplied labels and corridor geometry with an uncertainty budget for managing modeled disturbance risk. Real-image audits separately assess language-conditioned eligibility and mask-derived adjacency. The study provides a reproducible framework for separating the contributions of clearing, reveal look-ahead, and protection in simulated language-directed harvest planning.
