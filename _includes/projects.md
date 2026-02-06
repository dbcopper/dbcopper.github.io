<h2 id="projects" style="margin: 2px 0px -15px;">Projects</h2>

<div class="publications">
{% assign projects = site.data.projects %}
<ol class="bibliography">
{% for item in projects %}
<li>
<div class="pub-row">
  <div class="col-sm-9" style="position: relative; padding-right: 15px; padding-left: 20px;">
    <div class="title"><a href="{{ item.url }}">{{ item.title }}</a></div>
    <div class="periodical"><em>{{ item.description }}</em></div>
  </div>
</div>
</li>
<br>
{% endfor %}
</ol>
</div>
