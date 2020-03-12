$(document).ready(function() {
  $('#weightliftingData').DataTable({
    "order": [
      [0, "desc"]
    ],
    "paging": false,
    "info": false
  });
});

var mens = $("tr.m").children(".weightCategory").toArray();
var womens = $("tr.w").children(".weightCategory").toArray();


function checkQualify(weightCategory, total) {

  var americanOpenSeriesQT = parseInt($("#" + weightCategory).children(".americanOpenSeries").text().replace("kg", ""));
  var americanOpenQT = parseInt($("#" + weightCategory).children(".americanOpenFinals").text().replace("kg", ""));
  var nationalsQT = parseInt($("#" + weightCategory).children(".nationals").text().replace("kg", ""));
  var userTotal = parseInt(total.replace("kg", ""));
  var result = "";

  if(userTotal >= nationalsQT) {
    result = "Congratulations! With a total of " + userTotal + "kg at a bodyweight of " + weightCategory.replace("m","").replace("w","") + "kg, you qualify for the American Open Series, American Open Finals, and the National Championships!";
  } else if (userTotal >= americanOpenQT){
    result = "Congratulations! With a total of " + userTotal + "kg at a bodyweight of " + weightCategory.replace("m","").replace("w","") + "kg, you qualify for the American Open Series as well as the American Open Finals!";
  } else if (userTotal >= americanOpenSeriesQT){
    result = "Great job! With a total of " + userTotal + "kg at a bodyweight of " + weightCategory.replace("m","").replace("w","") + "kg, you qualify for the American Open Series events.";
  } else {
    result = "You are not yet qualified for a 2020 national event, but keep working hard!";
  }

  $("#result").text(result);
  $("#resultCard").removeClass("d-none");

}


function genderToggle() {

  $("#weightCategory").empty();

  if ($("#gender")[0].value === "men") {
    for (var i = 0; i < mens.length; i++) {
      var weightclass = mens[i].innerHTML;
      var weightclassInt = weightclass.replace("kg","");
      $("#weightCategory").append(
        "<option value='m" + weightclassInt + "'>" + weightclass + "</option>");
    }
  } else {
    for (var i = 0; i < womens.length; i++) {
      var weightclass = womens[i].innerHTML;
      var weightclassInt = weightclass.replace("kg","");
      $("#weightCategory").append(
        "<option value='w" + weightclassInt + "'>" + weightclass + "</option>");
    }
  }

}
