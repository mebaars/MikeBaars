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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h2 {
  color: #FFFFFF;
}

h3 {
  color: #FFFFFF;
  font-size: 1rem; /* Smaller font size for Fort Collins, Colorado */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 2000px; /* Set a maximum width for the container */
  margin: 0 auto; /* Center the container horizontally */
  background-color: #2B3A4E;
}

.content-wrapper {
  width: 85%; /* Ensure the content takes the full width of the container */
  display: flex; /* Enable flexbox for content wrapper */
  flex-direction: row; /* Arrange children in a row */
  align-items: flex-start; /* Align items at the start */
  padding: 20px; /* Add padding for spacing */
}

.iframe-wrapper {
  width: 50%;
  margin: 0; /* Remove any default margin */
  padding: 0; /* Remove any default padding */
  box-sizing: border-box; /* Ensure padding is included in the width */
  border: 1.5px solid #575757; /* Add solid keyword for border */
}

.new-text-block {
  width: 70%;
  color: #FFFFFF;
  padding-left: 20px; /* Add some padding to the left */
  box-sizing: border-box; /* Ensure padding is included in the width */
  display: flex;
  flex-direction: column; /* Ensure text blocks are in a column */
  align-self: flex-start; /* Align the block to the top */
  margin-top: 0px; /* Keep the top margin as is */
  margin-left: 200px; /* Adjust this value as needed to move the block to the right */
}

.rectangular-block {
  display: flex;
  flex-direction: column; /* Default to column layout for smaller screens */
  align-items: flex-start;
  width: 32%;
  background-color: #A67972;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box; /* Ensure padding is included in the width */
  margin-top: 20px; /* Add some margin to the top for spacing */
  padding: 10px; /* Add padding for content spacing */
  padding-left: 20px; /* Add padding for left alignment */
  padding-right: 20px; /* Add padding for right alignment */ 
  margin-left: 130px;
}

.trailer {
  font-size: 1.25rem;
  margin-top: 20px;
  text-align: left;
  color: #FFFFFF; /* Ensure text color matches your theme */
}

/* Media Queries for Mobile Responsiveness */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column; /* Stack items vertically */
    padding: 10px; /* Adjust padding */
  }

  .new-text-block {
    width: 100%; /* Full width for mobile */
    margin-left: 0; /* Remove left margin */
    padding-left: 10px; /* Adjust padding */
    margin-top: 20px; /* Add top margin for spacing */
  }

  .rectangular-block {
    width: 100%; /* Full width for mobile */
    margin-left: 0; /* Remove left margin */
    padding-left: 20px; /* Add padding for left alignment */
    padding-right: 20px; /* Add padding for right alignment */
  }
}
</style>

<div class="container t20">
    <div class="content-wrapper">
      <div>
        <h2>Residential Solar Assessment</h2>
        <h2>Fort Collins, Colorado</h2>
      </div>
      <div class="iframe-wrapper">
        <!-- Include the iframe modal content -->
        {% include _iframe.html %}
      </div>
    </div>
    <div class="new-text-block t20">
      {% for passage in page.text_body %}
        <p class="font-size-h4">{{ passage }}</p>
      {% endfor %}
    </div>
</div>
