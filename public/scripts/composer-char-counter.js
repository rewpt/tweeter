$(document).ready(function() {

  $("#tweet-text").on('input', function(input) {

    const maxLen = 140;
    let twtLen = $(this).val().length;
    let charLeft = maxLen - twtLen;
    const counter = $(this).parents().find(".counter");
    
    counter[0].innerText = charLeft;
    if (charLeft < 0) {
      counter.addClass("red-count");
    }
    if (charLeft >= 0) {
      counter.removeClass("red-count");
    }

  })

});