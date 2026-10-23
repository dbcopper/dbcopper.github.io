---
layout: page
title: "SLViT: Shuffle-convolution-based lightweight Vision transformer for effective diagnosis of sugarcane leaf diseases"
description: "SLViT investigates a lightweight vision transformer based on shuffle convolution for diagnosing sugarcane leaf diseases."
---

# SLViT: Shuffle-convolution-based lightweight Vision transformer for effective diagnosis of sugarcane leaf diseases

<div class="project-meta">
  <strong>Xuechen Li</strong>, Xiuhua Li*, Shimin Zhang, Guiying Zhang, Muqing Zhang, Heyang Shang<br>
  Journal of King Saud University - Computer and Information Sciences, 2022.
</div>

[Paper](https://doi.org/10.1016/j.jksuci.2022.09.013)

<figure class="project-figure">
  <a href="{{ '/assets/img/slvit.png' | relative_url }}"><img src="{{ '/assets/img/slvit.png' | relative_url }}" alt="SLViT: Shuffle-convolution-based lightweight Vision transformer for effective diagnosis of sugarcane leaf diseases"></a>
  <figcaption><strong>Figure.</strong> SLViT workflow and architecture. Plant Village pretraining is followed by transfer learning on SLD10k. Shuffle-convolution stages and lightweight vision-transformer blocks combine local and global features, with evaluation covering recognition performance, computational cost, model size, and speed.</figcaption>
</figure>

## Abstract

*Concise summary of the [published abstract](https://www.sciencedirect.com/science/article/pii/S1319157822003421).*

Sugarcane leaf disease recognition in field images is challenged by complex backgrounds and similar symptoms. SLViT combines a shuffle-convolution CNN with a lightweight transformer module that can be inserted at several network stages. The model is pretrained on Plant Village and transferred to SLD10k, a seven-class dataset containing 10,309 images. Experiments compare accuracy and computational requirements with six general models and three specialized disease-recognition models. On Plant Village, the reported model reaches 98.84% accuracy, 1,832 FPS, a model size of 2 MB, and 50 million operations. On SLD10k, it improves accuracy over MobileNetV3_small by 1.87 percentage points while reducing model size by 66.3%. Ablation results support contributions from the architectural changes. The study examines a compact CNN-transformer approach for sugarcane disease diagnosis under the evaluated field-image conditions.

[Back to publications]({{ '/#publications' | relative_url }})
