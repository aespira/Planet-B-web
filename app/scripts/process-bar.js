/**
 * Created by DUY on 2016-11-27.
 */

processBarLoop()

// Process bar custom animation
function processBarLoop() {
  $('.processBar').each(function () {
    $(this).find('.bar').animate({width: $(this).attr('data-percent')}, 5000);
  });

  $('.processBar').each(function () {
    // $(this).find('.bar').delay(3000).animate({width: 0}, 0, processBarLoop);
  });
}
