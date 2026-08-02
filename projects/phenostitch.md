---
layout: page
title: "PhenoStitch: Training-Free Panoptic Crop Mapping from Satellite Image Time Series"
description: "Project page for PhenoStitch, a training-free panoptic crop-mapping pipeline from satellite image time series."
---

# PhenoStitch: Training-Free Panoptic Crop Mapping from Satellite Image Time Series

<div class="project-meta">
  <strong>Xuechen Li*</strong>, Rui-Feng Wang, Xueliang Li, Chonghao Qiu, Junxiong Zhou, Lang Qiao<br>
  AAAI, 2027. Submitted.
</div>

<figure class="project-figure">
  <img src="{{ "/assets/img/PhenoStitch.png" | relative_url }}" alt="PhenoStitch pipeline overview">
  <figcaption>
    <strong>Figure 2.</strong> The PhenoStitch pipeline is training-free. From a Sentinel-2 optical and Sentinel-1 SAR image time series (Input): a frozen SAM over-segments each patch into candidate regions (label-free over-segmentation); each region's NDVI and SAR (VV/VH) series are summarized by an analytic double-harmonic signature (harmonic phenological signature); adjacent regions with similar signatures are merged into parcels by a Potts graph energy (graph-energy merge into parcels); and each parcel is typed by nearest-prototype matching to k labels per class, the only labels used (few-shot prototype typing), yielding the panoptic crop map of parcel instances and crop types. No network is trained end-to-end.
  </figcaption>
</figure>

## Abstract

Panoptic crop mapping requires both delineating individual agricultural parcels and assigning a crop type to each parcel from satellite image time series. Existing approaches typically rely on dense parcel-level annotations and task-specific model training, which limits their applicability to new regions and growing seasons. We introduce PhenoStitch, a panoptic crop-mapping pipeline that requires no task-specific gradient-based training. A frozen Segment Anything model first over-segments each patch into class-agnostic regions. For each region, optical NDVI and Sentinel-1 backscatter series are summarized by an analytic double-harmonic phenological signature. Adjacent regions are then merged into parcels by minimizing a Potts graph energy, and each parcel is classified by nearest-prototype matching using only k labeled parcels per class. A final topology-closure step produces the panoptic map. Under a matched budget of k=20 parcels per class, corresponding to less than 1% of the available labels, PhenoStitch achieves 20.0 crop mIoU, 76.2 segmentation quality, and 6.2 panoptic quality on PASTIS-R under 5-fold, 3-seed evaluation. It outperforms the evaluated frozen foundation-model, few-shot, and matched-budget supervised baselines under the same protocol. A consistent ranking is observed on ZueriCrop. Ablations show that radar observations contribute the largest gain, with the graph-energy merge and a compact phenological signature helping further. The results demonstrate the effectiveness of combining label-free parcel delineation with few-shot phenological recognition for panoptic crop mapping under limited supervision.
