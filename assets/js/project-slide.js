const slideBtnList = [... document.querySelectorAll('.slide-btn')]

let currentSlideValue = 0

function getClassBtn(event) {
    const btn = event.target
    let btnClassList = btn.className

    if (btnClassList.animVal == "svg-btn") {
        btnClassList = btn.parentNode.className
    }

    else if (btnClassList.animVal == "") {
        btnClassList = btn.parentNode.parentNode.className
    }
    
    return btnClass = btnClassList.split(" ")[0]
}

function slideToLeft(listElement, cardList) {
    console.log(cardList)
    if(cardList.length > 3) {
        currentSlideValue += 350

        listElement.style.left = `${currentSlideValue}px`
    }
}

function slideToRight(listElement, cardList) {
    if(cardList.length > 3) {
        currentSlideValue -= 350

        listElement.style.left = `${currentSlideValue}px`
    }
}

function whatBtn(clickedClass) {
    const projectList = document.querySelector('.container_project-list')
    const cardList = [... document.querySelectorAll('.project-list__card')]
    let btnSide = ""

    switch (clickedClass) {
        case "project-slide-container__left-btn":
            slideToLeft(projectList, cardList)
            break
    
        case "project-slide-container__right-btn":
            slideToRight(projectList, cardList)
            break
    }

    return btnSide
}

function clickedButton(event) {
    const clickedClass = getClassBtn(event)

    whatBtn(clickedClass)
}

slideBtnList.forEach((btn) => {
    btn.addEventListener('click',clickedButton)
})
