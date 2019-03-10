document.addEventListener('mousemove', event => {
  const x = event.pageX
  const y = event.pageY
  const trame = document.querySelector('.trame')
  const trameCoords = trame.getBoundingClientRect()
  const trameX = trameCoords.left + trame.offsetWidth / 2
  const trameY = trameCoords.top + trame.offsetHeight / 2
  const angleX = (trameY - y) / 80
  const angleY = (trameX - x) / 80
  trame.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`

  const text = document.querySelector('.text')
  const textCoords = text.getBoundingClientRect()
  const textX = textCoords.left + text.offsetWidth / 2
  const textY = textCoords.top + text.offsetHeight / 2
  const textAngleX = (textY + y) / 50
  const textAngleY = (textX + x) / 50
  text.style.transform = `rotateX(${textAngleX}deg) rotateY(${textAngleY}deg)`
})

