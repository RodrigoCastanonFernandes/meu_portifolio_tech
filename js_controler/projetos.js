const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets', 
    },
    
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },
});