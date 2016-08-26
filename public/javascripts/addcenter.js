$(document).ready(function() {

    // Add center button click
    $('#addUrl').on('click', callfb);

    //Userfind index


    });


function callfb(event) {
    event.preventDefault();
      $.getJSON("https://graph.facebook.com/v2.4/"+$('#url').val()+"?fields=id,name,engagement,link&access_token=1643316522639506|de279b330374fc4a8354396499297417", function(data) {
        var newCenter = {
            url: $('#url').val(),
            name: data.name,
            likes: [{ count: data.engagement.count, date: Date.now() }],
          };
      $.ajax({
          type: 'POST',
          data: newCenter,
          url: '/newcenter',
          dataType: 'JSON'
      }).done(function( response ) {

          // Check for successful (blank) response
          if (response.message === 'New center added') {

              // Clear the form inputs
              window.location.href = "/center/"+response.data._id;
          //    window.location.href = "/ideas/"+response.data._id;
          }
          else {

              // If something goes wrong, alert the error message that our service returned
              alert(err);

          }
      });
    });
  };
