var dogVideos = [
  "http://media.giphy.com/media/KFTBYZP5xrdZK/giphy.mp4",
  "http://media.giphy.com/media/4K7i31h4bAVq/giphy.mp4"
]

function displayRandomVideo() {
  var randomIndex = Math.floor((Math.random() * dogVideos.length));
  $("#dog-video").attr("src", dogVideos[randomIndex]);
  $("#video")[0].load();
}

$(document).ready(function(){
  displayRandomVideo();
});