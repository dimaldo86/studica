window.addEventListener('DOMContentLoaded', () => {
    /** modal */
    const modal = (modalTrigger, modalContent) => {
        const trigger = document.querySelector(modalTrigger),
              content = document.querySelector(modalContent);

        trigger.addEventListener('click', () => {
            content.classList.toggle('visible')
        })
    }

    modal('.top__location', '.modal__wrapper')

})