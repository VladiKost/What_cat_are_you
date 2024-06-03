const answerButton1 = document.querySelector('.answerButton1')
const answerButton2 = document.querySelector('.answerButton2')
const answerButton3 = document.querySelector('.answerButton3')
const answerButton4 = document.querySelector('.answerButton4')
const answerButtonText1 = document.querySelector('.answerButtonText1')
const answerButtonText2 = document.querySelector('.answerButtonText2')
const answerButtonText3 = document.querySelector('.answerButtonText3')
const answerButtonText4 = document.querySelector('.answerButtonText4')
const questionText = document.querySelector('.questionText')
const nextButton = document.querySelector('.nextButton')
const headerText = document.querySelector('.headerText')
const bottomPart = document.querySelector('.bottomPart')
let currQuestion = 1
let currAnswer = 0
let catScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let winner
let phase2Start = 0
let rarity
let winnerName
let imageType = []
let catDescription

function secondPhaseStart(){ /*Монолог Шмони в начале теста */
phase2Start = 1
    mainContainer.style.opacity = 1
    test.style.opacity = 1
    test.style.scale = 1
    introText.textContent = ''
    setTimeout(function(){
        textCloudIntro()
        cat.style.transform = 'translate(500px, 100px)'
        catTalkCall(5000)
        textRender('Ну а здесь уже начнётся сам тест. Проходите его не спеша, ведь от вашего выбора зависят результаты теста. ')

        setTimeout(function(){
            catTalkCall(5000)
            textRender('Когда вы будете готовы сделать выбор, кликните на иконку вашего ответа и нажмите "Следующий вопрос".')
        },6000)

        setTimeout(function(){
            catTalkCall(5000)
            textRender('Будьте внимательны, после перехода к следующему вопросу, ответ уже нельзя будет поменять!')
        },12000)
        setTimeout(function(){
            textCloud.style.opacity = 0
            textCloud.style.scale = 0
            textCloud.style.right = 20 + 'px'
            cat.style.transform = 'translate(200px, 100px)'
        }, 18000)
    }, 1000)
}
function fadeIn(){/* Переход между вопросами */
    test.style.opacity = 1
    test.style.scale = 1
    test.style.transform = 'translate(-300px)'
    answerButton1.style.opacity = '1'
    answerButton2.style.opacity = '1'
    answerButton3.style.opacity = '1'
    answerButton4.style.opacity = '1'
    nextButton.style.opacity = '30%'
    mainContainer.style.opacity = 1
    introText.textContent = ''
    introText.style.fontSize = '300%'
    cat.style.transform = 'translate(500px, 100px)'
    textCloudIntro()
    textCloud.style.right = ''
    n = Math.floor(Math.random() * 4)
    let textDuration = 1000
    if (n == 0){
      introCloudText = 'Давайте продолжим!'
      textDuration = 1000
    }
    if (n == 1){
      introCloudText = 'Хм, интересно что вы выберете в этом вопросе...'
      textDuration = 2000
    }
    if (n == 2){
      introCloudText = 'Быть может этот вопрос повлияет на результаты? Кто знает...'
      textDuration = 3000
    }
    if (n == 3){
        introCloudText = 'А вот и новый вопрос!'
        textDuration = 1000
      }
    if (currQuestion == 5){
        introCloudText = 'А вот и последний вопрос! Осталось совсем немного и вы наконец-то узнаете какая же вы кошечка!'
        textDuration = 4000
    }
    setTimeout(function(){
        catTalkCall(textDuration)
        textRender(introCloudText)
    }, 1000)
    setTimeout(function(){
        textCloud.style.opacity = 0
        textCloud.style.scale = 0
        textCloud.style.right = 20 + 'px'
        cat.style.transform = 'translate(200px, 100px)'
    }, textDuration + 2000)
    
}

