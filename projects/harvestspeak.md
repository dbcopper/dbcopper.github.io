---
layout: page
title: "HarvestSpeak: Language-Conditioned Selective-Harvest Sequencing with Occlusion Reveals and Protected Objects"
description: "Language-conditioned harvest sequencing with dynamic reveals and protected objects."
---

# HarvestSpeak: Language-Conditioned Selective-Harvest Sequencing with Occlusion Reveals and Protected Objects

<div class="project-meta">
  <strong>Xuechen Li</strong><br>
  ICRA, 2027. Under Review.
</div>

<figure class="project-figure">
  <img src="{{ "/assets/img/HarvestSpeak.png" | relative_url }}" alt="HarvestSpeak pipeline overview">
  <figcaption><strong>Figure.</strong> Frozen language eligibility is combined with supplied geometry and protected corridors. A dynamic graph and discrete planner select reveal-aware harvesting actions. Simulation, real component audits, and limited topology replay are reported separately.</figcaption>
</figure>

## Abstract

Selective harvesting must obey compositional instructions such as “take the red peppers but leave those touching the wire.” We present HarvestSpeak, which combines a frozen vision-language eligibility parse, a supplied geometric protection interface, and precedence-constrained orienteering on a dynamic reachability graph. The planner clears non-target occluders under a cycle-time budget while excluding modeled corridors around known protected fruit. It attains the exact-solver value on 40 small simulated scenes and harvests 2.3× more eligible fruit than a myopic order at full scale (p<10<sup>-17</sup>). Correct protection labels yield zero modeled disturbances, versus ~9/scene for a language-blind detector. At a fixed 5% simulated protection-miss rate, a validation-locked budget allows three uncertain reveals. On fresh 1000-scene tests for pepper/apple/grape, disturbance is 0.040/0.042/0.079 per scene, with per-crop one-sided 95% Poisson-reference upper bounds 0.052/0.054/0.095, while safely achievable fraction improves from 0.462/0.633/0.550 under deterministic deferral to 0.653/0.795/0.730. Full clearance retains zero modeled disturbance. These per-endpoint bounds assume independent scenes and are not simultaneous across crops or endpoints. Real data audit components, not end-to-end execution: appearance-cued CLIP reaches F1=0.97 on 1000 banana/mango images, and ground-truth-box-prompted SAM reaches F1=0.95 against derived WGISD adjacency. A frozen 27-image topology replay fails adoption: ours ties myopic (Δ=-0.002, image-bootstrap CI [-0.020,0.017]) but beats static (+0.138 [0.117,0.158]). Directions and eligibility are synthetic, and no real set includes reveal or manipulation outcomes. Thus, sequencing, exactness, and zero modeled disturbance remain simulator-conditional.
