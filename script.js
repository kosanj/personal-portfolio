$(document).ready(function () {

  function setZoom() { //Makes PDF Resume on mainpage, responsive to resizing
      const pdfContainer = document.getElementById('pdfContainer');
      const pdfObject = document.getElementById('pdfObject');

      // Check window width and set default zoom level if width is 992px or more
      if (window.innerWidth >= 992) {
        // Destroy and recreate the object element
        pdfContainer.innerHTML = 
        `<object 
        type="application/pdf" 
        data="anjali_resume.pdf#zoom=90" 
        id="pdfObject" 
        width="100%" 
        height="700" 
        style="margin: auto; display: block;"
        ></object>`;
      } else {
        // Reset to default if not wide enough
        pdfContainer.innerHTML = 
        `<object type="application/pdf" 
        data="anjali_resume.pdf" 
        id="pdfObject" 
        width="100%" 
        height="700" 
        style="margin: auto; 
        display: block;"
        ></object>`;
      }
    }

    // Initial call to set the zoom level
    setZoom();

    // Attach the setZoom function to the resize event
    window.addEventListener('resize', setZoom);
});
