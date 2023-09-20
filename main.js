//Funcionalidades de botones (Mobile Menu[Lista de Accesorios], Email [Datos de Cuenta] y Shopping Cart[Pedidos realizados])
const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

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

// Contenido de productos 
const productList = [];
productList.push( {
    name: 'Pulsera de Cuarzo Rosa | Borlas con piezas de circonita',
    price: 480.00,
    image: './assets/pCuarzoRosa.jpg',
});
productList.push( {
    name: 'Pack 3 Pulseras Lapizazul, Turquesa y Cornalina Roja | Borlas con piezas de circonita',
    price: 999.00,
    image: './assets/pack3-LaTCr.svg',
});
productList.push( {
    name: 'Pulsera de Cornalina Roja | Borlas con piezas de circonita',
    price: 480.00,
    image: './assets/pCornalinaRoja.jpg',
});
productList.push( {
    name: 'Clavicula Brillante | Colgante de Cobre Tigre con Piedra de Venturina Cafe',
    price: 499.00,
    image: './assets/claviculaBTigreB.jpg',
});
productList.push( {
    name: 'Cadena de Plata Esterlina Oro 18K | Colgante de Circonia Cúbica, Cabeza de Leopardo',
    price: 749.00,
    image: './assets/esterCuenTigreN.jpg',
});
productList.push( {
    name: 'Cadena de Plata Esterlina Oro 18K | Colgante de Circonia Cúbica, Oso Chapeado en Oro',
    price: 749.00,
    image: './assets/esterTrenzOso.jpg',
});

/* 
<div class="product-card">
    <img src="./assets/pCuarzoRosa.jpg" alt="">
    <div class="product-info">
        <div>
            <p>$ 480.00</p>
            <p>Pulsera de Cuarzo Rosa | Borlas con piezas de circonita</p>
        </div>
        <figure>
            <img src="./assets/icons/add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

function renderProducts(arr) {
    for (product of arr) {
        //CREAR LA MAQUETACIÓN DEL HTML ⤴
        const productCard = document.createElement('div'); //Crea el contenido div
        productCard.classList.add('product-card'); // Le añede la clase product-card al productCard (div)
        
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img'); //Crea el elemento imagen
        productImg.setAttribute('src', product.image); //Se le agrega el atributo a la imagen con la lista de productos del array que se hizo arriba
    
        const productInfo = document.createElement('div');  //Crea el contenido div
        productInfo.classList.add('product-info'); // Le añade la Clase product-info al productInfo (div)
    
        const productInfoDiv = document.createElement('div'); //Crea el contenedor div vacio
    
        const productPrice = document.createElement('p'); //Crea el parrafo <p>
        productPrice.innerText = '$' + product.price; //Le añade el precio al parrafo productPrice con la lista de productos del array que se hizo arriba 
        const productName = document.createElement('p'); //Crea el parrafo <p>
        productName.innerText = product.name; //Le añade el nombre al parrafo productName con la lista de productos
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure'); //Crea el figure <figure> 
        const productImgCart = document.createElement('img');  //Crea el elemento imagen
        productImgCart.setAttribute('src', './assets/icons/add_to_cart.svg'); //Le agrega el atributo de la imagen a productImgCart
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);
// se manda a llamar la funcion rederProducts con la lista (productList) pero esta lista se puede cambiar por otro nombre a lo que se necesite