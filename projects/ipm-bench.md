---
layout: page
title: "IPM-Bench: A Multi-task Benchmark for Evaluating Large Language Models in Integrated Pest Management"
description: "Project page for IPM-Bench, an extension-grounded benchmark for text-based integrated pest management workflows."
---

# IPM-Bench: A Multi-task Benchmark for Evaluating Large Language Models in Integrated Pest Management

<div class="project-meta">
  <strong>Xuechen Li</strong>, Huixue Zhou, Junxiong Zhou, Lang Qiao, Ce Yang*<br>
  EMNLP, 2026. Under Review.
</div>

<figure class="project-figure">
  <img src="{{ "/assets/img/IPM-Bench.png" | relative_url }}" alt="IPM-Bench benchmark construction pipeline">
  <figcaption>
    <strong>Figure 3.</strong> Benchmark Construction Pipeline. We crawl extension repositories and plant health knowledge resources, convert and clean documents, deduplicate sentences, synthesize candidate questions, rank candidates using an LLM evaluator, and curate the final benchmark with IPM experts.
  </figcaption>
</figure>

## Abstract

Integrated Pest Management (IPM) combines pest identification, monitoring, threshold-based assessment, and complementary control tactics to reduce crop losses while limiting environmental and health risks. Existing agricultural benchmarks rarely evaluate text-based IPM workflows that require evidence-grounded reasoning, structured extraction, and actionable recommendation. We present IPM-Bench, an extension-grounded multi-task benchmark with 2,600 expert-reviewed items across 13 task types, constructed from 3,000+ IPM documents from university extension programs and plant-health resources. The benchmark covers four IPM stages: pest identification, knowledge retrieval, infestation assessment and reasoning, and control strategy recommendation. We evaluate 24 proprietary, open-source, and agriculture-oriented LLMs under standardized prompts and task-specific scoring. Results show that frontier proprietary models perform best overall, but strong multiple-choice recognition does not consistently transfer to exact-span extraction, structured-output compliance, or evidence-grounded generation. IPM-Bench provides a controlled testbed for text-based agricultural decision support under extension grounding, possible source exposure, and strict output requirements.
