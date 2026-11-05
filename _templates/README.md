# CV entry templates

Copy a template into its collection folder and fill it in. Empty fields can stay empty.
Every entry can be hidden from the CV with `cv: false` (it is kept, but not listed).
Text fields and the body are markdown: links, *italics* and **bold** carry over to the LaTeX CV.
The sections and their order are set in the front matter of `cv.tex`.

| template            | folder          | CV section                                             |
|---------------------|-----------------|--------------------------------------------------------|
| course.md           | `_courses/`     | Teaching › Courses (one file per run; runs are merged) |
| activity_*.md       | `_activities/`  | Teaching, Professional Activities, Outreach (media, software) |
| talk.md             | `_talks/`       | Professional Activities › Talks                        |
| supervision.md      | `_supervision/` | Teaching › PhD / MSc Supervision                       |
| news.md             | `_news/`        | not in the CV: front page (latest three) and /news/    |

Do not use a field called `url` (Jekyll reserves it); links are called `link`.
