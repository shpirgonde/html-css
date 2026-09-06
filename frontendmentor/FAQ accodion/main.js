const accordionTriggers = document.querySelectorAll('.accordion__trigger');

accordionTriggers.forEach(btn => {
    btn.addEventListener('click', function () {

        const currentItem = this.closest('.accordion__item');
        const currentPanel = currentItem.querySelector('.accordion__panel');
        const isOpen = currentItem.classList.contains('accordion__item--open');

        // 1. CLOSE ALL OTHER ACCORDIONS FIRST
        accordionTriggers.forEach(otherTrigger => {
            const otherItem = otherTrigger.closest('.accordion__item');
            if (otherItem !== currentItem) {
                otherItem.classList.remove('accordion__item--open');

                const otherPanel = otherItem.querySelector('.accordion__panel');
                otherPanel.style.maxHeight = null;
            }
        })

        // 2. TOGGLE THE CURRENT ACCORDION
        if (!isOpen) {
            currentItem.classList.add('accordion__item--open');
            // Setting exact scrollHeight yields a flawlessly smooth translation
            currentPanel.style.maxHeight = currentPanel.scrollHeight + 'px';

        }
        else {
            currentItem.classList.remove('accordion__item--open');
            // Setting exact scrollHeight yields a flawlessly smooth translation
            currentPanel.style.maxHeight = null;
        }
    })
})