function answerReceiver(currentAnswer){ /* Принимает выбранные ответы и добавляет баллы */
    if (currQuestion == 1){
        if(currentAnswer == 1){
            catScore[0]++
            catScore[1]++
        }
        if(currentAnswer == 2){
            catScore[2]++
            catScore[7]++
        }
        if(currentAnswer == 3){
            catScore[4]++
            catScore[6]++
            catScore[8]++
        }
        if(currentAnswer == 4){
           catScore[3]++
           catScore[5]++
           catScore[9]++
        } 

    }
    if (currQuestion == 2){
        if(currentAnswer == 1){
            catScore[5]++
        }
        if(currentAnswer == 2){
            catScore[0]++
            catScore[1]++
            catScore[2]++
            catScore[9]++
        }
        if(currentAnswer == 3){

            catScore[7]++
            catScore[8]++
            catScore[3]++
        }
        if(currentAnswer == 4){
            catScore[4]++
            catScore[6]++
        } 

    }
    if (currQuestion == 3){
        if(currentAnswer == 1){
            catScore[4]++
            catScore[8]++

            catScore[1] = -5
            catScore[9] = -5
            catScore[5] = -5
        }
        if(currentAnswer == 2){
            catScore[0]++
            catScore[2]++
            catScore[3]++
            catScore[6]++
            catScore[7]++

            catScore[1] = -5
            catScore[9] = -5
            catScore[5] = -5
        }
        if(currentAnswer == 3){
            catScore[5]++

            catScore[4] = -5
            catScore[8] = -5
        }
        if(currentAnswer == 4){
            catScore[1]++
            catScore[9]++
            
            catScore[0]= -5
            catScore[2]= -5
            catScore[3]= -5
            catScore[6]= -5
            catScore[7]= -5

            catScore[4] = -5
            catScore[8] = -5
        } 
    }
    if (currQuestion == 4){
        if(currentAnswer == 1){
            catScore[8]++
            catScore[9]++

        }
        if(currentAnswer == 2){
            catScore[0]++
            catScore[1]++
            catScore[3]++
            catScore[7]++


        }
        if(currentAnswer == 3){
            catScore[4]++
            catScore[6]++

        }
        if(currentAnswer == 4){
            catScore[2]++
            catScore[5]++
            

        } 

    }
    if (currQuestion == 5){
        if(currentAnswer == 1){
            catScore[1]++
            catScore[3]++
            catScore[6]++
            catScore[7]++
        }
        if(currentAnswer == 2){
            catScore[5]++
            catScore[9]++

            catScore[0] = -5
            catScore[8] = -5

        }
        if(currentAnswer == 3){
            catScore[0]++
            catScore[4]++
            catScore[8]++
        }

        if(currentAnswer == 4){
            catScore[2]++
        } 

    }
    console.log('Ответ ',currAnswer, ' подтверждён')
    console.log('Текущий счёт:',catScore)
}
function catReaction(){ /*ф-я реакции Шмони на выбранный ответ */
    introText.textContent = ''
    introText.style.fontSize = '300%'
    cat.style.transform = 'translate(500px, 100px)'
    textCloudIntro()
    textCloud.style.right = ''
    n = Math.floor(Math.random() * 8)
    let textDuration = 1000
    if (n == 0){
      introCloudText = 'Хороший выбор!'
      textDuration = 1000
    }
    if (n == 1){
      introCloudText = 'Этот выбор меня очень заинтересовал!'
      textDuration = 2000
    }
    if (n == 2){
      introCloudText = 'А вы не так просты, как я думал.'
      textDuration = 2000
    }
    if (n == 3){
      introCloudText = 'ЭЛЕГАНТНО!'
      textDuration = 1000
    }
    if (n == 4){
      introCloudText = 'Очень оригинально!'
      textDuration = 2000
    }
    if (n == 5){
        introCloudText = 'Довольно часто встречаю такой ответ.'
        textDuration = 2000
      }
    if (n == 6){
        introCloudText = 'Удивительно, но почти 90% процентов посетителей отвечают также!'
        textDuration = 4000
    }
    if (n == 7){
        introCloudText = 'Сделав такой выбор вы явно подчёркиваете вашу необыкновенно красивую натуру.'
        textDuration = 4000
    }
    setTimeout(function(){
        catTalkCall(textDuration)
        textRender(introCloudText)
    }, 1000)
    setTimeout(function(){
        textCloud.style.opacity = 0
        textCloud.style.scale = 0
        textCloud.style.right = 20 + 'px'
        cat.style.transform = 'translate(200px, 100px)'
    }, textDuration + 2000)

}
answerButton1.addEventListener('click', function(){  /* Ответ 1 */
    currAnswer = 1
    catReaction()
    console.log('Выбран ответ ',currAnswer)
    answerButton1.style.opacity = '1'
    answerButton2.style.opacity = '30%'
    answerButton3.style.opacity = '30%'
    answerButton4.style.opacity = '30%'
    nextButton.style.opacity = '1'
})
answerButton2.addEventListener('click', function(){  /* Ответ 2 */
    currAnswer = 2
    catReaction()
    console.log('Выбран ответ ',currAnswer)
    answerButton1.style.opacity = '30%'
    answerButton2.style.opacity = '1'
    answerButton3.style.opacity = '30%'
    answerButton4.style.opacity = '30%'
    nextButton.style.opacity = '1'
})
answerButton3.addEventListener('click', function(){  /* Ответ 3 */
    currAnswer = 3
    catReaction()
    console.log('Выбран ответ ',currAnswer)
    answerButton1.style.opacity = '30%'
    answerButton2.style.opacity = '30%'
    answerButton3.style.opacity = '1'
    answerButton4.style.opacity = '30%'
    nextButton.style.opacity = '1'
})
answerButton4.addEventListener('click', function(){  /* Ответ 4 */
    currAnswer = 4
    catReaction()
    console.log('Выбран ответ ',currAnswer)
    answerButton1.style.opacity = '30%'
    answerButton2.style.opacity = '30%'
    answerButton3.style.opacity = '30%'
    answerButton4.style.opacity = '1'
    nextButton.style.opacity = '1'
})
nextButton.addEventListener('click', function(){ /* Кнопка далее; отвечает за последовательность вопросов */
if (currAnswer == 0){
        textCloudIntro()
        textCloud.style.right = ''
        catTalkCall(3000)
        textRender('Пожалуйста выберите вариант ответа, прежде чем продолжить.')
        cat.style.transform = 'translate(500px, 100px)'
        setTimeout(function(){
            textCloud.style.opacity = 0
            textCloud.style.scale = 0
            textCloud.style.right = 20 + 'px'
            cat.style.transform = 'translate(200px, 100px)'
        }, 4000)
    }
    else{
        if (currQuestion != 5){
            test.style.opacity = 0
            test.style.scale = 0
            test.style.transform = 'rotate' + '(' + 360 + 'deg)' 
            answerReceiver(currAnswer)
            currAnswer = 0
            textCloudIntro()
            textCloud.style.right = ''
            catTalkCall(2000)
            textRender('Ответ принят, идём дальше!')
            cat.style.transform = 'translate(400px, 100px)'
            setTimeout(function(){
                textCloud.style.opacity = 0
                textCloud.style.scale = 0
                textCloud.style.right = 20 + 'px'
                cat.style.transform = 'translate(0px, 100px)'
                mainContainer.style.opacity = 0
                currQuestion++
                questionChange(currQuestion)
            }, 3000)
        }
        else{
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
                results()
                finale()
                if (id != null){
                    clearInterval(id)
                    id = null
                  }
            }, 5000)
        }
    }
})
function questionChange(questionNumber){ /*Меняет текст кнопок и вопросов */
mainContainer.style.opacity = 0
console.log('Следующий вопрос')
    setTimeout(function(){
        console.log('Текущий вопрос', questionNumber)
        if (questionNumber == 2){

            headerText.innerHTML = '<p><h1>Вопрос 2</h1></p>'
            questionText.innerHTML = '<p><h1>Насколько много внимания вам <p>нужно от других?</p></h1></p>'
            answerButtonText1.innerHTML = '<p><h1>Мне не нужно внимание, <p>я одинокий волк</P></h1></p>'
            answerButtonText2.innerHTML = '<p><h1>Совсем немножко</h1></p>'
            answerButtonText3.innerHTML = '<p><h1>Люблю внимание, но в меру</h1></p>'
            answerButtonText4.innerHTML = '<p><h1>ДАЙТЕ МНЕ ВАШЕ ВНИМАНИЕ!</h1></p>'
        }
        if (questionNumber == 3){

            headerText.innerHTML = '<p><h1>Вопрос 3</h1></p>'
            questionText.innerHTML = '<p><h1>По размерам я...</h1></p>'
            answerButtonText1.innerHTML = '<p><h1>Маленьковый</h1></p>'
            answerButtonText2.innerHTML = '<p><h1>Обычненький</h1></p>'
            answerButtonText3.innerHTML = '<p><h1>Большовый</h1></p>'
            answerButtonText4.innerHTML = '<p><h1>ОГРОМЕННЫЙ!</h1></p>'
        }
        if (questionNumber == 4){

            headerText.innerHTML = '<p><h1>Вопрос 4</h1></p>'
            questionText.innerHTML = '<p><h1>По уровню игривости...</h1></p>'
            answerButtonText1.innerHTML = '<p><h1>Я спокоен почти всегда</h1></p>'
            answerButtonText2.innerHTML = '<p><h1>Всё в пределах кошачьей нормы</h1></p>'
            answerButtonText3.innerHTML = '<p><h1>Я особый любитель пошалить</h1></p>'
            answerButtonText4.innerHTML = '<p><h1>Я тот ещё суетолог, <p>вообще не дающий покоя</p></h1></p>'
        }
        if (questionNumber == 5){

            headerText.innerHTML = '<p><h1>Вопрос 5</h1></p>'
            questionText.innerHTML = '<p><h1>Я предпочитаю кушать...</h1></p>'
            answerButtonText1.innerHTML = '<p><h1>Еду в шуршащих, <p>так и манящих, пакетиках </p></h1></p>'
            answerButtonText2.innerHTML = '<p><h1>Сырое мясо, как и мои древние предки</h1></p>'
            answerButtonText3.innerHTML = '<p><h1>Только свой любимый гипоалергенный-мега-насыщенный-эко-премиум-корм</h1></p>'
            answerButtonText4.innerHTML = '<p><h1>Всё, что только можно, <p>пока хозяин не видит</p></h1></p>'
        }
        fadeIn()
    }, 3000)


}

