const focusedElementsList = [... document.querySelectorAll('.focused-element')]

function unFocus(event) {
    const currentElement = event.target

    currentElement.blur()

    if(currentElement.className == 'services-item__text' || currentElement.className.animVal == 'svg-btn') {
        const currentElementFather = currentElement.parentNode

        currentElementFather.blur()
    }
}

focusedElementsList.forEach((focusedElement) => {
    focusedElement.addEventListener('click', unFocus)
})
