(function () {

var names = ["Disha", "Kriti", "Esha", "Shraddha", "Nikki", "Amyra", "Pooja", "Neha", "Vartika", "Tanvi"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
