---
layout: page-fullwidth
background_color: "#42667E"
text_color: "#FFFFFF"  
text_body: 
    - "While taking a remote sensing class, I became aware of some of the challenges involved with sourcing imagery. Specifically, cloud contamination is often a barrier to studies involving the earth surface limiting the quality and amount of usable data." 
    - "As a final project, I researched cloud masking methods. Ultimately, I focused my attention on using Google Earth Engine and the S2cloudless dataset as applied to Sentinel-2 imagery. I learned a lot through this project both in terms of how to mask out clouds and cloud shadows, but also gained experience using Google Earth Engine working in Python and Javascript."
categories:
    - portfolio
---

<div class="row">
     <div class="medium-8 columns t20">
    <div class="iframe">
      {% include storymap.html %}
    </div>
  </div>
  
  <div class="medium-4 columns t20" style= "background-color: #2B3A4E; padding-top: 20px; padding-bottom: 20px">
    {% for paragraph in page.text_body %}
      <p class="font-size-h4">{{ paragraph}}</p>
    {%endfor%}
  </div>
</div>