document.addEventListener('DOMContentLoaded', function() {
  var copyButton = document.getElementById('copyButton');
  copyButton.addEventListener('click', function() {
    chrome.tabs.executeScript({
      file: 'content.js'
    });
  });
});
