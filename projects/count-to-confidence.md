---
layout: page
title: "Count-to-Confidence: Active View Planning with a Calibrated Fruit-Count Stopping Rule"
description: "Active view planning and stopping with calibrated fruit-count intervals."
---

# Count-to-Confidence: Active View Planning with a Calibrated Fruit-Count Stopping Rule

<div class="project-meta">
  <strong>Xuechen Li</strong><br>
  ICRA, 2027. Under Review.
</div>

<figure class="project-figure">
  <img src="{{ "/assets/img/CountToConfidence.png" | relative_url }}" alt="Count-to-Confidence pipeline overview">
  <figcaption><strong>Figure.</strong> Multiview observations update a count belief. Offline supremum calibration supplies a simultaneous interval over views 4 through 20, while expected interval-width reduction per travel cost guides planning. Simulation and real-data identity audits define the evidence boundary.</figcaption>
</figure>

## Abstract

A robot counting fruit in a canopy must decide where to look next and when it has looked enough. Existing next-best-view counters reduce uncalibrated uncertainty and offer no principled stopping rule. We instead plan against a calibrated count interval and stop when it reaches a target width. Adaptive stopping can invalidate a fixed-budget conformal interval, so we calibrate a supremum score that yields simultaneous coverage over acquired views 4–20. On a frozen 500-calibration/500-test comparison, this finite-sample construction has 2.5% lower pooled mean and median width than an exact Bonferroni per-step conformal band; empirical simultaneous coverage is 0.892 versus 0.982. In a geometric orchard simulator, interval-width planning beats the Roy–Isler entropy planner and matches the strongest heuristic. The distinctive contribution is a counter-agnostic stopping guarantee for inspected or adaptive stops within the declared window. A Fuji-SfM real-geometry replay with synthetic views and visibility reproduces the ordering but is not a real-sensor evaluation. Separately, a locked offline test on eight held-out Fuji trees recovers persistent identities from a colorized SfM map reconstructed from real RGB images. It achieves tree-level MAPE 0.147 (95% bootstrap CI [0.087,0.219]) and pooled precision/recall/F1 0.761/0.668/0.712. An independently certified identity-quality gate retains 93.8% accepted-stop accuracy on 700 held-out fragmentation scenes (one-sided exact 95% error-risk upper bound 0.114). Chronological, distortion-corrected replay still fragments identities on three recorded-real sequences, so the gate abstains. The evidence establishes offline mapped identities in this orchard, not online association or a hardware closed loop.
