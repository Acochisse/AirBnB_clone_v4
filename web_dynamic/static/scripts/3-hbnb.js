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

// Request http status:
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

// load places using ajax (frontend)
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      for (const places of data) {
        $('section.places').append('<article><h2>' +
          places.name + '</h2><div class="price_by_night"><p>$' +
            places.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' +
              places.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' +
                places.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' +
                  places.number_bathrooms + '</p></div></div><div class="description"><p>' +
                    places.description + '</p></div></article>');
      }
    }
  });
});
