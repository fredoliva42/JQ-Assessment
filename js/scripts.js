$(document).ready(function() {
  $("form").submit(function(event) {

    $("#suggestion").show();
    $("form").hide();

    event.preventDefault();

    var name = $("#name").val();
    var activity = $("#activity").val();
    var animal = $("#animal").val();
    var kids = $("#kids").val();
    var passeport = $("#passeport").val();
    var destination;
    var suggestion = function(kids, animal, activity, passeport) {
      if ((kids === "false" && animal === "false" && activity === "gastronomy" && passeport === "true") || (kids === "true" && animal === "true" && activity === "gastronomy" && passeport === "true")) {
        destination = "Europe";
      } else if (kids === "false" && animal === "false" && activity === "culture" && passeport === "true") {
        destination = "Asia";
      } else if (kids === "true" && animal === "true" && activity === "sport" && passeport === "false") {
        destination = "U.S.A";
      } else {
        alert ("We don't have enough good information to suggest you a destination");
      }
    };

    suggestion (kids, animal, activity, passeport);

    $("span.name").text(name);
    $("span.destination").text(destination);

  });

  $("#repeat").click(function() {
    $("#suggestion").hide();
    $("form").show();

  });
});
