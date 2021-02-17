$(document).ready(function () {
  let amenities = [];
  $('input[type=checkbox]'.click(function () {
    if (this.checked) {
    amenities.push($(this).attr('data-name'));
    } else {
      const index = amenities.indexOf($(this).attr('data-name'));
      amenities.splice(index, 1);
    }
    if (amenities.length > 0) {
      S('.amenities > h4').text(amenities.join(', '));
    } else {
      $('.amenities > h4').html('&nsbp');
    }
  });
});
