$( document ).ready(function() {
  $('body').on('click', '.direct-link', function(ev) {
    ev.preventDefault();
    window.location.href = $(ev.target).attr('href');
  });
});
