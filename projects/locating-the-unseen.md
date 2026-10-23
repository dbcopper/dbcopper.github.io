---
layout: page
title: "Locating the Unseen: Structure-Conditioned Hidden-Fruit Localization in Fixed-View 3D Canopies"
description: "Structure-conditioned coarse hidden-fruit localization in fixed-view 3D canopies."
---

# Locating the Unseen: Structure-Conditioned Hidden-Fruit Localization in Fixed-View 3D Canopies

<div class="project-meta">
  <strong>Xuechen Li</strong>, Ce Yang<br>
  ICRA, 2027.
</div>

<figure class="project-figure">
  <a href="{{ '/assets/img/LocatingTheUnseen.png' | relative_url }}"><img src="{{ '/assets/img/LocatingTheUnseen.png' | relative_url }}" alt="Locating the Unseen pipeline overview"></a>
  <figcaption><strong>Figure.</strong> Simulation training uses visible-fruit density, canopy occupancy, and regional observability to learn a coarse hidden-fruit density map. Controlled external evaluation transfers only the learned network weights to SfM and 3DGS structural inputs; the network remains frozen without external fine-tuning.</figcaption>
</figure>

## Abstract

Accurate spatial fruit inventories support yield forecasting, harvest planning, and orchard automation. Yet dense canopies and restricted viewpoints leave some fruit unseen across a prescribed acquisition set, so conventional detection and reconstruction systems do not represent their spatial distribution. We formulate this missing component as coarse hidden-fruit localization conditioned on visible-fruit density, canopy occupancy, and regional observability. A compact volumetric estimator is trained with exact supervision in geometric simulation and transferred with frozen weights to controlled 3D reconstructions. Evaluated under two distinct labeling operators, the frozen model consistently outperforms an occlusion heuristic across photorealistic 3DGS crops and real Fuji-SfM trees, with mean localization-correlation margins of +0.36 and +0.15, respectively. These results support a transferable relationship between observed canopy structure and the coarse spatial distribution of unseen fruit. The present evidence establishes this relationship under controlled inputs; automatic input construction remains the principal deployment boundary.

[Back to publications]({{ '/#publications' | relative_url }})
