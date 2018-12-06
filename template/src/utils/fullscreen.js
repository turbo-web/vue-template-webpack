export function enterFullscreen () {
  const docElm = document.documentElement
  if (docElm.requestFullscreen) {
    // W3C
    docElm.requestFullscreen()
  } else if (docElm.mozRequestFullScreen) {
    // FireFox
    docElm.mozRequestFullScreen()
  } else if (docElm.webkitRequestFullScreen) {
    // Chrome等
    docElm.webkitRequestFullScreen()
  } else if (docElm.msRequestFullscreen) {
    // IE11
    docElm.msRequestFullscreen()
  }
}

export function exitFullscreen (params) {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  }
}
