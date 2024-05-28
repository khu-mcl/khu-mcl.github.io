---
layout: pages
title: "Alumni"
permalink: /members/alumni/
prev: members
---


<div class="home__section-contents">
  {%- for alumni in site.data.members.alumnis -%}
  <div class="students-container">
    <div class="students-image">
      <img src="/assets/images/members/alumni/{{ alumni.name }}.png" alt=""/>
    </div>
    <div class="students-card">
      <div class="students-name">
        {{ alumni.name }}
      </div>
      <div class="students-brief">
        <p>{{ alumni.generation }} 기</p>
        <p>{{ alumni.corp }}</p>
      </div>
    </div>
  </div>
  {%- endfor -%}
</div>