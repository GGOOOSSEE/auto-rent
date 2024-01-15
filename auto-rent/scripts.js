$(function() {
            /*скроллы по ссылкам */
    let links = $(".menu-item > a");
    for (let i = 0; i<links.length; i++) {
        links[i].onclick = function() {
            document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior:"smooth"});
        }
    }


            /*PopUp */
    let buttons = $('.main-action-button');
    let popUp = $('.popUp');

    for (let i = 0; i < buttons.length; i++) {
    
        $(buttons[i]).on('click', function(){
            popUp.addClass('openPopUp');
        });
    }
    let closePopup = $('.close-popUp');

    closePopup.on('click', function() {
        popUp.removeClass('openPopUp');
    });

    
     /*input validator */
     let formm = document.querySelector('form');
     let inputs = $('.inputsPopUp');
 
     formm.onsubmit = function(e) {
 
         let errors = false;
 
         for(let i = 0; i < inputs.length; i++) {
             if (inputs[i].value === '') {
                 errors = true;
             }
         }
         if (errors) {
             e.preventDefault();
         }
     }


             /*scroll */
    let scroll = $('.scrollButton');

    function scroolBtn(){
        let top = $(this).scrollTop();
		
		if (top > 100) {
			scroll.fadeIn(500);
		}
		else {
			scroll.fadeOut(500);
		}
    }
    
    scroolBtn();
    
	$(document).on('scroll', scroolBtn);

    scroll.on('click', function() {
        $('html, body').animate({scrollTop: 0}); 
    });
    

            /*swiper */
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      let swiper_mobile = new Swiper(".mySwiper-mobile", {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

});