
let mainImage = document.getElementById("mainImage");
let smallImage = document.getElementsByClassName("image");

const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

// burger menu in responsive
$( ".openMenu" ).click(function() {
    $( ".mainMenu" ).slideToggle( "slow" );
  });
  $( ".closeMenu" ).click(function() {
    $( ".mainMenu" ).slideToggle( "slow" );
  });

// click to change image
smallImage[0].onclick = () => {
    mainImage.src = smallImage[0].src;
}
smallImage[1].onclick = () => {
    mainImage.src = smallImage[1].src;
}
smallImage[2].onclick = () => {
    mainImage.src = smallImage[2].src;
}
smallImage[3].onclick = () => {
    mainImage.src = smallImage[3].src;
}

// details box, calculating prices
function cart() {
    let a,b,c,d;
    a = document.getElementById("first").value;
    b = a*200
    document.getElementById("second").value = b;
    c = (b*2)/100;
    document.getElementById("third").value = c;
    d = b + c;
    document.getElementById("fourth").value = d;
}

let ans = document.getElementById("first");
ans.addEventListener('keyup', cart);

// add to cart event
const cartbtn = document.getElementById('cart-btn');

cartbtn.addEventListener('click', ()=> {

    cartbtn.classList.add('clicked');

    setTimeout(() => {
        cartbtn.classList.remove('clicked');
    }, 4000);

});