window.addEventListener('DOMContentLoaded', () => {
    /** modal */
    const modal = (modalTrigger, modalContent, visibleClass, hideClass) => {
        const trigger = document.querySelector(modalTrigger),
              content = document.querySelector(modalContent),
               htmlElement = document.querySelector("html");



        trigger.addEventListener('click', () => {
            content.classList.toggle(visibleClass)
            content.classList.add(hideClass)
        })



        window.addEventListener('click', (e) => {
            if (e.target === document.htmlElement) {
                content.classList.remove('visible')
            }




        })
    }

    modal('.top__location', '.modal__wrapper', 'visible', 'hide')



})