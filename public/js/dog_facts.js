var dogFacts = [
]

function displayDogFact() {
  var randomIndex = Math.floor((Math.random() * dogFacts.length));
  $("#dog-fact").text(" " + dogFacts[randomIndex]);
}

$(document).ready(function(){
  displayDogFact();
})