---
layout: pages
title: "Foregin Alumni"
permalink: /members/foreign_alumni/
prev: members
---

# Ph.D.

---

<div class="home__section-contents" style="margin-bottom: 3em;">
  {%- for phd in site.data.members.foreign_alumnis.phd -%}
  <div class="students-container">
    <div class="students-image">
      <img src="/assets/images/members/alumni/{{ phd.name }}.png" alt=""/>
    </div>
    <div class="students-card">
      <div class="students-name">
        {{ phd.name }}
      </div>
      <div class="students-brief">
        {% for info in phd.info %}
        <p>{{ info }}</p>
        {% endfor %}
      </div>
    </div>
  </div>
  {%- endfor -%}
</div>


# M.S.

---

<div class="home__section-contents" style="margin-bottom: 3em;">
  {%- for ms in site.data.members.foreign_alumnis.ms -%}
  <div class="students-container">
    <div class="students-image">
      <img src="/assets/images/members/alumni/{{ ms.name }}.png" alt=""/>
    </div>
    <div class="students-card">
      <div class="students-name">
        {{ ms.name }}
      </div>
      <div class="students-brief">
        {% for info in ms.info %}
        <p>{{ info }}</p>
        {% endfor %}
      </div>
    </div>
  </div>
  {%- endfor -%}
</div>

