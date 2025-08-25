---
layout: publication
title: "Incorporating Texture Information into Dimensionality Reduction for High-Dimensional Images"
key: 2025_dimenfix
date:   2025-06-01 12:00:00
permalink: /publications/2025_dimenfix/
type: article
shortname: 
image: 2025_dimenfix.png
image_large: 2025_dimenfix.png
image_preview: 2025_dimenfix.png

authors:
- Zixuan Han
- Diede van der Hoorn
- hollt
- Qiaodan Luo
- Leonardo Christino
- Evangelos Milios
- Fernando Paulovich

journal: Computers and Graphics
journal-short: CaG
page_start: 104231
page_end: 
chapter:
volume: 130
issue: 
year: 2025
editor:
publisher:
school:
award:

doi: 10.1016/j.cag.2025.104231
publisher-url:

projects:

external-project:

videos:

pdf: 2025_dimenfix.pdf
supplement:
code: https://github.com/fpaulovich/dimensionality-reduction/

abstract: "Dimensionality Reduction (DR) methods have become essential tools for the data analysis toolbox. Typically, DR methods combine features of a multivariate dataset to produce dimensions in a reduced space, preserving some data properties, usually pairwise distances or local neighborhoods. Preserving such properties makes DR methods attractive, but it is also one of their weaknesses. When calculating the embedded dimensions, usually through non-linear strategies, the original feature values are lost and not explicitly represented in the spatialization of the produced layouts, making it challenging to interpret the results and understand the features’ contributions to the attained representations. Some strategies have been proposed to tackle this issue, such as coloring the DR layouts or generating explanations. Still, they are post-processes, so specific features (values) are not guaranteed to be preserved or represented. This paper proposes DimenFix, a novel meta-DR strategy that explicitly preserves the values of a particular user-defined feature or external data (not used to generate a layout) in one of the embedded axes. DimenFix can be used to preserve ordinal (e.g., numerical measures) and nominal (e.g., labels) values and works with virtually any gradient-descent DR method. It requires minimum changes to the underlying DR technique, running in linear time considering the number of data instances. In our results, involving Force Scheme and t-SNE adaptations, DimenFix was capable of representing features without heavily impacting distance or neighborhood preservation, allowing for creating hybrid layouts that join characteristics of scatter plots and DR methods."

---
