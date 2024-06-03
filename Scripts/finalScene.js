var effectText = document.getElementById('finalText')
var ctx = finalText.getContext('2d')
const finalCard = document.querySelector('.finalCard')
const cardText = document.querySelector('.cardText')
const catName = document.querySelector('.catName')
const IMG = document.querySelector('.IMG')
const catDescr = document.querySelector('.catDescr')

ctx.strokeStyle = "rgb(255, 0, 234, 1)"
ctx.font = "50px mainText"
ctx.lineWidth = 3
let flashNumber = 0
let flash 
let cardScale = 0



function finalAnimation(){ /*Анимации карточки и фона */
    cat.style.opacity = 0
    cat.style.scale = 0
    mainContainer.style.backgroundColor = 'black'
    console.log('Фон чёрный')
    setTimeout(function(){
        mainContainer.style.opacity = 1
        finalCard.style.opacity = 1
    }, 1000)

    setTimeout(function(){
        flash = setInterval(function(){
            mainContainer.style.transition = 'all ' + 0.5 + 's' + ' ease'
            mainContainer.style.backgroundColor = 'rgb(3, 128, 96)'
            flashNumber++
            cardScale = cardScale + 0.2
            finalCard.style.scale = cardScale
    
            setTimeout(function(){
                mainContainer.style.transition = 'all ' + 2 + 's' + ' ease'
                mainContainer.style.backgroundColor = 'black'
                
            },500)
        }, 2500)
    }, 1000)
    let prov = setInterval(function(){
        if (flashNumber >= 3){
            clearInterval(flash)
            flash = null
            clearInterval(prov)
            prov=null
        }
    }, 500)
/*Эффекты для появления карточки и её контура */
    setTimeout(function(){
        finalCard.style.opacity = 1
        if (rarity == 'Эпическая'){
            let shakes = 0
            finalCard.style.borderColor = 'rgb(132, 0, 255)'
            let epicShake = setInterval(function(){
                finalCard.style.transition = 'all ' + 0.1 + 's' + ' ease'
                finalCard.style.transform = 'rotate' + '(2deg)'
                console.log('Повернулись влево')
                setTimeout(function(){
                    finalCard.style.transform = 'rotate' + '(-2deg)'
                    console.log('Повернулись в право')
                    shakes++
                }, 200)
                if (shakes >=3){
                    clearInterval(epicShake)
                    epicShake=null
                }
            },400)
            setTimeout(function(){
                finalCard.style.transform = 0
                finalCard.style.transform = 'rotate' + '(0deg)'
                console.log('вернулись')
                finalCard.style.transition = 'all ' + 0.5 + 's' + ' ease'
            },2000)
        }
        if (rarity == 'Редкая'){
            finalCard.style.borderColor = 'rgb(12, 117, 255)'
        }
    },9000)
    setTimeout(function(){ /*Анимация для легендарной редкости настолько особенная, что для неё нужен отдельный таймер)) */
        if (rarity == 'Легендарная'){
            setTimeout(function(){
            let shakes = 0
            let epicShake = setInterval(function(){
                finalCard.style.transition = 'all ' + 0.1 + 's' + ' ease'
                finalCard.style.transform = 'translate(-10px, -5px)'
                setTimeout(function(){
                    finalCard.style.transform = 'translate(10px, 5px)'
                    shakes++
                }, 200)

                if (shakes >=5){
                    clearInterval(epicShake)
                    epicShake=null
                }
            },400)

            setTimeout(function(){
                finalCard.style.transform = 0
                console.log('вернулись')
                
            },5000)
        },4000)

            setInterval(function(){ /*Анимация переливания цвета для лег редкости */
                finalCard.style.borderColor = 'rgb(0,255,0)'
                setTimeout(function(){
                    finalCard.style.borderColor = 'rgb(255,255,0)'
                    setTimeout(function(){
                        finalCard.style.borderColor = 'rgb(255,0,255)'
                        setTimeout(function(){
                            finalCard.style.borderColor = 'rgb(0,255,255)'
                        },1000)
                    },1000)
                },1000)
            },4000)
        }
    }, 4000)

    setTimeout(function(){ /*Общая анимация для карточки и фона */

        mainContainer.style.transition = 'all ' + 3 + 's' + ' ease'
        mainContainer.style.backgroundColor = 'rgb(3, 128, 96)'

        setTimeout(function(){
            finalCard.style.transition = 'all ' + 1 + 's' + ' ease'
            finalCard.style.transform = 'translate(-500px)'
            setTimeout(function(){
                cat.style.transform = 'translate(200px, 100px)'
                cat.style.opacity = 1
                cat.style.scale = 1
                cardText.style.transition = 'all ' + 3 + 's' + ' ease'
                cardText.style.opacity = 1
                cardText.style.scale = 1
                setTimeout(function(){
                    renderFinText()
                    cat.style.transform = 'translate(400px, 100px)'
                    if (rarity == 'Легендарная'){
                        catSpecialReaction()
                    }
                    else{
                        catFinalReaction()
                    }
                }, 1000)
            }, 1000)
        }, 1000)
    },12000)
}

