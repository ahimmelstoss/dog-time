var dogVideos = [
  "http://media.giphy.com/media/cIQkxw4G65TG/giphy.mp4",
  "http://media.giphy.com/media/5xaOcLSBjc8W1uoMq8E/giphy.mp4",
  "http://media.giphy.com/media/5xaOcLBSOgYD7AQNitW.giphy.mp4",
  "http://media.giphy.com/media/5xaOcLvFL4bs8KMxoCQ.giphy.mp4",
  "http://media.giphy.com/media/5xaOcLCz3wlsdaWA7L2.giphy.mp4",
  "http://media.giphy.com/media/yjGdFXzfo3TAmFZNII.giphy.mp4",
  "http://media.giphy.com/media/TlK63EU2si1KEyRyXp6.giphy.mp4",
  "http://media.giphy.com/media/TlK63ExT1M9gnJuOCoE.giphy.mp4",
  "http://media.giphy.com/media/TlK63Eu30qmf8s1YtCE.giphy.mp4",
  "http://media.giphy.com/media/5xaOcLEkgGRhzFATWec.giphy.mp4",
  "http://media.giphy.com/media/TlK63ExaNVzoa1l916w.giphy.mp4",
  "http://media.giphy.com/media/TlK63EHvT6MOVsSpwOc.giphy.mp4"
];

// var oldVideos = [
//   "http://media.giphy.com/media/KFTBYZP5xrdZK/giphy.mp4",
//   "http://media.giphy.com/media/4K7i31h4bAVq/giphy.mp4",
//   "http://media.giphy.com/media/KrHJDG6QqinPW/giphy.mp4",
//   "http://media.giphy.com/media/7K4YsGrSMO8CY/giphy.mp4",
//   "http://media.giphy.com/media/tNuoOEz7cigvK/giphy.mp4",
//   "http://media.giphy.com/media/fPirIowUhqb6w/giphy.mp4",
//   "http://media.giphy.com/media/tP3Tu61F2RBZe/giphy.mp4",
//   "http://media.giphy.com/media/12b3E4U9aSndxC/giphy.mp4",
//   "http://media.giphy.com/media/8Ow0GB3YJ7HFe/giphy.mp4",
//   "http://media.giphy.com/media/cBTuHHvv5iqac/giphy.mp4",
//   "http://media.giphy.com/media/wG3jhHKvoCCVG/giphy.mp4",
//   "http://media.giphy.com/media/yoJC2LTvmB70IltllK/giphy.mp4",
//   "http://media.giphy.com/media/DIrGyd84DwA48/giphy.mp4",
//   "http://media.giphy.com/media/UIIyMCABbnUAg/giphy.mp4",
//   "http://media.giphy.com/media/uJG2A0WvErkGY/giphy.mp4",
//   "http://media.giphy.com/media/mWCXHLTASb9W8/giphy.mp4",
//   "http://media.giphy.com/media/keBpkd1tOgOac/giphy.mp4",
//   "http://media.giphy.com/media/d2vtMFc2YTVjW/giphy.mp4",
//   "http://media.giphy.com/media/EPkb6xoNOR1Sg/giphy.mp4",
//   "http://media.giphy.com/media/A6XISxDsthHGw/giphy.mp4",
//   "http://media.giphy.com/media/vGo2sgzeC8r60/giphy.mp4",
//   "http://media.giphy.com/media/JxuBBMH9gcJt6/giphy.mp4"
// ];

// var holidayDogs = [
// "http://media.giphy.com/media/10hfTW5ztWqqpq/giphy.mp4",
// "http://media.giphy.com/media/11EEXw1EIEoHaE/giphy.mp4",
// "http://media.giphy.com/media/Z0Stp2ekEqw3m/giphy.mp4",
// "http://media.giphy.com/media/y69CO2b6Nyqre/giphy.mp4",
// "http://media.giphy.com/media/W43npEseXeWeQ/giphy.mp4",
// "http://media.giphy.com/media/21FCU55gipR0k/giphy.mp4",
// "http://media.giphy.com/media/JRncFurmHESnC/giphy.mp4",
// "http://media.giphy.com/media/KuBdhHl8H4zpm/giphy.mp4",
// "http://media.giphy.com/media/fgQ93ewM9gLG8/giphy.mp4"
// ];

function displayRandomVideo() {
  var randomIndex = Math.floor((Math.random() * dogVideos.length));
  $("#dog-video").attr("src", dogVideos[randomIndex]);
  $("#video")[0].load();
}

$(document).ready(function(){
  displayRandomVideo();
});