function results (){ /*Определяет победителя в тесте */
    let maxScore = 0
    let currScore = 0
    let winnerId = []
    for (let b = 0; b < 10; b++){
        currScore = catScore[b]
        if (currScore == maxScore){
            winnerId.push(b)
        }
        if (currScore > maxScore){
            maxScore = currScore
            winnerId = []
            winnerId.push(b)
        }

        console.log('Номер итерации', b, '; текущий лидер это', winnerId, 'со счётом ', maxScore)
    }
    console.log('Финалисты под номером',winnerId)
    winner = winnerId
    if (winnerId.length > 1){
        let choice = 0
        console.log('Размер массива', winnerId.length)
        choice = Math.floor(Math.random() * (winnerId.length))
        console.log('Рандом сделал выбор', choice)
        console.log('Но финалист должен быть один и это ',winnerId[choice])
        winner = winnerId[choice]
    }
    console.log('айди для победителя', winner)
}

function finale (){/*Выводит имя победителя */
/*skipButton.remove()*/
test.remove()
    if (winner == 0){
        winnerName = 'Скоттиш Страйт'
        rarity = 'Эпическая'
        catDescription = '<h1>Скоттиш-страйты — спокойные, дружелюбные и любознательные кошки. Они любят общество и сильно привязываются к своему хозяину. <p>К незнакомцам относятся настороженно, но без агрессии. Шотландские прямоухие кошки всюду следуют за человеком, но неохотно идут на руки, предпочитая не терять контакта с твёрдой поверхностью. <p> По совместительству Скоттиш Страйт является кошкой автора сайта. <p>От автора: "Прямоухие шотландцы те ещё надменные задницы, подстать своей королевской натуре, но они такие, чёрт возьми, милые и притягательные. Скучаю по своему Локки..."</h1>'
        imageType.push('(Images/Котики/Страйт/1.png)')
        imageType.push('(Images/Котики/Страйт/2.png)')
        imageType.push('(Images/Котики/Страйт/3.png)')
        imageType.push('(Images/Котики/Страйт/4.png)')
        imageType.push('(Images/Котики/Страйт/5.png)')
        imageType.push('(Images/Котики/Страйт/6.png)')
        imageType.push('(Images/Котики/Страйт/7.png)')
        console.log(imageType)
    }
 
    if (winner == 1){
        winnerName = 'Мейн-кун'
        rarity = 'Эпическая'
        catDescription = '<h1>Мейн-кун — самая крупная домашняя порода кошек. Отличительная особенность (кроме размера) — длинная шерсть, пушистый хвост и кисточки на ушах, которые делают мейн-куна похожим на рысь. <p>В холодную погоду мейн-куны оборачивают хвост вокруг тела, чтобы согреться. <p>Эти красивые кошки выносливы, легко приспосабливаются к новым условиям и довольно спокойны. Несмотря на внушительные размеры, мейн-куны — очень миролюбивые домашние питомцы. Они не будут драться с другими животными из-за еды или внимания хозяина. Кажется, что независимые величественные кошки легко переносят одиночество, но это не так. Мейн-куны очень привязаны к людям, особенно к своему хозяину.</h1>'
        imageType.push('(Images/Котики/Мейн/1.png)')
        imageType.push('(Images/Котики/Мейн/2.png)')
        imageType.push('(Images/Котики/Мейн/3.png)')
        imageType.push('(Images/Котики/Мейн/4.png)')
        imageType.push('(Images/Котики/Мейн/5.png)')
        imageType.push('(Images/Котики/Мейн/6.png)')
        imageType.push('(Images/Котики/Мейн/7.png)')

    }
    if (winner == 2){
        winnerName = 'Сибирская Рыжая'
        rarity = 'Редкая'
        catDescription = '<h1> Сибирская кошка — это порода кошек, которая отличается уникальной «водонепроницаемой» мягкой шерстью с очень густым подшёрстком и миловидной мордочкой с овальными, чуть раскосыми глазами. Сибирские кошки относятся к лесным породам крупного размера с мощным мускулистым телом. Особенность вида — уши с небольшими кисточками. Сибирская кошка хорошо уживается с детьми и другими питомцами и любит участвовать в делах семьи. Такие кошки нуждаются в человеческом внимании, но не любят, когда их гладят или берут на руки незнакомцы. Несмотря на довольно горделивый вид, они, как и большинство рыжих пород, обладают выразительной жопностью.</h1>'
        imageType.push('(Images/Котики/Сибирь/1.png)')
        imageType.push('(Images/Котики/Сибирь/2.png)')
        imageType.push('(Images/Котики/Сибирь/3.png)')
        imageType.push('(Images/Котики/Сибирь/4.png)')
        imageType.push('(Images/Котики/Сибирь/5.png)')
        imageType.push('(Images/Котики/Сибирь/6.png)')
        imageType.push('(Images/Котики/Сибирь/7.png)')
    }
    if (winner == 3){
        winnerName = 'Сиамская кошка'
        rarity = 'Редкая'
        catDescription = '<h1>Одна из самых популярных пород родом из Таиланда. Характерные особенности: изящные, точеные линии тела, пронзительный взгляд синих миндалевидных глаз в сочетании с умом и непокорным нравом. Сиамские кошки – энергичные, дружелюбные и игривые; являются одной из наиболее «разговорчивых» пород :3 </h1>'
        imageType.push('(Images/Котики/Сиам/1.png)')
        imageType.push('(Images/Котики/Сиам/2.png)')
        imageType.push('(Images/Котики/Сиам/3.png)')
        imageType.push('(Images/Котики/Сиам/4.png)')
        imageType.push('(Images/Котики/Сиам/5.png)')
        imageType.push('(Images/Котики/Сиам/6.png)')
        imageType.push('(Images/Котики/Сиам/7.png)')
    }
    if (winner == 4){
        winnerName = 'Манчкин'
        rarity = 'Легендарная'
        catDescription = '<h1> Манчкин — порода кошек среднего размера с короткими лапами и длинным позвоночником. <p>В движениях манчкинов можно проследить сходство с перемещениями хорька — эта порода не отличается грацией, присущей более длинноногим кошкам. Манчкины бывают как короткошёрстными, так и длинношёрстными, при этом обе разновидности имеют мягкую плюшевую шерсть. <p>Внешний вид манчкинов отражает их покладистый характер: это умные, активные, общительные кошки, любящие внимание человека. Хотя эти животные умеют высоко прыгать, многие из них предпочитают найти другой, более легкий способ забраться наверх.</h1>'
        imageType.push('(Images/Котики/Манч/1.png)')
        imageType.push('(Images/Котики/Манч/2.png)')
        imageType.push('(Images/Котики/Манч/3.png)')
        imageType.push('(Images/Котики/Манч/4.png)')
        imageType.push('(Images/Котики/Манч/5.png)')
        imageType.push('(Images/Котики/Манч/6.png)')
        imageType.push('(Images/Котики/Манч/7.png)')
    }
    if (winner == 5){
        winnerName = 'Сафари'
        rarity = 'Эпическая'
        catDescription = '<h1>Сафари — гибрид домашней и дикой кошки. Для скрещивания привлекались дикая кошка Жоффруа, а также сиамская, американская короткошерстная и бенгальская породы. Представители породы — обладатели добродушного характера: они любят своих хозяев, никогда не откажутся от внимания. Обожают проводить время с человеком, но при этом не лишены некоторой доли самостоятельности: кошка сафари не прочь пошалить в гордом одиночестве. А еще она очень ценит комфорт, поэтому с удовольствием поваляется на мягком лежаке. Конечно, гены диких котов трудно игнорировать: сафари — прирожденный хищник, поэтому совместное содержание такой кошки с птицей или грызуном не рекомендуется :)</h1>'
        imageType.push('(Images/Котики/Сафари/1.png)')
        imageType.push('(Images/Котики/Сафари/2.png)')
        imageType.push('(Images/Котики/Сафари/3.png)')
        imageType.push('(Images/Котики/Сафари/4.png)')
        imageType.push('(Images/Котики/Сафари/5.png)')
        imageType.push('(Images/Котики/Сафари/6.png)')
        imageType.push('(Images/Котики/Сафари/7.png)')
    }
    if (winner == 6){
        winnerName = 'Бурма'
        rarity = 'Легендарная'
        catDescription = '<h1> Бурманские кошки — ласковые и контактные домашние питомцы, характерные черты которых – гладкая атласная шерстка орехово-золотистого или шоколадного оттенка и большие выразительные глаза. Бурм можно назвать «эталоном» домашней кошки: любят сидеть на руках, хорошо ладят с детьми и домашними животными, привязаны к хозяину как собака.</h1>'
        imageType.push('(Images/Котики/Бурма/1.png)')
        imageType.push('(Images/Котики/Бурма/2.png)')
        imageType.push('(Images/Котики/Бурма/3.png)')
        imageType.push('(Images/Котики/Бурма/4.png)')
        imageType.push('(Images/Котики/Бурма/5.png)')
        imageType.push('(Images/Котики/Бурма/6.png)')
        imageType.push('(Images/Котики/Бурма/7.png)')
    }
    if (winner == 7){
        winnerName = 'Русская Голубая'
        rarity = 'Редкая'
        catDescription = '<h1>Русская голубая кошка — это порода кошек, которая отличается эффектным голубовато-дымчатым окрасом и пронзительным взглядом ярко-зеленых глаз. Это активные и грациозные создания, которые радуют хозяев неиссякаемой энергией и высокими умственными способностями. Завораживающий взгляд зеленых глаз, изящество и красота шерсти делают русскую голубую кошку одной и самых востребованных пород.</h1>'
        imageType.push('(Images/Котики/Голуб/1.png)')
        imageType.push('(Images/Котики/Голуб/2.png)')
        imageType.push('(Images/Котики/Голуб/3.png)')
        imageType.push('(Images/Котики/Голуб/4.png)')
        imageType.push('(Images/Котики/Голуб/5.png)')
        imageType.push('(Images/Котики/Голуб/6.png)')
        imageType.push('(Images/Котики/Голуб/7.png)')
    }
    if (winner == 8){
        winnerName = 'Экзотическая кошка'
        rarity = 'Эпическая'
        catDescription = '<h1>Экзотическая короткошерстная кошка является заветной мечтой для многих людей, благодаря большим выразительным глазам, делающим ее похожей на героиню аниме, милому курносому носику, круглой мордочке и плюшевой шерсти. Экзоты напоминают мягкие игрушки, с которыми хочется возиться весь день! Из-за живого ума и природного любопытства представители именно этой породы с завидной регулярностью становятся героями юмористических видео. Эти кошки спокойные и мирные по характеру, любят сидеть на коленях, но постоянного внимания не требуют. Питомцы чистоплотны, однако им требуются уход за кожной складкой на мордочке. Экзоты очень ласковые и нежные, весьма привязаны к своему хозяину. </h1>'
        imageType.push('(Images/Котики/Экз/1.png)')
        imageType.push('(Images/Котики/Экз/2.png)')
        imageType.push('(Images/Котики/Экз/3.png)')
        imageType.push('(Images/Котики/Экз/4.png)')
        imageType.push('(Images/Котики/Экз/5.png)')
        imageType.push('(Images/Котики/Экз/6.png)')
        imageType.push('(Images/Котики/Экз/7.png)')
    }
    if (winner == 9){
        winnerName = 'Большой Русский Шлёпа'
        rarity = 'Легендарная'
        catDescription = '<h1>На самом деле герой мемов Шлёпа представитель породы каракалл. Каракалл — дикая кошка, которую по-другому еще называют пустынной рысью. Они обладают обтекаемым, стройным телом, покрытым короткой шерстью золотисто-красноватого оттенка, а также с уникальным рисунком в области морды. Каракалы могут бегать со скоростью 80 км в час, опережая таких животных, как антилопы и страусы. Они опытные, упорные альпинисты и способные землекопы, способные отбиваться от хищников в два раза больше их. Но можно ли заводить котят каракал? Котята каракала уникальны и милы, но необходимо учитывать, что это в первую очередь дикая кошка. Вы бы попытались завести гиену в качестве домашнего питомца? Однако если у вас получится с детства приучить котёнка  к человеку и дому, то он вырастет мягким и покладистым, и он ни чем не будет отличаться от обычного домашнего котика: будет любить играть, подставлять ушко, чтобы погладили, и будет с трудом переносить одиночество.</h1>'
        imageType.push('(Images/Котики/Шлёпа/1.png)')
        imageType.push('(Images/Котики/Шлёпа/2.png)')
        imageType.push('(Images/Котики/Шлёпа/3.png)')
        imageType.push('(Images/Котики/Шлёпа/4.png)')
        imageType.push('(Images/Котики/Шлёпа/5.png)')
        imageType.push('(Images/Котики/Шлёпа/6.png)')
        imageType.push('(Images/Котики/Шлёпа/7.png)')

    }
    console.log('Поздравляю, вы ', winnerName, 'с редкостью ', rarity)
    setTimeout(finalAnimation, 3000)
}

