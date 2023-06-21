window.onload = function() {
    // Start the loading process when the window has finished loading
    renderLoadingPage(3); // Change the number of seconds as needed
  };
  
  function renderLoadingPage(seconds) {
    // Display the loading page
    var loadingPage = document.getElementById('loadingPage');
    loadingPage.style.display = 'flex';
  
    // Set a timeout to hide the loading page and show the index page
    setTimeout(function() {
      loadingPage.style.display = 'none';
      var indexPage = document.getElementById('indexPage');
      indexPage.style.display = 'block';
    }, seconds * 1000);
  }
  