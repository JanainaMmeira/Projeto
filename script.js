function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag image
  const img = document.querySelector("#profile img")
//subistituir a imagens
  if (body.classList.constains('light')) {
  //se tiver no light mode, manter a imagem light
    img.setAttribute('src', './Assets/avatar.png')
  } else {
  // se tiver sem light mode, manter a imagem comum.
    img.setAttribute('src', './Assets/avatar-light.png')
}

}