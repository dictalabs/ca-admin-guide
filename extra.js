document.addEventListener('DOMContentLoaded', function() {
  var leftNav = document.querySelector('.md-nav');
  if (leftNav) {
    // Force the scrollbar thumb color and hover state
    leftNav.style.scrollbarColor = "#888 #f0f0f0";
    leftNav.style.scrollbarWidth = "thin";
    
    // For Webkit browsers (Chrome, Edge)
    var style = document.createElement('style');
    style.innerHTML = `
      .md-nav::-webkit-scrollbar-thumb {
        background-color: #888 !important;
      }
      .md-nav::-webkit-scrollbar-thumb:hover {
        background-color: #555 !important;
      }
      .md-nav::-webkit-scrollbar-thumb:active {
        background-color: #555 !important;
      }
    `;
    document.head.appendChild(style);
  }
});
