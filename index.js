$(document).ready(function() {
  // Test if browser is NOT IE, then allow classes to insert AOS
  if(/Trident\/|MSIE /.test(window.navigator.userAgent) === false) {
      $('.aos-fade-up').attr('data-aos', 'fade-up');
      $('.aos-fade-down').attr('data-aos', 'fade-down');
      $('.aos-fade-right').attr('data-aos', 'fade-right');
      $('.aos-fade-left').attr('data-aos', 'fade-left');
      $('.aos-fade-up-right').attr('data-aos', 'fade-up-right');
      $('.aos-fade-up-left').attr('data-aos', 'fade-up-left');
      $('.aos-fade-down-right').attr('data-aos', 'fade-down-right');
      $('.aos-fade-down-left').attr('data-aos', 'fade-down-left');
      $('.aos-flip-right').attr('data-aos', 'flip-right');
      $('.aos-flip-left').attr('data-aos', 'flip-left');
      $('.aos-flip-up').attr('data-aos', 'flip-up');
      $('.aos-flip-down').attr('data-aos', 'flip-down');
      $('.aos-zoom-in').attr('data-aos', 'zoom-in');
      $('.aos-zoom-in-up').attr('data-aos', 'zoom-in-up');
      $('.aos-zoom-in-down').attr('data-aos', 'zoom-in-down');
      $('.aos-zoom-in-right').attr('data-aos', 'zoom-in-right');
      $('.aos-zoom-in-left').attr('data-aos', 'zoom-in-left');
      $('.aos-zoom-out').attr('data-aos', 'zoom-out');
      $('.aos-zoom-out-up').attr('data-aos', 'zoom-out-up');
      $('.aos-zoom-out-down').attr('data-aos', 'zoom-out-down');
      $('.aos-zoom-out-right').attr('data-aos', 'zoom-out-right');
      $('.aos-zoom-out-left').attr('data-aos', 'zoom-out-left');
  }
});
