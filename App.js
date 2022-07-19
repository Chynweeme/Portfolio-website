//handling the menu items
const menuOpen = document.getElementById('menu-open')
const menuClose = document.getElementById('menu-close')
const sideBar = document.getElementById('mobile-side-bar')

const showSideBar = () =>{
    sideBar.classList.remove('d-none')
}
const hideSideBar = () =>{
    sideBar.classList.add('d-none')
}
menuOpen.addEventListener('click', showSideBar)
menuClose.addEventListener('click', hideSideBar)