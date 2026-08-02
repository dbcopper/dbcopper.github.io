---
layout: page
title: "UAV3DCrop: Benchmarking 3D Reconstruction in Repeated Multi-Angle UAV Crop Surveys"
description: "Project page for UAV3DCrop, a benchmark for 3D reconstruction in repeated multi-angle UAV crop surveys."
---

# UAV3DCrop: Benchmarking 3D Reconstruction in Repeated Multi-Angle UAV Crop Surveys

<div class="project-meta">
  Junxiong Zhou*, <strong>Xuechen Li*</strong>, Chonghao Qiu*, Lang Qiao, Xiaowei Jia, Qi Yang, Chishan Zhang, Leikun Yin, Nanshan You, Vipin Kumar, David Mulla, Ce Yang, Zhenong Jin, Licheng Liu<br>
  KDD 2027 Datasets and Benchmarks, 2027. Submitted.
</div>

<figure class="project-figure">
  <img src="{{ "/assets/img/UAV3DCrop.png" | relative_url }}" alt="UAV3DCrop benchmark overview">
  <figcaption>
    <strong>Figure.</strong> Overview of UAV3DCrop and its two-track benchmark. Track A evaluates scene-optimized reconstruction from dense posed views against held-out RGB and photogrammetry-referenced depth; Track B evaluates zero-shot feed-forward geometry from unposed views.
  </figcaption>
</figure>

## Abstract

Accurate 3D crop monitoring underpins data-driven precision agriculture by enabling field-scale analysis of plant structure, growth dynamics, and management response. Modern 3D reconstruction methods perform strongly on generic benchmarks, but rendered appearance may not translate into metrically and agronomically useful geometry in crop fields. We introduce UAV3DCrop, a public benchmark of repeated multi-angle unmanned aerial vehicle (UAV) crop surveys. It contains 88,830 RGB images at 5280 x 3956 pixels, with a ground sampling distance of 3.6-5.8 mm, from 91 scenes spanning corn, soybean, wheat, and oat. Track A evaluates seven scene-optimized methods-Neural Radiance Field (NeRF) and 3D Gaussian Splatting (3DGS) variants-on held-out views, photogrammetry-referenced depth, and canopy-height recovery. Track B tests four pretrained feed-forward models on zero-shot camera-pose and geometry estimation. The scene-optimized methods rank differently across the three targets: Splatfacto-big leads appearance, whereas Scaffold-GS leads depth and is statistically tied with Splatfacto for canopy height. Among feed-forward models, MapAnything leads on seven of the eight metrics, while the remaining models vary more across crops and fail severely on absolute scale in a way that alignment conceals. Repeated acquisitions reveal further sensitivities that differ by output type and by model, associated with position within the acquisition sequence and with tie-point multiplicity. Current 3D reconstruction methods are therefore not yet interchangeable for agronomic use: no single method wins on appearance, geometry, and canopy height at once, and only one of four feed-forward models recovers usable metric scale. The dataset is publicly available at <a href="https://link-dev.github.io/UAV3DCrop/">https://link-dev.github.io/UAV3DCrop/</a>.
