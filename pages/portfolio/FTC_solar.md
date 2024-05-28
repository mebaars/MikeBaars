---
layout: page-fullwidth 
title: "Fort Collins, Colorado Residential Solar Assessment"
subheadline: "ArcGIS Dashboard"
title_color: '#FFFFFF'
background_color: "#2B3A4E"
text_color: "#FFFFFF"
categories:
    - portfolio
dashboard_url: "https://www.arcgis.com/apps/dashboards/e505221f860b46019c62a9c65a37ee75"
dashboard_thumb_url: "output_doc/dashboard_screen.png"
text_body:
  - "This project expanded upon a <a href='http://localhost:4000/MikeBaars/output_doc/FTC_solar.pdf' style='color: #9D2519;'>static map</a> which visualized solar potential trends across Fort Collins, Colorado"
  - "For this project, a web tool was produced that property owners could use as an initial step for researching the feasability of a photovoltaic installation. The dashboard drew up modeled solar irradiance values that account for diurnal/seasonal changes in the solar trajectory, local topography and rooftop obstructions. Modeled values, in addtion to publicly available roof area measurments, and the prevailing technical specifications of solar technology where used to estimate power generation potential. Given average residential electricity usage, the offset percentage and greenhouse gas migation potential for varying systems was determined. The dashboard was constructed to dynamically provide this information while interfacing with a web map for Fort Collins properties."  
iframe_caption: "Click the image to open the dashboard"
--- 

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1500px; /* Set a maximum width for the container */
    margin: 0 auto; /* Center the container horizontally */
  }

  .content-wrapper {
    width: 100%; /* Ensure the content takes the full width of the container */
  }

  .iframe-wrapper {
    width: 60%;
    margin: 0; /* Remove any default margin */
    padding: 0; /* Remove any default padding */
    box-sizing: border-box; /* Ensure padding is included in the width */
    border: 2px #FFFFFF;
  }

  .rectangular-block {
    display: flex;
    flex-direction: column; /* Default to column layout for smaller screens */
    align-items: flex-start;
    width: 100%;
    background-color: #A67972;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box; /* Ensure padding is included in the width */
    margin: 0; /* Remove any default margin */
  }

  .block-content, .block-text {
    color: #FFFFFF;
    background-color: #A67972;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    box-sizing: border-box; /* Ensure padding is included in the width */
  }

  .font-size-h4 {
    font-size: 1.25rem;
  }

  /* Media query for larger screens */
  @media (min-width: 768px) {
    .rectangular-block {
      flex-direction: row; /* Change to row layout for larger screens */
    }

    .block-content {
      margin-right: 20px; /* Ensure spacing between columns */
    }

    .block-content, .block-text {
      width: 50%; /* Adjust width for side-by-side columns */
    }
  }
</style>

<div class="container">
  <div class="content-wrapper">
    <div class="iframe-wrapper">
      <!-- Include the iframe modal content -->
      {% include _iframe.html %}
    </div>
    <div class="rectangular-block">
      <div class="block-content">
        <p class="font-size-h4"><em><strong>{{ page.iframe_caption }}</strong></em></p>
        {% for paragraph in page.text_body %}
          <p class="font-size-h4">{{ paragraph}}</p>
        {% endfor %}
      </div>
      <div class="block-text">
        <h2>Title of the Block</h2>
        <p>This is some text inside the rectangular block. You can add more content here.</p>
      </div>
    </div>
  </div>
</div>

