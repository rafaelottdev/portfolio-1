const headerTitle = document.querySelector('.menu-container__title')
const sectionList = [... document.querySelectorAll('.list__section-item')]
const exploreBtn = document.querySelector('.button')
const workToguetherBtn = document.querySelector('.work-container__work-link')

const titleList = [... document.querySelectorAll('.section-title')]
const titlePositionList = []

titleList.forEach((title) => {
    titlePositionList.push(title.getBoundingClientRect().y - 130)
})

function scrollingToAbout() {
    window.scrollTo({top: titlePositionList[0], left: 0, behavior: "smooth"})
}

function scrollingToServices() {
    window.scrollTo({top: titlePositionList[1], left: 0, behavior: "smooth"})
}

function scrollingToProjects() {
    window.scrollTo({top: titlePositionList[2], left: 0, behavior: "smooth"})
}

function scrollingToSkills() {
    window.scrollTo({top: titlePositionList[3], left: 0, behavior: "smooth"})
}

function scrollingToContact() {
    window.scrollTo({top: titlePositionList[4], left: 0, behavior: "smooth"})
}

function scrollingToHome() {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
}

function sectionVerify(event) {
    event.preventDefault()

    const currentSection = event.target
    const currentSectionContent = currentSection.innerHTML

    switch (currentSectionContent) {
        case "Sobre":
            scrollingToAbout()
            break

        case "Serviços":
            scrollingToServices()
            break
        
        case "Projetos":
            scrollingToProjects()
            break

        case "Habilidades":
            scrollingToSkills()
            break

        case "Contato":
            scrollingToContact()
            break
    }
}

headerTitle.addEventListener('click', scrollingToHome)

sectionList.forEach((sectionItem) => {
    sectionItem.addEventListener('click', sectionVerify)
})

exploreBtn.addEventListener('click',  scrollingToAbout)
workToguetherBtn.addEventListener('click', scrollingToContact)
