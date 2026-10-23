---
layout: page
title: "Winter damage diagnostic modeling based on synthetic vegetation indices from UAV-based multispectral imaging"
description: "This study investigates winter-damage diagnostic modeling using synthetic vegetation indices derived from UAV-based multispectral imaging."
---

# Winter damage diagnostic modeling based on synthetic vegetation indices from UAV-based multispectral imaging

<div class="project-meta">
  <strong>Xuechen Li</strong>, Alireza Sanaeifar, Nicholas Padilla, Cole Stover, Alec Kowalewski, Eric Watkins, Bryan Runck, Lang Qiao, Ce Yang*<br>
  Computers and Electronics in Agriculture, 2025.
</div>

[Paper](https://doi.org/10.1016/j.compag.2025.111334)

<figure class="project-figure">
  <a href="{{ '/assets/img/winterturf.png' | relative_url }}"><img src="{{ '/assets/img/winterturf.png' | relative_url }}" alt="Winter damage diagnostic modeling based on synthetic vegetation indices from UAV-based multispectral imaging"></a>
  <figcaption><strong>Figure.</strong> Winter-damage segmentation pipeline. A conditional GAN augments the training set with synthetic vegetation-index images. A Mix Vision Transformer extracts multiscale features, and an attention-based decoder fuses the features to produce a turfgrass damage segmentation map.</figcaption>
</figure>

## Abstract

Accurate detection of winter damage in turfgrass is essential for proactive management but remains difficult because early-stage injury is faint, irregular, and easily confused with background noise. These characteristics create two major challenges: limited availability of reliable training data and the need for a segmentation model that is highly sensitive to subtle features. To address the data limitation, this study employs a Conditional Deep Convolutional Generative Adversarial Network (cDCGAN) to generate synthetic, high-fidelity vegetation index (VI) maps. Compared with raw spectral bands, VIs are more robust to noise and enhance both dataset diversity and model generalization. To meet the segmentation challenge, we introduce a Transformer-based model with a novel Adaptive Attention Decoder (AAD), which dynamically refines feature representations to improve detection of low-contrast, spatially irregular damage. Field experiments conducted on golf courses in central Oregon, USA, from 2022 to 2023 demonstrate that the proposed pipeline outperforms other advanced deep learning models, achieving an mIoU of 82.47%, an accuracy of 97.85%, a recall of 85.62%, and an F1-score of 88.30%. Overall, this research presents a problem-driven framework that integrates targeted data augmentation with an improved segmentation architecture, offering a robust and accurate solution for early detection of winter damage in precision turfgrass management.

[Back to publications]({{ '/#publications' | relative_url }})
