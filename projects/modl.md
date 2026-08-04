---
layout: page
title: "One Domain, Many Tongues: Composing Domain and Language LoRAs for Cross-Lingual Remote-Sensing MLLMs without Paired Data"
description: "Project page for MODL, a mutually orthogonal domain-language composition recipe for cross-lingual remote-sensing MLLMs."
---

# One Domain, Many Tongues: Composing Domain and Language LoRAs for Cross-Lingual Remote-Sensing MLLMs without Paired Data

<div class="project-meta">
  <strong>Xuechen Li*</strong><br>
  COLING, 2027. Submitted.
</div>

<figure class="project-figure">
  <img src="{{ "/assets/img/MODL.png" | relative_url }}" alt="MODL cross-lingual remote-sensing MLLM pipeline overview">
  <figcaption>
    <strong>Figure.</strong> Overview of MODL. Domain and language LoRAs are trained on disjoint streams and composed under a mutual orthogonality constraint to support cross-lingual remote-sensing MLLMs without paired multilingual-multimodal data.
  </figcaption>
</figure>

## Abstract

Remote-sensing (RS) multimodal large language models (MLLMs) are trained and evaluated only in English, while text-only instruction data covers over 100 languages. We propose MODL (Mutually Orthogonal Domain-Language composition), a recipe that adds new languages to an English RS MLLM without a single multilingual RS example: a domain LoRA trained on English RS imagery and a language LoRA trained on text alone are learned jointly, under one loss term that keeps the two updates mutually orthogonal at every layer throughout training. This constraint is the recipe's active ingredient. Without it, the same training answers RS questions correctly but in English, erases much of the base model's multilingual text ability, and diverges on one seed in three; sixteen alternatives, from training-free merging to prior orthogonality variants, fail the same way. MODL repairs every failure on every seed: answers are correct and in the target language 56-71% of the time, where the best alternative reaches 27% and most stay below 8%, text ability stays at the level of the untrained base, and on Spanish it surpasses Qwen2.5-VL-7B, with zero multilingual-multimodal data. A single five-language adapter retains English, Spanish, and Vietnamese at full strength across three seeds; non-Latin scripts remain an open boundary.
