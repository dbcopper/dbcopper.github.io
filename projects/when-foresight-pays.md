---
layout: page
title: "When Foresight Pays: Robust Belief-Space Planning and Fixed-Scan Decisions in Crop Monitoring"
description: "Belief-space crop monitoring and separately calibrated fixed-scan harvest decisions."
---

# When Foresight Pays: Robust Belief-Space Planning and Fixed-Scan Decisions in Crop Monitoring

<div class="project-meta">
  <strong>Xuechen Li</strong><br>
  ICRA. Under Review.
</div>

<figure class="project-figure">
  <img src="{{ "/assets/img/WhenForesightPays.png" | relative_url }}" alt="When Foresight Pays pipeline overview">
  <figcaption><strong>Figure.</strong> The adaptive monitoring loop propagates a belief and replans after observations. A separate fixed-scan protocol calibrates and selects harvest decisions on disjoint simulated scenes. A shifted-date audit tests the limits of transfer to real data.</figcaption>
</figure>

## Abstract

When does a learned crop-dynamics model improve a robot's monitoring decisions? We separate two findings that use different protocols. In adaptive simulated sensing, the planner only ties model-free baselines on raw season value, even with oracle latent-driver knowledge; under controlled onset bias, however, planning over its belief degrades more gradually than planning on the model mean. In a distinct fixed sparse scan, we froze the condition and protocol before a new 200-scene calibration, 200-scene operating-point selection, and one-shot 400-scene test. Scene-max conformal bounds give simultaneous fixed-protocol coverage across all plots for exchangeable simulated scenes. Within the prespecified alpha grid, the belief decision passes its empirical scene-FDP gate (FDP 0.014, one-sided U95 0.020) and commits 12.46 ripe plots, versus 1.26 for a conformalized GP (paired difference 11.20, 95% CI [10.31,12.11]). A raw interval yields more but narrowly fails confirmation (U95 0.051). In leave-one-transition-out SIRI replay, forecast skill is slight (CRPS 0.050 vs. persistence 0.054), while source-only calibration under-covers. Thus calibration supports only the fixed-scan simulated decision layer, not the adaptive planner or real-domain risk control.
