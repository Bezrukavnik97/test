$(function(){

$('.banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 1000,
    arrows: false
  });

  
});


function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (let i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector("img")) {
        ibg[i].style.backgroundImage =
          "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
      }
    }
  }
  
  ibg();
  
const menuToggle = document.querySelector('.menu__icon-mobile'),
dropMobile = document.querySelector('.drop__first'),
secondLevel = document.querySelector('.nav__mobile-secondLevel'),
dropMobileSeconde = document.querySelector('.drop__second'),
thirdLevel = document.querySelector('.nav__mobile-thirdLevel'),
mobileNavContainer = document.querySelector('.nav__mobile'),
banner = document.querySelector('.banner__slides-service').offsetHeight,
bannerPsevdoElement = document.querySelector('.banner__slides');
console.log(banner);

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu__icon-mobile-active');
    mobileNavContainer.classList.toggle('nav__mobile-active');
}
 dropMobile.addEventListener('click', function(){
  secondLevel.classList.toggle('show');   
  });
dropMobileSeconde.addEventListener('click', function(){
thirdLevel.classList.toggle('show');   
  });
     
  bannerPsevdoElement.style.cssText = `height: ${banner}px;`
    
  