const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {  
    desktopMenu.classList.toggle('inactive');  //a través del metodo Toggle se accede a la Lista para Activarla (Si se encuentra inactiva) y vicersa
    aside.classList.add('inactive');// agregamos con Add el método innactivo 
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');  //a través del metodo Toggle se accede a la Lista para Activarla (Si se encuentra inactiva) y vicersa
    aside.classList.add('inactive'); // agregamos con Add el método innactivo 
}

function toggleCarritoAside() {
    aside.classList.toggle('inactive'); //a través del metodo Toggle se accede a la Lista para Activarla (Si se encuentra inactiva) y vicersa
    mobileMenu.classList.add('inactive'); // agregamos con Add el método innactivo 
    desktopMenu.classList.add('inactive'); // agregamos con Add el método innactivo 
}
