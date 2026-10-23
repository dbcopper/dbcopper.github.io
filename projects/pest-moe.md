---
layout: page
title: "Pest-MoE: A Mixture-of-Experts Framework for Stage-Aware Multimodal Few-Shot Pest Recognition"
description: "Pest-MoE studies stage-aware multimodal few-shot pest recognition using a mixture-of-experts framework."
---

# Pest-MoE: A Mixture-of-Experts Framework for Stage-Aware Multimodal Few-Shot Pest Recognition

<div class="project-meta">
  <strong>Xuechen Li</strong>, Lang Qiao, Vera Krischik, Ce Yang*<br>
  Artificial Intelligence in Agriculture, 2026.
</div>

[Paper](https://www.sciencedirect.com/science/article/pii/S2589721726000838?via%3Dihub)

<figure class="project-figure">
  <a href="{{ '/assets/img/Pest-MoE.png' | relative_url }}"><img src="{{ '/assets/img/Pest-MoE.png' | relative_url }}" alt="Pest-MoE: A Mixture-of-Experts Framework for Stage-Aware Multimodal Few-Shot Pest Recognition"></a>
  <figcaption><strong>Figure.</strong> Overview of Pest-MoE. Vision, text, and cross-modal attention experts provide complementary pest-recognition predictions. An adaptive gating module combines their probability outputs to produce the final stage-aware classification.</figcaption>
</figure>

## Abstract

Pest recognition is vital for safeguarding plant health and maintaining ecological balance. Although mobile devices and deep learning offer promising in-field monitoring, two challenges remain: (1) supervised learning is constrained by the costly need for expert-annotated labels, especially under field conditions; and (2) large stage-dependent morphological variations reduce visual consistency and hinder reliable recognition. To address these issues, we introduce Pest-MoE, a CLIP-based Mixture-of-Experts (MoE) framework for few-shot, stage-aware multimodal recognition. Pest-MoE routes visual, textual, and cross-modal (attention) experts through an adaptive gating scheme that integrates feature sparsity with entropy-based certainty, enabling reliability-aware fusion without extra training. A bidirectional cross-attention module aligns stage-aware textual cues with visual evidence, while probability-level fusion aggregates expert predictions into a single decision. On the PestLife-20 benchmark of 20 species and three life stages, Pest-MoE attains 73.10% accuracy and 73.06% F1 in few-shot settings, outperforming CLIP ViT-L/14, prompt-learning baselines (CoOp, CoCoOp), and a vision-only ProtoNet by notable margins; it also surpasses fully supervised ResNet-50 on key metrics. Stage-wise analyses show that Vision Expert dominates in adults, whereas Text and Attention experts compensate for the ambiguity in the larval and pupal stages, and ablations verify the complementary roles of cross-attention and adaptive gating. Overall, the results suggest that Pest-MoE can help narrow the gap between fully supervised and few-shot regimes by providing reliability-aware, interpretable, and stage-consistent multimodal fusion under the evaluated PestLife-20 setting.

[Back to publications]({{ '/#publications' | relative_url }})
