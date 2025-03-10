const slideBtnList = [... document.querySelectorAll('.slide-btn')]

let currentSlideValue = 350

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

function whatBtn(clickedClass) {
    let btnSide = ""

    switch (clickedClass) {
        case "project-slide-container__left-btn":
            btnSide = 'esquerdo'
            break
    
        case "project-slide-container__right-btn":
            btnSide = 'direito'
            break
    }

    return btnSide
}

function clickedButton(event) {
    const clickedClass = getClassBtn(event)

    const btn = whatBtn(clickedClass)
}

slideBtnList.forEach((btn) => {
    btn.addEventListener('click',clickedButton)
})

// const projectList = document.querySelector('.container_project-list')
