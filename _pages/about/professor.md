---
layout: pages
title: "Professor"
permalink: /members/professor/
prev: members
---

<div class="post__stage-container">
  <div class="post__stage professor-image">
    <img src="/assets/members/professor/professor.png" alt="" style="border-radius:10px;"/>
    {%- for professor in site.data.members.professor -%}
    {% if professor.contact %}
    {% for contact in professor.contact %}
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
      <p> <b>Email:</b>
        <a href="mailto:{{ contact.email }}" class="contact" rel="me">
          <span>{{ contact.email }}</span>
          <i class="fas fa-fw fa-envelope-square" aria-hidden="true"></i>
        </a>
      {% endif %}
      </p>
      </div>
    {% endfor %}
    {% endif %}
    {%- endfor -%}
  </div>


  <div class="post__stage professor-brief" markdown="1">

  <h1>홍인기</h1>

  <h2>약력 BRIEF BIOGRAPHY</h2>

  경희대학교 전자정보대학 전자공학과 교수 (1999.03 ~ 현재)

  연세대학교 전기공학과 학사(1989),석사(1991),박사(1995)

  SK Telecom 중앙연구원 선임연구원 (1995-1999)

  NTT DoCoMo (Japan) 교환연구원 (1997-1998)

  한국통신학회 부회장, 상임이사, 이사, 감사 (1999.03 ~ 2022)

  이동통신 연구회 위원, 위원장 (2000~현재)

  정보통신부 주파수 연구반, 이동통신 분과 위원장 (2003 ~ 2005)

  Oregon State Univ. 방문교수 (2006.01 ~ 2007.02)

  미래창조과학부 전파정책자문위원, 위원장 (2013~ 2016)

  5G 포럼 주파수 위원회 위원장 (2014~2020)

  국무조정실 주파수 심의 위원 (2014.10 ~2018.09)

  과기정통부 5G 주파수 자문 위원장 (2017~2018)

  IEEE VTS Seoul Chapter 위원장 (2018~2019)

  6G Research Initiative 의장 (2021 ~ 2022)

  대한민국 근정 포장: ICT 발전 유공자 (2021)

  한국통신학회 회장 (2023)

  경희대학교 서울,국제 캠퍼스 연구처장 겸 산학협력단장 (현)

  경희대학교 기술지주회사 사장 (현)

  과기정통부 전파정책 자문위원회 위원장 (현)

  5G 기반 스마트공장 표준화 포럼 의장 (현)

  한국통신학회 명예회장 (현)
  </div>
</div>