---
layout: page
title: "Locating the Unseen: Inferring Fully-Occluded Fruit from Learned 3D Canopy Structure"
description: "Inferring hidden-fruit locations from observed 3D canopy structure."
---

# Locating the Unseen: Inferring Fully-Occluded Fruit from Learned 3D Canopy Structure

<div class="project-meta">
  <strong>Xuechen Li</strong><br>
  ICRA, 2027. Under Review.
</div>

<figure class="project-figure">
  <img src="{{ "/assets/img/LocatingTheUnseen.png" | relative_url }}" alt="Locating the Unseen pipeline overview">
  <figcaption><strong>Figure.</strong> A simulator-trained estimator maps visible-fruit density, canopy occupancy, and observability to hidden-fruit density. Controlled external transfer, simulated view selection, and automatic-input limitations are evaluated separately.</figcaption>
</figure>

## Abstract

Fruit occluded from every reachable camera cannot be recovered by reconstructing and segmenting visible fruit. We ask whether its spatial distribution can instead be inferred from the surrounding 3D canopy structure. A compact network learns this structure-to-hidden mapping in a geometric simulator and transfers zero-shot to external reconstructions under controlled inputs. It beats an occlusion heuristic on all six photoreal 3DGS crops by a mean localization-correlation margin of +0.36 (crop-bootstrap 95% CI [0.26,0.44]; sign p=0.016) and on ten real Fuji-SfM trees by +0.15 (tree-bootstrap 95% CI [0.12,0.18]; p<0.001). A locked automatic-input bridge, including automatic row partitioning and visible-identity construction, does not retain that incremental advantage (+0.045, 95% CI [-0.007,0.104]), exposing the upstream input pipeline as a boundary. Absolute count likewise does not transfer zero-shot: a harvest anchor reaches ~5% error but is indistinguishable from a per-orchard constant. The hidden-density map guides a single simulated view, revealing 0.72 of occluded fruit versus 0.37 for random, but a controlled target-assisted external replay fails its adoption gate. The supported contribution is controlled-input hidden-fruit localization, not reliable end-to-end captured-data counting or view selection.
