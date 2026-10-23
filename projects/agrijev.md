---
layout: page
title: "AgriJev: Efficient Agricultural Candidate Scoring with Multi-Scale Adapted Models"
description: "Agricultural candidate scoring with adapted models at four scales and a shared text-question-candidate interface."
---

# AgriJev: Efficient Agricultural Candidate Scoring with Multi-Scale Adapted Models

<div class="project-meta">
  <strong>Xuechen Li</strong>, Xueliang Li<br>
  NAACL, 2027.
</div>

[Paper](https://arxiv.org/abs/2610.19478) &middot; [PDF](https://arxiv.org/pdf/2610.19478)

<figure class="project-figure">
  <a href="{{ '/assets/img/AgriJev.png' | relative_url }}"><img src="{{ '/assets/img/AgriJev.png' | relative_url }}" alt="AgriJev candidate-scoring and adaptation pipeline"></a>
  <figcaption><strong>AgriJev pipeline.</strong> Agricultural text, a question, and candidate definitions form the input. Query/value LoRA adapters augment a frozen Qwen3.5 backbone; the language-model head supplies candidate-code scores in one forward pass. Scores are normalized within the candidate set and mapped to the selected option. The dashed red path shows candidate-set cross-entropy and adapter training; correct answers provide supervision and are excluded from the input.</figcaption>
</figure>

## Abstract

Agricultural systems make decisions over heterogeneous entity types, textual judgments, and knowledge-question options. Generating a textual answer adds decoding and extraction steps to decisions that ultimately require a candidate choice. We introduce AgriJev, a family of adapted Qwen3.5 models at 0.8B, 2B, 4B, and 9B. A shared interface conditions on agricultural text, a judgment question, and candidate definitions, returning scores and relative probabilities in one forward call. We prepare source-aware training records and frozen evaluations from existing agricultural resources, retaining original groups and annotation provenance. Comparisons include original Qwen3.5 models and matched agricultural SFT models, both evaluated through native answer generation. Across 17 external test views, AgriJev-9B reaches 75.44% mean accuracy, exceeding the original and SFT generators by 5.89 and 3.79 percentage points. It outperforms the original generator on 13 views and narrows the mean gap to hosted Jev 1.13.0. On a fixed A100 workload, its median scoring latency is approximately half that of same-scale answer generation. Task-dependent gains and failures characterize a practical choice among agricultural model weights and inference contracts.

## Accuracy, latency, and model size

<figure class="project-figure">
  <a href="{{ '/assets/img/AgriJev-teaser.png' | relative_url }}"><img src="{{ '/assets/img/AgriJev-teaser.png' | relative_url }}" alt="AgriJev, Qwen3.5, and Qwen3.5-SFT accuracy-latency comparison across four model scales"></a>
  <figcaption><strong>Results from the paper.</strong> Mean accuracy uses 17 external views, excluding paired CROP reordering. Median latency uses a fixed A100 workload with 32 BIO texts and 27 candidates at batch size 1. Qwen3.5 and Qwen3.5-SFT generate answers; AgriJev scores candidates. Bubble area represents measured loaded parameters. Accuracy and latency use distinct fixed workloads.</figcaption>
</figure>

[Back to publications]({{ '/#publications' | relative_url }})
