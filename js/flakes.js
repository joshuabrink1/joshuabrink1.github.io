(function () {
    "use strict";
  
    // Dynamically add snowflake HTML & CSS to the page upon page-load.
  
    function letItSnow() {
      var flakesDiv = document.createElement("div"),
          link = document.createElement("link"),
          html = "";
  
      // Fetch snow CSS:
      link.href = "/css/flakes.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
  
      // Build HTML:
      flakesDiv.id = "flakes";
      flakesDiv.className = "flakes";
  
      // 1 row at 768px
      html += '<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>';
  
      // Common device widths
      html += '<i class=snow-1024px></i><i class=snow-1024px></i><i class=snow-1024px></i>';
      html += '<i class=snow-1280px></i><i class=snow-1280px></i>';
      html += '<i class=snow-1366px></i><i class=snow-1366px></i>';
      html += '<i class=snow-1440px></i>';
      html += '<i class=snow-1600px></i><i class=snow-1600px></i>';
      html += '<i class=snow-1800px></i><i class=snow-1800px></i>';
      html += '<i class=snow-1920px></i><i class=snow-1920px></i>';
      html += '<div></div>';
  
      // Add HTML
      flakesDiv.innerHTML = html;
      document.body.insertBefore(flakesDiv, document.body.childNodes[0]);
    }
  
    // classList test to eliminate IE9 specifically
    if (window.addEventListener && document.documentElement.classList) {
      window.addEventListener("load", letItSnow, false);
    }
  
  }());
