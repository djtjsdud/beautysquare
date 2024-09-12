// /////////////////////////////////////메인배너
var swiper = new Swiper(".mainbanner-swiper", {
    scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    spaceBetween: 30,
    centeredSlides: true,
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".mainbanner-swiper-pagination",
        type: "fraction",
        clickable: true,
        },
    navigation: {
        nextEl: ".mainbanner-swiper-button-next",
        prevEl: ".mainbanner-swiper-button-prev",
        },
    loop : true
});

// //////////////////////////////////////베스트셀러
var best_swiper = new Swiper(".best-seller-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".best-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".best-swiper-button-next",
        prevEl: ".best-swiper-button-prev",
    },
});