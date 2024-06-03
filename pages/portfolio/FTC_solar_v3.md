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
  - "This Dashboard was envisioned as a web tool for property owners researching the feasability of a photovoltaic system on their property. The data underlying the dashboard was derived from the ArcGIS Pro Solar Radiation tool, which modeled solar irradiance values accounting for diurnal/seasonal changes in the solar trajectory, local topography and rooftop obstructions."
  -  "Modeled values, in addition to publicly available roof area measurments, and the prevailing technical specifications of solar technology where used to estimate power generation potential."
  - "Given average residential electricity usage, the offset percentage and greenhouse gas migation potential for varying systems was determined. The dashboard was constructed to dynamically provide this information while interfacing with a web map for Fort Collins properties." 
  - "This project expanded upon a <a href='https://mebaars.github.io/MikeBaars/output_doc/m.baars_FTC_solar_final.jpg' style='color: #EEE53E;'>static map</a> which visualized solar potential trends across Fort Collins, Colorado" 

iframe_caption: "Click the image to open the dashboard"
---

<style>
.container {
  margin: 10px;
}
.title {
  background-color: #2B2B2B;
}

h2, h3 {
  color: #FFFFFF;
  margin: 0px;
}

.body_txt {
  background-color: #8B8B8B;
  color: #000000;
}

.lead_txt {
  padding: 20px;
  background-color: #979797;
  color: #000000;
}

.iframe_box {
  padding-bottom: 20px;
}

.txt-container {
  margin-left: 630px;
}
</style>

<div class="container t20 hide-for-small-only">
  <div class="title_box medium-4 columns t20">
    <div class="title">    
      <h2>Residential Solar Assessment</h2>
      <h3>Fort Collins, Colorado</h3>
    </div>
    <div class="lead_txt t20">
      {% assign first_passages = page.text_body | slice: 0, 2 %}
      {% for passage in first_passages %}
        <p class="font-size-h4">{{ passage }}</p>
      {% endfor %}
    </div>
  </div>
  <div class="iframe_box medium-8 columns t20">
    <div class="iframe">
      {% include _iframe.html %}
    </div>
  </div>
</div>

<div class="txt-container container t20 hide-for-small-only">
  <div class="medium-12 columns t20">
    <div class="body_txt">
      {% assign remaining_passages = page.text_body | slice: 2, page.text_body.size %}
      {% for passage in remaining_passages %}
        <p class="font-size-h4">{{ passage }}</p>
      {% endfor %}
    </div>
  </div>
</div>

<div class="container t20 show-for-small-only">
  <div class="title_box small-12 columns t20">
    <div class="title">    
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
    <p class="font-size-h4">This project expanded upon a <a href='https://mebaars.github.io/MikeBaars/output_doc/m.baars_FTC_solar_final.jpg' style='color: #EEE53E;'>static map</a> which visualized solar potential trends across Fort Collins, Colorado</p>
  </div>
</div>
