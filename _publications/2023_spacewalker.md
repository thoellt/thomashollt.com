---
layout: publication
title: "SpaceWalker: Interactive Gradient Exploration for Spatial Transcriptomics Data"
key: 2023_spacewalker
type: preprint
shortname: SpaceWalker
image: 2023_spacewalker.jpg
image_large: 2023_spacewalker_teaser.png
image_preview: 2023_spacewalker.jpg

authors:
- Chang Li
- thijssen
- abdelaal
- hollt
- lelieveldt

journal: bioRxiv
jourunal-short: bioRxiv
page_start:
page_end:
volume:
issue:
year: 2023
award:

doi: 10.1101/2023.03.20.532934
publisher-url:
pdf: 2023_spacewalker.pdf

abstract: "Spatial transcriptomics (ST) enables profiling the expression of hundreds of genes in tissue sections, down to the level of single cells in their tissue environment. The gradient structure of ST data is particularly interesting for tissue biology, since spatial gene expression gradients often represent tissue compartment edges, whereas in the single-cell transcriptomic domain, gene expression gradients may represent cell type differences and smooth phenotypic transitions. Various computational approaches have been developed to extract information from either the spatial domain or gene expression domain individually. However, integrative biological interpretation of expression gradients in single cell and ST data spaces remains challenging. Many prior spatial transcriptomics analysis pipelines are script-based, lack interactive exploration facilities, and do not have specific facilities for automatic identification of localized expression gradients. Here, we present SpaceWalker, a visual analytics tool for exploring the local gradient structure of ST data. The user is guided by the local intrinsic dimensionality of the high-dimensional data to define seed locations, from which a flood-fill algorithm approximates k-nearest neighbor subgraph topology on the fly. In several use cases, we demonstrate that the spatial projection of these local subgraphs highlights tissue architectural features, and that interactive retrieval of gene expression gradients in the spatial and transcriptomic domains confirms known biology, and provides additional insights into the tissue architecture. We also show that SpaceWalker generalizes to several different ST protocols, and scales well to large, multi-slice, whole-brain ST data, while maintaining real-time interaction performance."

---
