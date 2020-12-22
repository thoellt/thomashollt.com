---
layout: publication
title: "Probability Maps for the Visualization of Assimilation Ensemble Flow Data"
key: 2015_envirvis
type: inproceedings
shortname: Assimilation Flow Vis
image: 2015_envirvis.png
image_large: 2015_envirvis_teaser.png
image_preview: 2015_envirvis.png

authors:
- hollt
- hadwiger
- Omar Knio
- hoteit

journal: Proceedings of Workshop on Visualisation in Environmental Sciences
jourunal-short: EnvirVis
page_start: 43
page_end: 47
volume: 
issue: 
year: 2015

doi: 10.2312/envirvis.20151090
pdf: 2015_envirvis.pdf
poster:
video:

supplements:
  - name: Slides
    link: 2015_envirvis_slides.pdf
    icon: powerpoint

abstract: "Ocean forecasts nowadays are created by running ensemble simulations in combination with data assimilation techniques. Most of these techniques resample the ensemble members after each assimilation cycle. This means that in a time series, after resampling, every member can follow up on any of the members before resampling. Tracking behavior over time, such as all possible paths of a particle in an ensemble vector field, becomes very difficult, as the number of combinations rises exponentially with the number of assimilation cycles. In general a single possible path is not of interest but only the probabilities that any point in space might be reached by a particle at some point in time. 
In this work we present an approach using probability-weighted piecewise particle trajectories to allow such a mapping interactively, instead of tracing quadrillions of individual particles. We achieve interactive rates by binning the domain and splitting up the tracing process into the individual assimilation cycles, so that particles that fall into the same bin after a cycle can be treated as a single particle with a larger probability as input for the next time step. As a result we loose the possibility to track individual particles, but can create probability maps for any desired seed at interactive rates."

---