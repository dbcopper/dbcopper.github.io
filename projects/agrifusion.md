---
layout: page
title: "AgriFusion: Multiscale RGB–NIR Fusion for Semantic Segmentation in Airborne Agricultural Imagery"
description: "AgriFusion investigates multiscale RGB-NIR fusion for semantic segmentation in airborne agricultural imagery."
---

# AgriFusion: Multiscale RGB–NIR Fusion for Semantic Segmentation in Airborne Agricultural Imagery

<div class="project-meta">
  <strong>Xuechen Li</strong>, Lang Qiao, Ce Yang*<br>
  AgriEngineering, 2025.
</div>

[Paper](https://doi.org/10.3390/agriengineering7110388)

<figure class="project-figure">
  <a href="{{ '/assets/img/mdpi.png' | relative_url }}"><img src="{{ '/assets/img/mdpi.png' | relative_url }}" alt="AgriFusion: Multiscale RGB–NIR Fusion for Semantic Segmentation in Airborne Agricultural Imagery"></a>
  <figcaption><strong>Figure.</strong> Architecture of AgriFusion. Separate encoders extract RGB contextual features and NIR structural features. Multilevel Attention Fusion Feature modules combine the two streams using local and global attention, and an MLP-based decoder aggregates the fused representations into a segmentation map.</figcaption>
</figure>

## Abstract

The rapid development of unmanned aerial vehicles (UAVs) and deep learning has accelerated the application of semantic segmentation in precision agriculture (SSPA). A key driver of this progress lies in multimodal fusion, which leverages complementary structural, spectral, and physiological information to enhance the representation of complex agricultural scenes. Despite advancements, the efficacy of multimodal fusion in SSPA is limited by modality heterogeneity and the difficulty of simultaneously retaining fine details and capturing global context. To address these challenges, we propose AgriFusion, a dual-encoder framework based on convolutional and transformer architectures for SSPA tasks. Specifically, convolutional and transformer encoders are first used to extract crop-related local structural details and global contextual features from multimodal inputs. Then, an attention-based fusion module adaptively integrates these complementary features in a modality-aware manner. Finally, a MLP-based decoder aggregates multi-scale representations to generate accurate segmentation results efficiently. Experiments conducted on the Agriculture-Vision dataset demonstrate that AgriFusion achieves a mean Intersection over Union (mIoU) of 49.31%, Pixel Accuracy (PA) of 81.72%, and F1 score of 67.85%, outperforming competitive baselines including SegFormer, DeepLab, and AAFormer. Ablation studies further reveal that unimodal or shallow fusion strategies suffer from limited discriminative capacity, whereas AgriFusion adaptively integrates complementary multimodal features and balances fine-grained local detail with global contextual information, yielding consistent improvements in identifying planting anomalies and crop stresses. These findings validate our central claims that modality-aware spectral fusion and balanced multi-scale representation are critical to advancing agricultural semantic segmentation, and establish AgriFusion as a principled framework for enhancing remote sensing-based monitoring with practical implications for sustainable crop management and precision farming.

[Back to publications]({{ '/#publications' | relative_url }})
