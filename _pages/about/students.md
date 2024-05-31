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
      <img src="/assets/members/students/{{ student.name }}.png" alt="" onerror="this.onerror=null; this.src='/assets/members/avatar1.png'"/>
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
        {% if student.contact %}
        {% for contact in student.contact %}
          <div class="about__container-row">
          {% if contact.link %}
            <a href="{{ contact.link }}" class="contact" target="_blank" rel="me">
              <i class="fas fa-fw fa-link" aria-hidden="true"></i>
            </a>
          {% endif %}
          {% if contact.linkedin %}
            <a href="https://www.linkedin.com/in/{{ contact.linkedin }}" class="contact" target="_blank" rel="me">
              <i class="fab fa-fw fa-linkedin" aria-hidden="true"></i>
            </a>
          {% endif %}
          {% if contact.github %}
            <a href="https://github.com/{{ contact.github }}" class="contact" target="_blank" rel="me">
              <i class="fab fa-fw fa-github" aria-hidden="true"></i>
            </a>
          {% endif %}
          {% if contact.instagram %}
            <a href="https://instagram.com/{{ contact.instagram }}" class="contact" target="_blank" rel="me">
              <i class="fab fa-fw fa-instagram" aria-hidden="true"></i>
            </a>
          {% endif %}
          {% if contact.twitter %}
            <a href="{{ contact.twitter }}" class="contact" target="_blank" rel="me">
              <i class="fab fa-fw fa-twitter-square" aria-hidden="true"></i>
            </a>
          {% endif %}
          {% if contact.facebook %}
            <a href="{{ contact.facebook }}" class="contact" target="_blank" rel="me">
              <i class="fab fa-fw fa-facebook-square" aria-hidden="true"></i>
            </a>
          {% endif %}
          {% if contact.email %}
            <a href="mailto:{{ contact.email }}" class="contact" rel="me">
              <i class="fas fa-fw fa-envelope-square" aria-hidden="true"></i>
            </a>
          {% endif %}
          </div>
        {% endfor %}
        {% endif %}
      </div>
    </div>
  </div>
  {%- endfor -%}
</div>