function renderFinText(){/* Ф-я рендера текста редкости, изменения цвета карточки*/
    let x = ctx.canvas.width / 2
    let y = ctx.canvas.height / 2
    finalCard.style.backgroundColor ='rgb(199,213,229)'
    ctx.textBaseline = "middle"
    ctx.textAlign = "center"
    let timer = 35
    if (rarity == 'Редкая'){
        let grad = ctx.createLinearGradient(x-200,y,x,y)
        setInterval(function(){
            setTimeout(function(){
                ctx.fillStyle = "darkblue"
                ctx.fillText(rarity, x, y)
                setTimeout(function(){
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                    grad = ctx.createLinearGradient(x-200,y,x,y)
                    grad.addColorStop(0, "darkblue")
                    grad.addColorStop(0.5, "lightblue")
                    grad.addColorStop(1, "darkblue")
                    ctx.fillStyle = grad
                    ctx.fillText(rarity, x, y)
                    setTimeout(function(){
                        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                        grad = ctx.createLinearGradient(x-200,y,x+50,y)
                        grad.addColorStop(0, "darkblue")
                        grad.addColorStop(0.5, "lightblue")
                        grad.addColorStop(1, "darkblue")
                        ctx.fillStyle = grad
                        ctx.fillText(rarity, x, y)
                        setTimeout(function(){
                            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                            grad = ctx.createLinearGradient(x-200,y,x+100,y)
                            grad.addColorStop(0, "darkblue")
                            grad.addColorStop(0.5, "lightblue")
                            grad.addColorStop(1, "darkblue")
                            ctx.fillStyle = grad
                            ctx.fillText(rarity, x, y)
                            setTimeout(function(){
                                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                grad = ctx.createLinearGradient(x-200,y,x+150,y)
                                grad.addColorStop(0, "darkblue")
                                grad.addColorStop(0.5, "lightblue")
                                grad.addColorStop(1, "darkblue")
                                ctx.fillStyle = grad
                                ctx.fillText(rarity, x, y)
                                setTimeout(function(){
                                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                    grad = ctx.createLinearGradient(x-175,y,x+200,y)
                                    grad.addColorStop(0, "darkblue")
                                    grad.addColorStop(0.5, "lightblue")
                                    grad.addColorStop(1, "darkblue")
                                    ctx.fillStyle = grad
                                    ctx.fillText(rarity, x, y)
                                    setTimeout(function(){
                                        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                        grad = ctx.createLinearGradient(x-150,y,x+250,y)
                                        grad.addColorStop(0, "darkblue")
                                        grad.addColorStop(0.5, "lightblue")
                                        grad.addColorStop(1, "darkblue")
                                        ctx.fillStyle = grad
                                        ctx.fillText(rarity, x, y)
                                        setTimeout(function(){
                                            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                            grad = ctx.createLinearGradient(x-125,y,x+300,y)
                                            grad.addColorStop(0, "darkblue")
                                            grad.addColorStop(0.5, "lightblue")
                                            grad.addColorStop(1, "darkblue")
                                            ctx.fillStyle = grad
                                            ctx.fillText(rarity, x, y)
                                            setTimeout(function(){
                                                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                                grad = ctx.createLinearGradient(x-100,y,x+350,y)
                                                grad.addColorStop(0, "darkblue")
                                                grad.addColorStop(0.5, "lightblue")
                                                grad.addColorStop(1, "darkblue")
                                                ctx.fillStyle = grad
                                                ctx.fillText(rarity, x, y)
                                                setTimeout(function(){
                                                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                                    ctx.fillStyle = "darkblue"
                                                    ctx.fillText(rarity, x, y)
                                                    
                                                }, timer)
                                            }, timer)
                                        }, timer)
                                    }, timer)
                                }, timer)
                            }, timer)
                        }, timer)
                    }, timer)
                }, timer)
            }, timer)
        }, 3000)

    }
    
    if (rarity == 'Эпическая'){
        let textColor = "rgb(132, 0, 255"
        ctx.fillStyle = textColor + ', 1' + ')'




        setInterval(function(){
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            ctx.strokeStyle = textColor
            ctx.fillText(rarity, x,  y)
            ctx.strokeText(rarity, x,  y)

            setTimeout(function(){
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            ctx.fillText(rarity, x,  y)
            ctx.strokeStyle = textColor + ', 0.9' + ')'
            ctx.strokeText(rarity, x - 5, y)
            ctx.strokeStyle = textColor + ', 0.9' + ')'
            ctx.strokeText(rarity, x + 5, y)
            setTimeout(function(){
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                ctx.fillText(rarity, x,  y)

                ctx.strokeStyle = textColor + ', 0.8' + ')'
                ctx.strokeText(rarity, x - 10, y)
                ctx.strokeStyle = textColor + ', 0.8' + ')'
                ctx.strokeText(rarity, x + 10, y)
                setTimeout(function(){
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                    ctx.fillText(rarity, x,  y)

                    ctx.strokeStyle = textColor + ', 0.8' + ')'
                    ctx.strokeText(rarity, x - 15, y)
                    ctx.strokeStyle = textColor + ', 0.8' + ')'
                    ctx.strokeText(rarity, x + 15, y)
                    setTimeout(function(){
                        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                        ctx.fillText(rarity, x,  y)

                        ctx.strokeStyle = textColor + ', 0.7' + ')'
                        ctx.strokeText(rarity, x - 20, y)
                        ctx.strokeStyle = textColor + ', 0.7' + ')'
                        ctx.strokeText(rarity, x + 20, y)
                        setTimeout(function(){
                            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                            ctx.fillText(rarity, x,  y)

                            ctx.strokeStyle = textColor + ', 0.6' + ')'
                            ctx.strokeText(rarity, x - 25, y)
                            ctx.strokeStyle = textColor + ', 0.6' + ')'
                            ctx.strokeText(rarity, x + 25, y)
                            setTimeout(function(){
                                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                ctx.fillText(rarity, x,  y)

                                ctx.strokeStyle = textColor + ', 0.5' + ')'
                                ctx.strokeText(rarity, x - 30, y)
                                ctx.strokeStyle = textColor + ', 0.5' + ')'
                                ctx.strokeText(rarity, x + 30, y)
                                setTimeout(function(){
                                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                    ctx.fillText(rarity, x,  y)

                                    ctx.strokeStyle = textColor + ', 0.4' + ')'
                                    ctx.strokeText(rarity, x - 35, y)
                                    ctx.strokeStyle = textColor + ', 0.4' + ')'
                                    ctx.strokeText(rarity, x + 30, y)
                                    setTimeout(function(){
                                        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                        ctx.fillText(rarity, x,  y)

                                        ctx.strokeStyle = textColor + ', 0.3' + ')'
                                        ctx.strokeText(rarity, x - 40, y)
                                        ctx.strokeStyle = textColor + ', 0.3' + ')'
                                        ctx.strokeText(rarity, x + 40, y)
                                        setTimeout(function(){
                                            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                            ctx.fillText(rarity, x,  y)

                                            ctx.strokeStyle = textColor + ', 0.2' + ')'
                                            ctx.strokeText(rarity, x - 45, y)
                                            ctx.strokeStyle = textColor + ', 0.2' + ')'
                                            ctx.strokeText(rarity, x + 45, y)
                                            setTimeout(function(){
                                                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                                ctx.fillText(rarity, x,  y)

                                                ctx.strokeStyle = textColor + ', 0.1' + ')'
                                                ctx.strokeText(rarity, x - 50, y)
                                                ctx.strokeStyle = textColor + ', 0.1' + ')'
                                                ctx.strokeText(rarity, x + 50, y)
                                                setTimeout(function(){
                                                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                                    ctx.fillText(rarity, x,  y)

                                                    ctx.strokeStyle = textColor + ', 0.05' + ')'
                                                    ctx.strokeText(rarity, x - 55, y)
                                                    ctx.strokeStyle = textColor + ', 0.05' + ')'
                                                    ctx.strokeText(rarity, x + 55, y)
                                                    setTimeout(function(){
                                                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                                    ctx.strokeStyle = textColor + ', 1' + ')'
                                                    ctx.fillText(rarity, x,  y)
                                                    },timer)
                                                },timer)
                                                },timer)
                                            },timer)
                                        },timer)
                                    },timer)
                                },timer)
                            },timer)
                        },timer)
                    },timer)
                },timer)
            },timer)
        },3000)
    }

    if (rarity == 'Легендарная'){
        timer = 200
        setInterval(function(){
            ctx.strokeStyle = "rgb(0,255,0)"/*Начальный цвет - зелёный */
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            ctx.fillStyle = "white"
            ctx.strokeText(rarity, x,  y)
            ctx.fillText(rarity, x,  y)
            setTimeout(function(){
                ctx.strokeStyle = "rgb(65,255,0)"
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                ctx.fillStyle = "white"
                ctx.strokeText(rarity, x,  y)
                ctx.fillText(rarity, x,  y)
                setTimeout(function(){
                    ctx.strokeStyle = "rgb(130,255,0)"
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                    ctx.fillStyle = "white"
                    ctx.strokeText(rarity, x,  y)
                    ctx.fillText(rarity, x,  y)
                    setTimeout(function(){
                        ctx.strokeStyle = "rgb(200,255,0)" 
                        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                        ctx.fillStyle = "white"
                        ctx.strokeText(rarity, x,  y)
                        ctx.fillText(rarity, x,  y)
                        setTimeout(function(){
                            ctx.strokeStyle = "rgb(255,255,0)"/*Пришли к жёлтому */
                            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                            ctx.fillStyle = "white"
                            ctx.strokeText(rarity, x,  y)
                            ctx.fillText(rarity, x,  y)
                            setTimeout(function(){
                                ctx.strokeStyle = "rgb(255,200,65)"
                                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                ctx.fillStyle = "white"
                                ctx.strokeText(rarity, x,  y)
                                ctx.fillText(rarity, x,  y)
                                setTimeout(function(){
                                    ctx.strokeStyle = "rgb(255,130,130)"
                                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                    ctx.fillStyle = "white"
                                    ctx.strokeText(rarity, x,  y)
                                    ctx.fillText(rarity, x,  y)
                                    setTimeout(function(){
                                        ctx.strokeStyle = "rgb(255,65,200)"
                                        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                        ctx.fillStyle = "white"
                                        ctx.strokeText(rarity, x,  y)
                                        ctx.fillText(rarity, x,  y)
                                        setTimeout(function(){
                                            ctx.strokeStyle = "rgb(255,0,255)"/*Пришли к мадженте */
                                            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                            ctx.fillStyle = "white"
                                            ctx.strokeText(rarity, x,  y)
                                            ctx.fillText(rarity, x,  y)
                                            setTimeout(function(){
                                                ctx.strokeStyle = "rgb(200,65,255)"
                                                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                                ctx.fillStyle = "white"
                                                ctx.strokeText(rarity, x,  y)
                                                ctx.fillText(rarity, x,  y)
                                                setTimeout(function(){
                                                    ctx.strokeStyle = "rgb(130,130,255)"
                                                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                                    ctx.fillStyle = "white"
                                                    ctx.strokeText(rarity, x,  y)
                                                    ctx.fillText(rarity, x,  y)
                                                    setTimeout(function(){
                                                        ctx.strokeStyle = "rgb(65,200,255)"
                                                        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                                        ctx.fillStyle = "white"
                                                        ctx.strokeText(rarity, x,  y)
                                                        ctx.fillText(rarity, x,  y)
                                                        setTimeout(function(){
                                                            ctx.strokeStyle = "rgb(0,255,255)"/*Пришли к циану */
                                                            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                                            ctx.fillStyle = "white"
                                                            ctx.strokeText(rarity, x,  y)
                                                            ctx.fillText(rarity, x,  y)
                                                            setTimeout(function(){
                                                                ctx.strokeStyle = "rgb(0,255,200)"
                                                                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                                                ctx.fillStyle = "white"
                                                                ctx.strokeText(rarity, x,  y)
                                                                ctx.fillText(rarity, x,  y)
                                                                setTimeout(function(){
                                                                    ctx.strokeStyle = "rgb(0,255,130)"
                                                                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                                                    ctx.fillStyle = "white"
                                                                    ctx.strokeText(rarity, x,  y)
                                                                    ctx.fillText(rarity, x,  y)
                                                                    setTimeout(function(){
                                                                        ctx.strokeStyle = "rgb(0,255,65)"/*Почти пришли к зелёному*/
                                                                        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
                                                                        ctx.fillStyle = "white"
                                                                        ctx.strokeText(rarity, x,  y)
                                                                        ctx.fillText(rarity, x,  y)
                                                                    },timer)
                                                                },timer)
                                                            },timer)
                                                        },timer)
                                                    },timer)
                                                },timer)
                                            },timer)
                                        },timer)
                                    },timer)
                                },timer)
                            },timer)
                        },timer)
                    },timer)
                },timer)
            },timer)
        },3000)
    }
    setTimeout
    if(winnerName == 'Большой Русский Шлёпа'){
        finalCard.style.transform = 'translate(-550px)'
        catDescr.style.width = '900px'
    }
    
setTimeout(renderInfo, 3000)

let lend = 0
setTimeout(function(){/*Реюзнутая функция рендера текста, для имени; внешний тайм аут ничего не делает */
    if (lend != null){ 
    clearInterval(lend)
    lend = null
    }
      let renderName = ''
      let nCount = 0
      let maxName =  winnerName.length
      lend = setInterval(function(){
        renderName = renderName + winnerName[nCount]
        nCount++
        catName.innerHTML = '<p><h1>' + renderName + '</h1></p>'
      }, 100)
    
      let spyName = setInterval(function(){
        if (nCount == maxName){
          clearInterval(lend)
          clearInterval(spyName)
          lend = null
          spyName = null
    
        }
      }, 50)
}, 100)
}

