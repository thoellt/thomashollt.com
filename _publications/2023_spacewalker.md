---
layout: publication
title: "SpaceWalker Enables Interactive Gradient Exploration for Spatial Transcriptomics Data"
key: 2023_spacewalker
type: article
shortname: SpaceWalker
image: 2023_spacewalker.jpg
image_large: 2023_spacewalker_teaser.png
image_preview: 2023_spacewalker.jpg

authors:
- Chang Li
- thijssen
- kroes
- Mitchell de Boer
- abdelaal
- hollt
- lelieveldt

journal: Cell Reports Methods
jourunal-short: Cell Reports Methods
page_start:
page_end:
volume:
issue:
year: 2023
award:

doi: 10.1016/j.crmeth.2023.100645
publisher-url:
pdf: 2023_spacewalker.pdf

supplements:
  - name: Video HybISS
    abslink: https://youtu.be/NtvK4Ubo718
    icon: video
  - name: Video EEL FISH
    abslink: https://youtu.be/2sHyZ46nTho
    icon: video
  - name: Video smFISH
    abslink: https://youtu.be/UrJtq9wZqu0
    icon: video
  - name: Video 3D
    abslink: https://youtu.be/eafIllwO7FY
    icon: video
  - name: Software
    abslink: https://doi.org/10.5281/zenodo.10017490
    icon: fas fa-globe

abstract: "<b>Motivation</b> Spatial transcriptomics (ST) enables profiling of the expression of hundreds of genes in tissue sections down to the level of single cells in their tissue environment. The gradient structure of ST data is particularly interesting for tissue biology because spatial gene expression gradients often represent tissue compartment edges, whereas in the single-cell transcriptomic domain, gene expression gradients may represent cell-type differences and smooth phenotypic transitions. Various computational approaches have been developed to extract information from either the spatial domain or the gene expression domain individually. However, integrative biological interpretation of expression gradients in single-cell and ST data spaces remains challenging. Many prior ST analysis pipelines are script based, lack interactive exploration facilities, and do not have specific facilities for automatic identification of localized expression gradients.</br><b>Summary</b> In spatial transcriptomics (ST) data, biologically relevant features such as tissue compartments or cell-state transitions are reflected by gene expression gradients. Here, we present SpaceWalker, a visual analytics tool for exploring the local gradient structure of 2D and 3D ST data. The user can be guided by the local intrinsic dimensionality of the high-dimensional data to define seed locations, from which a flood-fill algorithm identifies transcriptomically similar cells on the fly, based on the high-dimensional data topology. In several use cases, we demonstrate that the spatial projection of these flooded cells highlights tissue architectural features and that interactive retrieval of gene expression gradients in the spatial and transcriptomic domains confirms known biology. We also show that SpaceWalker generalizes to several different ST protocols and scales well to large, multi-slice, 3D whole-brain ST data while maintaining real-time interaction performance."

---
