

$(function() {
    $('#mode-toggle').change(function() {
        let dark = $(this).prop('checked');
        if (dark == true) {
            $("#header").removeClass("headerfoot-light").addClass("headerfoot-dark");
            $("#footer").removeClass("headerfoot-light").addClass("headerfoot-dark");
            $("#main").removeClass("main-light").addClass("main-dark");
            $("#main-container").removeClass("container-light").addClass("container-dark");
        } else {
            $("#header").removeClass("headerfoot-dark").addClass("headerfoot-light");
            $("#footer").removeClass("headerfoot-dark").addClass("headerfoot-light");
            $("#main").removeClass("main-dark").addClass("main-light");
            $("#main-container").removeClass("container-dark").addClass("container-light");
        }

    })
  });