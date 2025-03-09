const headerTitle = document.querySelector('.menu-container__title')
const sectionList = [... document.querySelectorAll('.list__section-item')]
const exploreBtn = document.querySelector('.button')
const workToguetherBtn = document.querySelector('.work-container__work-link')

function scrollingToAbout() {
    window.scrollTo({top: 550, left: 0, behavior: "smooth"})
}

function scrollingToServices() {
    window.scrollTo({top: 1070, left: 0, behavior: "smooth"})
}

function scrollingToProjects() {
    window.scrollTo({top: 1640, left: 0, behavior: "smooth"})
}

function scrollingToSkills() {
    window.scrollTo({top: 2200, left: 0, behavior: "smooth"})
}

function scrollingToContact() {
    window.scrollTo({top: 2570, left: 0, behavior: "smooth"})
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

function scrollingToHome() {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
}

headerTitle.addEventListener('click', scrollingToHome)

sectionList.forEach((sectionItem) => {
    sectionItem.addEventListener('click', sectionVerify)
})

exploreBtn.addEventListener('click',  scrollingToAbout)
workToguetherBtn.addEventListener('click', scrollingToContact)
