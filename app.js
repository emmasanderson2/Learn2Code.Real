// Generated by CoffeeScript 1.9.3
$(function() {
  $("#run_my_code").on('click', function() {
    var i, person, ref, ref1, results;
    $("#output").html("");
    results = [];
    for (i = ref = parseInt($("#first_num").val()), ref1 = parseInt($("#second_num").val()); ref <= ref1 ? i <= ref1 : i >= ref1; ref <= ref1 ? i++ : i--) {
      person = null;
      switch ($("#dropdown option:selected").text()) {
        case "Young Girl":
          person = 'littlegirl.jpg';
          break;
        case "Young Boy":
          person = 'littleboy.jpg';
          break;
        case "Teenage Girl":
          person = 'teengirl.jpg';
          break;
        case "Teenage Boy":
          person = 'teenboy.jpg';
      }
      $("<img>", {
        src: "./media/" + person
      }).appendTo("#output");
      results.push(console.log($("#first_num").val()));
    }
    return results;
  });
  return $("#go-if").on('click', function() {
    var userInput;
    $("#output-if").html("");
    userInput = $("#user_lyrics").val().toLowerCase();
    switch ($("#dropdown-if option:selected").text()) {
      case "You Belong with Me - Taylor Swift":
        return $.get('./media/youbelongwithme.txt', (function(_this) {
          return function(data, err) {
            var index;
            console.log(err);
            index = data.indexOf(userInput);
            if (index !== -1) {
              return $("<audio autobuffer controls id='audio-player' style='width:100%'> <source src='./media/YouBelongWithMe.mp3'></source></audio>").appendTo("#output-if");
            }
          };
        })(this));
      case "Baby - Justin Beiber":
        return $.get('./media/baby.txt', (function(_this) {
          return function(data, err) {
            var index;
            console.log(err);
            index = data.indexOf(userInput);
            console.log(index);
            if (index !== -1) {
              return $("<audio autobuffer controls id='audio-player' style='width:100%'> <source src='./media/Baby.mp3'></source></audio>").appendTo("#output-if");
            }
          };
        })(this));
      case "Trap Queen - Fetty Wap":
        return $.get('./media/trapqueen.txt', (function(_this) {
          return function(data, err) {
            var index;
            console.log(err);
            index = data.indexOf(userInput);
            console.log(index);
            if (index !== -1) {
              return $("<audio autobuffer controls id='audio-player' style='width:100%'> <source src='./media/TrapQueen.mp3'></source></audio>").appendTo("#output-if");
            }
          };
        })(this));
    }
  });
});
