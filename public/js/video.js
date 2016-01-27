var dogVideos = [
  "http://media.giphy.com/media/l2JHZ7CDZa6jp1rAQ/giphy.mp4",
  "http://media.giphy.com/media/26tnmOjq7uQ98qxZC/giphy.mp4",
  "http://media.giphy.com/media/26tnazn9Fm4V3VUMU/giphy.mp4",
  "http://media.giphy.com/media/26tnhrpR1B6iOnUgo/giphy.mp4",
  "http://media.giphy.com/media/26tn2A11Cgd3xvIqc/giphy.mp4",
  "http://media.giphy.com/media/l2JHTMc51UdCYCn2o/giphy.mp4",
  "http://media.giphy.com/media/l2JI9XQlqkRLYIWCA/giphy.mp4",
  "http://media.giphy.com/media/26tn4dAvXHkHcHncQ/giphy.mp4",
  "http://media.giphy.com/media/26tn956W5qLmbO9YQ/giphy.mp4",
  "http://media.giphy.com/media/l2JHQGY0SoanXpvck/giphy.mp4",
  "http://media.giphy.com/media/l2JIcb3CvvjMZ9akU/giphy.mp4",
  "http://media.giphy.com/media/26tmZGflCf82PGbjq/giphy.mp4",
  "http://media.giphy.com/media/26tn5ZBO276MhXjiw/giphy.mp4",
  "http://media.giphy.com/media/26tncxLvZXWff0FlS/giphy.mp4",
  "http://media.giphy.com/media/l2JHSUA0chBuwY63e/giphy.mp4",
  "http://media.giphy.com/media/l2JIkLzS2M9c5XD0I/giphy.mp4"
];

function displayRandomVideo() {
  var randomIndex = Math.floor((Math.random() * dogVideos.length));
  $("#dog-video").attr("src", dogVideos[randomIndex]);
  $("#video")[0].load();
}

$(document).ready(function(){
  displayRandomVideo();
});
