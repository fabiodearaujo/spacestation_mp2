// ---------------------------------------- FUNCTION TO TOGGLE DARK AND LIGHT MODE - WWW.BOOTSTRAPTOGGLE.COM

$(function() {
    $('#mode-toggle').change(function() {
        let dark = $(this).prop('checked');
        if (dark == true) {
            $("#header").removeClass("headerfoot-light").addClass("headerfoot-dark");
            $("#logo").removeClass("headerfoot-light").addClass("headerfoot-dark");
            $("#toggle-p").removeClass("headerfoot-light").addClass("headerfoot-dark");
            $("#footer").removeClass("headerfoot-light").addClass("headerfoot-dark");
            $("#main").removeClass("main-light").addClass("main-dark");
            $("#main-container").removeClass("container-light").addClass("container-dark");
        } else {
            $("#header").removeClass("headerfoot-dark").addClass("headerfoot-light");
            $("#logo").removeClass("headerfoot-dark").addClass("headerfoot-light");
            $("#toggle-p").removeClass("headerfoot-dark").addClass("headerfoot-light");
            $("#footer").removeClass("headerfoot-dark").addClass("headerfoot-light");
            $("#main").removeClass("main-dark").addClass("main-light");
            $("#main-container").removeClass("container-dark").addClass("container-light");
        }

    })
  });


//   FETCHING THE DATA FROM JSON API - EXAMPLE CODE FROM dcode YOUTUBE CHANNEL - https://www.youtube.com/watch?v=5VCY9yCZnlc

  let urlISS = "https://api.wheretheiss.at/v1/satellites/25544";



fetch(urlISS).then(function(response) {
    return response.json();

}).then(function(issData) {
    console.log(issData);
}).catch(function(error) {
    console.error("Something went wrong with retrieving data");
    console.error(error);
})