function renderInfo(){/* Ф-я рендера текста описания*/
    imageRender()
    let bend = 0
    setTimeout(function(){/*Реюзнутая функция рендера текста, для описания; тайм аут ничего не делает */
        if (bend != null){ 
        clearInterval(bend)
        bend = null
        }
        let renderDescr = ''
        let bCount = 0
        let maxDescr =  catDescription.length
        bend = setInterval(function(){
            renderDescr = renderDescr + catDescription[bCount]
            bCount++
            catDescr.innerHTML = '<p><h1>' + renderDescr + '</h1></p>'
        }, 50)
        
        let spyDescr = setInterval(function(){
            if (bCount == maxDescr){
            clearInterval(bend)
            clearInterval(spyDescr)
            bend = null
            spyDescr = null
        
            }
        }, 25)
    }, 50)
    console.log('Рендерим инфу и картинки')

}
function imageRender(){/* Ф-я рендера изображений + делает переходы между ними*/
/* Часть кода снизу должна исправить проблему с мерцающими картинками, но оно не помогает; к счастью этот баг появляется не всегда и он исчезает после первой прокрутки всех фото */
/*let c  
    for (c = 0; c <= 6; c++){
        IMG.style.backgroundImage =  'url' + imageType[c]
        console.log('Фотография прокручена ' + imageType[c])
    }
    if (c == 5){
        IMG.style.backgroundImage = 'url(Images/ИконкаКота2.png)'
        console.log('Оставили фон с котиками')
    }
    */
    let currImage = 0
    IMG.style.backgroundImage =  'url' + imageType[currImage]
    currImage++
    let photo = setInterval(function(){
        if (currImage == 7){
            currImage = 0
        }
        IMG.style.backgroundImage =  'url' + imageType[currImage]
        currImage++
    }, 5000)
    
    
}

