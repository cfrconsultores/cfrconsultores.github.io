$( document ).ready(function() {
  $('body').on('click', '#link-servicios', function(ev) {
    ev.preventDefault();
    window.location.href = $(ev.target).attr('href');
  });
});
