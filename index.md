---
layout: home
title: Home
---

# Welcome to NodeTool AI Blog

Insights and updates from the NodeTool AI team. Building the future of AI workflows.

## Latest Posts

{% for post in site.posts limit:5 %}
<article class="post-preview">
  <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
  {% if post.excerpt %}
  <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
  {% endif %}
  <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
</article>
{% endfor %}

{% if site.posts.size == 0 %}
<p>Stay tuned for updates, tutorials, and insights about AI workflow development, visual programming, and the future of AI tools.</p>
{% endif %}
