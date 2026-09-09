<h2 id="publications" style="margin: 2px 0px -15px;">First Author Publications</h2>

<div class="publications">
{% assign pub_sections = site.data.publications %}

{% if pub_sections.first_author %}
{% assign publication_statuses = 'published,in_progress' | split: ',' %}
<div class="publication-tabs" role="tablist" aria-label="Publication status" hidden>
{% for status in publication_statuses %}
{% assign entries = pub_sections.first_author | where: 'status', status %}
<button type="button" class="publication-tab" id="tab-{{ status }}" role="tab" aria-controls="panel-{{ status }}" aria-selected="{% if forloop.first %}true{% else %}false{% endif %}" tabindex="{% if forloop.first %}0{% else %}-1{% endif %}">{% if status == 'published' %}Published{% else %}Under Review{% endif %} <span class="publication-count">{{ entries.size }}</span></button>
{% endfor %}
</div>
{% for status in publication_statuses %}
{% assign entries = pub_sections.first_author | where: 'status', status %}
<div class="publication-panel" id="panel-{{ status }}" role="tabpanel" aria-labelledby="tab-{{ status }}" tabindex="0">
<h3 class="publication-panel-heading">{% if status == 'published' %}Published{% else %}Under Review{% endif %}</h3>
<ol class="bibliography">
{% for link in entries %}
<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    {% if link.image %}
    <div class="pub-image-wrap">
      <img src="{{ link.image }}" class="teaser img-fluid z-depth-1">
      {% if link.conference_short %}
      <abbr class="badge pub-venue-badge">{{ link.conference_short }}</abbr>
      {% endif %}
      {% if link.impact_factor %}
      <span class="badge impact-factor-badge">{{ link.impact_factor }}</span>
      {% endif %}
    </div>
    {% endif %}
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
      <div class="author">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
      {% if link.code %}
      <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %}
      <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
      {% endif %}
      {% if link.bibtex %}
      <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
      {% endif %}
      {% if link.notes %}
      <strong><i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %}
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>
{% endfor %}
</ol>
</div>
{% endfor %}
{% endif %}
</div>
