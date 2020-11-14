const hamburger = document.querySelector('.navbar .holder .nav-list .hamburger');
const mobile_menu = document.querySelector('.navbar .holder .nav-list ul');
const menu_item = document.querySelectorAll('.navbar .holder .nav-list ul li a');
const navbar = document.querySelector('.navbar.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 250) {
        navbar.style.backgroundColor = "#29323c";
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
})


menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})