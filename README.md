# thomashollt.com

Jekyll site: research portfolio, publication list and CV (HTML and PDF).

## Run locally

    bundle exec jekyll serve

`jekyll serve` (and `jekyll build`) also compile the PDF CV with LuaLaTeX, see below.
Restart the server after changes to `_config.yml` or `_plugins/`.

## Content

| folder            | what                                                              |
|-------------------|-------------------------------------------------------------------|
| `_publications/`  | one file per paper; the only collection with its own pages         |
| `_news/`          | short news entries: front page (latest three) and `/news/`         |
| `_profiles/`, `_awards/`, `_activities/`, `_courses/`, `_talks/`, `_supervision/` | CV entries |
| `_templates/`     | templates for new entries, see `_templates/README.md`              |
| `_data/`          | publication kinds and paper types (labels, colours)                |
| `cv.tex`          | the LaTeX CV; its front matter sets the CV sections and their order |

## Code

- `_layouts/`: page layouts (`about` is the front page, `cv` the HTML CV).
- `_includes/cv/` and `_includes/latex/`: the CV sections, as twins for the HTML CV and the LaTeX CV
  (`section_*.html` ↔ `section_*.tex`, plus shared helpers for dates, links and markdown).
- `_includes/functions/`: author lists, BibTeX, theme images.
- `_includes/arrow.html`: the arrow after links outside running text (→ page, ↘ download, ↗ external).
- `assets/css/main.css`: site styles; `cv.css`: the HTML CV only; `fontawesome.css`: the two icons the CV uses.
- `assets/js/`: theme toggle and menu (`main.js`), search (`search.js`, index from `search-data.js`).

## PDF CV

`_plugins/cv_pdf.rb` runs `_latex/build.sh` after every build and writes `cv/cv.pdf` into the site.
The result is cached by content, so unchanged CVs are not recompiled. Links in the PDF always use
`url` from `_config.yml`, also when serving locally. A failed compile only warns locally, but fails
the production build.

## Deploy

Pushing to `master` runs `.github/workflows/workflow.yml`: the Docker action in
`.github/actions/build-dist-site` (Jekyll + TeX Live) builds the site and pushes it to `gh-pages`.
