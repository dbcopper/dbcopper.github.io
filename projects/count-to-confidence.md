---
layout: page
title: "Count-to-Confidence: Active View Planning with a Calibrated Fruit-Count Stopping Rule"
description: "Active view planning and bounded-window stopping with calibrated fruit-count intervals."
---

# Count-to-Confidence: Active View Planning with a Calibrated Fruit-Count Stopping Rule

<div class="project-meta">
  <strong>Xuechen Li</strong>, Ce Yang<br>
  ICRA, 2027. Under Review.
</div>

<figure class="project-figure">
  <a href="{{ '/assets/img/CountToConfidence.png' | relative_url }}"><img src="{{ '/assets/img/CountToConfidence.png' | relative_url }}" alt="Count-to-Confidence pipeline overview"></a>
  <figcaption><strong>Figure.</strong> Multiview detections are linked into persistent identities and screened by an identity-quality gate. Accepted evidence updates a Gamma-Poisson count belief, paired with offline supremum calibration. Expected interval-width reduction per travel cost selects the next pose; a simultaneous band supports stopping within views 4-20 when the target width is reached.</figcaption>
</figure>

## Abstract

Fruit counts support yield forecasting and harvest planning, but canopy occlusion makes the required view budget scene-dependent. Existing next-best-view counters decide where to look but reduce only uncalibrated uncertainty and lack a principled stop. We instead plan against calibrated count-interval width and stop at a target width. Because adaptive stopping can invalidate fixed-budget conformal intervals, a supremum score calibrates simultaneous coverage over views 4–20. On frozen calibration/test scenes, the resulting band is 2.5% narrower in pooled mean and median width than exact finite-sample Bonferroni, while width planning beats Roy–Isler entropy and matches the strongest heuristic. A Fuji-SfM real-geometry replay with synthetic sensing reproduces this ordering. A separate locked test on eight held-out Fuji trees recovers offline persistent identities from a colorized SfM map (tree-level MAPE 0.147; pooled F1 0.712). An independently certified quality gate accepts stops with 93.8% accuracy on held-out fragmentation scenes. Together, these results turn active fruit counting from a fixed-budget procedure into confidence-driven acquisition with a counter-agnostic bounded-window stopping guarantee.

[Back to publications]({{ '/#publications' | relative_url }})
