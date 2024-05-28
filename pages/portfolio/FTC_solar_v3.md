---
layout: page-fullwidth 
title_color: '#FFFFFF'
background_color: "#2B3A4E"
text_color: "#FFFFFF"
categories:
    - portfolio
dashboard_url: "https://www.arcgis.com/apps/dashboards/e505221f860b46019c62a9c65a37ee75"
dashboard_thumb_url: "output_doc/dashboard_screen.png"
dashboard_thumb_caption: "Click image to open the dashboard in a new window"
text_body: 
  - "This Dashboard was envisioned as a web tool for property owners researching the feasability of a photovoltaic system on their property. The data underlying the dashboard was derived from the ArcGIS Pro Solar Radiation tool, which modeled solar irradiance values accounting for diurnal/seasonal changes in the solar trajectory, local topography and rooftop obstructions. Modeled values, in addition to publicly available roof area measurments, and the prevailing technical specifications of solar technology where used to estimate power generation potential."
  - "Given average residential electricity usage, the offset percentage and greenhouse gas migation potential for varying systems was determined. The dashboard was constructed to dynamically provide this information while interfacing with a web map for Fort Collins properties."  

iframe_caption: "Click the image to open the dashboard"
---

<style>
.container {
  margin: 10px
}
.title {
  background-color: #5A4246;
}

h2, h3 {
  color: #FFFFFF;
  padding-left: 20px;
  margin: 0px
}
</style>

<div class="container t20 hide-for-small-only">
  <div class="title_box medium-4 columns t20">
    <div class=title>    
      <h2>Residential Solar Assessment</h2>
      <h3>Fort Collins, Colorado</h3>
    </div>
    <div class="lead_txt t20">
      {% for passage in page.text_body %}
        <p class="font-size-h4">{{ passage }}</p>
      {% endfor %}
    </div>
  </div>
  <div class="iframe_box medium-8 columns t20">
    <!-- Include the iframe modal content -->
    {% include _iframe.html %}
  </div>
</div>

<div class="container t20 show-for-small-only">
  <div class="title_box small-12 columns t20">
    <div class=title>    
      <h2>Residential Solar Assessment</h2>
      <h3>Fort Collins, Colorado</h3>
    </div>
    <div class="lead_txt t20">
      <p class="font-size-h4">This Dashboard was envisioned as a web tool for property owners researching the feasability of a photovoltaic system on their property.</p>
    </div>
  </div>
  <div class="iframe_box small-12 columns t20">
    <!-- Include the iframe modal content -->
    {% include _iframe.html %}
  </div>
  <div class="body_txt small-12 columns t20">
    <p class="font-size-h4">The data underlying the dashboard was derived from the ArcGIS Pro Solar Radiation tool, which modeled solar irradiance values accounting for diurnal/seasonal changes in the solar trajectory, local topography and rooftop obstructions. Modeled values, in addition to publicly available roof area measurments, and the prevailing technical specifications of solar technology where used to estimate power generation potential.</p>
    <p class="font-size-h4">Given average residential electricity usage, the offset percentage and greenhouse gas migation potential for varying systems was determined. The dashboard was constructed to dynamically provide this information while interfacing with a web map for Fort Collins properties.</p>
  </div>
</div>