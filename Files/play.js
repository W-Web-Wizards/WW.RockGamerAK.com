function play() {
  var img = document.querySelector('img')
  img.setAttribute('src', '')
  img.setAttribute('onclick', 'stop()')
}

function stop() {
  var img = document.querySelector('img')
  img.setAttribute('src', '')
  img.setAttribute('onclick', 'play()')
}
