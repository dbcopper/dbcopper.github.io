---
layout: page
title: "SugarcaneGAN: A novel dataset generating approach for sugarcane leaf diseases based on lightweight hybrid CNN-Transformer network"
description: "SugarcaneGAN explores sugarcane leaf disease dataset generation using a lightweight hybrid CNN-Transformer network."
---

# SugarcaneGAN: A novel dataset generating approach for sugarcane leaf diseases based on lightweight hybrid CNN-Transformer network

<div class="project-meta">
  <strong>Xuechen Li</strong>, Xiuhua Li*, Muqing Zhang, Qinghan Dong, Guiying Zhang, Zeping Zhang, Peng Wei<br>
  Computers and Electronics in Agriculture, 2024.
</div>

[Paper](https://doi.org/10.1016/j.compag.2024.108762)

<figure class="project-figure">
  <a href="{{ '/assets/img/sugarcanegan.jpg' | relative_url }}"><img src="{{ '/assets/img/sugarcanegan.jpg' | relative_url }}" alt="SugarcaneGAN: A novel dataset generating approach for sugarcane leaf diseases based on lightweight hybrid CNN-Transformer network"></a>
  <figcaption><strong>Figure.</strong> The U-RSwinT architecture used in SugarcaneGAN. Convolutional downsampling is combined with residual Swin Transformer blocks and mobile convolution, followed by upsampling to generate an output image with synthesized disease features.</figcaption>
</figure>

## Abstract

*Concise summary of the [published abstract](https://www.sciencedirect.com/science/article/abs/pii/S0168169924001534).*

Generative adversarial networks can augment crop disease datasets, but reliable leaf foreground extraction is essential for producing realistic disease features. Existing approaches based on Grad-CAM struggle with elongated sugarcane leaves in complex backgrounds and require labor-intensive segmentation procedures. SugarcaneGAN addresses these limitations using U-RSwinT, a lightweight hybrid CNN-Swin Transformer architecture serving as both the leaf extraction module and the generator. Real healthy and diseased sugarcane leaf datasets are used to evaluate leaf extraction, synthetic lesion quality, and downstream disease classification. Comparisons with alternative segmentation and generation modules show improved leaf extraction and generated disease features under the evaluated conditions. Fréchet Inception Distance and downstream classification experiments provide complementary evaluations of image quality and practical augmentation value. The study supports the use of foreground-aware hybrid generation to expand sugarcane disease datasets and improve field-image recognition.

[Back to publications]({{ '/#publications' | relative_url }})
