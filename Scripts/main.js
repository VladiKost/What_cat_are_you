const mainContainer = document.querySelector('.mainContainer')
const textCloud = document.querySelector('.textCloud')
const introText = document.querySelector('.introText')
const cat = document.querySelector('.cat')
const okButton = document.querySelector('.okButton')
const yesButton = document.querySelector('.yesButton')
const noButton = document.querySelector('.noButton')
const test = document.querySelector('.test')
/*const skipButton = document.querySelector('.skipButton') Кнопка пропуска*/
let i
let iPrev
let introCheck = 0
let id
let spy = null
let rend = null


function introWithCat1() {  /*Вступительная анимация кота и фона*/
    mainContainer.style.transition = 'all ' + 3 + 's' + ' ease'
    mainContainer.style.opacity = 1
    cat.style.transition = 'all ' + 3 + 's' + ' ease'
    cat.style.opacity = 1
    cat.style.transform = 'rotate' + '(' + 360 + 'deg)' 
    cat.style.scale = 100 + '%'
  }
  introWithCat1()

  function introWithCat2() {/*Вступительная анимация кота */
    /*cat.style.left = 350 + 'px'*/
    cat.style.transform = 'translate(200px, 100px)'
    /*cat.style.top = 100 + 'px'*/
    cat.style.transition = 'all ' +  0.5 + 's' + ' ease'
  }
  setTimeout(introWithCat2, 3000)

  function textCloudIntro() { /*Вступительная анимация облачка */
    textCloud.style.transition = 'all ' + 1 + 's' + ' ease'
    textCloud.style.opacity = 1
    textCloud.style.transform = 'rotate' + '(' + 360 + 'deg)' 
    textCloud.style.scale = 50 + '%'
    textCloud.style.opacity = 1
  }
  setTimeout(textCloudIntro, 3000)

  function textCloudTextChange(){ /* Появление рандомного текста в облачке и анимация кота */
  n = Math.floor(Math.random() * 5)
  let textDuration = 1000
  if (n == 0){
    introCloudText = 'Эх... Знали ли бы Вы сколько раз в день кто-то отказывается пройти тест... по факту человека 2-3 всего, но всё равно грустно, знаете ли...'
    textDuration = 7000
  }
  if (n == 1){
    introCloudText = 'Иногда меня так раздражает эта работа... Постоянно одно и то же! Никто до сих пор так и не выбил легендарную кошечку! Хотя, может быть у вас получится?'
    textDuration = 8000
  }
  if (n == 2){
    introCloudText = 'Sometimes I wish I could fly... Through a secret trap door into another life... ОЙ! Что-то я запелся...'
    textDuration = 5000
  }
  if (n == 3){
    introCloudText = 'Гав-гав! Ой блин, тьфу ты, мяу-мяу конечно же...'
    textDuration = 3000
  }
  if (n == 4){
    introCloudText = 'Говорят, что те кто проходят тест на данном сайте, получат много вкусностей... Может быть это всего-лишь слухи?'
    textDuration = 6000
  }
  catTalkCall(textDuration)
    textRender(introCloudText)
    introText.style.transition = 'all ' + 1 + 's' + ' ease'
    introText.style.opacity = 1
    if (introCheck == 0){
      setTimeout(okButtonAppear, textDuration)
      introCheck = 1
    }
  }
  setTimeout(textCloudTextChange, 4000)

function catTalk(){ /*Функция проигрывания анимации кота */
      i = Math.floor(Math.random() * 3)
      while (i == iPrev) {
        i = Math.floor(Math.random() * 3)
      }
      iPrev = i
      if (i == 0){
        cat.style.animation = 'catTalk 0.3s 1 steps(4, end)'
      }
      if (i == 1){
        cat.style.animation = 'catTalk1 0.3s 1 steps(4, end)'
      }
      if (i == 2){
        cat.style.animation = 'catTalk2 0.3s 1 steps(4, end)'
      }
  }

