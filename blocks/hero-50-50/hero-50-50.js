document.addEventListener('DOMContentLoaded', function () {
    // Log button clicks
    document.querySelectorAll('.btn').forEach(function(button) {
      button.addEventListener('click', function() {
        console.log(button.textContent + ' clicked');
      });
    });
  
    // Handle CTA link click
    document.querySelector('.link')?.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('CTA link clicked');
    });
  });
  