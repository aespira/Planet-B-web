/**
 * Created by DUY on 2016-11-27.
 */

// Process bar custom animation
$('.processBar').each(function () {
  $(this).find('.bar').animate({
    width: $(this).attr('data-percent')
  }, 5000);
});
