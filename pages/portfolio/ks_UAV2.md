---
layout: page-fullwidth 
text_color: '#FFFFFF'
image: 
    title: output_doc/ks_perspective_4_5b.jpg
    caption: "Construction at College Ave and Drake Road 4/5/24"
    caption_url: output_doc/ks_perspective_4_5.jpg
text_body: "Beginning in August 2023, on an approximately bi-monthly interval, UAV imagery was captured for an active construction site in Fort Collins, Colorado. In preperation for this project, a gridded flight plan was created using ancient.lands and imported into Litchi to set camera and flight parameters. Litchi was then used to execute the plan with a DJI Air 2S, utilizing virtual stick control to capture consistent imagery over the target site."
text_body2: "The raw imagery was processed to jpg format using Rawtherapee. Finally, the processed dataset was loaded into WebODM to generate orthomosaic GeoTiffs and quality reports for each flight."
categories:
    - portfolio

gallery_thumbnail: output_doc/layout_3_12_24.jpg
gallery_thumbnail_caption: 'Click to view project imagery'
gallery:
    - image_url: output_doc/layout_10_14_23.jpg
    - image_url: output_doc/layout_10_25_23.jpg
    - image_url: output_doc/layout_11_17_23.jpg
    - image_url: output_doc/layout_12_8_23.jpg
    - image_url: output_doc/layout_12_21_23.jpg
    - image_url: output_doc/layout_1_2_24.jpg
    - image_url: output_doc/layout_1_25_24.jpg
    - image_url: output_doc/layout_2_8_24.jpg
    - image_url: output_doc/layout_2_24_24.jpg
    - image_url: output_doc/layout_3_1_24.jpg
    - image_url: output_doc/layout_3_12_24.jpg
pdf_file: output_doc/ks_04_05_report.pdf
pdf_thumb: output_doc/report_tmb.jpg
pdf_thumb_caption: "Click to open quality report"
background_color: "#42667E"
---
<div class="row">
  <div class="medium-6 columns t20 hide-for-small-only">
    <div class="text-fields" style="color: #000000; border: 2px solid #BEBEBE; padding-left: 20px; padding-right: 20px; padding-top: 5px; background-color: #859DAC;">
      <p class="font-size-h4 adaptive-text">{{ page.text_body }}</p>
      <p class="font-size-h4 t20 adaptive-text">{{ page.text_body2 }}</p>
    </div>
    {% if page.pdf_file %}
      <div class="pdf_box" style="border: 2px solid #BEBEBE;">
        <!-- Include PDF Popup HTML if a PDF is specified -->
        {% include pdf_popup.html %}
        <!-- Include JavaScript for PDF Popup functionality -->
        <script src="{{ '/assets/js/pdf_popup.js' | relative_url }}"></script>
      </div>
    {% endif %}
  </div>
  <div class="medium-6 columns t20 hide-for-small-only">
    <div class="gallery">
      {% include gallery %}
    </div>
  </div>
</div>

<div class="row">
  <!-- Small screens layout -->
  <div class="small-12 columns t20 show-for-small-only">
    <div class="text-fields" style="color: #000000; border: 2px solid #BEBEBE; padding-left: 20px; padding-right: 20px; padding-top: 5px; background-color: #859DAC;">
      <p class="font-size-h4 adaptive-text">{{ page.text_body }}</p>
    </div>
  </div>
  <div class="small-12 columns t20 show-for-small-only">
    <div class="gallery">
      {% include gallery %}
    </div>
  </div>
  <div class="small-12 columns t20 show-for-small-only">
    <div class="text-fields" style="color: #000000; border: 2px solid #BEBEBE; padding-left: 20px; padding-right: 20px; padding-top: 5px; background-color: #859DAC;">
      <p class="font-size-h4 adaptive-text">{{ page.text_body2 }}</p>
    </div>
  </div>
  <div class= "small-12 columns t20 show-for-small-only">
  {% if page.pdf_file %}
    <div class="pdf_box" style="border: 2px solid #BEBEBE;">
    <!-- Include PDF Popup HTML if a PDF is specified -->
      {% include pdf_popup.html %}
    <!-- Include JavaScript for PDF Popup functionality -->
    <script src="{{ '/assets/js/pdf_popup.js' | relative_url }}"></script>
    </div>
    {% endif %}
  </div>
</div>


