
document.addEventListener('DOMContentLoaded', ()=> {

    const toggleButton = document.getElementsByClassName('borgermenu')[0]
    const menu = document.getElementsByClassName('menu')[0]

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active')
    } )

});

