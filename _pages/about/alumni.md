---
layout: pages
title: "Alumni"
permalink: /members/alumni/
prev: members
---

<head>
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> -->
    <style>
        tr, .normal{
            text-align: center;
        }
        th:first-child{
            width: 40% !important;
        }
        th:nth-child(2){
            width: 30% !important;
        }
        th:nth-child(3){
            width: 30% !important;
        }
    </style>
</head>

<div class="home__section-contents">
  <table class="notice__table">
      <thead>
      <tr>
          <th class="title-column">이름</th>
          <th class="author-column">기수</th>
          <th class="date-column">Corp</th>
      </tr>
      </thead>
      <tbody>
      {% for alumni in site.data.members.alumnis %}
      <tr class="normal">
          <td>{{ alumni.name }}</td>
          <td>{{ alumni.generation }}</td>
          <td>{{ alumni.corp }}</td>
      </tr>
      {% endfor %}
      </tbody>
  </table>
</div>