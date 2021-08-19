const video = document.querySelector("#video")
const play = document.querySelector("#play")
const pause = document.querySelector("#pause")
const backward = document.querySelector("#backward")
const forward = document.querySelector("#forward")
const progress = document.querySelector("#progress")

play.addEventListener("click", handleplay)
pause.addEventListener("click", handlepause)

function handleplay() {
    video.play()
    play.hidden = true
    pause.hidden = false
    console.log("le diste click al boton de play")
}

function handlepause() {
    pause.hidden = true
    play.hidden = false
    video.pause()
    console.log("le diste click al boton de pausa")
}

backward.addEventListener("click", handlebackward)

function handlebackward() {
    video.currentTime -= 10
    console.log('retroceder 10 segundos', video.currentTime)
}

forward.addEventListener("click", handleforward)

function handleforward() {
    video.currentTime = video.currentTime + 10
    console.log('adelantar 10 segundos', video.currentTime)
}

video.addEventListener("loadedmetadata", handleloader)

function handleloader () {
    progress.max = video.duration
    console.log("ha cargado mi video", video.duration) 
}

video.addEventListener("timeupdate", handleTimeupdate)

function handleTimeupdate () {
    progress.value = video.currentTime
    // console.log("Tiempo actual", video.currentTime)
}

progress.addEventListener("input", handleInput)

function handleInput() {
    video.currentTime = progress.value
    console.log(progress.value)
}