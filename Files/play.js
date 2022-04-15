function play() {
  var img = document.querySelector('img')
  img.setAttribute('src', 'https://4u-online.github.io/Files/anim.png')
  img.setAttribute('onclick', 'stop()')
}

function stop() {
  var img = document.querySelector('img')
  img.setAttribute('src', 'https://4u-online.github.io/Files/play.png')
  img.setAttribute('onclick', 'play()')
}
