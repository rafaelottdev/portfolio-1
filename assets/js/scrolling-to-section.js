const headerTitle = document.querySelector('.menu-container__title')
const sectionList = [... document.querySelectorAll('.list__section-item')]
const exploreBtn = document.querySelector('.button')
const workToguetherBtn = document.querySelector('.work-container__work-link')

function scrollingToAbout(widthSize) {
    if (widthSize < 930) {
        window.scrollTo({top: 520, left: 0, behavior: "smooth"})
        console.log('ativou')
    }

    else {
        window.scrollTo({top: 550, left: 0, behavior: "smooth"})
    }
}

function scrollingToServices(widthSize) {
    if (widthSize < 930 && widthSize > 561) {
        window.scrollTo({top: 1170, left: 0, behavior: "smooth"})
    }

    else if (widthSize < 560 && widthSize > 400) {
        window.scrollTo({top: 1200, left: 0, behavior: "smooth"})
    }

    else if (widthSize < 399) {
        window.scrollTo({top: 1280, left: 0, behavior: "smooth"})
    }

    else {
        window.scrollTo({top: 1070, left: 0, behavior: "smooth"})
    }
}

function scrollingToProjects(widthSize) {
    window.scrollTo({top: 1640, left: 0, behavior: "smooth"})
}

function scrollingToSkills(widthSize) {
    window.scrollTo({top: 2200, left: 0, behavior: "smooth"})
}

function scrollingToContact(widthSize) {
    window.scrollTo({top: 2570, left: 0, behavior: "smooth"})
}

function scrollingToHome() {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
}

function sectionVerify(event) {
    event.preventDefault()

    const currentSection = event.target
    const currentSectionContent = currentSection.innerHTML

    const widthSize = window.innerWidth

    switch (currentSectionContent) {
        case "Sobre":
            scrollingToAbout(widthSize)
            break

        case "Serviços":
            scrollingToServices(widthSize)
            break
        
        case "Projetos":
            scrollingToProjects(widthSize)
            break

        case "Habilidades":
            scrollingToSkills(widthSize)
            break

        case "Contato":
            scrollingToContact(widthSize)
            break
    }
}

headerTitle.addEventListener('click', scrollingToHome)

sectionList.forEach((sectionItem) => {
    sectionItem.addEventListener('click', sectionVerify)
})

exploreBtn.addEventListener('click',  scrollingToAbout)
workToguetherBtn.addEventListener('click', scrollingToContact)
