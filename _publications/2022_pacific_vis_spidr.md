---
layout: publication
title: "Incorporating Texture Information into Dimensionality Reduction for High-Dimensional Images"
key: 2022_pacific_vis_spidr
date:   2022-03-24 12:00:00
permalink: /publications/2022_spidr/
type: inproceedings
shortname: 
image: 2022_pacific_vis_spidr.png
image_large: 2022_pacific_vis_spidr_teaser.png
image_preview: 2022_pacific_vis_spidr.png

authors:
- vieth
- vilanova
- lelieveldt
- eisemann
- hollt

journal: Proceedings of the 15th IEEE Pacific Visualization Symposium
journal-short: Pacific Vis
page_start: 11
page_end: 20
chapter:
volume: 
issue: 
year: 2022
editor:
publisher:
school:
award:

doi: 10.1109/PacificVis53943.2022.00010
publisher-url:

projects:

external-project:

videos:

pdf: 2022_pacific_vis_spidr.pdf
supplement:
supplements:
  - name: "Demo Video"
    abslink: https://graphics.tudelft.nl/Publications-new/2022/VVLEH22/supplement_video_interactive_demo.mp4
    icon: video
  - name: "Slides"
    abslink: https://graphics.tudelft.nl/Publications-new/2022/VVLEH22/Vieth_PacificVis_2022_slides.pdf
    icon: powerpoint
  - name: "Presentation"
    abslink: https://graphics.tudelft.nl/Publications-new/2022/VVLEH22/pvis2022_full_4701_presentation_Vieth.mp4
    icon: "fas fa-chalkboard-teacher"
  - name: "Supplemental"
    link: 2022_pacific_vis_spidr_supplement.pdf
    icon: pdf
code: https://github.com/biovault/Spidr

abstract: "High-dimensional imaging is becoming increasingly relevant in many fields from astronomy and cultural heritage to systems biology.
Visual exploration of such high-dimensional data is commonly facilitated by dimensionality reduction.
However, common dimensionality reduction methods do not include spatial information present in images, such as local texture features, into the construction of low-dimensional embeddings.
Consequently, exploration of such data is typically split into a step focusing on the attribute space followed by a step focusing on spatial information, or vice versa.
In this paper, we present a method for incorporating spatial neighborhood information into distance-based dimensionality reduction methods, such as t-Distributed Stochastic Neighbor Embedding (t-SNE).
We achieve this by modifying the distance measure between high-dimensional attribute vectors associated with each pixel such that it takes the pixel's spatial neighborhood into account.
Based on a classification of different methods for comparing image patches, we explore a number of different approaches.
We compare these approaches from a theoretical and experimental point of view. 
Finally, we illustrate the value of the proposed methods by qualitative and quantitative evaluation on synthetic data and two real-world use cases."

---
