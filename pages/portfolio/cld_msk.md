---
layout: page-fullwidth
background_color: "#42667E"
text_color: "#FFFFFF"
text_body:
  - "Cloud contamination is a common barrier to studies involving the Earth's surface, limiting the quality and amount of usable data."
  - "As a final project, I researched cloud masking methods. Specifically, I focused on using Google Earth Engine and the S2cloudless dataset as applied to Sentinel-2 imagery."
  - "Working on this project was beneficial because I learned about several methods for cloud masking and acquired practical knowledge in applying cloud masking in Google Earth Engine. Additionally, I gained experience in writing code in Python and JavaScript."
categories:
  - portfolio
---

<div class="row">
  <!-- Medium and larger screens layout -->
  <div class="medium-8 columns t20 hide-for-small-only">
    <div class="iframe">
      {% include storymap.html %}
    </div>
  </div>
  
  <div class="medium-4 columns t20 hide-for-small-only" style="background-color: #2B3A4E; padding-top: 20px; padding-bottom: 20px">
    {% for paragraph in page.text_body %}
      <p class="font-size-h4">{{ paragraph }}</p>
    {% endfor %}
  </div>
  
  <!-- Small screens layout -->
  <div class="small-12 columns t20 show-for-small-only">
    <p class="font-size-h4">{{ page.text_body[0] }}</p>
  </div>
  <div class="small-12 columns t20 show-for-small-only">
    <div class="iframe">
      {% include storymap.html %}
    </div>
  </div>
  <div class="small-12 columns t20 show-for-small-only">
    <p class="font-size-h4">{{ page.text_body[1] }}</p>
    <p class="font-size-h4">{{ page.text_body[2] }}</p>
  </div>
</div>
