---
layout: page
title: "K2B-MoPE: An Efficient Mixture of Phenotypic Experts Framework for Interpretable Kernel-to-Batch Fusarium Head Blight Severity Assessment in Wheat"
description: "Interpretable wheat Fusarium head blight severity assessment from individual kernels to batches."
---

# K2B-MoPE: An Efficient Mixture of Phenotypic Experts Framework for Interpretable Kernel-to-Batch Fusarium Head Blight Severity Assessment in Wheat

<div class="project-meta">
  <strong>Xuechen Li</strong>, Susan Reynolds, Lang Qiao, Junxiong Zhou, Zezhong Tian, James Anderson, Shahryar Kianian, Ce Yang*<br>
  Biosystems Engineering, 2026. Under Review.
</div>

[Code](https://github.com/dbcopper/K2B-MoPE)

<figure class="project-figure">
  <a href="{{ '/assets/img/K2B-MoPE.png' | relative_url }}"><img src="{{ '/assets/img/K2B-MoPE.png' | relative_url }}" alt="K2B-MoPE overview"></a>
  <figcaption><strong>Figure.</strong> Kernel-to-batch severity assessment with K2B-MoPE. Color, texture, and morphology experts are combined by a gating network and trained with a pairwise ranking objective using healthy and diseased kernels. Seedpose extracts kernels from a batch image; the frozen ranking model produces continuous kernel scores and expert contributions that support sample-level visual scabby kernel assessment.</figcaption>
</figure>

## Abstract

Fusarium head blight (FHB) is a major wheat disease that reduces grain quality and increases the risk of mycotoxin contamination, making post-harvest visually scabby kernel (VSK) assessment important for breeding, grain grading, and quality control. However, manual VSK assessment is subjective and labour-intensive, while many image-based methods rely on hard kernel classification or intermediate severity labels that may not fully capture continuous symptom variation. To address these limitations, we propose K2B-MoPE, an efficient and interpretable kernel-to-batch (K2B) framework for sample-level FHB/VSK severity estimation from RGB images. The framework uses Seedpose to extract kernels from dense multi-kernel images and introduces a mixture-of-phenotypic-experts (MoPE) module with three experts corresponding to colour, texture, and morphology. These experts model complementary visible symptom evidence at the kernel level, and their outputs are adaptively fused to produce continuous-valued kernel-level ranking scores and interpretable expert contributions. Using only extreme kernel labels, healthy and diseased, MoPE learns a ranking-based severity representation without requiring subjective intermediate grades, and kernel-level scores are aggregated into a direct sample-level VSK estimate. Seedpose enabled efficient kernel extraction, processing each image in 3.02 s while maintaining accurate instance counts with an MAE of 0.70 kernels. On an independent test set of 80 plots across two years, MoPE-derived VSK estimates showed strong agreement with manual assessment (r=0.811, ρ=0.818) and achieved the lowest prediction error among tested models, with an MAE of 6.60 percentage points. These results show that K2B-MoPE provides an efficient, reproducible, and interpretable extension of traditional VSK-style assessment for high-throughput FHB phenotyping and grain-quality evaluation.

[Back to publications]({{ '/#publications' | relative_url }})
