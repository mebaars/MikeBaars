---
layout: page-fullwidth
subheadline:  
title: "UAV Imagery"
subheadline: "Construction Site Monitoring"
image: 
    title: output_doc/ks_perspective_4_5.jpg
    caption: "Construction at College Ave and Drake Road 4/5/24"
    caption_url: output_doc/ks_perspective_4_5.jpg
text_body: "Beginning in August 2023, on an approximately bi-monthly interval, UAV imagery was taken of an active construction site in Fort Collins, Colorado. In preperation for this project, a gridded flight plan was created using ancient.lands and imported into Litchi to set camera and flight parameters. Litchi was used to execute the plan with a DJI Air 2S and used virtual stick control to capture replicatable imagery over the target site. The imagery was captured as raw files and processed as jpg files using Rawtherapee. Finally, WebODM was used to generate orthomosaic geoTiffs and quality reports for each flight."
categories:
    - portfolio

gallery_thumbnail: output_doc/layout_3_12_24_thumb.jpg
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
pdf_thumb: output_doc/report_thumb.jpg
pdf_thumb_caption: "Click to open quality report"
---

<div class="row">
  <div class="medium-6 columns t20">
    {% include gallery %}
  </div>

  <div class="medium-6 columns t20">
    <p class="font-size-h4">{{ page.text_body}}</p>
  </div>
</div>

<div class="small-12 small-push-1 columns t20">
  <figure>
    <a class="link-lightbox" href="https://drive.google.com/file/d/1nb7Zpn1Y65Q8FvNdi5gspP5biKxwyewk/preview" target="_blank">
      <img src="{{ site.urlimg }}{{ page.pdf_thumb }}" alt="Open PDF" style="max-width: 300px;" />
      </a>
      {% if page.pdf_thumb_caption %}
      <figcaption class="text-left caption">
        {{ page.pdf_thumb_caption }}
      </figcaption>
      {% endif %}
  </figure>
</div>
