---
layout: pages
title: "Students"
permalink: /members/students/
prev: members
---

<div class="home__section-contents">
  {%- for student in site.data.members.students -%}
  <div class="students-container">
    <div class="students-image">
      <img src="/assets/images/members/students/{{ student.name }}.png" alt=""/>
    </div>
    <div class="students-card">
      <div class="students-name">
        {{ student.name }}
      </div>
      <div class="students-brief">
        <p style="margin-bottom: 0.5em; font-weight: bold;">{{ student.course }}</p>
        {% for info in student.info %}
        <p>{{ info }}</p>
        {% endfor %}
      </div>
    </div>
  </div>
  {%- endfor -%}
</div>
