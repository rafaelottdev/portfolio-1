const slideBtnList = [... document.querySelectorAll('.slide-btn')]

function toLeft() {

}

function toRight() {
    
}

function identifyClickedBtn(event) {
    const btn = event.target
    let btnClassList = btn.className

    if(btnClassList.animVal == "svg-btn") {
        btnClassList = btn.parentNode.className
    }

    const btnClass = btnClassList.split(" ")[0]

    switch (btnClass) {
        case "project-slide-container__left-btn":
            toLeft()
            break

        case "roject-slide-container__right-btn":
            toRight()
            break
    }
}

slideBtnList.forEach((btn) => {
    btn.addEventListener('click',identifyClickedBtn )
})
