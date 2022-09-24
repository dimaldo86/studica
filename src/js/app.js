window.addEventListener('DOMContentLoaded', () => {
    /** modal */
    const modal = (modalTrigger, modalContent, visibleClass, hideClass) => {
        const trigger = document.querySelector(modalTrigger),
              content = document.querySelector(modalContent),
               htmlElement = document.querySelector("html");
               const container = document.querySelector('.container')

        trigger.addEventListener('click', () => {
            content.classList.toggle(visibleClass)
            content.classList.add(hideClass)
        })


        window.addEventListener('click', (e) => {
            if (e.target === htmlElement ) {
                content.classList.remove(visibleClass)
            }

        })
    }

    modal('.top__location', '.modal__wrapper', 'visible', 'hide')

      /** burger */
    const burger = (triggerClass, overlayClass, mobileClass, closeClass, activeClass) => {
        const burgerEl = document.querySelector(triggerClass),
              mobileEl = document.querySelector(mobileClass),
              overlayEl = document.querySelector(overlayClass),
              closeEl = document.querySelector(closeClass);


        burgerEl.addEventListener('click', () => {
            burgerEl.classList.toggle(activeClass)
            mobileEl.classList.toggle(activeClass)
            overlayEl.classList.toggle(activeClass)
        })

        closeEl.addEventListener('click', () => {
            burgerEl.classList.remove(activeClass)
            mobileEl.classList.remove(activeClass)
            overlayEl.classList.remove(activeClass)
        })

        window.addEventListener('click', (e) => {
            if ( e.target === overlayEl) {
                burgerEl.classList.remove(activeClass)
                mobileEl.classList.remove(activeClass)
                overlayEl.classList.remove(activeClass)
            }
        })
    }

    burger('.top__burger','.mobile__overlay', '.mobile__block', '.mobile__close', 'active' )

     /** accordion */

     const accordion = (accClass) => {
        const accordionEl = document.querySelector(accClass);
		accordionEl.addEventListener('click', change);
		function change(event) {
			let targ = event.target;
			if (targ.tagName !== 'SPAN') return;
			if (targ.classList.contains('mobile__title')) {
				hideAll();
			} else {
				hideAll();
				targ.classList.add('mobile__title');
				showText(targ.nextElementSibling);
			}
		}
		function hideAll() {
			const spanEl = accordionEl.querySelectorAll('span');
			const ulEl = accordionEl.querySelectorAll('ul');
			for (let i = 0; i < spanEl.length; i++) {
				spanEl[i].classList.remove('mobile__title');
			}
			for (let i = 0; i < ulEl.length; i++) {
				ulEl[i].style.height = '0';
			}
		}
		function showText(textEl) {
			textEl.style.height = textEl.scrollHeight + 'px';
		}
     }

     accordion('.mobile__acc')
})