function catTalkCall(duration){ /*Функция вызова анимации, где duration - сколько секунд проигрывается анимация */
if (id != null){
  clearInterval(id)
  id = null
}
  console.log('Шмоня говорит')
  id = setInterval(catTalk, 300)
  setTimeout(function(){
    clearInterval(id)
    id =null
  }, duration)
}

function catTalkCallDelay(duration, delay){ /*Функция вызова анимации, с задержкой где duration - сколько секунд проигрывается анимация, а delay - с какой задержкой  */
setTimeout(function(){
  catTalkCall(duration)
}, delay)
}

function textRender(text){ /* Ф-я рендера текста в облачке кота*/
if (rend != null){
clearInterval(rend)
rend = null
}
  let renderText = ''
  let lCount = 0
  let max =  text.length
  rend = setInterval(function(){
    renderText = renderText + text[lCount]
    lCount++
    introText.textContent = renderText
  }, 50)

  let spy = setInterval(function(){
    if (lCount == max){
      clearInterval(rend)
      clearInterval(spy)
      rend = null
      spy = null

    }
  }, 10)
}
function okButtonClear(){ /* ф-я убирает кнопку ага */
  okButton.style.scale = 0
  okButton.style.opacity = 0
}
function okButtonAppear(){/* ф-я добавляет кнопку ага */
  okButton.style.scale = 1
  okButton.style.opacity = 1
}
function choiceButtonsClear(){/* ф-я добавляет кнопки да и нет */
  yesButton.style.scale = 0
  yesButton.style.opacity = 0
  noButton.style.scale = 0
  noButton.style.opacity = 0
}
function choiceButtonsAppear(){/* ф-я убирает кнопки да и нет */
  yesButton.style.scale = 1
  yesButton.style.opacity = 1
  noButton.style.scale = 1
  noButton.style.opacity = 1
}
function catHappy(){ /* Делает котика счастливым! */
  cat.style.backgroundImage = 'url(Images/Evil.png)'
}
let count = 0
okButton.addEventListener('click', function(){ /*Кнопка ага; она также используется в финале*/
count++
console.log(count)
okButtonClear()
introText.textContent = ''
if (count == 1){
    catTalkCall(6000)
    textRender('Здравствуйте! Меня зовут Шмоня. Я являюсь хранителем данного сайта. Моя задача встречать и сопровождать всех его посетителей.')
    setTimeout(okButtonAppear, 6000)
  }
if (count == 2){
  catTalkCall(7000)
  textRender('На данном сайте вы можете пройти уникальнейший, неповторимый тест с ооочень интересной тематикой. Желаете узнать о тесте поподробнее и пройти его?')
    setTimeout(choiceButtonsAppear, 7000)
  }
if (count == 3){
  catTalkCall(6000)
    textRender('По результатам теста вы сможете понять, на какую породу кошек вы больше похожи. Это глупо, но очень весело!')
    setTimeout(function(){
      catHappy()
      console.log('Котик злобно улыбается')
      okButtonAppear()
    },6000)
  }
if (count == 4){
    console.log('Начало теста')
    /*skipButton.style.opacity = 0
    skipButton.style.scale = 0*/
    catTalkCall(3000)
    textRender('Тогда с вашего позволения, давайте приступим!')

    setTimeout(function(){
      catHappy()
      textCloud.style.opacity = 0
      textCloud.style.scale = 0
      mainContainer.style.opacity = 0
    },4000)
    setTimeout(function(){
      cat.style.top = 150 + 'px'
      secondPhaseStart()
    }, 7000)
  }
/*Финал */
  if (count == 5){
    okButtonClear()
    console.log('Финальная часть')
    catTalkCall(5000)
    textRender('Тогда пока мы не попрощались, давайте расскажу вам один интересный факт обо мне или об этом сайте!')
    setTimeout(function(){
      catTalkCall(2000)
      textRender('Хм... Дайте подумать...')
      setTimeout(function(){ /*Ф-я рандомного факта от Шмони; тоже реюзнутая)) */
        n = Math.floor(Math.random() * 5)
        let textDuration = 1000
        if (n == 0){
          introCloudText = 'Я не люблю торопиться. К чему это? Можно же спокойно наслаждаться жизнью! Если меня торопить и перебивать, то я могу сломаться... Поэтому, пожалуйста, будьте терпеливы ко мне. Спасибо!'
          textDuration = 10000
        }
        if (n == 1){
          introCloudText = 'Я точно не помню, но если я напевал какую-то песенку в начале, то это песня MEG MYERS — Numb. Она неплохо заходит под работу. Попробуйте послушать! Можеть быть вам понравится :)'
          textDuration = 9000
        }
        if (n == 2){
          introCloudText = 'Мой создатель изначально не планировал, чтобы на сайте был ещё кто-то, но посчитал, что так будет слишком скучно, поэтому и создал меня, чтобы развлекать вас :3'
          textDuration = 8000
        }
        if (n == 3){
          introCloudText = 'Если в начале я упоминал про что-то вкусненькое, то правда, порадуйте себя чем-нибудь вкусным. Вы этого заслужили!'
          textDuration = 6000
        }
        if (n == 4){
          introCloudText = 'Если по итогам теста, результаты будут спорными, то рандом подберёт для вас случайную породу из подходящих.'
          textDuration = 6000
        }
        catTalkCall(textDuration)
        textRender(introCloudText)
        setTimeout(finalCall, textDuration + 2000)

      },3000)
    },7000)
    
  }
})
yesButton.addEventListener('click', function(){/*Кнопка да */
  choiceButtonsClear()
  catTalkCall(3000)
  textRender('Ого! Вы в правду хотите его пройти? Я очень польщён!!!')
  setTimeout(function(){
    catHappy()
    console.log('Котик злобно улыбается')
    okButtonAppear()
  },3000)

})
noButton.addEventListener('click',function(){/*Кнопка нет */
  choiceButtonsClear()
  catTalkCall(3000)
  textRender('Чтож, печально это слышать... Но ничего, попробуем снова?')

  setTimeout(function(){
    cat.style.opacity = 0
    textCloud.style.opacity = 0
  }, 5000)
  setTimeout(function(){
    location.reload()
  }, 6000)
})
/* Кнопка пропуска
skipButton.addEventListener('click', function(){ 
if (phase2Start != 1){
  count = 4
  if (count == 4){
    catTalkCall(3000)
    textRender('Тогда с вашего позволения, давайте приступим!')
    setTimeout(function(){
      catHappy()
      mainContainer.style.opacity = 0
    },4000)
    setTimeout(function(){
      textCloud.style.opacity = 0
      textCloud.style.scale = 0
      cat.style.top = 150 + 'px'
      secondPhaseStart()
      if (id != null){
        clearInterval(id)
        id = null
      }
    }, 7000)

  }

}
else{
  winner = Math.floor(Math.random() * 10)
  test.style.opacity = 0
  test.style.scale = 0
  answerReceiver(currAnswer)
  textCloudIntro()
  textCloud.style.right = ''
  catTalkCall(3000)
  textRender('Вы ответили на все вопросы! Поздравляю! А теперь давайте подведём итоги.')
  cat.style.transform = 'translate(500px, 100px)'
  setTimeout(function(){
      textCloud.style.opacity = 0
      textCloud.style.scale = 0
      textCloud.style.right = 20 + 'px'
      cat.style.transform = 'translate(200px, 100px)'
      cat.style.transform = 'rotate' + '(' + 360 + 'deg)'
      mainContainer.style.opacity = 0
      finale()
      if (id != null){
        clearInterval(id)
        id = null
      }
      if (rend != null){
        clearInterval(rend)
        rend = null
        }

      console.log('Кнопка исчезла')

  }, 5000)
}
})*/

