function testapi() {
      $.ajax({
        url: 'https://apigateway-econtract-staging.vnptit3.vn/auth-service/oauth/token',
        data: {
           format: 'json'
        },
        Headers:{
            "Content-Type":"application/json"
        },
        body: {
    
            "grant_type":"client_credentials",
            "client_id":"test.client@econtract.vnpt.vn",
            "client_secret":"U30nrmdko76057dz5aQvV9ug0mTsqAQy"

        },
        error: function() {
           $('#info').html('<p>An error has occurred</p>');
        },
        dataType: 'json',
        success: function(data) {

        },
        type: 'POST'
     });
    }