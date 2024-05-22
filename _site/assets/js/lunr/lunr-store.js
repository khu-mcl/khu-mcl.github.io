var store = [{
        "title": "Test 1",
        "excerpt":"Test 1  ","categories": ["daily"],
        "tags": [],
        "url": "/daily/Test-1/",
        "teaser": null
      },{
        "title": "Test 2",
        "excerpt":"Test 2  ","categories": ["daily"],
        "tags": [],
        "url": "/daily/Test-2-copy/",
        "teaser": null
      },{
    "title": "Git",
    "excerpt":"   ","url": "http://localhost:4000/study/programming/github/1/"
  },{
    "title": "Github 개요",
    "excerpt":"git init git add README.md git commit -e git branch -M main git remote add origin https://github.com/&lt;user_name&gt;/&lt;repository_name&gt;.git git push -u origin main      ","url": "http://localhost:4000/study/programming/github/2/"
  },{
    "title": "딥 러닝",
    "excerpt":"딥 러닝은 인간 두뇌의 구조를 본 따 개발된 인공지능이다. 인간이 사물을 인식하기의 과정은, 먼저 눈으로 보고 그 정보가 여러 뇌를 거치게 되는데 마찬가지로 딥 러닝 또한 여러 계층으로 구성된다. 인간의 신경과 뇌에는 수백만개의 뉴런이 연결되어 있듯 딥 러닝 신경망도 인공 신경 세포 노드를 통해 계층을 구성하고 있다. 딥 러닝의 목표는...","url": "http://localhost:4000/study/ai/2/"
  },{
    "title": "Page Not Found",
    "excerpt":"   404   Page Not Found  ","url": "http://localhost:4000/404.html"
  },{
    "title": "About",
    "excerpt":"                    CONTACT                 Professor,        College of Electronic & Information, Kyung Hee University, 1732, Deogyoung Road, Giheung, Yongin, Gyeonggi, 17104, South Korea.        E-mail: ekhong@khu.ac.kr        주소: (17104) 경기도 용인시 기흥구 덕영대로 1732번지 경희대학교 전자정보대학 549호        전화: 031-201-2982                                       Members                                        Professor                                     Students                        ","url": "http://localhost:4000/about/"
  },{
    "title": "AI",
    "excerpt":"                                    AI 개요                                        딥러닝                        ","url": "http://localhost:4000/study/ai/"
  },{
    "title": "Blog",
    "excerpt":"","url": "http://localhost:4000/blog/"
  },{
    "title": "Category",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": "Copyright Attribution",
    "excerpt":"Powered by Jekyll &amp; Minimal Mistakes. Source & License Logo Created by ChatGPT Fonts Font: Suit by Sunn Source/License: SIL Open Font License v1.1 Font: Roboto by Christian Robertson Source/License: Google Fonts Attribution Font: Noto Sans Korean by Google Source/License: Google Fonts Attribution Font: Y이드스트릿체 by KT 'Y' Source/License: (주)케이티...","url": "http://localhost:4000/copyright/"
  },{
    "title": "Github",
    "excerpt":"                                    Git                                        Github 개요                        ","url": "http://localhost:4000/study/programming/github/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","url": "http://localhost:4000/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","url": "http://localhost:4000/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [ {%- for c in site.collections -%} {%- if forloop.last -%} {%- assign l = true -%} {%- endif -%} {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%} {%- for doc in docs -%} {%- if doc.header.teaser -%} {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture...","url": "http://localhost:4000/assets/js/lunr/lunr-store.js"
  },{
    "title": "Building Flexible, Low-Cost Wireless Access Networks With Magma",
    "excerpt":"","url": "http://localhost:4000/study/paper_review/magma_001/"
  },{
    "title": "Paper Review",
    "excerpt":"                                    magma         Building Flexible, Low-Cost Wireless Access Networks With Magma         How to configure low-cost cellular network using Magma.       ","url": "http://localhost:4000/study/paper_review/"
  },{
    "title": "Professor",
    "excerpt":"홍인기 약력 BRIEF BIOGRAPHY 경희대학교 전자정보대학 전자공학과 교수 (1999.03 ~ 현재) 연세대학교 전기공학과 학사(1989),석사(1991),박사(1995) SK Telecom 중앙연구원 선임연구원 (1995-1999) NTT DoCoMo (Japan) 교환연구원 (1997-1998) 한국통신학회 부회장, 상임이사, 이사, 감사 (1999.03 ~ 2022) 이동통신 연구회 위원, 위원장 (2000~현재) 정보통신부 주파수 연구반, 이동통신 분과 위원장 (2003 ~ 2005) Oregon State Univ. 방문교수...","url": "http://localhost:4000/about/professor/"
  },{
    "title": "Programming",
    "excerpt":"                                    Github                          ","url": "http://localhost:4000/study/programming/"
  },{
    "title": "Projects",
    "excerpt":"     {% include pages-contents/projects.html %} ","url": "http://localhost:4000/projects/"
  },{
    "title": "Search",
    "excerpt":"","url": "http://localhost:4000/search/"
  },{
    "title": "Students",
    "excerpt":"유현민 Ph.D.Student SD-RAN Engineering Team, Aether 한국전자통신연구원 위촉연구원 SKT AI Fellowship 5기 이상연 M.S.Student 김유빈 M.S.Student 권혁선 M.S.Student 이종석 M.S.Student 김건 M.S.Student SD-RAN Engineering Team, Aether 이성진 M.S.Student 최호성 M.S.Student # Alumni --- # Foreign Alumni --- ## Ph.D. Tran Le Nam 현) Professor, Dublin Univ. Ireland Vu Quang Doanh...","url": "http://localhost:4000/about/students/"
  },{
    "title": "Study",
    "excerpt":"     {% include pages-contents/study.html %} ","url": "http://localhost:4000/study/"
  },{
    "title": "Tag",
    "excerpt":"","url": "http://localhost:4000/tags/"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date...","url": "http://localhost:4000/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "http://localhost:4000/robots.txt"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif...","url": "http://localhost:4000/feed.xml"
  }]
