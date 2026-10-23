---
layout: page
title: "SympCap: Parameter-Efficient Crop Disease Image Captioning with Symptom-Aware Domain Knowledge"
description: "Symptom-aware crop disease image captioning with parameter-efficient adaptation."
---

# SympCap: Parameter-Efficient Crop Disease Image Captioning with Symptom-Aware Domain Knowledge

<div class="project-meta">
  <strong>Xuechen Li</strong>, Lang Qiao, Junxiong Zhou, Ce Yang*<br>
  Computers and Electronics in Agriculture, 2026. Minor Revision.
</div>

<figure class="project-figure">
  <a href="{{ '/assets/img/SympCap.png' | relative_url }}"><img src="{{ '/assets/img/SympCap.png' | relative_url }}" alt="SympCap overview"></a>
  <figcaption><strong>Figure.</strong> Overview of SympCap. A frozen CLIP visual encoder and T5 text components are connected through a trainable cross-attention adapter. The MiCo multi-label classifier predicts symptom probabilities, which retrieve symptom definitions as knowledge prompts to guide crop disease caption generation.</figcaption>
</figure>

## Abstract

Automated crop disease diagnosis is a cornerstone of modern smart farming, yet current systems predominantly focus on simple classification, failing to provide the interpretable visual explanations required by agronomists and farmers. While image captioning offers a pathway to generate human-understandable diagnostic reports, applying large-scale Vision-Language Models (VLMs) to agriculture faces two critical bottlenecks: the prohibitive computational cost of full fine-tuning in resource-constrained scenarios, and the domain gap that leads generic models to produce superficial or professionally inaccurate descriptions. To address these challenges, this paper proposes SympCap, a novel framework for parameter-efficient and knowledge-guided crop disease image captioning. SympCap mitigates the reliance on massive training resources by adopting a Parameter-Efficient Fine-Tuning (PEFT) strategy, where the pre-trained VLM backbone is frozen and only lightweight Adapter modules are optimized. Furthermore, to enhance professional reliability, we introduce a dual-stream knowledge injection mechanism: a multi-head classifier is employed to extract structured symptom tags, which are then combined with curated symptom definitions and structured agronomic knowledge resources to guide the generative decoder. This design aims to produce captions that are not only linguistically fluent but also symptom-grounded and terminology-consistent under limited training resources. Extensive experiments on the CropSym dataset demonstrate that SympCap achieves strong overall performance compared to state-of-the-art captioning models. In particular, SympCap improves CIDEr by about 63% over the best large pretrained baseline BLIP_Base and by more than 40% over the strongest lightweight baseline ClipCap, while using only 8 million trainable parameters, which is approximately 1.5 percent of the parameters required for full fine-tuning. The results validate that SympCap offers a practical and scalable solution for generating high-quality and interpretable disease descriptions in low-resource agricultural environments.

[Back to publications]({{ '/#publications' | relative_url }})
