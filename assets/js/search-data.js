---
layout: null
---
{%- comment -%}
  Search index for the ⌘K / Ctrl-K palette (search.js), built at build time.
  Papers match on title, authors, venue, year, kind and paper type.
{%- endcomment -%}
{%- assign publications = site.publications | sort: "date" | reverse | sort: "year" | reverse -%}
window.searchData = [
  { id: "page-about", title: "About", section: "Pages", url: {{ '/' | relative_url | jsonify }} },
  { id: "page-publications", title: "Publications", section: "Pages", url: {{ '/publications/' | relative_url | jsonify }} },
  { id: "page-cv", title: "CV", section: "Pages", keywords: "curriculum vitae resume career grants awards profile bio biography", url: {{ '/cv/' | relative_url | jsonify }} },
  { id: "page-news", title: "News", section: "Pages", keywords: "news updates announcements", url: {{ '/news/' | relative_url | jsonify }} },
  { id: "page-contact", title: "Contact", section: "Pages", keywords: "email address visit office room 403N1 Thormøhlens gate HIB map master thesis students", url: {{ '/contact/' | relative_url | jsonify }} },
  {%- for pub in publications %}
  {%- assign ptype = site.data.paper_types | where: "key", pub.kind | first -%}
  {%- assign kind = site.data.kinds | where_exp: "k", "k.types contains pub.type" | first -%}
  {%- capture keywords -%}{{ pub.authors | join: " " }} {{ pub.journal }} {{ pub.journal-short }} {{ pub.year }} {{ kind.label }} {{ ptype.label }} {{ pub.shortname }}{%- endcapture %}
  { id: {{ pub.key | prepend: "pub-" | jsonify }}, title: {{ pub.title | jsonify }}, section: "Publications", keywords: {{ keywords | normalize_whitespace | jsonify }}, meta: {{ pub.year | append: "" | jsonify }}, url: {{ pub.url | relative_url | jsonify }} },
  {%- endfor %}
  {%- if site.email %}
  { id: "social-email", title: "Email", section: "Elsewhere", keywords: {{ site.email | jsonify }}, url: {{ site.email | prepend: "mailto:" | jsonify }} },
  {%- endif %}
  {%- if site.mastodon %}
  { id: "social-mastodon", title: "Mastodon", section: "Elsewhere", url: {{ "https://" | append: site.mastodoninstance | append: "/@" | append: site.mastodon | jsonify }}, external: true },
  {%- endif %}
  {%- if site.github %}
  { id: "social-github", title: "GitHub", section: "Elsewhere", url: {{ site.github | prepend: "https://github.com/" | jsonify }}, external: true },
  {%- endif %}
  {%- if site.scholar %}
  { id: "social-scholar", title: "Google Scholar", section: "Elsewhere", url: {{ site.scholar | jsonify }}, external: true },
  {%- endif %}
  { id: "theme-toggle", title: "Switch day / evening theme", section: "Theme", keywords: "dark light mode night", action: "theme" }
];
