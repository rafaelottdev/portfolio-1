const slideBtnList = [... document.querySelectorAll('.slide-btn')]

let currentSlideValue = 0
let currentSlideBarValue = 0

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

function slideToLeft(listElement, cardList, slideBar) {
    if(cardList.length > 3) {
        currentSlideValue += 350

        listElement.style.left = `${currentSlideValue}px`
    }
}

function slideToRight(listElement, cardList, slideBar) {
    if(cardList.length > 3) {
        currentSlideValue -= 350

        listElement.style.left = `${currentSlideValue}px`
    }
}


function whatBtn(clickedClass) {
    const projectList = document.querySelector('.container_project-list')
    const cardList = [... document.querySelectorAll('.project-list__card')]
    const slideBar = document.querySelector('.container__project-slide-guide > div > div')
    let btnSide = ""

    switch (clickedClass) {
        case "project-slide-container__left-btn":
            slideToLeft(projectList, cardList, slideBar)
            break
    
        case "project-slide-container__right-btn":
            slideToRight(projectList, cardList, slideBar)
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
