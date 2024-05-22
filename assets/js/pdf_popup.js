document.addEventListener('DOMContentLoaded', function () {
  // Function to open the PDF in the popup
  function openPdf(url) {
    const pdfPopup = document.getElementById('pdfPopup');
    const pdfCanvas = document.getElementById('pdfCanvas');
    const closeBtn = document.getElementsByClassName('close')[0];
    const canvasContext = pdfCanvas.getContext('2d');

    // Show the popup
    pdfPopup.style.display = 'block';

    // Close the popup when the close button is clicked
    closeBtn.onclick = function () {
      pdfPopup.style.display = 'none';
    }

    // Close the popup when clicking outside of the popup content
    window.onclick = function (event) {
      if (event.target == pdfPopup) {
        pdfPopup.style.display = 'none';
      }
    }

    // Load the PDF
    pdfjsLib.getDocument(url).promise.then(function (pdf) {
      // Fetch the first page
      pdf.getPage(1).then(function (page) {
        const viewport = page.getViewport({ scale: 1.5 });
        pdfCanvas.height = viewport.height;
        pdfCanvas.width = viewport.width;

        // Render the page on the canvas
        const renderContext = {
          canvasContext: canvasContext,
          viewport: viewport
        };
        page.render(renderContext);
      });
    });
  }

  // Attach event listener to the button
  document.getElementById('openPdfBtn').addEventListener('click', function () {
    openPdf('{{ page.pdf_file }}'); // Use the path to your PDF file from the front matter
  });
});