function catSpecialReaction(){/* Особая реакция Шмони на легендарную редкость*/
        console.log('Шмоня омг')
        cat.style.backgroundImage = 'url(Images/OmgСat.png)'
        setTimeout(function(){
            cat.style.backgroundImage = 'url(Images/OmgСat1.png)'
            setTimeout(function(){
                cat.style.backgroundImage = 'url(Images/OmgСat.png)'
                setTimeout(function(){
                    cat.style.backgroundImage = 'url(Images/OmgСat1.png)'
                    setTimeout(function(){
                        cat.style.backgroundImage = 'url(Images/OmgСat.png)'
                        setTimeout(function(){
                            cat.style.backgroundImage = 'url(Images/OmgСat1.png)'
                            setTimeout(function(){
                                cat.style.backgroundImage = 'url(Images/OmgСat.png)'

                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
        setTimeout(function(){
            catHappy()
            textCloud.style.left = '-550px'
            cat.style.transform = 'translate(600px, 100px)'
            textCloudIntro()
            catTalkCall(3000)
            textRender('Вы выбили кошечку легендарной редкости!')
            setTimeout(function(){
                textCloudIntro()
                catTalkCall(3000)
                textRender('Я просто в шоке! Такое бывает действительно очень редко!')
                catFinalReaction()
            },5000)
        },7000)
    }
function catFinalReaction(){/*Часть заключительного монолога Шмони */
    okButtonClear()
    introText.style.fontSize = '250%'
    if (winnerName == 'Большой Русский Шлёпа'){
        winnerName = 'Каракалл, а не на Большого Русского Шлёпу)))'
    }
    setTimeout(function(){
        textCloud.style.left = '-550px'
        cat.style.transform = 'translate(600px, 100px)'
        textCloudIntro()
        catTalkCall(5000)
        textRender('По результатам теста вы больше всего похожи на породу ' + winnerName +'. Поздравляю!')
        setTimeout(function(){
            catTalkCall(5000)
            textRender('Не расстраивайтесь, если редкость вашей кошки не такая высокая. Все кошки по своему прекрасны :3')
            setTimeout(function(){
                catTalkCall(5000)
                textRender('Значение редкости всего лишь показывает, как часто другие пользователи выбивают данную породу кошек.')
                setTimeout(function(){
                    catTalkCall(6000)
                    textRender('Когда вы будете готовы продолжить, то дайте мне знать! Как и любого, многоуважаемого гостя, вас нужно будет как следует проводить!')
                    setTimeout(function(){
                        count = 4
                        okButtonAppear()
                    },6000)
                },8000)
            },7000)
        },7000)
    },5000)


}
function finalCall(){/*Прощальная речь Шмони */
    cat.style.backgroundImage = 'url(Images/Idle.png)'
    finalCard.style.transition = 'all ' + 3 + 's' + ' ease'
    finalCard.style.opacity = 0
    textCloud.style.opacity = 0
    textCloud.style.scale = 0
    setTimeout(function(){
        finalCard.style.scale = 0
    },3000)

    cat.style.transition = 'all ' + 3 + 's' + ' ease'
    cat.style.transform = 'translate(0px, 100px)'
    setTimeout(function(){
        finalCard.remove()
        textCloud.style.opacity = 1
        textCloud.style.scale = '50%'
        cat.style.transition = 'all ' + 3 + 's' + ' ease'
        cat.style.transform = 'translate(200px, 100px)'
        textRender('Ну, а на этом всё!')
        catTalkCall(2000)
        setTimeout(function(){
            textRender('Надеюсь вам было интересно на этом сайте и он хоть как-то вас развлёк или может быть даже удивил.')
            catTalkCall(5000)
            setTimeout(function(){
                textRender('Если вам и в правду понравилось, то пройдите тест ещё раз. Быть может найдётё то, что ещё не видели :3')
                catTalkCall(5000)
                setTimeout(function(){
                    textRender('К сожалению, так как я всего лишь часть кода, то я не смогу вас вспомнить, когда увижу в следующий раз... Как бы я не хотел этого...')
                    catTalkCall(7000)
                    setTimeout(function(){
                        textRender('Но это не повод расстраиваться! Осознавая, что быть может когда-нибудь я смогу снова встретиться с таким чудесным пользователем, как вы, меня переполняет эмоциями!')
                        catTalkCall(7000)
                        setTimeout(function(){
                            textRender('Эта мысль меня очень радует :)')
                            catTalkCall(2000)
                            setTimeout(function(){
                                catHappy()
                                setTimeout(function(){
                                    textRender('До свидания! Расскажите о сайте друзьям! Хорошего вам дня и до новых встреч!')
                                    catTalkCall(4000)
                                    setTimeout(function(){
                                        textRender('И помните...')
                                        catTalkCall(1000)
                                        setTimeout(function(){
                                            textRender('Коты управляют миром! Муахахахахахаха!')
                                            catTalkCall(2000)
                                            setTimeout(function(){
                                                textCloud.style.transition = 'all ' + 3 + 's' + ' ease'
                                                cat.style.opacity = 0
                                                textCloud.style.opacity = 0
                                                mainContainer.style.opacity = 0
                                                setTimeout(function(){
                                                    mainContainer.style.opacity = 0
                                                    setTimeout(function(){
                                                        location.reload()
                                                            }, 1000)
                                                  },3000)
                                            },2000)
                                        },2000)
                                    },6000)
                                },3000)
                            },2500)
                        },9000)
                    },8500)
                },6500)
            },6500)
        },3000)
    },3000)
    

}
