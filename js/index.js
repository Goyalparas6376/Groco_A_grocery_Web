let searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>
{
    searchForm.classList.toggle('active');
    // searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    Navbar.classList.remove('active');
}
let shoppingCart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=()=>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    // shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    Navbar.classList.remove('active');
}
let loginForm=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    // loginForm.classList.remove('active');
    Navbar.classList.remove('active');
}
let Navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>
{
    Navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    // Navbar.classList.remove('active');
}
window.onscroll =()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    Navbar.classList.remove('active');
    
}

// swiper js 
var swiper = new Swiper(".product-slider", {
    // slidesPerView: 1,
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,review-slider
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });

  // swiper js 
var swiper = new Swiper(".review-slider", {
  // slidesPerView: 1,
  loop:true,
  spaceBetween: 20,
  autoplay:{
      delay:7500,
      disableOnInteraction:false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      // spaceBetween: 20,review-slider
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 40,
    },
    1020: {
      slidesPerView: 3,
      // spaceBetween: 50,
    },
  },
});