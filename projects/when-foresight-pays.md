---
layout: page
title: "When Foresight Pays: Robust Belief-Space Planning and Fixed-Scan Decisions in Crop Monitoring"
description: "Belief-space crop monitoring with budgeted daily routes and a separate fixed-scan harvest decision layer."
---

# When Foresight Pays: Robust Belief-Space Planning and Fixed-Scan Decisions in Crop Monitoring

<div class="project-meta">
  <strong>Xuechen Li</strong>, Ce Yang<br>
  ICRA, 2027.
</div>

<figure class="project-figure">
  <a href="{{ '/assets/img/WhenForesightPays.png' | relative_url }}"><img src="{{ '/assets/img/WhenForesightPays.png' | relative_url }}" alt="When Foresight Pays pipeline overview"></a>
  <figcaption><strong>Figure.</strong> Observations update particle beliefs to forecast maturity, visibility, and monitoring utility. Visit priorities and routing select a full daily route under a travel-and-dwell budget, followed by next-day replanning. A separate fixed-scan rule commits when a calibrated lower maturity bound reaches the threshold and otherwise abstains; its calibration multiplier does not enter adaptive planning.</figcaption>
</figure>

## Abstract

Crop-monitoring robots must decide where and when to observe as plants develop and visibility changes, under limited sensing and travel budgets. Forecast-driven monitoring requires connecting uncertain crop-growth predictions with time-sensitive observation and harvest decisions. We present a belief-space monitoring framework that propagates particle forecasts, scores candidate visits, and plans daily routes under a joint sensing-and-travel budget. A separate calibrated decision layer converts fixed-scan forecasts into harvest commitments. In adaptive simulations, retaining the particle belief improves robustness to model-onset bias relative to mean-based planning. In a separately evaluated fixed-scan test, the belief forecaster yields 15.87 additional ripe plots per scene over a Gaussian-process baseline. Both methods pass an adjusted empirical risk gate at a prespecified 5% mean scene false-discovery proportion cap. Real strawberry and cauliflower time series provide component-level evidence of improved forecasting over persistence. The framework connects temporal crop prediction with budgeted sensing and explicit harvest decision rules.

[Back to publications]({{ '/#publications' | relative_url }})
