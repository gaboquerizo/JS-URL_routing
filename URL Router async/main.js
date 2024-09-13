// console.log('File connected successfully ✅')
import './modules/router.module.js';

const NavElements = document.querySelectorAll('[data-router-nav] a')

NavElements.forEach(element => {
    element.addEventListener('click', () => {
        router()
    })
})
