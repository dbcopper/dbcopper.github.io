---
layout: page
title: "GeoArbiter: Verifiability-Guided Grounding for Remote-Sensing Multimodal LLMs"
description: "Project page for GeoArbiter, a verifiability-guided grounding pipeline for remote-sensing multimodal LLMs."
---

# GeoArbiter: Verifiability-Guided Grounding for Remote-Sensing Multimodal LLMs

<div class="project-meta">
  <strong>Xuechen Li*</strong><br>
  COLING, 2027. Submitted.
</div>

<figure class="project-figure">
  <img src="{{ "/assets/img/GeoArbiter.png" | relative_url }}" alt="GeoArbiter pipeline overview">
  <figcaption>
    <strong>Figure 2.</strong> GeoArbiter pipeline. Image coordinates retrieve nearby OSM features, which may be stale or incomplete. A deterministic verifiability filter withholds physical-structure keys that the image can check (red) and textualizes image-unverifiable functional records (blue) into a knowledge block. The frozen MLLM answers from the image, question, and filtered knowledge.
  </figcaption>
</figure>

## Abstract

Remote-sensing multimodal large language models (MLLMs) often assert facts that imagery cannot establish, such as a facility's identity or function. Coordinate-keyed geographic retrieval can supply this missing knowledge, improving fMoW land-use accuracy by 12.06-17.19 points across three open MLLMs. However, retrieved records can also contradict visible evidence, and we find that models frequently follow the records even when the image is decisive. We argue that source trust should therefore depend on cross-modal verifiability: geographic records are most useful for attributes the image cannot verify and most dangerous when they dispute visually verifiable attributes. We introduce GeoArbiter, a training-free pipeline that operationalizes this principle by injecting only image-unverifiable geographic facts. Unlike arbitration prompts, which leak across attribute types and bias yes/no responses, content-level filtering preserves 84.69-87.15% of the full-retrieval accuracy gain, reduces claim-level hallucination by 19.28-45.19%, and improves robustness to conflicting records across all three models. These results identify verifiability-guided content selection as a simple, effective mechanism for grounding remote-sensing MLLMs in fallible geographic knowledge.
