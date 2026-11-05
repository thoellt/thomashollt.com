---
layout: page
title: Contact
permalink: /contact/
lede: The easiest way to reach me is by email. I am always happy to hear from students, collaborators and anyone curious about visualization.
---

<div class="contact-grid">
    <div class="contact-item">
        <span class="label"><span class="dab c-terracotta"></span>Write</span>
        <p><a href="mailto:{{ site.email }}">{{ site.email }}{% include arrow.html to="out" %}</a></p>
    </div>
    <div class="contact-item">
        <span class="label"><span class="dab c-ochre"></span>Visit</span>
        <p><a href="https://www.uib.no/en/ii" target="_blank">Department of Informatics{% include arrow.html to="out" %}</a><br>University of Bergen<br>HIB – Thormøhlens gate 55<br>5006 Bergen, Norway</p>
        <p class="contact-room"><a href="https://link.mazemap.com/BokraRLT" target="_blank">Room 403N1{% include arrow.html to="out" %}</a> <span class="muted">(on MazeMap)</span></p>
    </div>
    <div class="contact-item">
        <span class="label"><span class="dab c-dusk"></span>Elsewhere</span>
        <p>
            {%- if site.mastodon %}<a href="https://{{ site.mastodoninstance }}/@{{ site.mastodon }}" target="_blank" rel="me">Mastodon{% include arrow.html to="out" %}</a><br>{% endif %}
            {%- if site.github %}<a href="https://github.com/{{ site.github }}" target="_blank">GitHub{% include arrow.html to="out" %}</a><br>{% endif %}
            {%- if site.scholar %}<a href="{{ site.scholar }}" target="_blank">Google Scholar{% include arrow.html to="out" %}</a><br>{% endif %}
            {%- if site.dblp %}<a href="{{ site.dblp }}" target="_blank">dblp{% include arrow.html to="out" %}</a>{% endif -%}
        </p>
    </div>
</div>
