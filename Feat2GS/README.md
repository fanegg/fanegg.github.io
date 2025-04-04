# Probing Visual Foundation Models with Gaussian Splatting

## Abstract
Given that visual foundation models (VFMs) are trained on extensive datasets but often limited to 2D images, a natural question arises: how well do they understand the 3D world? With the differences in architecture and training protocols (i.e., objectives, proxy tasks), a unified framework to fairly and comprehensively probe their 3D awareness is urgently needed. Existing works on 3D probing suggest single-view 2.5D estimation (e.g., depth and normal) or two-view sparse 2D correspondence (e.g., matching and tracking). Unfortunately, these tasks ignore texture awareness, and require 3D data as ground-truth, which limits the scale and diversity of their evaluation set. To address these issues, we introduce Feat2GS, which readout 3D Gaussians attributes from VFM features extracted from unposed images. This allows us to probe 3D awareness for geometry and texture without requiring 3D data. Additionally, the disentanglement of 3DGS parameters – geometry (x, α, Σ) and texture (c) – enables separate analysis of texture and geometry awareness. Under Feat2GS, we conduct extensive experiments to probe the 3D awareness of several VFMs, and investigate the ingredients
that lead to a 3D aware VFM. Building on these findings, we develop several variants that achieve state-of-the-art across diverse datasets. This makes Feat2GS useful for probing VFMs, and as a simple-yet-effective baseline for novel-view synthesis. Code and data will be made available.

## Citation
```
@article{chen2024feat2gs,
  author = {Chen, Yue and Chen, Xingyu and Chen, Anpei and Pons-Moll, Gerard and Xiu, Yuliang},
  title = {Feat2GS: Probing Visual Foundation Models with Gaussian Splatting},
  year = {2024},
  journal={arXiv preprint},
}
```