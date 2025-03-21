const servicesList = [... document.querySelectorAll('.services-item')]

function scrollingToContactService() {
    window.scrollTo({top: 2570, left: 0, behavior: "smooth"})
}

function serviceSelected(service) {
    const serviceInput = document.querySelector('.services-container__input-services')

    serviceInput.value = ''
    serviceInput.value = service
}

function checkSelectedService(serviceEvent) {
    const currentService = serviceEvent.target
    const currentServiceClassName = currentService.className
    let serviceClassName = currentService.className.split(" ")[2]

    let serviceText = ""

    if(currentServiceClassName == 'services-item__text' || currentServiceClassName == 'services-item__title') {
        const currentElementFather = currentService.parentNode

        serviceClassName = currentElementFather.className.split(" ")[2]
    }

    switch (serviceClassName) {
        case "landing-page-service":
            serviceText = "Preciso de uma landing page"

            scrollingToContactService()
            serviceSelected(serviceText)
            break

        case "site-service":
            serviceText = "Preciso de um site"
            
            scrollingToContactService()
            serviceSelected(serviceText)
            break

        case "portfolio-service":
            serviceText = "Preciso de um portfolio"

            scrollingToContactService()
            serviceSelected(serviceText)
            break

        case "seo-service":
            serviceText = "Quero melhorar meu SEO"

            scrollingToContactService()
            serviceSelected(serviceText)
            break
    }
}

servicesList.forEach((services) => {
    services.addEventListener('click', checkSelectedService)
})
