var places = [["Indonesia", "https://www.intrepidtravel.com/adventures/wp-content/uploads/2016/04/ASIA_WEATHERmyanmar.jpg"], ["San Francisco", "http://www.californiabeaches.com/wp-content/uploads/2014/09/bigstock-Baker-Beach-San-Francisco-Large.jpg"]
];



$(document).ready(function() {
  var suggestion = function(friends, duration, hobby) {
    if ((friends == "false" && duration == "long" && hobby == "culture") || (friends = "false" && duration == "medium" && hobby == "culture")) {
      cover = "https://image.jimcdn.com/app/cms/image/transf/dimension=1190x10000:format=jpg/path/sa6549607c78f5c11/image/i188843b7879a1e0d/version/1454325588/kotor-best-hidden-gems-in-europe-european-best-destinations-copyright-oleg-p.jpg";
      destination = "Greece";
    } else if ((duration == "long" && hobby == "adventure") || (friends == "false" && duration == "medium" && hobby == "adventure")) {
      cover = "https://www.intrepidtravel.com/adventures/wp-content/uploads/2016/04/ASIA_WEATHERmyanmar.jpg";
      destination = "Indonesia";
    } else {
      cover = "http://www.californiabeaches.com/wp-content/uploads/2014/09/bigstock-Baker-Beach-San-Francisco-Large.jpg";
      destination = "San Francisco";
    }
  }
  $("form").submit(function(event) {
    $("#suggestion").show();
    $("form").hide();
    event.preventDefault();
    var age = $("#age").val();
    var hobby = $("#hobby").val();
    var duration = $("#duration").val();
    var friends = $("#friends").val();
    var name = $("#name").val();

    output(friends, duration, hobby);

    $("span.duration").text(duration);
    $("span.hobby").text(hobby);
    $("span.name").text(name);
    $("span.destination").text(destination);

    var headline = "Your perfect vacation is " + destination;
    $(".jumbotron").css("background-image", "url(" + cover + ")");
    $("h1#destination").text(headline);
    $("p#destination").empty();
  });
  $("#repeat").click(function() {
    $("#suggestion").hide();
    $("form").show();
    $("h1#destination").text("Find your vacation");
    $("p#destination").text("Just answer five short questions and set sail on your getaway.");
  });
});
