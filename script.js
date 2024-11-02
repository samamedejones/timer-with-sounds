window.open('https://term.ooo/','_blank', 'noopener')
window.open('https://loldle.net/','_blank', 'noopener')
window.open('https://worldle.teuteuf.fr/','_blank', 'noopener')
window.open('https://www.flagle.io/','_blank', 'noopener')
window.open('https://flagle-game.com/','_blank', 'noopener')
window.open('https://desafiosdiarios.com/g/hashtag/index.html','_blank', 'noopener')


const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const displayMinute = document.querySelector('span.minutes')
const displaySeconds = document.querySelector('span.seconds')
const buttonTimer = document.querySelector('button.timer')
const buttonArvore = document.querySelector('button.arvore')
const buttonNuvem = document.querySelector('button.nuvem')
const buttonMute = document.querySelector('button.mute')
const buttonFogo = document.querySelector('button.fogo')
const audioA = document.querySelector('audio')
const buttonAumentar = document.querySelector('button.increase')   
const buttonDiminuir = document.querySelector('button.decrease')


let minutes = Number(displayMinute.textContent)
let timerTimeOut

function resetTimer(){
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function updateTimerDisplay(minutes, seconds) {
  displayMinute.textContent = String(minutes).padStart(2, '0')
  displaySeconds.textContent = String(seconds).padStart(2, '0')
}

function resetButtonsDisplay() {
  buttonStop.classList.add('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonTimer.classList.remove('hide')
}

function countdown(){
timerTimeOut = setTimeout(contador, 1000)
}

function resetButtonsSounds() {
  buttonArvore.classList.remove('selecao')
  buttonNuvem.classList.remove('selecao')
  buttonFogo.classList.remove('selecao')
  buttonMute    .classList.remove('selecao')
}


function contador() {
    let seconds = Number(displaySeconds.textContent)
    let minutes = Number(displayMinute.textContent)
    
    updateTimerDisplay(minutes, 0)
    
    if(minutes <= 0 && seconds <= 0) {
      resetButtonsDisplay()
      resetTimer()

      return
    }
    
    if( seconds <= 0 ) {
      seconds = 60
    
      --minutes

    }
    updateTimerDisplay(minutes, seconds - 1)

    
    
    
      countdown()
}

buttonPlay.addEventListener('click', function(){
  buttonPlay.classList.add('hide')
  buttonTimer.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')

  countdown()
})

buttonPause.addEventListener('click', function(){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)

})

buttonTimer.addEventListener('click', function(){

  let newMinutes = prompt('Quanto tempo?')
  if(!newMinutes){
    resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})

buttonStop.addEventListener('click', function(){
  resetButtonsDisplay()
  resetTimer()
})

buttonAumentar.addEventListener('click', function(){
  if(audioA.volume < 1){
     audioA.volume += 0.1;
    }
})

buttonDiminuir.addEventListener('click', function(){
  if(audioA.volume > 0){ 
    audioA.volume -= 0.1;
  }
})

buttonArvore.addEventListener('click', function(){
  resetButtonsSounds()
  buttonArvore.classList.add('selecao')
  audioA.setAttribute('src', 'assets/som-floresta.mp3')
  audioA.play()
})

buttonNuvem.addEventListener('click', function(){
  resetButtonsSounds()
  audioA.setAttribute('src', 'assets/som-chuva.mp3')
  audioA.play()
  buttonNuvem.classList.add('selecao')
})

buttonFogo.addEventListener('click', function(){
  resetButtonsSounds()
  audioA.setAttribute('src', 'assets/som-fogo.mp3')
  audioA.play()
  buttonFogo.classList.add('selecao')
})

buttonMute.addEventListener('click', function(){
  resetButtonsSounds()
  buttonMute.classList.add('selecao')
  audioA.setAttribute('src', '')
})

audioA.loop = true







